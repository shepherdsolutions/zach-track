import { DID_ZACH_OUTSCORE_HANDICAP, LAST_CRICKET_DATE } from "@/lib/golf-config";

export default function Home() {
  const didOutscore = DID_ZACH_OUTSCORE_HANDICAP;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
          The Last Time Zak Crawley Played Cricket, Did He Outscore His Golf Handicap?
        </h1>

        {/* The Answer */}
        <div
          className={`text-7xl sm:text-8xl md:text-9xl font-black tracking-tight ${
            didOutscore ? "text-emerald-500" : "text-red-500"
          }`}
        >
          {didOutscore ? "YES" : "NO"}
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground">
          {didOutscore
            ? "Incredible scenes. A genuinely impressive batting display."
            : "Unfortunate. At least the walk back to the pavilion is good cardio."}
        </p>

        {/* Last Cricket Date */}
        {LAST_CRICKET_DATE && (
          <p className="text-sm text-muted-foreground/70 italic">
            Last played: {LAST_CRICKET_DATE}
          </p>
        )}

        {/* Handicap Explanation */}
        <div className="pt-6 max-w-md mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Zak{"'"}s golf handicap is <span className="font-semibold text-foreground">1</span>.
            You don{"'"}t get that good at golf without putting in serious hours on the course.
            Fortunately for Zak, the England cricket schedule leaves him with
            <span className="italic"> plenty </span> of free time to work on his short game.
          </p>
        </div>

        {/* Golf Ball Decoration */}
        <div className="pt-8 flex justify-center gap-2">
          <GolfBall />
          <GolfBall />
          <GolfBall />
        </div>
      </div>
    </main>
  );
}

function GolfBall() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-muted-foreground/50"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="9" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="9" cy="15" r="1" fill="currentColor" />
      <circle cx="15" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}
