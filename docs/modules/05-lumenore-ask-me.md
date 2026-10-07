# Week 4 → Session 5 → Module 6 (Part 1): Lumenore Impact — Ask Me

### Previous Class Recap
In the previous session on Daily Workflows, we explored how to integrate AI into your specific operational tasks. We covered practical scenarios where AI can assist with drafting emails, summarizing meeting notes, and streamlining routine administrative duties.

### Topic 1: What is Lumenore Impact?

#### Detailed Definition and Introduction
Lumenore Impact is a "Decision Intelligence" platform. While the AI we used in Month 1 (LLMs) was trained on the entire public internet to predict text, Lumenore is fundamentally different. Lumenore is connected directly, securely, and exclusively to DWIHN’s internal databases.

#### Fundamentals and Prerequisite Concepts
To understand Lumenore, you must understand the difference between **Unstructured Data** and **Structured Data**.
* *Unstructured Data:* Emails, PDF policies, meeting notes. (What we used in Month 1).
* *Structured Data:* Excel spreadsheets, SQL databases, rows and columns of numbers (e.g., patient counts, budget line items, dates of service). Lumenore thrives on structured data.

#### Why the Concept is Needed & What Problem it Solves
**The Problem:** Historically, if a Program Manager needed to know "How many admissions did we have in Zip Code 48201 last quarter?", they had to submit an IT ticket. Two weeks later, IT sends an Excel sheet. By then, the data is stale, and the manager might need a different metric.
**The Solution:** Lumenore eliminates the IT bottleneck. It allows non-technical staff to ask questions of the database in plain English and get an answer in 3 seconds.

#### Components and Architecture
* **The Data Warehouse:** A highly secure, HIPAA-compliant vault where DWIHN's data lives.
* **The AI Layer (NLP):** Natural Language Processing. This is the "brain" that translates your English question into complex database code (SQL) instantly.
* **The Visualization Layer:** The engine that decides whether your answer should be a bar chart, a pie chart, or a single number.

#### Comparison with Related Concepts
* **Traditional BI (Business Intelligence) Tools vs. Lumenore:** In old tools (like early Tableau or PowerBI), you had to manually drag and drop data fields to build a chart. In Lumenore, you just type: "Show me a pie chart of admissions by region." The AI builds it for you.

---

### Topic 2: The "Ask Me" Feature — Typing Real Questions

#### Detailed Explanation of the Concept
The "Ask Me" bar is the Google Search of your internal data. Located at the top of the Lumenore dashboard, it is a simple text box that accepts conversational questions.

#### Step-by-Step Working/Process
1. **Access:** Log into Lumenore using your secure DWIHN credentials (SSO).
2. **Select Dataset:** Ensure you are looking at the correct dataset (e.g., "Crisis Hotline Data 2025" vs "Financial Budget 2025").
3. **Input:** Type your question.
4. **Processing:** The NLP engine parses your nouns ("admissions"), verbs ("compare"), and filters ("last month").
5. **Output:** A chart or metric is displayed, along with a text summary.

#### Best Practices for Typing Questions
The AI is smart, but it requires specificity.
* **Bad Query:** "How are we doing?" (The AI doesn't know what "doing well" means).
* **Good Query:** "What is the month-over-month trend for crisis calls in Q1?"

Use exact terminology. If your database calls them "Members," don't type "Patients." If it calls them "Service Requests," don't type "Tickets." 

### Topic 3: Reading and Interpreting Results

#### How it Works Internally
When Lumenore returns a chart, it also often returns a "Narrative." This is an AI-generated text box beneath the chart that explains the data in plain English. 
* *Example Narrative:* "Crisis calls peaked in November at 450, which is a 20% increase from the previous month."

#### Common Mistakes and Misconceptions
* **Mistake:** Assuming a drop in a chart means performance is bad. A drop in "Admissions" might be bad for revenue, but a drop in "Readmissions" is excellent clinical care. The AI doesn't know the context; it just shows the math. You must apply the human context.
* **Troubleshooting Scenarios:** 
  * *Scenario:* You ask "Admissions by zip code" and get an error saying "Ambiguous term."
  * *Fix:* The database might have two zip code columns (Member Zip Code vs. Facility Zip Code). You must clarify: "Admissions by Member Zip Code."

#### Practical Implementation & Real-World Examples
* **Scenario:** You are in a leadership meeting. The Director asks, "Are our telehealth services being utilized more than in-person services this month?"
* **Action:** Instead of saying "I'll get back to you," you open Lumenore, type "Telehealth vs In-person visits for this month," and project the pie chart on the screen 5 seconds later. You become the most valuable person in the room.

---

### Key Takeaways (Important Points to Remember)
1. **Plain English Queries:** Ask Me allows you to query the database as if you were talking to a data scientist.
2. **Be Specific:** The better your terminology (nouns and timeframes), the better your chart.
3. **Zero Risk:** You cannot break or delete the data. Be fearless in your querying.

### Next Session Preview
In the next session, we will cover Dashboards and Geographic Mapping. We will explore how to visualize the data we retrieve, building live, centralized command centers that highlight operational trends and geographic service gaps across the DWIHN network.
