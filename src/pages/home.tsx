import { StudyList } from "../components/studies-list";
import type { Study } from "../types/study";

interface HomeProps {
  studies: Study[];
  removeStudy: (id: string) => void;
}

export function Home({ studies, removeStudy }: HomeProps) {
  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">
        Página Inicial - Lista de Estudos
      </h2>

      <StudyList removeStudy={removeStudy} studyList={studies} />
    </>
  );
}