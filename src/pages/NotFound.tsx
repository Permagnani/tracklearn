import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-gray-600 mb-6">Ops! Parece que você se perdeu.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Voltar para a Home
      </Link>
    </div>
  );
}