---
title: "Module 7: Genesys AI for Call-Center Excellence"
description: Review enabled call-center AI assistance while preserving accuracy, privacy, and established escalation duties.
---

<p class="module-kicker">Module 7 - Role-based tools</p>

# Genesys AI for Call-Center Excellence

<p class="module-lede">Call-center AI can support documentation and information access, but transcripts, summaries, suggestions, sentiment signals, and routing outputs can be incomplete or wrong. The employee remains responsible for the approved call workflow.</p>

<div class="module-meta">
  <span><strong>Audience:</strong> Authorized call-center staff and supervisors</span>
  <span><strong>Prerequisites:</strong> Modules 1-5</span>
  <span><strong>Level:</strong> Intermediate</span>
  <span><strong>Evidence:</strong> Corrected call record</span>
</div>

## Module Overview

This module explains how enabled Genesys AI features may support call-center work through transcripts, summaries, knowledge suggestions, sentiment signals, and routing. It is important because these features can assist employees but can also mishear, omit, or misinterpret important information.

::: warning Feature confirmation required
Teach only Genesys features enabled and approved for each DWIHN role. Confirm transcription, summarization, knowledge, sentiment, routing, recording, retention, and correction workflows before delivery.
:::

## Learning objectives

By the end of this module, authorized learners can:

- Identify where enabled AI assistance appears in the call workflow.
- Review a transcript for recognition errors and missing context.
- Correct a summary using the approved source and process.
- Evaluate knowledge suggestions before communicating them.
- Treat sentiment and routing outputs as configured signals, not clinical facts.

## Module Content

1. Agent assistance and suggestions
2. Transcripts and automatic call summaries
3. Sentiment alerts
4. Predictive routing
5. Using the approved knowledge base

### 1. Agent assistance and suggestions

**Detailed Explanation:** Where enabled, agent assistance may surface possible information or next steps during a call. The suggestion is support for the employee, not an instruction that must be followed. The employee must confirm relevance, accuracy, currency, and permission before communicating it.

**Key Points:**

- Match the suggestion to the caller's actual question.
- Confirm that the source is current and approved.
- Keep listening instead of following the screen mechanically.
- Preserve required authentication, escalation, and documentation steps.

::: tip Real-life example
A caller asks about a fictional service location. The system suggests an article, but the agent notices it describes a different program. The agent searches the approved knowledge source instead of reading the irrelevant suggestion.
:::

**Technical Example:** An assistance service may use the recognized topic from a transcript to retrieve a related knowledge article. The returned article still needs a source identifier, version, effective date, and relevance check.

**How It Works:**

1. Listen and clarify the caller's need.
2. Review the suggestion and its source.
3. Compare it with the approved procedure and caller context.
4. Use, revise, or reject the suggestion.
5. Document the action through the confirmed workflow.

**Where It Is Used:** Agent assistance can support information lookup, consistent explanations, approved next-step reminders, and faster navigation during routine calls.

**Common Mistakes or Confusions:** Beginners may read a suggestion word for word, overlook an expired article, stop listening to the caller, or assume the tool has understood the complete situation.

### 2. Transcripts and automatic call summaries

**Detailed Explanation:** Transcription converts speech into text, and summarization turns the transcript into a shorter record. Speech recognition can mishear names, dates, numbers, accents, background audio, or specialized terms. A summary can also omit an open issue or change a discussion into a commitment.

**Key Points:**

- The transcript is a generated representation, not a perfect record.
- Compare important summary claims with the transcript or approved source.
- Correct names, numbers, decisions, ownership, and follow-up.
- Complete the record only after the required review.

::: tip Real-life example
A caller discusses a Thursday appointment but does not accept it. The generated summary says the appointment was booked. The agent corrects the summary to show that transportation must be confirmed first.
:::

**Technical Example:** A simplified pipeline is audio -> speech-to-text transcript -> generated summary -> human review -> approved call record. Each transformation can introduce an error, so high-impact details require source comparison.

**How It Works:**

1. The approved system records or processes the call as configured.
2. Speech recognition produces a draft transcript.
3. A summarization feature proposes key facts and actions.
4. The employee checks the proposal against the source.
5. Corrections are made before the record is finalized.

**Where It Is Used:** It can support call documentation, follow-up records, supervisor review, quality assurance, and retrieval of agreed actions where these features are authorized.

