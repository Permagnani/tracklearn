import { Link } from "react-router-dom";
import type { Study } from "../types/study";

interface StudyResumeProps {
  study: Study;
  removeStudy: (id: string) => void;
}

export function StudyResume({ study, removeStudy }: StudyResumeProps) {
  return (
    <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 mb-3 bg-white">
      <div className="flex justify-between">
        <h2 className="font-bold text-gray-600">{study.title}</h2>

        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            to={`/study/${study.id}`}
            state={{ study }}
            className="text-blue-600 font-bold hover:underline rounded border border-blue-600 p-2"
          >
            detalhes
          </Link>

          <button
            onClick={() => removeStudy(study.id)}
            className="bg-red-600 border text-white rounded p-2"
          >
            Remover estudo
          </button>
        </div>
      </div>

      <h3>Data: {study.date}</h3>
    </div>
  );
}