import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pptRoot = path.resolve(__dirname, "..");
const workspaceRoot = path.resolve(pptRoot, "..");
const skillDir = process.env.SKILL_DIR;
const runtimePython = process.env.RUNTIME_PYTHON;
const finalPptx = process.env.FINAL_PPTX;

if (!skillDir || !runtimePython || !finalPptx) {
  throw new Error("SKILL_DIR, RUNTIME_PYTHON, and FINAL_PPTX are required");
}

const {
  finalizePresentation,
  makeNativeBulletParagraphs,
  resolvePresentationFont,
} = await import(pathToFileURL(path.join(skillDir, "container_tools/artifact_tool_utils.mjs")).href);

const FONT = resolvePresentationFont();
const COLORS = {
  navy: "#16324F",
  teal: "#087F8C",
  coral: "#D85F45",
  green: "#4F7F52",
  gold: "#A96E00",
  ink: "#1D2833",
  muted: "#536272",
  soft: "#EDF4F6",
  white: "#FFFFFF",
  rule: "#D7E0E7",
};
const MODULE_ACCENTS = [
  COLORS.teal,
  COLORS.coral,
  COLORS.green,
  COLORS.gold,
  COLORS.teal,
  COLORS.coral,
  COLORS.green,
  COLORS.gold,
  COLORS.teal,
  COLORS.coral,
];
const moduleFiles = [
  "01-ai-foundations.md",
  "02-approved-tools.md",
  "03-data-classification.md",
  "04-prompting-skills.md",
  "05-daily-work.md",
  "06-lumenore-impact.md",
  "07-genesys-ai.md",
  "08-objective-decisions.md",
  "09-governance-incidents.md",
  "10-applied-learning.md",
];

