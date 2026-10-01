---
title: "Module 4: Prompting Skills for DWIHN Roles"
description: Write clear, bounded prompts and review the result against an approved source.
---

<p class="module-kicker">Module 4 - Everyday practice</p>

# Prompting Skills for DWIHN Roles

<p class="module-lede">A useful prompt explains the task, supplies permitted context, and sets clear boundaries. A strong prompt improves the output, but it never replaces permission checks or human review.</p>

<div class="module-meta">
  <span><strong>Audience:</strong> All staff</span>
  <span><strong>Prerequisites:</strong> Modules 1-3</span>
  <span><strong>Level:</strong> Beginner to intermediate</span>
  <span><strong>Evidence:</strong> Revised prompt</span>
</div>

## Module Overview

This module teaches a repeatable way to give AI clear, safe, and useful instructions. It is important because prompt quality affects the usefulness of a draft, while permissions, source accuracy, and human review still determine whether the result can be used.

## Learning objectives

By the end of this module, learners can:

- Build a prompt using role, task, context, format, and constraint.
- Replace vague requests with clear, testable instructions.
- Use only information permitted for the selected tool and workflow.
- Review an output for accuracy, completeness, tone, and unsupported additions.

## Module Content

1. The five-part prompt anatomy
2. Prompts for different DWIHN roles
3. Improving a weak prompt
4. Reviewing results and correcting common mistakes

### 1. The five-part prompt anatomy

**Detailed Explanation:** A reliable beginner prompt contains a role, task, context, format, and constraint. The role establishes a useful perspective. The task states the action. Context supplies permitted facts. Format describes the desired structure. Constraints set boundaries and tell the tool how to handle missing information.

**Key Points:**

- Role sets perspective but does not grant professional authority.
- Task should begin with a clear action such as draft, summarize, compare, or extract.
- Context must be relevant and permitted.
- Format and constraints make the result easier to use and verify.

::: tip Real-life example
Prompt: Act as an administrative writing assistant. Draft a three-bullet training reminder for staff using the confirmed date and time below. Use a friendly professional tone. Do not invent a location or attendance requirement.
:::

**Technical Example:** A structured prompt may store five fields: role equals administrative assistant; task equals draft a reminder; context equals confirmed date, time, audience, and purpose; format equals three bullets; constraint equals add no facts outside the source.

**How It Works:**

1. Define the intended result and audience.
2. Check the tool and information permissions.
3. Add each of the five prompt parts.
4. Generate the result in the approved environment.
5. Compare it with the source and refine it.

**Where It Is Used:** Emails, summaries, report narratives, plain-language rewrites, structured notes, analytics questions, and leadership briefings.

**Common Mistakes or Confusions:**

- Treating the role instruction as professional authority.
- Supplying too much or unauthorized context.
- Omitting the output format or source boundary.

### 2. Prompts for different DWIHN roles

**Detailed Explanation:** The same structure can support different work. Coordinators may draft fictional follow-up communication, administrators may organize meeting notes, program managers may describe a verified trend, and leaders may prepare a short briefing with limitations.

**Key Points:**

- Start from the employee's actual approved task.
- Change the context, output, and constraints for the role.
- Do not use a generic prompt when the evidence and responsibility differ.

::: tip Real-life example
A program manager asks the tool to describe a synthetic completion-rate change. The constraint says to report the values and period but not claim why the change occurred.
:::

**Technical Example:** A reusable prompt template can expose fields for audience, approved source, required sections, word limit, and prohibited additions. Different roles complete the fields without changing the safety controls.

**How It Works:**

1. Identify the role and business need.
2. Select a permitted source and tool.
3. Choose a role-relevant task and format.
4. Add limits based on professional responsibility.
5. Review the output using the role's normal approval process.

**Where It Is Used:** Care coordination communication, administrative notes, program reporting, call-center documentation, compliance drafts, and management briefings.

**Common Mistakes or Confusions:**

- Reusing another role's prompt without checking the workflow.
- Asking for a clinical or causal conclusion that the role or source cannot support.
- Forgetting that role-specific output needs role-specific review.