**Common Mistakes or Confusions:** Common errors include accepting the draft unchanged, overlooking a wrong number, removing uncertainty, assigning an action to the wrong person, or treating discussed options as confirmed decisions.

### 3. Sentiment alerts

**Detailed Explanation:** Sentiment analysis estimates an emotional category or change from language or voice patterns. It is uncertain and can be affected by culture, disability, communication style, accent, silence, or background noise. It does not establish how a person feels and is never a diagnosis.

**Key Points:**

- Treat sentiment as an uncertain signal.
- Respond to the caller's words and observable needs.
- Never use the label as a clinical conclusion.
- Follow confirmed crisis and escalation procedures regardless of the label.

::: tip Real-life example
The system displays a negative sentiment label while the caller calmly requests written confirmation. The agent responds to the caller's actual words and follows the approved workflow instead of treating the label as a clinical fact.
:::

**Technical Example:** A model may return a label and confidence score from text or audio features. Even a high score describes model confidence in its classification, not certainty about a person's feelings or needs.

**How It Works:**

1. The configured system analyzes permitted call signals.
2. It produces a category, score, or alert.
3. The employee notices the signal without assuming it is correct.
4. The employee listens, clarifies, and follows procedure.
5. Required action is based on the full situation and approved workflow.

**Where It Is Used:** Where approved, sentiment may support quality review, supervisor awareness, coaching discussions, or prompts to pay closer attention during a call.

**Common Mistakes or Confusions:** Beginners may confuse sentiment with diagnosis, allow a label to override the caller's words, act differently because of bias, or fail to follow a required escalation because the system did not flag the call.

### 4. Predictive routing

**Detailed Explanation:** Where enabled, predictive routing uses configured data and rules or models to choose a queue or agent. Routing can improve flow, but it may be wrong or inappropriate. Staff remain responsible for the call once it reaches them and must know how to correct or escalate a poor route.

**Key Points:**

- Understand the approved goal of the routing system.
- Know which information and constraints influence the route.
- Follow the authorized transfer process when a route is unsuitable.
- Monitor routing performance and fairness across groups.

::: tip Real-life example
A call reaches a general queue even though the fictional caller needs language assistance. The agent follows the approved transfer or support process rather than assuming the routing decision cannot be changed.
:::

**Technical Example:** A routing configuration may consider queue availability, agent skills, language capability, and the identified contact reason. It returns a destination, but an employee can still identify a mismatch that the model did not capture.

**How It Works:**

1. The system receives permitted call and queue information.
2. Rules or a model evaluate possible destinations.
3. The call is routed to a queue or agent.
4. The receiving employee verifies that the route fits the need.
5. Mismatches and recurring patterns follow the confirmed correction route.

**Where It Is Used:** It may support skill-based routing, language assistance, queue balancing, specialist access, and reduced transfer time where DWIHN has enabled it.

**Common Mistakes or Confusions:** Staff may assume the route is always correct, transfer without explanation, ignore unfair patterns, or misunderstand a prediction as an instruction that cannot be changed.

### 5. Using the approved knowledge base

**Detailed Explanation:** An approved knowledge base stores controlled information such as procedures, program details, and call guidance. A suggested article is useful only when it is relevant, current, authorized for the employee, and appropriate for the caller.

**Key Points:**

- Use only the approved knowledge source.
- Check the title, program, audience, version, and effective date.
- Confirm that local instructions match the caller's situation.
- Report outdated or conflicting content through the confirmed process.

::: tip Real-life example
Two articles have similar titles, but only one contains the current fictional office hours. The agent checks the publication details and uses the current source.
:::

**Technical Example:** A knowledge article can include metadata such as article ID, owner, version, effective date, audience, program, and review date. Search ranking may surface a similar article first, so metadata is part of verification.

**How It Works:**

1. Search by the caller's confirmed need.
2. Open the most relevant approved article.
3. Check its metadata, scope, and current status.
4. Use only the information that applies.
5. Document or report content issues as required.

**Where It Is Used:** Knowledge bases support consistent service information, standard procedures, location details, eligibility guidance, call scripts, and employee reference.

**Common Mistakes or Confusions:** Common problems include using the first result, selecting an article for the wrong program, ignoring an expiration date, quoting internal-only content, or relying on personal notes instead of the controlled source.

## The human-owned call workflow