function stripMarkdown(value = "") {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSection(markdown, heading, nextHeading = "## ") {
  const start = markdown.indexOf(heading);
  if (start < 0) return "";
  const contentStart = start + heading.length;
  const next = markdown.indexOf("\n" + nextHeading, contentStart);
  return markdown.slice(contentStart, next < 0 ? markdown.length : next).trim();
}

function extractBullets(block) {
  return block
    .split(/\r?\n/)
    .filter((line) => /^-\s+/.test(line))
    .map((line) => stripMarkdown(line.replace(/^-\s+/, "")));
}

function extractNumbered(block) {
  return block
    .split(/\r?\n/)
    .filter((line) => /^\d+\.\s+/.test(line))
    .map((line) => stripMarkdown(line.replace(/^\d+\.\s+/, "")));
}

function extractRawField(block, startLabel, endLabel) {
  const start = block.indexOf(startLabel);
  if (start < 0) return "";
  const contentStart = start + startLabel.length;
  const end = endLabel ? block.indexOf(endLabel, contentStart) : -1;
  return block.slice(contentStart, end < 0 ? block.length : end).trim();
}

function extractField(block, startLabel, endLabel) {
  return stripMarkdown(extractRawField(block, startLabel, endLabel));
}

function parseTopic(name, block) {
  const exampleMatch = block.match(/::: tip Real-life example\s*([\s\S]*?)\s*:::/);
  const keyBlock = extractRawField(block, "**Key Points:**", "::: tip Real-life example");
  const processBlock = extractRawField(block, "**How It Works:**", "**Where It Is Used:**");
  const mistakesBlock = extractRawField(block, "**Common Mistakes or Confusions:**");
  const mistakeItems = extractBullets(mistakesBlock);
  return {
    name: stripMarkdown(name),
    explanation: extractField(block, "**Detailed Explanation:**", "**Key Points:**"),
    keyPoints: extractBullets(keyBlock),
    example: stripMarkdown(exampleMatch?.[1] ?? ""),
    technical: extractField(block, "**Technical Example:**", "**How It Works:**"),
    process: extractNumbered(processBlock),
    whereUsed: extractField(block, "**Where It Is Used:**", "**Common Mistakes or Confusions:**"),
    mistakes: mistakeItems.length ? mistakeItems : [stripMarkdown(mistakesBlock)],
  };
}

async function parseModule(file, index) {
  const fullPath = path.join(workspaceRoot, "docs", "modules", file);
  const markdown = await fs.readFile(fullPath, "utf8");
  const title = stripMarkdown(markdown.match(/^#\s+(.+)$/m)?.[1] ?? `Module ${index + 1}`);
  const overviewRaw = extractSection(markdown, "## Module Overview");
  const overview = stripMarkdown(overviewRaw.split(/\r?\n:::/)[0]);
  const objectivesBlock = extractSection(markdown, "## Learning objectives");
  const objectives = extractBullets(objectivesBlock);
  const audience = stripMarkdown(markdown.match(/<strong>Audience:<\/strong>\s*([^<]+)/)?.[1] ?? "");
  const prerequisites = stripMarkdown(markdown.match(/<strong>Prerequisites:<\/strong>\s*([^<]+)/)?.[1] ?? "");
  const level = stripMarkdown(markdown.match(/<strong>Level:<\/strong>\s*([^<]+)/)?.[1] ?? "");
  const contentBlock = extractSection(markdown, "## Module Content");
  const matches = [...contentBlock.matchAll(/^###\s+\d+\.\s+(.+)$/gm)];
  const topics = matches.map((match, topicIndex) => {
    const start = match.index + match[0].length;
    const end = topicIndex + 1 < matches.length ? matches[topicIndex + 1].index : contentBlock.length;
    return parseTopic(match[1], contentBlock.slice(start, end));
  });
  return {
    number: index + 1,
    file,
    fullPath,
    title,
    overview,
    objectives,
    audience,
    prerequisites,
    level,
    topics,
  };
}

const modules = await Promise.all(moduleFiles.map(parseModule));
const topicCount = modules.reduce((sum, module) => sum + module.topics.length, 0);
if (topicCount !== 42) {
  throw new Error(`Expected 42 proposal topics, found ${topicCount}`);
}

const presentation = Presentation.create({
  slideSize: { width: 1280, height: 720 },
});

function addText(slide, text, position, options = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    typeface: FONT,
    fontSize: options.fontSize ?? 24,
    bold: options.bold ?? false,
    italic: options.italic ?? false,
    color: options.color ?? COLORS.ink,
    alignment: options.alignment ?? "left",
    verticalAlignment: options.verticalAlignment ?? "top",
    autoFit: options.autoFit ?? "shrinkText",
    wrap: "square",
    lineSpacing: options.lineSpacing ?? 1.08,
    insets: options.insets ?? { top: 0, right: 0, bottom: 0, left: 0 },
  };
  return shape;
}

function addBullets(slide, items, position, options = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  const paragraphs = makeNativeBulletParagraphs(items, {
    marginLeftPoints: options.marginLeftPoints ?? 20,
    hangingPoints: options.hangingPoints ?? 10,
    spaceAfterPoints: options.spaceAfterPoints ?? 8,
    bulletCharacter: "\u2022",
  });
  shape.text.style = {
    typeface: FONT,
    fontSize: options.fontSize ?? 23,
    color: options.color ?? COLORS.ink,
    autoFit: "shrinkText",
    wrap: "square",
    lineSpacing: options.lineSpacing ?? 1.04,
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  shape.text.set(paragraphs);
  return shape;
}

function addNumbered(slide, items, position, options = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  const paragraphs = items.map((item, index) => ({
    runs: [
      { run: `${index + 1}. `, textStyle: { bold: true, color: options.numberColor ?? COLORS.teal } },
      item,
    ],
    spaceAfter: Math.round((options.spaceAfterPoints ?? 10) * 100),
  }));
  shape.text.style = {
    typeface: FONT,
    fontSize: options.fontSize ?? 23,
    color: options.color ?? COLORS.ink,
    autoFit: "shrinkText",
    wrap: "square",
    lineSpacing: options.lineSpacing ?? 1.04,
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  shape.text.set(paragraphs);
  return shape;
}

function setBackground(slide, color = COLORS.white) {
  slide.background.fill = color;
}

function addFooter(slide, moduleLabel, slideNumber, dark = false) {
  addText(
    slide,
    moduleLabel,
    { left: 56, top: 684, width: 1000, height: 20 },
    { fontSize: 15, color: dark ? "#C6D7E4" : COLORS.muted, autoFit: "none" },
  );
  addText(
    slide,
    String(slideNumber),
    { left: 1175, top: 684, width: 50, height: 20 },
    { fontSize: 15, color: dark ? "#C6D7E4" : COLORS.muted, alignment: "right", autoFit: "none" },
  );
}

function addSectionLabel(slide, text, accent = COLORS.teal) {
  addText(
    slide,
    text.toUpperCase(),
    { left: 64, top: 28, width: 1120, height: 26 },
    { fontSize: 17, bold: true, color: accent, autoFit: "none" },
  );
}

function addSlideTitle(slide, title) {
  addText(
    slide,
    title,
    { left: 64, top: 62, width: 1152, height: 72 },
    { fontSize: 43, bold: true, color: COLORS.navy, autoFit: "shrinkText", lineSpacing: 0.96 },
  );
}

function addSubheading(slide, text, position, color = COLORS.navy) {
  addText(slide, text, position, {
    fontSize: 25,
    bold: true,
    color,
    autoFit: "none",
  });
}

function addNotes(slide, module, topic = "") {
  const source = "Source: Netlink_DWIHN_AI_Training_Proposal 6.pdf.";
  const expansion = module
    ? ` Expanded curriculum source: docs/modules/${module.file}.`
    : " Expanded curriculum source: docs/index.md.";
  const example = topic ? ` Topic: ${topic}. All training examples are fictional.` : " All training examples are fictional.";
  slide.speakerNotes.textFrame.setText(source + expansion + example);
}

let slideNumber = 0;
function nextSlide(background = COLORS.white) {
  const slide = presentation.slides.add();
  setBackground(slide, background);
  slideNumber += 1;
  return slide;
}

{
  const slide = nextSlide(COLORS.navy);
  addText(slide, "DWIHN", { left: 72, top: 58, width: 420, height: 34 }, {
    fontSize: 24,
    bold: true,
    color: "#69C6CD",
    autoFit: "none",
  });
  addText(slide, "AI Learning Curriculum", { left: 72, top: 145, width: 1100, height: 105 }, {
    fontSize: 66,
    bold: true,
    color: COLORS.white,
    autoFit: "shrinkText",
    lineSpacing: 0.92,
  });
  addText(
    slide,
    "Complete module-wise presentation content from foundations to applied practice",
    { left: 74, top: 280, width: 980, height: 90 },
    { fontSize: 30, color: "#D6E4EC", autoFit: "none", lineSpacing: 1.15 },
  );
  addText(slide, "Content deck for facilitator-led training", { left: 74, top: 610, width: 700, height: 34 }, {
    fontSize: 20,
    color: "#9FC2D3",
    autoFit: "none",
  });
  addFooter(slide, "Course introduction", slideNumber, true);
  addNotes(slide, null);
}

{
  const slide = nextSlide();
  addSectionLabel(slide, "Course introduction");
  addSlideTitle(slide, "Purpose, audience, and learning approach");
  addSubheading(slide, "Purpose", { left: 70, top: 165, width: 520, height: 34 });
  addText(
    slide,
    "This curriculum helps DWIHN staff use AI as a supervised workplace assistant. It builds practical skill while protecting information, preserving professional judgment, and keeping people responsible for final decisions.",
    { left: 70, top: 205, width: 520, height: 170 },
    { fontSize: 25, color: COLORS.ink },
  );
  addSubheading(slide, "Audience", { left: 670, top: 165, width: 520, height: 34 });
  addBullets(slide, [
    "Staff who need a beginner-friendly introduction to AI",
    "Administrative, care coordination, call-center, program, and leadership roles",
    "Managers who approve, review, or monitor AI-supported work",
  ], { left: 670, top: 205, width: 520, height: 190 }, { fontSize: 23 });
  addSubheading(slide, "Learning approach", { left: 70, top: 420, width: 520, height: 34 });
  addBullets(slide, [
    "Plain-language explanations before technical detail",
    "Fictional workplace stories and realistic decisions",
    "Demonstrations, practice, discussion, and knowledge checks",
  ], { left: 70, top: 460, width: 520, height: 175 }, { fontSize: 23 });
  addSubheading(slide, "Prerequisites", { left: 670, top: 420, width: 520, height: 34 });
  addText(
    slide,
    "Learners need basic workplace digital skills and access only to tools, accounts, information, and tasks approved for their role.",
    { left: 670, top: 462, width: 520, height: 140 },
    { fontSize: 25 },
  );
  addFooter(slide, "Course introduction", slideNumber);
  addNotes(slide, null);
}

{
  const slide = nextSlide();
  addSectionLabel(slide, "Course introduction");
  addSlideTitle(slide, "Complete learning pathway");
  const leftItems = modules.slice(0, 5).map((module) => `${module.number}. ${module.title}`);
  const rightItems = modules.slice(5).map((module) => `${module.number}. ${module.title}`);
  addSubheading(slide, "Foundations and daily practice", { left: 70, top: 165, width: 520, height: 34 });
  addNumbered(slide, leftItems.map((item) => item.replace(/^\d+\.\s+/, "")), {
    left: 70, top: 215, width: 530, height: 390,
  }, { fontSize: 26, numberColor: COLORS.teal, spaceAfterPoints: 18 });
  addSubheading(slide, "Role tools and responsible application", { left: 670, top: 165, width: 540, height: 34 });
  const rightShape = slide.shapes.add({
    geometry: "textbox",
    position: { left: 670, top: 215, width: 540, height: 390 },
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  const rightParagraphs = rightItems.map((item, index) => ({
    runs: [
      { run: `${index + 6}. `, textStyle: { bold: true, color: COLORS.coral } },
      item.replace(/^\d+\.\s+/, ""),
    ],
    spaceAfter: 1800,
  }));
  rightShape.text.style = {
    typeface: FONT,
    fontSize: 26,
    color: COLORS.ink,
    autoFit: "shrinkText",
    wrap: "square",
    lineSpacing: 1.04,
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  rightShape.text.set(rightParagraphs);
  addFooter(slide, "Course introduction", slideNumber);
  addNotes(slide, null);
}

{
  const slide = nextSlide();
  addSectionLabel(slide, "Course introduction");
  addSlideTitle(slide, "Course-wide safety and accountability");
  addSubheading(slide, "The human-owned workflow", { left: 70, top: 165, width: 520, height: 34 });
  addNumbered(slide, [
    "Define a legitimate workplace need.",
    "Confirm the tool, account, information, task, and destination.",
    "Use a clear prompt or governed query.",
    "Verify the result against an approved source.",
    "Apply professional judgment and required approval.",
    "Store, share, monitor, and report through approved processes.",
  ], { left: 70, top: 210, width: 540, height: 390 }, { fontSize: 23, spaceAfterPoints: 9 });
  addSubheading(slide, "Training safeguards", { left: 680, top: 165, width: 500, height: 34 });
  addBullets(slide, [
    "Use fictional or explicitly approved training information.",
    "Treat AI output as a draft, suggestion, signal, or estimate.",
    "Keep existing privacy, security, clinical, legal, and management duties.",
    "Escalate uncertainty instead of inventing a local policy answer.",
  ], { left: 680, top: 210, width: 500, height: 260 }, { fontSize: 23 });
  addText(
    slide,
    "Local confirmation required: approved tool catalog, enabled product features, DWIHN incident procedure, response timelines, and certification rules.",
    { left: 680, top: 505, width: 500, height: 120 },
    { fontSize: 22, bold: true, color: COLORS.gold },
  );
  addFooter(slide, "Course introduction", slideNumber);
  addNotes(slide, null);
}

for (const module of modules) {
  const accent = MODULE_ACCENTS[module.number - 1];
  {
    const slide = nextSlide(COLORS.navy);
    addText(slide, `MODULE ${module.number}`, { left: 70, top: 42, width: 280, height: 28 }, {
      fontSize: 20,
      bold: true,
      color: accent === COLORS.gold ? "#E6B85C" : accent,
      autoFit: "none",
    });
    addText(slide, module.title, { left: 70, top: 82, width: 1120, height: 92 }, {
      fontSize: 50,
      bold: true,
      color: COLORS.white,
      lineSpacing: 0.94,
    });
    addText(slide, module.overview, { left: 72, top: 185, width: 1100, height: 112 }, {
      fontSize: 24,
      color: "#D6E4EC",
      lineSpacing: 1.12,
    });
    addSubheading(slide, "Learning objectives", { left: 72, top: 320, width: 500, height: 32 }, "#FFFFFF");
    addBullets(slide, module.objectives, { left: 72, top: 360, width: 540, height: 250 }, {
      fontSize: 20,
      color: "#F1F6F8",
      spaceAfterPoints: 6,
    });
    addSubheading(slide, "Module topics", { left: 690, top: 320, width: 480, height: 32 }, "#FFFFFF");
    addNumbered(slide, module.topics.map((topic) => topic.name), {
      left: 690, top: 360, width: 500, height: 220,
    }, {
      fontSize: 21,
      color: "#F1F6F8",
      numberColor: accent === COLORS.gold ? "#E6B85C" : accent,
      spaceAfterPoints: 7,
    });
    addText(
      slide,
      `Audience: ${module.audience}    Prerequisites: ${module.prerequisites}    Level: ${module.level}`,
      { left: 72, top: 636, width: 1100, height: 28 },
      { fontSize: 16, color: "#AFC7D5", autoFit: "shrinkText" },
    );
    addFooter(slide, `Module ${module.number}`, slideNumber, true);
    addNotes(slide, module);
  }

  for (const topic of module.topics) {
    {
      const slide = nextSlide();
      addSectionLabel(slide, `Module ${module.number}: ${module.title}`, accent);
      addSlideTitle(slide, topic.name);
      addSubheading(slide, "Detailed explanation", { left: 70, top: 155, width: 520, height: 34 });
      addText(slide, topic.explanation, { left: 70, top: 196, width: 535, height: 152 }, {
        fontSize: 24,
        lineSpacing: 1.12,
      });
      addSubheading(slide, "Key points", { left: 70, top: 372, width: 520, height: 34 });
      addBullets(slide, topic.keyPoints, { left: 70, top: 412, width: 535, height: 225 }, {
        fontSize: 22,
        spaceAfterPoints: 6,
      });
      addSubheading(slide, "Real-life example", { left: 680, top: 155, width: 500, height: 34 }, accent);
      addText(slide, topic.example, { left: 680, top: 198, width: 500, height: 210 }, {
        fontSize: 24,
        italic: true,
        color: COLORS.muted,
        lineSpacing: 1.15,
      });
      addSubheading(slide, "Where it is used", { left: 680, top: 438, width: 500, height: 34 }, accent);
      addText(slide, topic.whereUsed, { left: 680, top: 479, width: 500, height: 145 }, {
        fontSize: 23,
        lineSpacing: 1.12,
      });
      addFooter(slide, `Module ${module.number}: ${module.title}`, slideNumber);
      addNotes(slide, module, topic.name);
    }

    {
      const slide = nextSlide();
      addSectionLabel(slide, `Module ${module.number}: ${module.title}`, accent);
      addSlideTitle(slide, `${topic.name}: process and practice`);
      addSubheading(slide, "How it works", { left: 70, top: 155, width: 520, height: 34 });
      addNumbered(slide, topic.process, { left: 70, top: 198, width: 535, height: 405 }, {
        fontSize: 23,
        numberColor: accent,
        spaceAfterPoints: 9,
      });
      addSubheading(slide, "Technical example", { left: 680, top: 155, width: 500, height: 34 }, accent);
      addText(slide, topic.technical, { left: 680, top: 198, width: 500, height: 175 }, {
        fontSize: 23,
        lineSpacing: 1.12,
      });
      addSubheading(slide, "Common mistakes or confusions", { left: 680, top: 408, width: 510, height: 34 }, COLORS.coral);
      if (topic.mistakes.length > 1) {
        addBullets(slide, topic.mistakes, { left: 680, top: 451, width: 500, height: 175 }, {
          fontSize: 21,
          color: COLORS.ink,
          spaceAfterPoints: 5,
        });
      } else {
        addText(slide, topic.mistakes[0], { left: 680, top: 451, width: 500, height: 175 }, {
          fontSize: 23,
          color: COLORS.ink,
          lineSpacing: 1.12,
        });
      }
      addFooter(slide, `Module ${module.number}: ${module.title}`, slideNumber);
      addNotes(slide, module, topic.name);
    }
  }
}

const expectedSlideCount = 4 + modules.length + topicCount * 2;
if (slideNumber !== expectedSlideCount) {
  throw new Error(`Expected ${expectedSlideCount} slides, created ${slideNumber}`);
}

await fs.mkdir(path.dirname(finalPptx), { recursive: true });
const stagingDir = path.join(pptRoot, ".codex-finalizer");
await fs.mkdir(stagingDir, { recursive: true });
const candidatePath = path.join(stagingDir, "candidate.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);

const requirements = {
  explicitTotalSlideCount: expectedSlideCount,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
};
const expectedSlideSizeEmu = "12192000,6858000";
const result = await finalizePresentation({
  ...requirements,
  workspaceDir: pptRoot,
  candidatePath,
  finalPath: finalPptx,
  pythonExecutable: runtimePython,
  integrityValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_package_integrity.py"),
  layoutValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_layout_geometry.py"),
  layoutArgs: [
    "--expected-slide-size-emu", expectedSlideSizeEmu,
    "--expected-slide-count", String(expectedSlideCount),
    "--validate-bullet-geometry",
    "--validate-heading-fit",
    "--validate-heading-punctuation",
    "--cover-role", "cover",
    "--cover-word-limit", "30",
    "--folio-mode", "actual_unpadded",
    "--max-content-prose-words", "220",
  ],
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  fontPolicy: { basis: "design", families: [FONT] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(stagingDir, `${path.basename(finalPptx)}.validation.json`),
});

console.log(JSON.stringify({
  font: FONT,
  slideCount: expectedSlideCount,
  topicCount,
  candidatePath,
  finalPath: finalPptx,
  validation: result,
}, null, 2));
