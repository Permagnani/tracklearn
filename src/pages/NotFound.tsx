import { Link } from "react-router-dom";
import NotFoundImage from "../assets/img/404-error.png";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>

      <img className="w-2/5" src={NotFoundImage} alt="página não encontrada" />

      <p className="text-gray-600 mb-6">Ops! Parece que você se perdeu</p>

      <Link
        className="bg-blue-600 text-white p-2 rounded hover:underline"
        to="/"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}