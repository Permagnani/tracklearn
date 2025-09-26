// src/components/StudyForm.tsx
import { useState } from "react";
import type { Study } from "../types/study";

interface StudyFormProps {
  onAdd: (study: Study) => void;
}

export function StudyForm({ onAdd }: StudyFormProps) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState(0);
  const [minutes] = useState(0);
  const [difficulty, setDifficulty] = useState<number>(1);
  const [date, setDate] = useState("");

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const study: Study = {
        id: crypto.randomUUID(),
        title,
        subject,
        duration,
        minutes,
        difficulty,
        date,
        notes: undefined
    };

    onAdd(study);

    setTitle("");
    setSubject("");
    setDuration(0);
    setDifficulty(1);
    setDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 mb-5 w-4/5"
    >
      <label htmlFor="study-title">Título do estudo</label>
      <input
        type="text"
        id="study-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="título do estudo"
        className="border rounded p-2"
      />

      <label htmlFor="study-subject">Matéria / Disciplina</label>
      <input
        type="text"
        id="study-subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="ex.: Frontend, SQL..."
        className="border rounded p-2"
      />

      <label htmlFor="study-duration">Duração (min)</label>
      <input
        type="number"
        id="study-duration"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        placeholder="Duração (min)"
        className="border rounded p-2"
      />

      <label htmlFor="study-difficulty">Dificuldade</label>
      <input
        type="number"
        id="study-difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(Number(e.target.value))}
        placeholder="Dificuldade"
        min={1}
        max={5}
        className="border rounded p-2"
      />

      <label htmlFor="study-date">Data do estudo</label>
      <input
        type="date"
        id="study-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Data do estudo"
        className="border rounded p-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar estudo
      </button>
    </form>
  );
}