export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
      </div>
      <h2 className="mt-4 text-xl text-foreground/70">
        Cargando...
      </h2>
    </div>
  );
}
