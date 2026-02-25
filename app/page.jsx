"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const ROLES = [
  { id: "frontend-developer", label: "Frontend Developer", icon: "🎨" },
  { id: "backend-developer", label: "Backend Developer", icon: "⚙️" },
  { id: "full-stack-developer", label: "Full Stack Developer", icon: "🚀" },
  { id: "data-scientist", label: "Data Scientist", icon: "📊" },
  { id: "machine-learning-engineer", label: "ML Engineer", icon: "🤖" },
  { id: "devops-engineer", label: "DevOps Engineer", icon: "☁️" },
  { id: "cybersecurity-analyst", label: "Cybersecurity Analyst", icon: "🔒" },
  { id: "product-manager", label: "Product Manager", icon: "📋" },
  { id: "system-design", label: "System Design", icon: "🏗️" },
];

const DIFFICULTIES = [
  { id: "easy", label: "Easy", description: "Entry-level questions" },
  { id: "medium", label: "Medium", description: "Mid-level questions" },
  { id: "hard", label: "Hard", description: "Senior-level questions" },
];

export default function HomePage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const handleStart = () => {
    if (!selectedRole || !selectedDifficulty) return;
    router.push(`/interview?role=${selectedRole}&difficulty=${selectedDifficulty}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-12">
      <div className="max-w-[900px] w-full">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-5xl font-bold tracking-tight">
            Interview <span className="text-brand">Assassin</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            AI-powered adaptive interview practice
          </p>
        </div>

        {/* Role Selection */}
        <div className="mb-10">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
            Select Role
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {ROLES.map((role) => (
              <Card
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-4 cursor-pointer transition-all hover:border-brand hover:shadow-lg ${
                  selectedRole === role.id
                    ? "border-brand bg-brand/5 shadow-lg"
                    : "border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{role.icon}</span>
                  <span className="text-sm font-medium">{role.label}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Difficulty Selection */}
        <div className="mb-10">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
            Select Difficulty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {DIFFICULTIES.map((diff) => (
              <Card
                key={diff.id}
                onClick={() => setSelectedDifficulty(diff.id)}
                className={`p-5 cursor-pointer transition-all hover:border-brand hover:shadow-lg ${
                  selectedDifficulty === diff.id
                    ? "border-brand bg-brand/5 shadow-lg"
                    : "border-border"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{diff.label}</span>
                    {selectedDifficulty === diff.id && (
                      <span className="text-brand">✓</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {diff.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleStart}
            disabled={!selectedRole || !selectedDifficulty}
            size="lg"
            className="bg-brand hover:bg-brand/90 text-white font-mono px-8 py-6 text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Interview →
          </Button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Answer 3 adaptive questions • Get detailed feedback • Improve your skills
          </p>
        </div>
      </div>
    </div>
  );
}
