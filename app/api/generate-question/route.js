import { NextResponse } from "next/server";
import { getQuestionsForRole } from "@/lib/questions";

export async function POST(request) {
  try {
    const { role, difficulty, excludeIds = [] } = await request.json();
    if (!role || !difficulty) {
      return NextResponse.json({ error: "role and difficulty are required" }, { status: 400 });
    }
    
    // Get all questions for the role
    const allQuestions = getQuestionsForRole(role, 10);
    
    if (allQuestions.length === 0) {
      return NextResponse.json({ error: "No questions available for this role" }, { status: 404 });
    }
    
    // Filter out already asked questions
    const availableQuestions = allQuestions.filter(q => !excludeIds.includes(q.id));
    
    // If all questions have been asked, reset and use all questions
    const questionPool = availableQuestions.length > 0 ? availableQuestions : allQuestions;
    
    // Select a random question
    const randomIndex = Math.floor(Math.random() * questionPool.length);
    const selectedQuestion = questionPool[randomIndex];
    
    return NextResponse.json({ 
      question: selectedQuestion.text,
      questionId: selectedQuestion.id
    });
  } catch (err) {
    console.error("[generate-question]", err);
    return NextResponse.json({ error: "Failed to generate question." }, { status: 500 });
  }
}