<div class="workflow">
  <div class="workflow-step"><b>Receive</b><span>Follow authentication and opening procedures.</span></div>
  <div class="workflow-step"><b>Understand</b><span>Listen, clarify, and identify the reason for contact.</span></div>
  <div class="workflow-step"><b>Assist</b><span>Use current approved knowledge and procedures.</span></div>
  <div class="workflow-step"><b>Document</b><span>Review transcripts, notes, and proposed summaries.</span></div>
  <div class="workflow-step"><b>Confirm</b><span>Record agreed actions, open issues, and ownership.</span></div>
  <div class="workflow-step"><b>Follow up</b><span>Use the authorized route and required timeframe.</span></div>
</div>

## What enabled AI features may support

<div class="concept-grid">
  <div class="concept-card"><strong>Transcription</strong><p>Creates text from speech but may mishear names, numbers, accents, or specialized terms.</p></div>
  <div class="concept-card"><strong>Call summaries</strong><p>Propose a shorter record but may omit, combine, or overstate information.</p></div>
  <div class="concept-card"><strong>Knowledge suggestions</strong><p>Surface possible content that still requires relevance and currency checks.</p></div>
  <div class="concept-card"><strong>Signals and routing</strong><p>Support configured workflows but do not establish a diagnosis or replace procedure.</p></div>
</div>

## Story: booked or discussed?

A fictional caller asks whether an appointment is available on Thursday. The agent explains the options, but the caller says they need to check transportation before choosing. The proposed summary states, "Caller booked the Thursday appointment."

The summary converts a discussion into a commitment. The agent must correct the record before completing the approved documentation process.

## The summary review checklist

Confirm each item against the approved source:

- Reason for contact.
- Important facts and barriers.
- Information provided by the agent.
- Decisions actually made.
- Actions agreed to by each person.
- Unresolved questions.
- Follow-up owner and confirmed timeframe.
- Any required escalation or documentation fields.

## Interactive demonstration

Use a short fictional audio transcript and proposed summary:

1. Mark transcript words that may have been misrecognized.
2. Compare each summary claim with the transcript.
3. Correct an overstatement and restore an omitted open question.
4. Check a knowledge suggestion against the approved source.
5. Complete the record using the confirmed DWIHN workflow.

## Hands-on activity: correct the call record

<div class="learning-task">
  <h3>Find what changed</h3>
  <p>Review a fictional transcript and summary. Label each summary statement as <strong>supported</strong>, <strong>incomplete</strong>, <strong>incorrect</strong>, or <strong>unclear</strong>, then prepare a corrected version.</p>
</div>

The exercise should include:

- One number transcribed incorrectly.
- One action assigned to the wrong person.
- One unresolved issue presented as resolved.
- One important follow-up omitted from the summary.
- One accurate statement that should remain unchanged.

## Sentiment and ethical judgment

Sentiment analysis is an uncertain interpretation of language or voice patterns. It may be affected by culture, disability, communication style, background noise, or system limitations.

Do not use a sentiment label to diagnose a person, dismiss their stated need, or replace DWIHN's confirmed crisis and escalation procedures.

## Common mistakes

- Assuming the transcript is a perfect record.
- Treating a generated summary as complete documentation.
- Communicating a knowledge suggestion without checking it.
- Treating sentiment as a clinical conclusion.
- Allowing routing logic to override required employee actions.
- Copying call information into an unauthorized tool or location.

## Mini challenge

The sentiment indicator shows "negative," but the caller calmly says they are satisfied and only need written confirmation. What should the agent do?

::: details Suggested response
Respond to the caller's words and the approved workflow. Treat the sentiment result as an uncertain signal, not as a clinical or factual conclusion. Document and follow up according to confirmed procedures.
:::

## Knowledge check

1. Why can a transcript contain errors?
2. What must be confirmed in a call summary?
3. How should a knowledge suggestion be used?
4. What does a sentiment signal establish?
5. Who owns the accuracy of the completed call record?

::: details Check your answers
1. Speech recognition may mishear words, numbers, names, accents, or background audio. 2. The reason for contact, facts, decisions, actions, open issues, follow-up, and required escalation. 3. Check its relevance, accuracy, currency, and approved use before communicating it. 4. It is an uncertain configured signal; it does not establish a diagnosis or replace procedure. 5. The authorized employee completing the approved workflow.
:::

<div class="checkpoint"><strong>Project evidence:</strong> Correct the continuing-case call summary and document the exact transcript evidence supporting each retained or changed statement.</div>
