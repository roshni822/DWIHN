# Week 8 → Session 11 → Module 9: Governance & Incident Handling

### Previous Class Recap
In the previous session on Predictive Insights, we moved from analyzing past data to forecasting future trends. We learned how AI can predict potential service bottlenecks, allowing departments to proactively assign resources and mitigate issues before they occur.

### Topic 1: The AI Governance Committee — Who Does What

#### Detailed Definition and Introduction
The **AI Governance Committee** is a cross-functional group at DWIHN (composed of IT, Compliance, Legal, and Clinical leadership). They are the architects of the rules we have been learning.

#### Why the Concept is Needed
AI technology evolves daily. Standard IT policies written five years ago cannot keep up with Generative AI. The Committee exists to constantly evaluate new AI tools, negotiate BAAs (Business Associate Agreements) with vendors, and protect the organization from emerging legal threats.

#### How it Works Internally
If you find a new AI tool online that you think would help your team, you cannot just download it. You submit a request to the Governance Committee. They audit the tool for HIPAA compliance, data retention policies, and bias. If it passes, they add it to the Approved Tool Catalog.

#### Best Practices
Do not try to bypass the Committee (this is called "Shadow IT"). Using unvetted software on DWIHN networks is a direct violation of security policy.

---

### Topic 2: Recognising an AI Incident — And Responding Within 24 Hours

#### Detailed Explanation of the Concept
An **AI Incident** is any event where AI is used in a way that violates policy, leaks data, or causes harm. You cannot report an incident if you don't recognize it.

#### Different Types/Categories of Incidents
1. **Data Leakage (The most common):** Pasting Confidential (Tier 3) or Restricted (Tier 4) data into an unapproved, public AI tool (like the free web version of ChatGPT).
2. **Clinical Overreach:** Using AI to generate a clinical diagnosis or treatment plan, and treating it as medical fact without human licensed oversight.
3. **Harmful Hallucination:** Sending an AI-generated email to a partner or member that contains invented, false, or offensive information because the sender skipped the "Human-in-the-Loop" review.

#### Real-World and Industry Examples
* **Industry Example:** In 2023, lawyers at a major firm used ChatGPT to write a legal brief. ChatGPT hallucinated fake case law. The lawyers didn't read it carefully (skipped Human-in-the-Loop) and submitted it to a federal judge. They were fined and publicly disgraced. This is a classic "Harmful Hallucination" incident.

#### Common Mistakes and Misconceptions
* **Misconception:** "I just put the member's first name in, so it's not a breach."
* **Correction:** First names combined with other context (like the clinic name or date) can constitute a HIPAA breach. Report it immediately and let Compliance make the determination.

---

### Topic 3: The 5-Step Incident Response Process

#### Step-by-Step Working/Process
When you recognize an incident, you must follow these 5 steps immediately.

1. **STOP:** Cease using the tool immediately. Do not close the window. Do not try to argue with the AI to "delete" the prompt. Once you hit enter, the data is sent.
2. **DOCUMENT:** Take a screenshot of the entire screen. Capture exactly what you typed (the prompt) and exactly what the AI responded. 
3. **REPORT:** Notify your direct supervisor and the IT Helpdesk within 60 minutes. Time is critical. State clearly: "I believe I have caused an AI data incident."
4. **CONTAIN:** IT and Compliance take over. They will block the application on the network if necessary, or contact the vendor to request data deletion logs.
5. **REVIEW:** The Governance Committee reviews the incident. The goal is to figure out *why* it happened (e.g., was the training unclear?) to prevent it from happening again.

#### Practical Implementation
Do not try to investigate the incident yourself. Your only job is Stop, Document, and Report.

---

### Topic 4: Manager Responsibilities (Supporting Your Team)

#### Detailed Definition and Introduction
For managers, your reaction to an incident report dictates the safety of the entire organization. You must foster a "Just Culture" or "Blame-Free" reporting environment.

#### Why the Concept is Needed & What Problem it Solves
**The Problem:** If a staff member accidentally pastes PHI into a public AI and realizes their mistake, they will be terrified. If they believe they will be immediately fired, they will close the laptop and hide the mistake. A hidden data breach is a catastrophic legal disaster for DWIHN.
**The Solution:** If staff know they will be supported for self-reporting honest mistakes, they will report it immediately, allowing IT to mitigate the damage.

#### Best Practices for Managers
* **React with Calm:** When a staff member reports an incident, your first words must be: *"Thank you for telling me immediately. You did the right thing by reporting this. Let's look at the 5-step process together."*
* **Audit Your Team:** Managers should randomly spot-check AI-generated communications for tone and accuracy to ensure the team is adhering to the 80/20 editing rule.

### Scenario-Based Questions
* **Question:** "You get a phishing email that looks like an AI tool asking for your login. Is this an AI Incident?"
  * **Answer:** No, that is a standard Cybersecurity Incident. You should follow your normal IT phishing reporting protocols. 

### Key Takeaways (Important Points to Remember)
1. **Recognize the Risk:** Data leakage and hallucinations are the primary threats.
2. **Speed is Everything:** You have 60 minutes to report an incident to give IT the best chance to contain it.
3. **Blame-Free Culture:** Managers must support staff who self-report to prevent devastating cover-ups.

### Next Session Preview
In the next session, we will conduct the Knowledge Assessment and Certification. We will review all of the core concepts covered over the past 8 weeks through a structured evaluation, verifying your readiness to operate safely within the DWIHN Enterprise AI ecosystem.
