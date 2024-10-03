export default function Laoding() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
      <h2 className="mt-4 text-xl text-gray-700 dark:text-gray-300">
        Cargando...
      </h2>
    </div>
  );
}
