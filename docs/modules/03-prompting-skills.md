# Week 3 → Session 3 → Module 4: Prompting Skills for DWIHN Roles

### Previous Class Recap
In the previous session on HIPAA Safety, we differentiated between Consumer AI and secure Enterprise AI, and explored the DWIHN Approved Tool Catalog. We learned the Four Data Classification Tiers (Public, Internal, Confidential, Restricted) using the 'Wallet Analogy', establishing that Protected Health Information (PHI) can never enter unapproved public AI tools.

### Topic 1: How to Write Prompts that Get Useful, Safe, and Accurate Results

#### Detailed Definition and Introduction
"Prompt Engineering" sounds like a highly technical term, but it is simply the skill of writing clear instructions. A prompt is the text you type into the AI to ask it to do a task. The output of the AI is 100% dependent on the quality of your prompt. 

#### Fundamentals and Prerequisite Concepts
Remember our "enthusiastic intern" analogy from Session 1. If you tell an intern, "Write an email about the meeting," they will ask: Who is it for? What is the tone? How long should it be? What meeting? 
The AI won't ask you these questions; it will just guess. If it guesses wrong, you waste time.

#### What Problem it Solves
Most users abandon AI because they type "Write an email about the meeting," get a terrible, robotic-sounding output, and say, "AI doesn't work." The problem isn't the AI; it's the prompt.

---

### Topic 2: The 5-Part Prompt Anatomy (Role, Task, Context, Format, Constraint)

#### Detailed Explanation of the Concept
To stop the AI from guessing, you must provide the 5 pillars of a perfect prompt.

1. **Role (Who is the AI?):** 
   * *Explanation:* You must assign a persona. This tells the neural network which specific vocabulary and tone to prioritize.
   * *Example:* "Act as an expert Care Coordinator at a behavioral health clinic."
2. **Task (What exactly do you want?):**
   * *Explanation:* The specific action verb. 
   * *Example:* "Draft an outreach letter to a member's family."
3. **Context (Why are we doing this?):**
   * *Explanation:* The background information. Without this, the AI hallucinates details.
   * *Example:* "The family missed their last two appointments, and we need to gently remind them that three missed appointments results in a program pause."
4. **Format (How should it look?):**
   * *Explanation:* The structure of the output. 
   * *Example:* "Format this as a 3-paragraph email."
5. **Constraint (What are the boundaries?):**
   * *Explanation:* The "Do Nots" and the tone.
   * *Example:* "Keep the tone empathetic but professional. Do not use medical jargon. Do not exceed 200 words."

#### Step-by-Step Working/Process
When you combine these 5 parts, you create a "Mega-Prompt."
* *The Mega-Prompt:* "Act as an expert Care Coordinator. Draft an outreach email to a member's family. The family missed their last two appointments, and we need to gently remind them that three missed appointments results in a program pause. Format this as a 3-paragraph email. Keep the tone empathetic but professional. Do not use medical jargon. Do not exceed 200 words."

#### Comparison with Related Concepts
* **Zero-Shot Prompting:** Just giving the task ("Write an email"). High risk of bad output.
* **Few-Shot Prompting:** Giving the AI examples of what you want first. (We will cover this in advanced sessions, but the 5-Part Anatomy is your daily driver).

---

### Topic 3: Before-and-After Prompt Examples for Each DWIHN Role

#### Practical Implementation & Real-World Examples

**Example 1: The Administrator**
* *Before (The Bad Prompt):* "Summarize these meeting notes."
* *The Problem:* The AI will write a 3-page essay summarizing every word spoken.
* *After (The Good Prompt):* "Act as an executive assistant (Role). Summarize the attached transcript of the Q3 Budget Meeting (Task). The team debated software costs and hiring (Context). Provide the output as a bulleted list of only the final decisions made and who is assigned to them (Format). Do not include the back-and-forth arguments (Constraint)."

**Example 2: The Program Manager**
* *Before (The Bad Prompt):* "Give me ideas for a staff training."
* *The Problem:* The AI might suggest teaching staff how to juggle or use software DWIHN doesn't own.
* *After (The Good Prompt):* "Act as a clinical program manager (Role). Generate an outline for a 1-hour staff training on de-escalation techniques (Task). Our staff works primarily in high-stress, in-patient environments (Context). Provide a table with time-blocks (Format). Ensure all suggestions require no physical equipment (Constraint)."

### Topic 4: Common Mistakes That Produce Bad AI Output — and Fixes

#### Common Mistakes and Misconceptions
1. **The Polite Typer:** Saying "Please" and "Thank you." (It doesn't hurt, but it wastes your time. The AI doesn't have feelings).
2. **The Run-On Sentence:** Writing a 500-word paragraph with no punctuation. The AI gets confused about the priority of tasks.
3. **Implicit Assumptions:** Assuming the AI knows what "the new policy" means without providing the text of the policy.

#### Troubleshooting Scenarios
* **Scenario:** The AI gives you a response that is way too long and uses words like "Furthermore" and "In conclusion," sounding very robotic.
* **The Fix:** Do not start over! Use **Iterative Prompting**. Simply reply to the AI: *"Make that 50% shorter, remove the corporate jargon, and write it at an 8th-grade reading level."* The AI will instantly rewrite it.

#### Best Practices
Keep a Word document or a sticky note on your desktop with your 3 most frequently used 5-part prompts. You can copy and paste them daily, just changing the context slightly.

---

### Verification & Common Errors
* **Common Error:** Users forget to tell the AI *not* to promise a payment date in Prompt 2. The AI, wanting to be helpful, might hallucinate: "We will pay you tomorrow."
* **Troubleshooting:** This is a perfect teachable moment. It reinforces the need for strict Constraints and the mandatory "Human in the Loop" review before hitting send.

---

### Key Takeaways (Important Points to Remember)
1. **Garbage In, Garbage Out:** The AI is a reflection of your instructions. 
2. **Iterate:** Have a conversation. If the first draft is bad, tell it *why* it is bad and ask for a revision.
3. **Use Constraints:** Always define the tone and the boundaries (e.g., "Do not use jargon").

### Next Session Preview
In the next session, we will explore Daily Workflows. We will move beyond theory to look at highly specific, practical use cases for AI at DWIHN, such as drafting complex communications, summarizing lengthy state compliance documents, and organizing action items from meetings.
