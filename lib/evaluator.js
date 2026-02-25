// Keyword-based Answer Evaluation Engine

// Calculate how many key concepts are mentioned in the answer
function calculateConceptCoverage(answer, keyConcepts) {
  const answerLower = answer.toLowerCase();
  const mentionedConcepts = keyConcepts.filter(concept => {
    // Check for concept as whole word or part of compound words
    const conceptLower = concept.toLowerCase();
    return answerLower.includes(conceptLower);
  });
  
  return {
    mentionedCount: mentionedConcepts.length,
    totalCount: keyConcepts.length,
    coverage: keyConcepts.length > 0 ? (mentionedConcepts.length / keyConcepts.length) : 0,
    mentionedConcepts
  };
}

// Calculate answer depth based on length and structure
function calculateDepth(answer) {
  const words = answer.trim().split(/\s+/).filter(Boolean);
  const sentences = answer.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  // Scoring based on word count and sentence structure
  let depthScore = 0;
  
  // Word count scoring (0-40 points)
  if (words.length >= 100) depthScore += 40;
  else if (words.length >= 70) depthScore += 30;
  else if (words.length >= 50) depthScore += 20;
  else if (words.length >= 30) depthScore += 10;
  
  // Sentence variety (0-20 points)
  if (sentences.length >= 4) depthScore += 20;
  else if (sentences.length >= 3) depthScore += 15;
  else if (sentences.length >= 2) depthScore += 10;
  else depthScore += 5;
  
  // Use of examples or specific terms (0-20 points)
  const hasExamples = /\b(for example|such as|like|e\.g\.|i\.e\.|including)\b/i.test(answer);
  const hasComparisons = /\b(versus|compared to|difference|while|whereas|however)\b/i.test(answer);
  const hasLists = /\b(first|second|third|finally|also|additionally)\b/i.test(answer);
  
  if (hasExamples) depthScore += 7;
  if (hasComparisons) depthScore += 7;
  if (hasLists) depthScore += 6;
  
  return Math.min(depthScore, 80); // Max 80 points
}

// Detect technical terms and jargon (indicates knowledge level)
function detectTechnicalTerms(answer) {
  const technicalPatterns = [
    /\b[A-Z]{2,}\b/g, // Acronyms (API, HTTP, CSS, etc.)
    /\b\w+\(\)/g, // Function calls
    /\b\w+\.\w+/g, // Method calls or namespaces
    /\b(async|await|const|let|var|function|class|interface|type)\b/gi,
    /\b(database|server|client|frontend|backend|algorithm|framework|library)\b/gi,
  ];
  
  let technicalCount = 0;
  technicalPatterns.forEach(pattern => {
    const matches = answer.match(pattern);
    if (matches) technicalCount += matches.length;
  });
  
  return Math.min(technicalCount, 20); // Max 20 points
}

// Get verdict based on score
function getVerdict(score) {
  if (score >= 9) return "Excellent";
  if (score >= 7) return "Good";
  if (score >= 5) return "Average";
  if (score >= 3) return "Needs Work";
  return "Poor";
}

// Generate strengths based on analysis
function generateStrengths(conceptCoverage, depthScore, technicalTerms, answerLength) {
  const strengths = [];
  
  if (conceptCoverage.coverage >= 0.6) {
    strengths.push(`Demonstrates good understanding of key concepts including ${conceptCoverage.mentionedConcepts.slice(0, 3).join(', ')}`);
  }
  
  if (depthScore >= 50) {
    strengths.push("Provides detailed explanation with good structure and examples");
  } else if (depthScore >= 30) {
    strengths.push("Clear and organized response with relevant details");
  }
  
  if (technicalTerms >= 10) {
    strengths.push("Uses appropriate technical terminology and demonstrates technical knowledge");
  }
  
  if (answerLength >= 80) {
    strengths.push("Comprehensive answer covering multiple aspects of the question");
  }
  
  // If we don't have enough strengths, add generic ones based on what we have
  if (strengths.length < 2) {
    if (conceptCoverage.mentionedCount > 0) {
      strengths.push("Shows awareness of relevant concepts in the domain");
    }
    if (answerLength >= 30) {
      strengths.push("Provides a reasonable attempt at explaining the topic");
    }
  }
  
  return strengths.slice(0, 2); // Return top 2 strengths
}

// Generate improvements based on gaps
function generateImprovements(conceptCoverage, depthScore, technicalTerms, difficulty) {
  const improvements = [];
  const missingConcepts = conceptCoverage.totalCount - conceptCoverage.mentionedCount;
  
  if (missingConcepts > 0) {
    const unmantioned = conceptCoverage.keyConcepts
      .filter(c => !conceptCoverage.mentionedConcepts.includes(c))
      .slice(0, 3);
    improvements.push(`Address additional key concepts: ${unmantioned.join(', ')}`);
  }
  
  if (depthScore < 40) {
    improvements.push("Provide more detailed explanations with specific examples or use cases");
  }
  
  if (technicalTerms < 5) {
    improvements.push("Incorporate more technical terminology relevant to the topic");
  }
  
  if (difficulty === "medium" || difficulty === "hard") {
    improvements.push("For this level, discuss trade-offs, edge cases, or advanced considerations");
  }
  
  const hasStructure = /\b(first|second|finally|additionally|however|therefore)\b/i.test(conceptCoverage.answer || "");
  if (!hasStructure && depthScore < 50) {
    improvements.push("Improve answer structure with clear organization and logical flow");
  }
  
  if (improvements.length < 3) {
    improvements.push("Consider discussing real-world applications or practical implications");
  }
  
  return improvements.slice(0, 3); // Return top 3 improvements
}

