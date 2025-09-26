// src/pages/add-study.tsx
import { useMemo } from "react";
import { StudyForm } from "../components/studies-form";
import type { Study } from "../types/study";

interface AddStudyProps {
  studies: Study[];
  onAdd: (study: Study) => void;
}

export function AddStudy({ onAdd, studies }: AddStudyProps) {
  // Renderiza somente uma vez
  const studyTotal = useMemo(() => {
    return studies.length;
  }, [studies]);

  const studyMinutes = useMemo(() => {
    let totalMinutes = 0;

    studies.forEach((study) => {
      totalMinutes += study.duration;
    });

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes}`;
  }, [studies]);

  return (
    <>
      <h2 className="font-bold text-green-800 text-xl mb-3">
        Adicionar novo estudo
      </h2>

      <p className="text-lg font-bold text-gray-600">
        Total de estudos: {studyTotal}
      </p>

      <p>Tempo de estudo: {studyMinutes} horas</p>

      <StudyForm onAdd={onAdd} />
    </>
  );
}
