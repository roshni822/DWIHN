---
title: "Module 6: Lumenore Impact Deep Dive"
description: Ask precise questions, verify governed metrics, and communicate dashboard results responsibly.
---

<p class="module-kicker">Module 6 - Role-based tools</p>

# Lumenore Impact Deep Dive

<p class="module-lede">A dashboard can answer a carefully defined question. It cannot decide what a metric means, prove why a change happened, or replace the learner's responsibility to verify filters, definitions, and context.</p>

<div class="module-meta">
  <span><strong>Audience:</strong> Authorized analysts, program managers, and leaders</span>
  <span><strong>Prerequisites:</strong> Modules 1-5</span>
  <span><strong>Level:</strong> Intermediate</span>
  <span><strong>Evidence:</strong> Verified dashboard insight</span>
</div>

## Module Overview

This module develops practical Lumenore skills for asking data questions, reading results, working with dashboards, investigating service gaps, configuring supported alerts, and preparing reviewed reports. It is important because decisions depend on correct measures, filters, reporting periods, and definitions.

::: warning Environment confirmation required
Confirm the enabled Lumenore features, training accounts, permissions, metric dictionary, datasets, export rules, and alert functions in DWIHN's environment before delivery.
:::

## Learning objectives

By the end of this module, authorized learners can:

- Navigate the confirmed Lumenore workspace and locate governed content.
- Ask a data question with a measure, population, period, and comparison.
- Verify definitions, denominators, filters, freshness, and source records.
- Explain a trend without presenting an unsupported cause.
- Prepare a reviewed report or alert using enabled features.

## Module Content

1. Asking questions with Ask Me
2. Building and reading a dashboard
3. Investigating service gaps
4. Setting and responding to alerts
5. Exporting reviewed reports

### 1. Asking questions with Ask Me

**Detailed Explanation:** Where the Ask Me feature is enabled, it lets an authorized user ask a data question in everyday language. A useful question names the measure, population, reporting period, and comparison. These details reduce ambiguity and make the answer easier to verify.

**Key Points:**

- Name exactly what should be measured.
- Identify the group, program, or location to include.
- State the time period and the comparison.
- Treat the response as a result to verify, not an automatic fact.

::: tip Real-life example
A program manager asks for the fictional appointment completion rate for the North Training Area in Quarter 2 compared with Quarter 1. The manager avoids the vague question *How are we doing?*
:::

**Technical Example:** A structured question can be represented as four fields: measure = appointment completion rate, population = North Training Area, period = Quarter 2, and comparison = Quarter 1. The system translates those fields into a query against an approved dataset.

**How It Works:**

1. Define the business question.
2. Add the measure, population, period, and comparison.
3. Submit the question in the approved workspace.
4. Review the returned value, chart, filters, and source.
5. Check the result against the metric definition before using it.

**Where It Is Used:** It is used for program monitoring, operational questions, leadership preparation, service comparisons, and early exploration of governed data.

**Common Mistakes or Confusions:** Beginners may ask a broad question, forget the time period, compare unlike groups, accept the first interpretation, or assume that a natural-language answer has already been validated.

### 2. Building and reading a dashboard

**Detailed Explanation:** A dashboard organizes related measures into indicators, charts, tables, and filters. It helps users see patterns quickly, but every visual must still be read with its definition, scale, reporting period, and active filters.

**Key Points:**

- Choose a visual that matches the question.
- Keep labels, units, scales, and time periods clear.
- Check all active filters before interpreting a value.
- Confirm the numerator, denominator, and data-freshness date.

::: tip Real-life example
A column chart compares completion rates across three fictional service areas. Before presenting it, the learner confirms that all areas use the same definition and reporting period.
:::

**Technical Example:** Use a line chart for a rate over time, a column chart for categories, a table for exact values, and a single indicator for one headline measure. A completion rate should be calculated from a confirmed numerator and denominator rather than inferred from a count.

**How It Works:**

1. Start with a precise question.
2. Select the governed measure and relevant filters.
3. Choose a chart that represents the comparison accurately.
4. Add labels, units, period, source, and freshness information.
5. Test the dashboard and explain one verified observation.

**Where It Is Used:** Dashboards support operational monitoring, service-area reviews, management meetings, quality improvement, and board-report preparation.

