export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      
      {/* Animated ring */}
      <div className="relative mb-6">
        <div className="h-14 w-14 rounded-full border-2 border-emerald-200" />
        <div className="absolute inset-0 h-14 w-14 rounded-full border-2 border-transparent border-t-emerald-600 animate-spin" />
      </div>

      {/* Brand */}
      <h1 className="text-xl font-semibold text-emerald-700 tracking-wide">
        Veena Naturals
      </h1>

      {/* Sub text */}
      <p className="mt-1 text-sm text-gray-500 tracking-wide">
        Crafting natural care
      </p>

      {/* Subtle loading dots */}
      <div className="mt-4 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-bounce" />
      </div>
    </div>
  );
}
