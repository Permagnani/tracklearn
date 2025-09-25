import { StudyCard } from "../components/study-card";
import type { Study } from "../types/study";

const studies: Study[] = [
  { title: "Revisão de React", subject: "Frontend", duration: 60, difficulty: 3, date: "2025-09-25" },
  { title: "Banco de Dados", subject: "SQL", duration: 90, difficulty: 4, date: "2025-09-26" },
];

export default function StudiesPage() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {studies.map((s, i) => (
        <StudyCard key={i} study={s} />
      ))}
    </div>
  );
}