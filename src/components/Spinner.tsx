// components/ui/Spinner.tsx
const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-[500px]">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-700"></div>
    </div>
  );
};

export default Spinner;