### 3. Improving a weak prompt

**Detailed Explanation:** Weak prompts often omit the audience, source, period, required format, or boundaries. Improve them one element at a time. A second prompt should clarify the task or correct a problem, not hide an inaccurate first result.

**Key Points:**

- Identify what the tool had to guess.
- Add missing instructions without adding unnecessary data.
- Compare versions to see which change improved the result.

::: tip Real-life example
The request *Summarize this* becomes: *Summarize the supplied fictional meeting notes for the project team under Decisions, Actions, Owners, and Open Questions. Do not invent owners or deadlines.*
:::

**Technical Example:** Prompt versions can be recorded as version 1 and version 2 with the same test input. Comparing their outputs makes the effect of added context and constraints visible.

**How It Works:**

1. Review the weak output and mark its problems.
2. Connect each problem to a missing prompt component.
3. Revise only the necessary instructions.
4. Run the revised prompt with the same safe test input.
5. Compare both outputs and keep the clearer version.

**Where It Is Used:** Prompt libraries, team templates, training exercises, repeated reporting tasks, and quality improvement.

**Common Mistakes or Confusions:**

- Making a prompt longer without making it clearer.
- Changing many variables at once and not knowing what helped.
- Correcting wording while leaving an unsupported factual request.

### 4. Reviewing results and correcting common mistakes

**Detailed Explanation:** Even a well-structured prompt can produce an incorrect result. Compare important statements with the source, restore missing information, remove unsupported additions, and confirm that the tone and format fit the intended audience.

**Key Points:**

- Prompt quality improves probability, not certainty.
- Review accuracy, completeness, tone, privacy, and approval.
- Fix the workflow or prompt when the same error repeats.

::: tip Real-life example
The generated summary assigns Friday as a deadline even though the notes contain no date. The reviewer removes the deadline and marks the item as needing confirmation.
:::

**Technical Example:** A review checklist can require every factual sentence to point to a source line or approved data field. Claims without support are flagged for correction or removal.

**How It Works:**

1. Keep the source and prompt beside the output.
2. Check facts, figures, owners, dates, and decisions.
3. Identify omissions, unsupported additions, and unclear wording.
4. Correct the result or revise the prompt.
5. Repeat the review before approval or sharing.

**Where It Is Used:** Every generated message, summary, report, explanation, translation, and recommendation.

**Common Mistakes or Confusions:**

- Assuming a well-written prompt guarantees a correct result.
- Reviewing only tone and grammar.
- Editing the output without correcting a repeatable prompt problem.

## The five-part prompt

<div class="workflow">
  <div class="workflow-step"><b>Role</b><span>Set a useful perspective, not false professional authority.</span></div>
  <div class="workflow-step"><b>Task</b><span>State the action with a clear verb.</span></div>
  <div class="workflow-step"><b>Context</b><span>Supply only relevant and permitted facts.</span></div>
  <div class="workflow-step"><b>Format</b><span>Describe the structure, length, and audience.</span></div>
  <div class="workflow-step"><b>Constraint</b><span>Set boundaries and require missing information to be flagged.</span></div>
</div>

### Example prompt

> Act as an administrative writing assistant. Draft an internal training reminder. The session is Tuesday at 10:00 a.m., attendance is optional, and registration closes Friday. Write three short bullets in a friendly professional tone. Do not add a location, policy, or deadline that is not listed. Mark any missing information as `[confirm]`.

<div class="concept-grid">
  <div class="concept-card"><strong>Role</strong><p>Administrative writing assistant</p></div>
  <div class="concept-card"><strong>Task</strong><p>Draft an internal training reminder</p></div>
  <div class="concept-card"><strong>Context</strong><p>Time, attendance status, and registration deadline</p></div>
  <div class="concept-card"><strong>Format and constraint</strong><p>Three bullets; professional tone; add no unsupported facts</p></div>
</div>