**Common Mistakes or Confusions:** Common problems include truncated axes, unclear labels, hidden filters, mixing counts with rates, comparing incomplete periods, and adding too many visuals to one screen.

### 3. Investigating service gaps

**Detailed Explanation:** Location, program, population, and time filters can reveal differences in access or outcomes. A difference is an observation that deserves investigation; it is not proof of its cause. The next step is to check the data and identify what additional evidence is needed.

**Key Points:**

- Compare like populations and complete reporting periods.
- Check small denominators and missing records.
- Separate the observed gap from possible explanations.
- Consider fairness before recommending an action.

::: tip Real-life example
A synthetic map shows a lower completion rate in one fictional ZIP code. The learner reports the difference, checks the denominator, and asks about scheduling, transportation, and missing records without claiming that any one factor caused it.
:::

**Technical Example:** Group synthetic appointment records by ZIP code, calculate completed appointments divided by scheduled appointments for each group, and display the rates with record counts. Small groups should be reviewed carefully because one record can change the rate sharply.

**How It Works:**

1. Define the service measure and comparison groups.
2. Apply the same period and definition to every group.
3. Calculate counts and rates, then check missing data.
4. Record the difference as an observation.
5. Gather evidence before selecting a limited response.

**Where It Is Used:** This approach supports access analysis, geographic service planning, outreach review, capacity planning, and quality-improvement discussions.

**Common Mistakes or Confusions:** Beginners may treat correlation as causation, rank areas without context, ignore population size, use an incomplete month, or assume the data explains barriers it did not measure.

### 4. Setting and responding to alerts

**Detailed Explanation:** Where alerts are enabled, they notify authorized people when a measure meets a defined condition. A useful alert has a meaningful threshold, recipient, owner, expected response, and review process. It signals that someone should look closer; it does not make the final decision.

**Key Points:**

- Connect each alert to a clear operational purpose.
- Define the metric, condition, threshold, and frequency.
- Assign an owner and expected response.
- Review false alarms, missed events, and continued usefulness.

::: tip Real-life example
A fictional program alert is triggered when a weekly completion rate falls below an approved threshold. The assigned manager verifies the records before deciding whether action is required.
:::

**Technical Example:** An alert rule may contain metric = weekly completion rate, operator = below, threshold = approved value, recipient = program manager, frequency = weekly, and owner = dashboard administrator.

**How It Works:**

1. Choose a governed measure linked to a real decision.
2. Set an approved condition and threshold.
3. Assign recipients, owner, and response instructions.
4. Test the alert with synthetic data.
5. Verify every live alert before taking action and review the rule regularly.

**Where It Is Used:** Alerts can support workload monitoring, service-level review, data-quality checks, capacity concerns, and unusual changes that require human attention.

**Common Mistakes or Confusions:** Poor thresholds can create alert fatigue. Other mistakes include sending alerts to the wrong audience, omitting an owner, acting without checking the data, or assuming an alert proves why a change happened.

### 5. Exporting reviewed reports

**Detailed Explanation:** An exported report leaves the dashboard context, so it must carry the information a reader needs to understand it correctly. That includes the source, period, filters, metric definition, data-freshness date, limitations, classification, and approved audience.

**Key Points:**

- Review the figures before export.
- Include definitions, filters, source, and freshness.
- State limitations and incomplete periods clearly.
- Follow classification, storage, and sharing rules.

::: tip Real-life example
A board-report chart is accompanied by a note explaining that the latest month is incomplete. Without that note, readers might mistake a partial-month value for a final result.
:::

**Technical Example:** Add report metadata such as dataset name, last refresh date, reporting period, active filters, measure definition, export date, reviewer, and limitation note to the report footer or accompanying record.

**How It Works:**

1. Verify the dashboard values and active filters.
2. Select only the visuals needed for the audience.
3. Add definitions, dates, source, and limitations.
4. Complete the required human review.
5. Export, store, and share through an approved destination.

**Where It Is Used:** Reviewed exports are used for leadership briefings, program reports, board materials, quality meetings, and approved operational follow-up.

**Common Mistakes or Confusions:** Frequent errors are exporting before review, removing context, sharing an outdated snapshot, exposing sensitive information, or sending the file beyond the authorized audience.

## Begin with a precise question

"How are we doing?" is too broad. A useful question identifies four elements:

