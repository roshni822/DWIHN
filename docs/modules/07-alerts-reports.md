# Week 5 → Session 7 → Module 6 (Part 3): Lumenore Smart Alerts & Board Reports

### Previous Class Recap
In the previous session on Dashboards & Mapping, we explored how to build centralized command centers in Lumenore. We focused on visualizing data through dynamic dashboards and using geographic mapping tools to identify service gaps and operational trends.

### Topic 1: Setting Smart Alerts

#### Detailed Definition and Introduction
A **Smart Alert** is an automated background process where the AI continuously monitors a specific metric on your dashboard. You establish a "Threshold" (a mathematical boundary), and if the data crosses that boundary, the system pushes a notification to you.

#### Fundamentals and Prerequisite Concepts
To set an alert, you must first understand your baseline data. If you set an alert to notify you when crisis calls exceed 100, but your daily average is 150, your inbox will be flooded. You must know what constitutes a true "anomaly."

#### Why the Concept is Needed & What Problem it Solves
**The Problem:** "Alert Fatigue" and reactive management. Leaders often find out about a crisis at the end of the month when running a retrospective report.
**The Solution:** Proactive management. The AI acts as a 24/7 sentry, allowing leaders to intervene in a crisis on Day 1 rather than Day 30.

#### Step-by-Step Working/Process
1. **Select the Metric:** Go to your dashboard and identify the widget you want to monitor (e.g., "Waitlist Count").
2. **Access Alerts:** Click the Bell icon in the top right corner of the widget.
3. **Set the Condition:** Choose your logic operator (Greater Than, Less Than, Equal To, or % Change).
4. **Set the Value:** Enter the threshold number (e.g., Greater Than 50).
5. **Set the Frequency:** Tell the AI how often to check (e.g., Hourly, Daily at 8 AM).
6. **Set the Destination:** Choose who receives the alert (Your email, a colleague's email, or a Microsoft Teams channel).

#### Common Mistakes and Misconceptions
* **Mistake:** Setting an alert for *every* metric. If you get 20 alerts a day, you will start ignoring them (Alert Fatigue).
* **Best Practice:** The "Red Alert Rule." Only set an alert for a metric if crossing that threshold requires you to take immediate, physical action (like calling a clinic or reallocating budget). If no immediate action is required, don't set an alert.

---

### Topic 2: Exporting Board Reports

#### Detailed Explanation of the Concept
While dashboards are live and interactive, executive leadership and the Board of Directors often require static documents (PDFs or PowerPoints) for legal archiving, pre-reading, or formal presentations. Lumenore allows you to freeze a live dashboard in time and export it beautifully.

#### How it Works Internally
The system takes a high-resolution snapshot of the current data visualizations, applies a DWIHN-branded template (logos, colors, headers), and compiles it into a downloadable file.

#### Why the Concept is Needed (Industry Use Case)
**Industry Use Case:** Preparing for the monthly DWIHN Board of Directors meeting. 
* *The Old Way:* An admin spends 3 days downloading Excel sheets, making pie charts manually, copying them into PowerPoint, and adjusting the formatting.
* *The New Way:* The Admin clicks "Export to PDF" on the Executive Dashboard. The 3-day process is reduced to 3 seconds.

#### Step-by-Step Working/Process
1. **Navigate:** Open the dashboard you wish to present.
2. **Filter (Crucial Step):** Ensure your date filters are correct (e.g., set the global filter to "Last Month" so you aren't exporting today's partial data).
3. **Export:** Click the "Export" or "Download" icon.
4. **Format Selection:** Choose PDF (for emailing/archiving) or PPT (if you need to add extra slides manually).
5. **Generate Narrative:** (Optional but recommended). Check the box for "Include AI Summary." The AI will read the charts and generate a one-page text summary of the highs and lows.

#### Advantages and Considerations
* **Advantage:** Guarantees that the data presented to the board matches the Single Source of Truth exactly. No human copy-paste errors.
* **Consideration:** A PDF is static. If a Board member asks, "What makes up this 20% slice of the pie chart?", you cannot click the PDF to drill down. Therefore, always have the live dashboard open on a laptop during the meeting as a backup.

---

### Scenario-Based Questions
* **Question:** "You set an alert for when wait times exceed 30 days. You get 5 alerts in one hour. What did you do wrong?"
  * **Answer:** You likely set the frequency to "Real-time" or "Hourly" instead of "Daily." For a slow-moving metric like a 30-day waitlist, checking once a day at 8 AM is sufficient.

### Key Takeaways (Important Points to Remember)
1. **Let AI do the Watching:** Use Smart Alerts to monitor critical boundaries so you don't have to stare at a screen all day.
2. **The Red Alert Rule:** Only alert on metrics that require immediate human action.
3. **Instant Reporting:** Exporting to PDF/PPT eliminates manual report compilation, saving days of administrative work every month.

### Next Session Preview
In the next session, we will explore Genesys AI. We will focus specifically on how AI integrates into the call center environment, using live transcription and 'Agent Assist' features to empower staff to resolve caller issues faster and with greater accuracy.
