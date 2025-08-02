const HeroOverlay = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="text-center">
        <h1 className="text-slate-800 font-bold text-5xl">Hi, I'm PG</h1>
        <p className="text-stone-700 text-xl mt-2">Full Stack Dev • Freelancer • Designer</p>
      </div>
    </div>
  );
};

export default HeroOverlay;
