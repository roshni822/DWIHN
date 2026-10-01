---
title: "Module 8: Objective Decisions with Data"
description: Separate observations from explanations and make transparent, evidence-based recommendations.
---

<p class="module-kicker">Module 8 - Role-based tools</p>

# Objective Decisions with Data

<p class="module-lede">Data can show what was recorded. It does not automatically explain why something happened or which action is best. Responsible decisions make evidence, assumptions, uncertainty, and consequences visible.</p>

<div class="module-meta">
  <span><strong>Audience:</strong> Managers, analysts, and decision-makers</span>
  <span><strong>Prerequisites:</strong> Modules 1-6</span>
  <span><strong>Level:</strong> Intermediate to advanced</span>
  <span><strong>Evidence:</strong> Reviewed recommendation</span>
</div>

## Module Overview

This module teaches learners to move from a chart or AI-generated insight to a transparent, evidence-based decision. It is important because data can show a pattern without proving its cause, and predictions require validation, fairness checks, and monitoring.

## Learning objectives

By the end of this module, learners can:

- Distinguish an observation, interpretation, hypothesis, and prediction.
- Evaluate denominators, missing records, sample size, periods, and data changes.
- Consider alternative explanations and fairness before recommending action.
- Communicate evidence, limitations, ownership, and a review measure.

## Module Content

1. Creating a single source of truth
2. Reading and presenting trend analysis
3. Understanding predictive insights
4. Running a data-driven meeting

### 1. Creating a single source of truth

**Detailed Explanation:** Teams need governed data sources and shared metric definitions before comparing performance. A single source of truth does not mean one chart answers every question. It means people agree on the source, definition, period, update schedule, and owner used for a decision.

**Key Points:**

- Use an approved source with a named owner.
- Define every important measure consistently.
- Record calculation rules, exclusions, and refresh dates.
- Resolve differences before presenting competing numbers.

::: tip Real-life example
Two teams report different fictional completion rates. They discover that one includes cancelled appointments in the denominator and the other does not. Agreeing on the governed definition resolves the apparent conflict.
:::

**Technical Example:** A metric dictionary can record metric name, business definition, numerator, denominator, exclusions, source table, refresh frequency, and owner. A dashboard should reference this definition instead of creating a private calculation.

**How It Works:**

1. Identify the decision and required measures.
2. Locate the approved data source and metric owner.
3. Agree on definitions, calculation rules, and period.
4. Reconcile conflicting values and document the resolution.
5. Use the governed result with its freshness and limitations.

**Where It Is Used:** A single source of truth supports leadership reports, program comparisons, quality review, budgeting, service planning, and cross-team meetings.

**Common Mistakes or Confusions:** Beginners may think one file is automatically authoritative, create local calculations, mix reporting periods, overlook exclusions, or use an old export after the governed source has changed.

### 2. Reading and presenting trend analysis

**Detailed Explanation:** A trend describes how a measure changes over time. Responsible analysis checks whether the periods are comparable, identifies unusual values, and separates what the data directly shows from possible explanations. A visual trend does not prove what caused the change.

**Key Points:**

- Compare the same measure across comparable periods.
- Show the scale, units, source, and complete time range.
- Distinguish normal variation from a meaningful change.
- State missing context and incomplete periods.

::: tip Real-life example
A rate decreases for two months, but the newest month is incomplete. The presenter separates the confirmed two-month trend from the partial value and avoids presenting the latest point as final.
:::

**Technical Example:** A monthly time series stores one date and one governed rate per period. Analysts can compare it with a target or prior-year baseline, but they should flag partial periods and explain any definition change that breaks comparability.

**How It Works:**

1. Confirm the metric definition and time interval.
2. Check data quality, completeness, and unusual events.
3. Plot or summarize values in chronological order.
4. Describe the observed direction without assigning a cause.
5. Add limitations and questions for further investigation.

**Where It Is Used:** Trend analysis supports performance monitoring, staffing discussions, demand planning, service access review, and reports to leaders or governance groups.

**Common Mistakes or Confusions:** Common errors include comparing a partial month with a full month, hiding a long-term pattern, choosing a misleading scale, treating one change as a trend, or claiming causation from timing alone.

### 3. Understanding predictive insights

**Detailed Explanation:** A predictive insight is an estimate produced from past patterns and stated assumptions. It may help people prepare for a possible future condition, but it is not a guaranteed outcome. Its usefulness depends on validation, current conditions, fairness, and continued monitoring.

**Key Points:**

- Identify exactly what is being predicted and for what period.
- Ask how performance was tested and against which baseline.
- Consider false positives, false negatives, and affected groups.
- Keep a human decision maker and a monitoring plan.

::: tip Real-life example
A fictional model suggests that call demand may rise next week. The manager uses the signal to review staffing options but does not treat the predicted number as a confirmed schedule requirement.
:::

**Technical Example:** A forecasting model may use prior call volume, weekday, season, and approved event information to estimate next week's demand. Its predicted value should be compared with actual demand and a simple baseline such as the recent average.

**How It Works:**

1. Define the outcome and decision the prediction may support.
2. Review the approved inputs, assumptions, and validation evidence.
3. Read the estimate together with uncertainty and limitations.
4. Consider consequences for different groups before acting.
5. Compare predictions with actual outcomes and adjust or stop use when needed.

**Where It Is Used:** Predictive insights may support demand planning, workload preparation, outreach prioritization, capacity review, and early operational discussion where approved.

**Common Mistakes or Confusions:** Beginners may treat a probability as certainty, confuse correlation with cause, ignore model drift, use a prediction outside its intended population, or automate a high-impact decision without suitable review.

### 4. Running a data-driven meeting

