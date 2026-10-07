# Week 6 → Session 8 → Module 7: Genesys AI — Call Center Excellence

### Previous Class Recap
In the previous session on Alerts & Reports, we learned how to automate data monitoring. We covered setting up Smart Alerts for critical metrics and scheduling automated reports to ensure stakeholders receive timely, data-driven insights without manual effort.

### Topic 1: Agent AI — Insights and Suggestions

#### Detailed Definition and Introduction
Genesys Agent AI (often called Agent Assist) is a real-time listening tool. As you speak with a member on the phone, the AI converts the audio to text in the background. It listens for specific keywords (e.g., "Housing assistance," "Medicaid renewal") and automatically surfaces the relevant DWIHN policy or knowledge base article directly onto your screen.

#### Why the Concept is Needed & What Problem it Solves
**The Problem:** Call center agents must memorize thousands of policies. When a member asks a complex question, the agent typically says, "Please hold while I look that up," resulting in long wait times and frustration.
**The Solution:** The AI acts as a silent co-pilot, instantly retrieving the exact document the agent needs before they even ask for it, driving hold times down to zero.

#### Step-by-Step Working/Process
1. A member calls the hotline.
2. The agent answers, and the Genesys AI begins transcription.
3. The caller says, "I need to know the requirements for the emergency housing voucher."
4. The AI detects the keyword cluster "emergency housing voucher requirements."
5. A small pop-up appears on the right side of the agent's screen containing a link to the exact internal DWIHN document detailing those requirements.

### Topic 2: Auto Call Summary — Stop Manual Note-Taking Forever

#### Detailed Explanation of the Concept
Historically, when a call ends, the agent enters "After-Call Work" (ACW) status. They spend 2 to 4 minutes typing up a summary of what happened during the call to log it in the CRM (Customer Relationship Management) system. Auto Call Summary uses Generative AI to write those notes instantly.

#### How it Works Internally
The AI takes the full transcript of the call, applies a summarizing algorithm (similar to the prompts we wrote in Session 3), extracts the reason for the call, the outcome, and any follow-up actions, and formats it perfectly.

#### Comparison with Related Concepts
* *Manual ACW:* Takes 180 seconds. Subject to typos, fatigue, and inconsistent formatting (one agent writes a paragraph, another writes one sentence).
* *Auto Summary:* Takes 3 seconds. Perfectly formatted, standardizes notes across the entire organization.

#### Advantages and Limitations
* **Advantage:** If an agent takes 30 calls a day and saves 2 minutes per call, they get an entire hour of their day back. This reduces agent burnout and allows them to take more calls from vulnerable members waiting in the queue.
* **Limitation/Best Practice:** The AI might miss a subtle nuance (e.g., a quiet sigh from the caller). The agent must apply the "Human-in-the-Loop" rule: read the summary, edit it if necessary, and *then* click save.

---

### Topic 3: Sentiment Alerts — Catch Escalating Calls Early

#### Detailed Definition and Introduction
Sentiment Analysis uses AI to evaluate the emotional tone of a conversation. It doesn't just read the words; it analyzes the volume, pitch, speed of speech, and interruptions (people talking over each other). 

#### Why the Concept is Needed
Call center work in behavioral health is incredibly taxing. Members calling in are often in distress, angry, or scared. Sometimes, an agent gets overwhelmed.

#### What Problem it Solves
**The Problem:** A supervisor only knows a call went badly if the caller complains later, or if they happen to be randomly listening to that exact call.
**The Solution:** The AI monitors every call simultaneously. If a caller's sentiment drops from "Neutral" to "Highly Negative" (indicated by raised voices or specific swear words), the AI triggers a silent alert on the Supervisor's dashboard. The supervisor can then "whisper" to the agent (speak to the agent without the caller hearing) to help de-escalate, or take over the call entirely.

#### Security/Performance Considerations
* *Privacy:* Does the AI record everything? Yes, but just like standard call recording, it is HIPAA compliant, encrypted, and stored within the secure Genesys environment. 

---

### Topic 4: Predictive Routing — Serving Members Better

#### Detailed Explanation of the Concept
Standard call routing is rule-based (e.g., "Press 1 for Spanish, Press 2 for Billing"). Predictive routing uses AI to match the caller with the specific agent most likely to resolve their issue. 

#### How it Works Internally
The AI looks at the caller's phone number, checks the CRM history (e.g., this caller usually calls about Medicaid renewals), and looks at the available agents. It knows that Agent Sarah resolves Medicaid issues 20% faster than Agent John. The AI routes the call to Sarah.

#### Real-World and Industry Examples
* **Scenario:** A caller who frequently hangs up if put on hold calls in. The AI recognizes this high-risk caller and routes them to the agent with the highest "First Call Resolution" score, ensuring the member gets help immediately.

---

### Scenario-Based Questions
* **Question:** "A caller is screaming, and the Sentiment Analysis alerts your supervisor. You handle it perfectly and de-escalate. Does the 'Negative Sentiment' flag hurt your performance review?"
  * **Answer:** No! In fact, it highlights your skill. Your supervisor will see a call that started 'Negative' and ended 'Positive,' which is proof of excellent de-escalation skills. 

### Key Takeaways (Important Points to Remember)
1. **Zero Hold Time:** Use Agent Assist to find answers while the caller is speaking.
2. **End Manual Notes:** Let Auto Summary write the draft; you just edit and save.
3. **Empathy over Admin:** The AI handles the administrative burden so you can focus on the human on the other end of the line.

### Next Session Preview
In the next session, we will cover the Single Source of Truth (SSOT). We will learn why unified data governance is essential for a large network like DWIHN, ensuring that all departments rely on the same synchronized data to make strategic, network-wide decisions.
