import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure your .env.local has this
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "No input provided." });
  }

  // Construct a prompt that matches your full lesson plan template
  const prompt = `
You are a helpful AI that writes full, ready-to-copy lesson plans for teachers.

Here is the lesson information:
Teacher: ${input.teacher}
Date: ${input.date}
Teaching Group: ${input.group}
Lesson Topic: ${input.topic}
Lesson Objectives: ${input.objectives}
Lesson Description / Steps: ${input.description}
Mentor Focus: ${input.mentorFocus}

Please generate a lesson plan following this template:

Teacher:  
Date (dd/mm/yyyy):  

Teaching group:  
Lesson Topic/Title:  
Lesson objective(s):  

REVIEW
What previous learning do I need to revisit in today’s lesson?

KEY LESSON QUESTIONS
1. Where are the learners starting from? 
2. Where do I want them to get to by the end of the lesson?
3. What is the core knowledge that I will assess in the lesson? How will I know if the learners have grasped the core knowledge?
Core knowledge:  
Checkpoint actions:  
4. What are the likely misconceptions? How will I find out?
Likely misconception(s):  
How to check:  
5. Tier 2 and tier 3 vocabulary/key words. How will these be taught?

FOCUS: Action step(s) from mentor meeting.

Part II - Lesson Sequence
Lesson time (be specific):  
Teacher actions:  
Learner actions:  
Entrance / retrieval practice:  
Introduction or Hook:  
Lesson input (teaching & modelling / assessment):  
Checkpoints:  
Plenary:

Part III - Lesson Evaluation
Final comments:  
My action steps were achieved by:  
If I were teaching this lesson again I would:  
In my next lesson I will:
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const plan = completion.choices[0].message.content;
    res.status(200).json({ plan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate lesson plan." });
  }
}