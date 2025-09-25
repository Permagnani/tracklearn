import type { Study } from "../types/study";

interface StudyCardProps {
  study: Study;
}

export function StudyCard({ study }: StudyCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-3/5">
      <h2 className="text-lg font-bold text-green-600">{study.title}</h2>
      <p className="text-gray-600">Matéria: {study.subject}</p>
      <p className="text-gray-600">Duração: {study.duration} min</p>
      <p className="text-gray-600">Dificuldade: {study.difficulty}/5</p>
      <p className="text-gray-600">Data: {study.date}</p>
    </div>
  );
}