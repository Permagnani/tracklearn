// src/components/study-list.tsx
import type { Study } from "../types/study";
import { StudyResume } from "./studies-resume";

interface StudyListProps {
  studyList: Study[];
  removeStudy: (id: string) => void;
}

export function StudyList({ studyList, removeStudy }: StudyListProps) {
  return (
    <>
      {studyList.map((value) => (
        <StudyResume key={value.id} study={value} removeStudy={removeStudy} />
      ))}
    </>
  );
}
