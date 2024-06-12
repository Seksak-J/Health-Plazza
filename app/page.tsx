"use client";
// pages/index.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Question, LeaderboardEntry } from "./types";
import { getRandomQuestions } from "./utils/question";
import QuestionComponent from "./components/Question";

const Home = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setQuestions(getRandomQuestions());
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
  };

  const handleSubmit = () => {
    const leaderboard: LeaderboardEntry[] = JSON.parse(
      localStorage.getItem("leaderboard") || "[]"
    );
    leaderboard.push({ name: `คะแนน รอบที่ ${leaderboard.length + 1}`, score });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    router.push("/leaderboard");
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>โจทย์ 20 ข้อ</h1>
      {questions.map((question, index) => (
        <QuestionComponent
          key={index}
          question={question}
          index={index}
          onAnswer={handleAnswer}
        />
      ))}
      <button
        className="border bg-black text-white p-4px w-[100px] h-[40px]"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
