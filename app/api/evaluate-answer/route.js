import { NextResponse } from "next/server";
import { evaluateAnswer } from "@/lib/evaluator";
import { getQuestionById } from "@/lib/questions";

export async function POST(request) {
  try {
    const { questionId, answer, difficulty = "medium" } = await request.json();
    if (!questionId || !answer) {
      return NextResponse.json({ error: "questionId and answer are required" }, { status: 400 });
    }
    if (answer.trim().length < 10) {
      return NextResponse.json({ error: "Answer is too short to evaluate." }, { status: 400 });
    }
    
    // Get the question object from the database
    const question = getQuestionById(questionId);
    if (!question) {
      return NextResponse.json({ error: "Question not found" }, { status: 404 });
    }
    
    // Evaluate the answer using keyword-based evaluation
    const evaluation = evaluateAnswer(question, answer, difficulty);
    
    return NextResponse.json({ evaluation });
  } catch (err) {
    console.error("[evaluate-answer]", err);
    return NextResponse.json({ error: "Failed to evaluate answer." }, { status: 500 });
  }
}