**Detailed Explanation:** A data-driven meeting uses verified evidence to focus discussion and make decisions transparent. Participants separate observations, possible explanations, evidence requests, decisions, owners, and review dates. The dashboard supports the meeting, while people remain accountable for judgment and action.

**Key Points:**

- Share definitions and evidence before debating causes.
- Separate facts, hypotheses, and decisions in the notes.
- Assign an owner, deadline, and measure to each action.
- Revisit the result and unintended effects.

::: tip Real-life example
The team observes a lower completion rate, lists transportation and scheduling as hypotheses, assigns two evidence checks, chooses a limited outreach test, and agrees to review the result after four weeks.
:::

**Technical Example:** A meeting decision log can include observation, source, possible explanations, missing evidence, selected action, owner, due date, review metric, and fairness check. This creates a traceable connection between data and action.

**How It Works:**

1. State the decision question and governed measures.
2. Review definitions, filters, freshness, and limitations.
3. Record observations separately from explanations.
4. Choose a limited action and assign ownership.
5. Set a review date and compare results with the agreed measure.

**Where It Is Used:** This structure supports operational meetings, program reviews, quality-improvement sessions, leadership discussions, and cross-functional planning.

**Common Mistakes or Confusions:** Meetings can fail when participants debate unverified numbers, choose a cause too early, leave actions ownerless, omit dissent or uncertainty, or never return to see whether the action helped.

## Four levels of a data statement

<div class="concept-grid">
  <div class="concept-card"><strong>Observation</strong><p>"The completion rate fell from 70% to 60%."</p></div>
  <div class="concept-card"><strong>Interpretation</strong><p>"The decrease may represent an access problem."</p></div>
  <div class="concept-card"><strong>Hypothesis</strong><p>"Transportation barriers may have contributed."</p></div>
  <div class="concept-card"><strong>Prediction</strong><p>"If the pattern continues, the next period may also fall below target."</p></div>
</div>

Only the first statement is directly shown by the example values. The others require reasoning, additional evidence, or testing.

## Evidence-to-action workflow

<div class="workflow">
  <div class="workflow-step"><b>Observe</b><span>State what the governed data directly shows.</span></div>
  <div class="workflow-step"><b>Question</b><span>Identify missing context and possible explanations.</span></div>
  <div class="workflow-step"><b>Investigate</b><span>Seek relevant evidence and affected perspectives.</span></div>
  <div class="workflow-step"><b>Compare</b><span>Consider alternatives, benefits, risks, and fairness.</span></div>
  <div class="workflow-step"><b>Act</b><span>Choose a proportionate, reviewable response.</span></div>
  <div class="workflow-step"><b>Monitor</b><span>Measure results and revise the decision if needed.</span></div>
</div>

## Story: the quick explanation

The continuing-case dashboard shows more missed appointments in three fictional areas. A manager says transportation is the cause. The available data contains appointment status and area, but no transportation information.

Transportation may be a reasonable question, but it is not yet an evidence-based conclusion. Other possibilities include scheduling changes, incomplete records, service availability, communication barriers, or a change in the denominator.

## Check the evidence

Before interpreting a result, ask:

- Are the compared periods complete and equivalent?
- Are the metric definitions consistent?
- What is the numerator and denominator?
- How large is the population or sample?
- Are records missing, delayed, duplicated, or recoded?
- Did the collection method, workflow, or program change?
- Are the differences practically meaningful as well as numerically visible?
- Which affected perspectives are absent from the data?

## Interactive demonstration

Present a fictional chart without its title, period, or denominator. Ask learners to interpret it. Then reveal the missing context in stages. Record how each addition changes the responsible conclusion.

## Hands-on activity: decision lab

<div class="learning-task">
  <h3>Build a defensible recommendation</h3>
  <p>Review the synthetic Community Access dashboard. Produce three observations, two possible explanations, two evidence requests, and one limited action that can be monitored.</p>
</div>

The recommendation must include:

- Evidence and source.
- What the evidence supports.
- What remains uncertain.
- At least one alternative explanation.
- Potential effect on different groups.
- Proposed owner and action.
- A measure and date for review.

## Fairness and ethics

An average can hide different experiences. A model or recommendation may reproduce gaps in the data or disadvantage a group that is underrepresented, misclassified, or affected differently by the proposed action.

Ask who benefits, who carries the burden, whose experience is missing, and what signal would cause the team to stop or revise the action.

## Common mistakes

- Turning correlation into a causal claim.
- Selecting only the metric that supports a preferred decision.
- Ignoring a small denominator or missing records.
- Comparing an incomplete period with a completed period.
- Presenting a prediction without uncertainty.
- Recommending a broad intervention before testing a limited response.

## Critical-thinking challenge

Two dashboards show different completion rates for the same program. List five checks to perform before deciding that one dashboard is wrong.

::: details Suggested response
Check metric definitions, reporting periods, filters, refresh dates, source systems, exclusions, and denominators. The dashboards may answer different questions even when their labels look similar.
:::

## Knowledge check

1. What is the difference between an observation and a hypothesis?
2. Why should alternative explanations be considered?
3. Name four evidence-quality checks.
4. What should a responsible prediction include?
5. What makes an action reviewable?

::: details Check your answers
1. An observation states what the data directly shows; a hypothesis proposes a possible explanation. 2. The first explanation may be incomplete or wrong. 3. Examples include period, denominator, sample size, missing records, definitions, filters, and freshness. 4. Its assumptions, uncertainty, validation, and limits. 5. A clear owner, measure, timeframe, and condition for changing or stopping it.
:::

<div class="checkpoint"><strong>Project evidence:</strong> Prepare a one-page recommendation for the continuing case. Separate observations, possible explanations, evidence gaps, proposed action, fairness considerations, and review measure.</div>
