import type { FallbackProps } from "react-error-boundary";

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="text-center py-15">
      <h1 className="font-bold text-2xl mb-4">Algo deu errado</h1>
      <p className="mb-4 text-red-900">{error.message}</p>

      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Tentar novamente
      </button>
    </div>
  );
}