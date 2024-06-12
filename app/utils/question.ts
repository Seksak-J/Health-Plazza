// utils/questions.ts
import { Question } from "../types";
import shuffle from "lodash.shuffle";

const questions: Question[] = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", isCorrect: true },
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", isCorrect: false },
      { text: "Jupiter", isCorrect: true },
      { text: "Mars", isCorrect: false },
      { text: "Saturn", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", isCorrect: false },
      { text: "Seoul", isCorrect: false },
      { text: "Tokyo", isCorrect: true },
      { text: "Bangkok", isCorrect: false },
    ],
  },
  {
    question: "What is the speed of light?",
    answers: [
      { text: "299,792 km/s", isCorrect: true },
      { text: "150,000 km/s", isCorrect: false },
      { text: "1,080,000 km/s", isCorrect: false },
      { text: "500,000 km/s", isCorrect: false },
    ],
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    answers: [
      { text: "Harper Lee", isCorrect: true },
      { text: "Mark Twain", isCorrect: false },
      { text: "F. Scott Fitzgerald", isCorrect: false },
      { text: "Ernest Hemingway", isCorrect: false },
    ],
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "1", isCorrect: false },
      { text: "2", isCorrect: true },
      { text: "3", isCorrect: false },
      { text: "5", isCorrect: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", isCorrect: false },
      { text: "Au", isCorrect: true },
      { text: "Pb", isCorrect: false },
      { text: "Fe", isCorrect: false },
    ],
  },
  {
    question: "What is the largest mammal?",
    answers: [
      { text: "Elephant", isCorrect: false },
      { text: "Blue Whale", isCorrect: true },
      { text: "Great White Shark", isCorrect: false },
      { text: "Giraffe", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", isCorrect: false },
      { text: "Melbourne", isCorrect: false },
      { text: "Canberra", isCorrect: true },
      { text: "Brisbane", isCorrect: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Claude Monet", isCorrect: false },
    ],
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "50°C", isCorrect: false },
      { text: "100°C", isCorrect: true },
      { text: "150°C", isCorrect: false },
      { text: "200°C", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Toronto", isCorrect: false },
      { text: "Vancouver", isCorrect: false },
      { text: "Ottawa", isCorrect: true },
      { text: "Montreal", isCorrect: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "K2", isCorrect: false },
      { text: "Kangchenjunga", isCorrect: false },
      { text: "Mount Everest", isCorrect: true },
      { text: "Lhotse", isCorrect: false },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", isCorrect: false },
      { text: "Albert Einstein", isCorrect: true },
      { text: "Galileo Galilei", isCorrect: false },
      { text: "Nikola Tesla", isCorrect: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", isCorrect: false },
      { text: "Indian Ocean", isCorrect: false },
      { text: "Arctic Ocean", isCorrect: false },
      { text: "Pacific Ocean", isCorrect: true },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yen", isCorrect: true },
      { text: "Won", isCorrect: false },
      { text: "Dollar", isCorrect: false },
      { text: "Euro", isCorrect: false },
    ],
  },
  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "Cheetah", isCorrect: true },
      { text: "Lion", isCorrect: false },
      { text: "Horse", isCorrect: false },
      { text: "Kangaroo", isCorrect: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", isCorrect: true },
      { text: "CO2", isCorrect: false },
      { text: "NaCl", isCorrect: false },
      { text: "O2", isCorrect: false },
    ],
  },
  {
    question: "Who was the first president of the United States?",
    answers: [
      { text: "Abraham Lincoln", isCorrect: false },
      { text: "George Washington", isCorrect: true },
      { text: "Thomas Jefferson", isCorrect: false },
      { text: "John Adams", isCorrect: false },
    ],
  },
];

export const getRandomQuestions = (): Question[] => {
  const shuffledQuestions = shuffle(questions).slice(0, 20);
  return shuffledQuestions.map((q) => ({
    ...q,
    answers: shuffle(q.answers),
  }));
};