<div class="concept-grid">
  <div class="concept-card"><strong>Measure</strong><p>What count, rate, duration, or outcome is being examined?</p></div>
  <div class="concept-card"><strong>Population</strong><p>Which programs, records, service areas, or groups are included?</p></div>
  <div class="concept-card"><strong>Period</strong><p>Which dates are included, and is the period complete?</p></div>
  <div class="concept-card"><strong>Comparison</strong><p>Compared with what earlier period, target, or group?</p></div>
</div>

**Example:** "What was the fictional appointment completion rate for the North Training Area in Quarter 2, compared with Quarter 1?"

## Counts, rates, and denominators

A count tells how many. A rate compares that count with a total population. The denominator changes the meaning.

- Quarter 1: 70 completed appointments out of 100 scheduled = 70%.
- Quarter 2: 90 completed appointments out of 150 scheduled = 60%.

Completed appointments increased, but the completion rate decreased by 10 percentage points. Both statements are true.

## The dashboard verification loop

<div class="workflow">
  <div class="workflow-step"><b>Question</b><span>Define measure, population, period, and comparison.</span></div>
  <div class="workflow-step"><b>Result</b><span>Read the value and visual without jumping to a cause.</span></div>
  <div class="workflow-step"><b>Filters</b><span>Confirm dates, programs, areas, and exclusions.</span></div>
  <div class="workflow-step"><b>Definition</b><span>Check numerator, denominator, and business meaning.</span></div>
  <div class="workflow-step"><b>Freshness</b><span>Confirm the latest load and incomplete periods.</span></div>
  <div class="workflow-step"><b>Source</b><span>Reconcile important results with a governed reference.</span></div>
</div>

## Story: more visits, lower rate

The fictional Community Access Program completed 20 more appointments in Quarter 2. A manager celebrates the improvement. Another manager notices that scheduled appointments grew by 50, so the completion rate actually fell.

The dashboard is not contradictory. The two users are looking at different measures. They need a shared definition before making a decision.

## Interactive demonstration

In the approved training environment:

1. Open a governed dashboard or synthetic dataset.
2. Ask one precise question using all four elements.
3. Read the result and inspect every active filter.
4. Open the metric definition and identify the denominator.
5. Confirm the latest data date and whether the period is complete.
6. Compare the result with an approved table or reference report.
7. State one observation and one limitation.

## Hands-on activity: investigate a service gap

<div class="learning-task">
  <h3>From chart to responsible insight</h3>
  <p>Use the synthetic Community Access dataset. Compare completion rates across three fictional service areas, then document the question, filters, definitions, result, and limitations.</p>
</div>

Required learner output:

- One accurately worded observation.
- One screenshot or saved view that contains no real information.
- The reporting period and data-freshness date.
- The numerator, denominator, and active filters.
- Two questions that would help investigate possible explanations.

## Alerts and exports

Where enabled, an alert needs a documented threshold, recipient, expected response, owner, and review process. An alert is a signal, not proof that a problem exists.

An exported report should carry enough context to be understood outside the dashboard: source, date, period, filters, metric definition, limitations, and required handling.

## Common mistakes

- Asking a broad question and accepting the first interpretation.
- Confusing a count with a rate.
- Ignoring active filters or incomplete reporting periods.
- Treating a geographic difference as proof of its cause.
- Exporting a chart without its definitions and limitations.
- Sharing an output beyond the learner's authorized audience.

## Mini challenge

A dashboard shows a sharp decrease during the current month. The month is only ten days old. Write a responsible interpretation.

::: details Suggested response
The current partial-month value is lower than the completed previous-month value. Because the reporting periods are not comparable, no conclusion about the final monthly trend should be made yet.
:::

## Knowledge check

1. What four elements make a data question precise?
2. Why must a rate include its denominator?
3. What is the difference between percentage and percentage-point change?
4. What should an exported chart include?
5. Does a difference between areas prove why the difference exists?

::: details Check your answers
1. Measure, population, period, and comparison. 2. The denominator defines the population used to calculate the rate. 3. Percentage change is relative; percentage-point change is the direct difference between two rates. 4. Source, period, filters, definitions, freshness, limitations, and appropriate handling. 5. No; it identifies a pattern that may require investigation.
:::

<div class="checkpoint"><strong>Project evidence:</strong> Produce a verified insight for the continuing case. Include the exact question, governed measure, filters, freshness, observation, limitation, and next question.</div>
