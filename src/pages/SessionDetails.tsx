// src/pages/SessionDetails.tsx
import { useParams, Link } from 'react-router-dom';
import type { Study } from '../types/study';



interface SessionDetailsProps {
  sessions: Study[];
}

export default function SessionDetails({ sessions }: SessionDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const session = sessions.find(s => s.id === id);

  if (!session) {
    return <h2 className="text-center text-red-500 font-bold mt-10">Sessão não encontrada!</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{session.subject}</h1>
      <div className="space-y-3">
        <p><span className="font-semibold">Duração:</span> {session.minutes} minutos</p>
        <p><span className="font-semibold">Data:</span> {new Date(session.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
        {session.notes && (
          <div>
            <h3 className="font-semibold">Anotações:</h3>
            <p className="text-gray-700 bg-gray-50 p-3 rounded-md whitespace-pre-wrap">{session.notes}</p>
          </div>
        )}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">&larr; Voltar</Link>
      </div>
    </div>
  );
}