// Main evaluation function
export function evaluateAnswer(question, answer, difficulty = "medium") {
  // Basic validation
  if (!answer || answer.trim().length < 10) {
    return {
      score: 1,
      verdict: "Poor",
      technical_accuracy: "Answer is too short to evaluate meaningfully. Please provide a more comprehensive response.",
      clarity: "Insufficient content to assess clarity.",
      depth: "Answer lacks necessary depth and detail.",
      strengths: ["Attempted to answer the question"],
      improvements: [
        "Provide a complete answer with sufficient detail",
        "Explain key concepts thoroughly",
        "Include examples or specific details"
      ],
      ideal_answer: question.idealAnswer
    };
  }
  
  const answerLength = answer.trim().split(/\s+/).filter(Boolean).length;
  
  // Calculate component scores
  const conceptCoverage = calculateConceptCoverage(answer, question.keyConcepts);
  const depthScore = calculateDepth(answer);
  const technicalTerms = detectTechnicalTerms(answer);
  
  // Weighted scoring algorithm
  // Key concepts: 40%, Depth: 40%, Technical terms: 20%
  let rawScore = (
    (conceptCoverage.coverage * 40) +
    (depthScore / 80 * 40) +
    (technicalTerms / 20 * 20)
  );
  
  // Apply difficulty-based threshold adjustments
  let finalScore;
  if (difficulty === "easy") {
    // More lenient for easy questions
    finalScore = Math.min(10, Math.ceil(rawScore / 8.5));
  } else if (difficulty === "hard") {
    // More strict for hard questions
    finalScore = Math.max(1, Math.ceil(rawScore / 11));
  } else {
    // Medium difficulty (default)
    finalScore = Math.ceil(rawScore / 10);
  }
  
  // Ensure score is between 1-10
  finalScore = Math.max(1, Math.min(10, finalScore));
  
  const verdict = getVerdict(finalScore);
  const strengths = generateStrengths(conceptCoverage, depthScore, technicalTerms, answerLength);
  const improvements = generateImprovements(
    { ...conceptCoverage, keyConcepts: question.keyConcepts, answer }, 
    depthScore, 
    technicalTerms, 
    difficulty
  );
  
  // Generate detailed feedback
  const technicalAccuracy = conceptCoverage.coverage >= 0.7
    ? `The answer demonstrates strong technical understanding, covering ${conceptCoverage.mentionedCount} out of ${conceptCoverage.totalCount} key concepts. ${conceptCoverage.coverage >= 0.8 ? 'The explanations are technically sound and accurate.' : 'Some concepts could be explained more thoroughly.'}`
    : conceptCoverage.coverage >= 0.4
    ? `The answer shows partial understanding of the topic. ${conceptCoverage.mentionedCount} of ${conceptCoverage.totalCount} key concepts are addressed. Consider expanding on the missing concepts for a more complete answer.`
    : `The answer misses several important concepts. Only ${conceptCoverage.mentionedCount} of ${conceptCoverage.totalCount} key concepts are mentioned. Focus on addressing the core technical aspects of the question.`;
  
  const clarity = answerLength >= 70
    ? depthScore >= 50
      ? "The answer is well-structured and clearly communicated. Good use of examples and logical organization makes it easy to follow."
      : "The answer provides good detail but could benefit from better organization and structure to improve readability."
    : answerLength >= 30
    ? "The answer is clear but relatively concise. Adding more context and examples would enhance clarity and demonstrate deeper understanding."
    : "The answer is brief and could be expanded with more detail, structure, and examples to improve clarity.";
  
  const depth = depthScore >= 60
    ? `Excellent depth of coverage. The answer explores multiple aspects of the topic ${technicalTerms >= 10 ? 'with appropriate technical detail' : 'with good explanation'}.`
    : depthScore >= 40
    ? `Good level of detail provided. ${answerLength >= 50 ? 'The answer covers the main points adequately.' : 'Consider expanding on key points with more examples or deeper analysis.'}`
    : depthScore >= 20
    ? "The answer provides basic information but lacks depth. Consider explaining the 'why' and 'how' in addition to the 'what', and include practical examples."
    : "The answer needs more depth and comprehensive coverage of the topic. Expand with detailed explanations, examples, and context.";
  
  return {
    score: finalScore,
    verdict,
    technical_accuracy: technicalAccuracy,
    clarity,
    depth,
    strengths,
    improvements,
    ideal_answer: question.idealAnswer
  };
}

// Utility function for testing
export function evaluateAnswerWithDetails(question, answer, difficulty) {
  const conceptCoverage = calculateConceptCoverage(answer, question.keyConcepts);
  const depthScore = calculateDepth(answer);
  const technicalTerms = detectTechnicalTerms(answer);
  
  return {
    evaluation: evaluateAnswer(question, answer, difficulty),
    debug: {
      conceptCoverage: conceptCoverage.coverage,
      mentionedConcepts: conceptCoverage.mentionedConcepts,
      depthScore,
      technicalTerms,
      wordCount: answer.trim().split(/\s+/).filter(Boolean).length
    }
  };
}