::: tip Keep roles realistic
"Act as a writing assistant" sets a useful perspective. "Act as the treating clinician" does not give the tool clinical authority and may encourage an inappropriate output.
:::

## Story: the vague request

Priya asks, "Write my weekly report." The response is generic because the tool does not know the audience, reporting period, source, measures, required format, or limits.

Priya improves the request by naming the task, providing approved summary figures, defining the audience, requesting four headings, and instructing the tool not to explain causes that the figures do not prove.

### Before and after

**Before:** "Summarize this."

**After:** "Summarize the supplied fictional meeting notes for the project team. Use the headings Decisions, Actions, Owners, and Open Questions. Preserve the wording of confirmed decisions. Do not invent owners or deadlines. Mark unclear items as `[needs confirmation]`."

## Prompt workflow

<div class="workflow">
  <div class="workflow-step"><b>1 - Define</b><span>What result is needed and who will use it?</span></div>
  <div class="workflow-step"><b>2 - Check</b><span>Is the tool, information, and task permitted?</span></div>
  <div class="workflow-step"><b>3 - Structure</b><span>Add the five prompt parts.</span></div>
  <div class="workflow-step"><b>4 - Generate</b><span>Run the prompt in the approved environment.</span></div>
  <div class="workflow-step"><b>5 - Verify</b><span>Compare every important claim with the source.</span></div>
  <div class="workflow-step"><b>6 - Refine</b><span>Correct the prompt or output, then review again.</span></div>
</div>

## Role-based examples

<div class="use-case-grid">
  <div class="use-case"><strong>Care coordination</strong><p>Draft a fictional follow-up message from approved facts, with no clinical advice or invented commitments.</p></div>
  <div class="use-case"><strong>Administration</strong><p>Convert fictional meeting notes into decisions, actions, owners, and open questions.</p></div>
  <div class="use-case"><strong>Program management</strong><p>Describe a verified trend without claiming an unsupported cause.</p></div>
  <div class="use-case"><strong>Leadership</strong><p>Prepare a short briefing that separates evidence, uncertainty, and proposed action.</p></div>
</div>

## Interactive demonstration

Run one vague prompt and review the result. Ask learners what the tool had to guess. Add one prompt component at a time and compare how the output changes. Finish by checking the improved result against the same source.

## Hands-on activity: prompt clinic

<div class="learning-task">
  <h3>Repair three prompts</h3>
  <p>Rewrite each request using the five-part structure. Use fictional or approved public information only.</p>
</div>

1. "Write an email about the meeting."
2. "Tell me why performance went down."
3. "Summarize this call."

Exchange one rewritten prompt with a partner. The partner should underline the task, circle the permitted context, and identify the format and constraints.

## Common mistakes and fixes

- **Vague task:** Replace "help with this" with a specific action verb.
- **Missing audience:** State who will read or use the result.
- **Too much context:** Include only relevant, permitted information.
- **No source boundary:** Tell the tool not to add facts outside the supplied material.
- **Conflicting instructions:** Decide which requirement matters and remove the conflict.
- **No review plan:** Define what the learner will verify after generation.

## Critical-thinking challenge

The prompt says: "Analyze the decrease and explain the cause." The dataset shows a decrease but contains no information about causes. Rewrite the request so the output remains evidence-based.

::: details Suggested response
"Describe the change shown in the supplied data. State the reporting periods and values. List possible questions for further investigation, but do not claim a cause that the data does not establish."
:::

## Knowledge check

1. What are the five prompt components?
2. Which component tells the tool what not to invent?
3. Why should prompt context be limited?
4. Does a detailed prompt guarantee an accurate output?
5. What should a learner do when the source does not contain enough information?

::: details Check your answers
1. Role, task, context, format, and constraint. 2. Constraint. 3. To reduce noise and protect information that the task does not require. 4. No; the result still needs source-based review. 5. Ask the tool to flag the gap and obtain the missing information through an approved process.
:::

<div class="checkpoint"><strong>Project evidence:</strong> Write a five-part prompt for the continuing case. Annotate each component and list the facts that must be verified in the output.</div>
