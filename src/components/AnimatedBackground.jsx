export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* base background */}
      <div className="absolute inset-0 bg-black" />

      {/* floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 animate-float-slow" />
      <div className="absolute bottom-20 right-32 w-80 h-80 bg-cyan-600 rounded-full blur-3xl opacity-15 animate-float-slow animation-delay-2000" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-float-slow animation-delay-4000" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 animate-drift" />

      {/* subtle overlay (lower opacity) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
    </div>
  );
}
