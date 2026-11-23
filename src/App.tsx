import { useEffect, useState } from "react";

type IconName =
  | "grid"
  | "activity"
  | "calendar"
  | "chart"
  | "settings"
  | "arrow"
  | "play"
  | "check"
  | "plus"
  | "minus"
  | "clock"
  | "bolt"
  | "close"
  | "chevron";
function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    activity: (
      <>
        <path d="m3 8 5-5m8 18 5-5M5 5l14 14M2 11l9-9m2 20 9-9" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M7 3v4m10-4v4M3 11h18m-13 5h2m4 0h2" />
      </>
    ),
    chart: (
      <>
        <path d="M4 3v18h17M9 16v-5m5 5V7m5 9V4" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="m9 3-1 3-3 1-2 3 2 2-1 4 3 1 2 4h5l1-3 4-1 2-4-2-2 1-4-4-1-2-3Z" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    play: <path d="m9 5 11 7-11 7Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    bolt: <path d="m14 2-10 12h7l-1 8L21 9h-8Z" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    chevron: <path d="m9 5 7 7-7 7" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 shrink-0 ${className}`}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const exercises = [
  {
    name: "Goblet squat",
    area: "Quads · Glutes · Core",
    sets: 3,
    reps: 12,
    weight: "12 kg",
    image: "photo-1574680096145-d05b474e2155",
    video: "MeIiIdhvXT4",
    cue: "Keep your chest tall and push through your heels. Lower slowly, then drive back up.",
    tag: "LOWER BODY",
  },
  {
    name: "Dumbbell Romanian deadlift",
    area: "Hamstrings · Glutes",
    sets: 3,
    reps: 10,
    weight: "16 kg",
    image: "photo-1517836357463-d25dfeac3438",
    video: "hQgFixeXdZo",
    cue: "Soften your knees, hinge at the hips, and keep the weights close to your legs.",
    tag: "LOWER BODY",
  },
  {
    name: "Dumbbell shoulder press",
    area: "Shoulders · Triceps",
    sets: 3,
    reps: 12,
    weight: "8 kg",
    image: "photo-1534438327276-14e5300c3a48",
    video: "qEwKCR5JCog",
    cue: "Brace your core and press overhead without arching your back.",
    tag: "UPPER BODY",
  },
  {
    name: "Bent-over row",
    area: "Back · Biceps",
    sets: 3,
    reps: 12,
    weight: "12 kg",
    image: "photo-1581009146145-b5ef050c2e1e",
    video: "pYcpY20QaE8",
    cue: "Keep your back flat. Pull your elbows toward your hips and squeeze at the top.",
    tag: "UPPER BODY",
  },
  {
    name: "Reverse lunge",
    area: "Quads · Glutes",
    sets: 3,
    reps: 10,
    weight: "8 kg",
    image: "photo-1434596922112-19c563067271",
    video: "xrPteyQLGAo",
    cue: "Step back softly, lower your back knee, and push through your front foot.",
    tag: "LOWER BODY",
  },
];
function Photo({ id, className, alt }: { id: string; className: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`${className} bg-stone-200 flex items-center justify-center`}>
      <Icon name="activity" className="h-12 w-12 text-stone-600" />
    </div>
  ) : (
    <img
      src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
function FitnessArt({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`${className} flex items-center justify-center bg-[#c4b1e6]`}>
      <Icon name="activity" className="h-24 w-24 text-[#50377c]" />
    </div>
  ) : (
    <img
      src="/images/fitness-friends.png"
      alt="A joyful 3D trainer squatting with her cheerful orange kettlebell sidekick"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
function Mascot({ pose = 0, className = "" }: { pose?: number; className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <span aria-hidden="true" className={`relative block shrink-0 ${className}`}>
      {failed ? (
        <span className="flex h-full items-center justify-center rounded-full bg-orange-100">
          <Icon
            name={(["calendar", "activity", "chart", "bolt"] as const)[pose]}
            className="h-8 w-8 text-orange-800"
          />
        </span>
      ) : (
        <img
          src={`/images/kip-pose-${pose}.png`}
          alt=""
          onError={() => setFailed(true)}
          className="pointer-events-none h-full w-full object-contain"
        />
      )}
    </span>
  );
}
function SectionHeading({
  title,
  subtitle,
  pose,
  children,
}: {
  title: string;
  subtitle: string;
  pose: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2">
        <Mascot pose={pose} className="h-20 w-20 -rotate-6" />
        <div className="min-w-0">
          <h2 className="font-display text-2xl tracking-wide text-[#3d2279] md:text-3xl">
            {title}
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#635078]">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
const buttonStyle =
  "cursor-pointer transition-all duration-200 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2";

export default function App() {
  const [active, setActive] = useState(0);
  const [reps, setReps] = useState(0);
  const [completed, setCompleted] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("form-workout-sets") || "[0,0,0,0,0]");
    } catch {
      return [0, 0, 0, 0, 0];
    }
  });
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [video, setVideo] = useState(false);
  const [view, setView] = useState("Overview");
  const [notice, setNotice] = useState("");
  const exercise = exercises[active];
  const totalSets = exercises.reduce((n, item) => n + item.sets, 0);
  const done = completed.reduce((n, value) => n + value, 0);
  const percent = Math.round((done / totalSets) * 100);
  useEffect(() => {
    try {
      localStorage.setItem("form-workout-sets", JSON.stringify(completed));
    } catch {
      /* Local storage may be unavailable. */
    }
  }, [completed]);
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(timer);
  }, [running]);
  const time = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  function navigate(next: string) {
    setView(next);
    setVideo(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  function selectExercise(index: number) {
    setActive(index);
    setReps(0);
    setVideo(false);
  }
  function completeSet() {
    if (completed[active] >= exercise.sets) return;
    setCompleted((previous) => previous.map((value, i) => (i === active ? value + 1 : value)));
    setReps(0);
    setNotice("Set complete. Take a breath — you earned it.");
  }
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff9e9] bg-[radial-gradient(#e8dabc_1px,transparent_1px)] [background-size:22px_22px] font-sans text-[#30204b] lg:flex">
      <aside className="relative isolate flex shrink-0 items-center justify-between border-b-2 border-dashed border-[#d8bfe6] bg-gradient-to-b from-[#f0dffc] via-[#f8edfa] to-[#fff4db] px-4 py-4 lg:fixed lg:inset-y-0 lg:w-[232px] lg:flex-col lg:items-stretch lg:overflow-y-auto lg:border-r-2 lg:border-b-0 lg:px-5 lg:py-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <span className="absolute -left-10 top-24 h-32 w-32 rounded-full border-[18px] border-[#e7cef6]" />
          <span className="absolute right-4 top-[45%] rotate-12 text-4xl text-[#c6a3df]">✦</span>
          <span className="absolute -right-8 bottom-32 h-28 w-28 rounded-full border-[14px] border-[#f5dfa5]" />
        </div>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            navigate("Overview");
          }}
          className="relative inline-flex min-h-16 shrink-0 items-center self-start pr-2"
          aria-label="PEP! home"
        >
          <span className="font-display flex -rotate-6 text-[66px] leading-none tracking-[-3px] [text-shadow:0_4px_0_#a94427,3px_6px_0_#29114e]">
            <span className="rotate-[-6deg] text-[#ffcc3d]">P</span>
            <span className="translate-y-1 rotate-[5deg] text-[#fff5cf]">E</span>
            <span className="rotate-[-5deg] text-[#ffcc3d]">P</span>
            <span className="ml-0.5 rotate-12 text-[#ff8e68]">!</span>
          </span>
          <span
            aria-hidden="true"
            className="absolute -right-5 -top-1 rotate-12 text-xl text-[#7950a5]"
          >
            ✦
          </span>
        </a>
        <div className="lg:mt-1 lg:flex-1">
          <p className="mb-6 hidden text-xs font-extrabold tracking-[.1em] text-[#684780] lg:block">
            SMALL REPS. BIG ADVENTURES.
          </p>
          <nav className="flex gap-1 lg:flex-col lg:gap-2" aria-label="Main navigation">
            {(["Overview", "Workouts", "Schedule", "Progress"] as const).map((item, i) => (
              <button
                key={item}
                aria-label={item}
                aria-current={view === item ? "page" : undefined}
                onClick={() => navigate(item)}
                className={`${buttonStyle} group flex min-h-14 items-center gap-2 rounded-2xl border-2 px-1.5 text-sm ${view === item ? "border-[#dfb23b] bg-[#ffda66] font-extrabold text-[#442374] shadow-[0_4px_0_#dfbc6e] lg:-rotate-2" : "border-transparent font-bold text-[#5f417d] hover:border-[#d6b6e8] hover:bg-[#fdf8ff]"}`}
              >
                <Mascot
                  pose={[3, 1, 0, 2][i]}
                  className="h-11 w-11 transition-transform group-hover:-rotate-12 group-hover:scale-110"
                />
                <span className="hidden md:inline">{item}</span>
                {item === "Workouts" && (
                  <span className="ml-auto mr-2 hidden rounded-lg bg-[#7651a0] px-1.5 py-0.5 text-xs text-white lg:block">
                    5
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
        <div className="hidden lg:block">
          <div className="mb-5 mt-6 rotate-[-2deg] rounded-[24px] border-2 border-[#e8c66d] bg-[#ffe49a] p-3 text-center shadow-[0_5px_0_#e9ce8f]">
            <Mascot
              pose={2}
              className="mx-auto h-24 w-24 motion-safe:animate-[bob_4s_ease-in-out_infinite]"
            />
            <h3 className="font-display mt-1 text-xl text-[#4f267d]">Your biggest little fan.</h3>
            <p className="mt-2 text-sm font-bold leading-relaxed text-[#67401d]">
              “One more rep? I believe in you!”
            </p>
            <span className="mt-3 inline-block rounded-full bg-[#fff3be] px-3 py-1 text-xs font-extrabold text-[#6b4523]">
              KIP · YOUR HYPE BUDDY
            </span>
          </div>
          <button
            onClick={() => navigate("Settings")}
            aria-current={view === "Settings" ? "page" : undefined}
            className={`${buttonStyle} mb-4 flex min-h-11 items-center gap-2 rounded-xl px-2 text-sm font-bold text-[#5c3b78] ${view === "Settings" ? "bg-[#e8d5f5]" : ""}`}
          >
            <span className="flex h-9 w-9 -rotate-12 items-center justify-center rounded-xl bg-[#9660d0] text-white shadow-[2px_3px_0_#d6b7e8]">
              <Icon name="settings" />
            </span>
            Settings
          </button>
          <div className="flex items-center gap-3 border-t border-dashed border-[#cfb4df] pt-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-[#ffcda0] bg-[#ffb47e] text-sm font-extrabold text-[#49225d]">
              JL
            </div>
            <div>
              <p className="text-sm font-bold text-[#503270]">Jamie Lee</p>
              <p className="text-xs text-[#6c527c]">Your personal space</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-5 py-7 md:px-9 lg:ml-[232px] lg:px-10 lg:py-9 xl:px-12">
        <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-extrabold tracking-[.14em] text-[#8150a3]">
              <span className="text-lg text-[#ac4d22]">✦</span>WELCOME TO YOUR FEEL-GOOD ERA
            </div>
            <h1 className="font-display text-3xl leading-tight text-[#44217c] md:text-4xl">
              {view === "Overview"
                ? "Hey Jamie. Ready, set, PEP!"
                : view === "Workouts"
                  ? "Let’s make some mighty moves!"
                  : view === "Progress"
                    ? "Little wins. Legendary you."
                    : view === "Schedule"
                      ? "Plot your next adventure."
                      : "Your world. Your rules."}
            </h1>
          </div>
          <div className="flex min-h-11 items-center gap-2 rounded-2xl border-2 border-[#e7c779] bg-[#ffefb7] px-4 text-sm font-bold text-[#634021] shadow-[0_3px_0_#e9ce8c]">
            <Icon name="calendar" />
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </header>

        {view === "Settings" ? (
          <section className="rounded-[28px] border border-[#e1d3ef] bg-[#f5eefb] p-8">
            <SectionHeading
              title="Session preferences"
              subtitle="Coach Kip’s keeping things just your way."
              pose={0}
            />
            <p className="mt-3 text-sm text-stone-600">
              Workout progress is saved only in this browser. No account or cloud sync is connected.
            </p>
            <button
              className={`${buttonStyle} mt-6 min-h-11 rounded-lg bg-[#a44729] px-5 text-sm font-semibold text-white`}
              onClick={() => {
                setCompleted([0, 0, 0, 0, 0]);
                setSeconds(0);
                setReps(0);
                setRunning(false);
                setNotice("Local session reset. Ready for a fresh start.");
              }}
            >
              Reset local progress
            </button>
          </section>
        ) : (
          <>
            {view === "Overview" && (
              <section className="mb-7 grid min-w-0 items-center overflow-hidden rounded-[32px] border-[3px] border-[#8c51d3] bg-gradient-to-r from-[#cfa9f3] to-[#c1ace1] shadow-[0_7px_0_#6837a7] md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
                <div className="min-w-0 px-6 pt-8 pb-4 md:py-10 md:pl-8 md:pr-2">
                  <span className="inline-flex rotate-[-3deg] items-center gap-1.5 rounded-lg border border-[#f5e59e] bg-[#fff0ad] px-3 py-1.5 text-xs font-bold tracking-wider text-[#655022]">
                    <Icon name="bolt" className="h-3.5 w-3.5" /> MAIN CHARACTER ENERGY
                  </span>
                  <h2 className="font-display mt-5 text-[48px] leading-[.98] text-[#452079] [text-shadow:0_2px_0_#e8c9ff] md:text-[56px]">
                    Big heart.
                    <br />
                    Little steps.
                    <br />
                    <span className="inline-block -rotate-3 text-[#fff1a2] [text-shadow:0_4px_0_#71389f,2px_0_0_#71389f,-2px_0_0_#71389f]">
                      Mighty you!
                    </span>
                  </h2>
                  <p className="mt-4 max-w-60 text-sm leading-relaxed text-[#503b66]">
                    Your feel-good adventure starts with one rep. Kip’s cheering for you!
                  </p>
                  <button
                    onClick={() => {
                      setRunning(true);
                      navigate("Workouts");
                      setNotice("Adventure started. Pick an exercise and let’s go!");
                    }}
                    className={`${buttonStyle} font-display mt-5 flex min-h-12 items-center gap-3 rounded-2xl border-2 border-[#ffe896] bg-[#ffcb38] px-5 text-xl text-[#4c257a] shadow-[0_5px_0_#b87826] hover:-translate-y-0.5 hover:bg-[#ffdf65]`}
                  >
                    {running ? "Keep the PEP going!" : "Let’s do this!"}
                    <Icon name="arrow" className="h-5 w-5" />
                  </button>
                </div>
                <figure className="flex min-w-0 flex-col items-center justify-center gap-3 px-3 pt-2 pb-7 md:py-7 md:pr-5">
                  <FitnessArt className="block h-auto w-full min-w-0 md:w-[115%] md:max-w-none md:-ml-[8%]" />
                  <figcaption className="rotate-3 rounded-xl border-2 border-white bg-[#fff0b6] px-4 py-2 text-center text-sm font-bold text-[#6d4a27] shadow-lg">
                    You + effort = magic.
                  </figcaption>
                </figure>
              </section>
            )}
            {(view === "Overview" || view === "Progress") && (
              <section className="mb-8 grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-4">
                {[
                  {
                    label: "Session time",
                    value: time,
                    suffix: "min",
                    icon: "clock",
                    detail: running ? "You’re in the zone" : "Ready when you are",
                  },
                  {
                    label: "Sets completed",
                    value: `${done}`,
                    suffix: `/ ${totalSets}`,
                    icon: "activity",
                    detail: `${totalSets - done} sets to go. You’ve got this.`,
                  },
                  {
                    label: "Workout progress",
                    value: `${percent}`,
                    suffix: "%",
                    icon: "chart",
                    detail:
                      done === totalSets
                        ? "Workout complete. Great work!"
                        : "One good rep at a time",
                  },
                  {
                    label: "Today’s focus",
                    value: "Full body",
                    suffix: "",
                    icon: "bolt",
                    detail: "Strength & conditioning",
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`relative rounded-[24px] border-2 p-4 ${["border-[#579cce] bg-[#8bd7ff] shadow-[0_5px_0_#4d9dcd]", "border-[#e08a43] bg-[#ffb574] shadow-[0_5px_0_#dc813b]", "border-[#88b83f] bg-[#c2ec72] shadow-[0_5px_0_#87ac43]", "border-[#ddba39] bg-[#ffe16a] shadow-[0_5px_0_#caa133]"][i]}`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <div className="min-w-0 text-sm font-extrabold text-[#46324c]">
                        {item.label}
                      </div>
                      <Mascot pose={[3, 1, 2, 0][i]} className="h-14 w-14 rotate-6" />
                    </div>
                    <div className="relative mt-2 flex items-baseline gap-2">
                      <span className="font-display text-4xl text-[#432175]">{item.value}</span>
                      <span className="text-sm font-bold text-[#46324c]">{item.suffix}</span>
                    </div>
                    <p className="relative mt-2 text-xs font-bold text-[#46324c]">{item.detail}</p>
                  </div>
                ))}
              </section>
            )}
            {view === "Overview" && (
              <section className="grid gap-5 md:grid-cols-2">
                {[
                  {
                    target: "Workouts",
                    pose: 1,
                    title: "Your next mighty move.",
                    detail: `${exercises.length} exercises · ${totalSets} sets · Full body strength`,
                    action: "Open workout",
                    color: "bg-[#e4cdf9] border-[#be97db]",
                  },
                  {
                    target: "Progress",
                    pose: 2,
                    title: "Look at you growing!",
                    detail: `${done} sets completed. ${totalSets - done} more little victories to go.`,
                    action: "See your progress",
                    color: "bg-[#e2f2bb] border-[#abc975]",
                  },
                  {
                    target: "Schedule",
                    pose: 0,
                    title: "Make room for good things.",
                    detail: "Your weekly mix of strong days and recharge days.",
                    action: "Explore your week",
                    color: "bg-[#ffebba] border-[#e4c578]",
                  },
                ].map((card) => (
                  <button
                    key={card.target}
                    onClick={() => navigate(card.target)}
                    className={`${buttonStyle} flex items-center gap-3 rounded-[28px] border-2 p-5 text-left hover:-translate-y-1 ${card.color}`}
                  >
                    <Mascot pose={card.pose} className="h-24 w-24" />
                    <span className="min-w-0">
                      <span className="font-display block text-2xl text-[#4b2879]">
                        {card.title}
                      </span>
                      <span className="mt-2 block text-sm font-semibold text-[#635078]">
                        {card.detail}
                      </span>
                      <span className="mt-4 flex min-h-11 items-center gap-2 text-sm font-extrabold text-[#63358d]">
                        {card.action}
                        <Icon name="arrow" className="h-4 w-4" />
                      </span>
                    </span>
                  </button>
                ))}
              </section>
            )}

            {view === "Schedule" && (
              <section className="mb-7 rounded-[28px] border border-[#ead6b7] bg-[#fff6e7] p-5">
                <SectionHeading
                  title="A little plan. A lot of possibility."
                  subtitle="Coach Kip saved a little time for future you."
                  pose={0}
                />
                <div className="grid grid-cols-2 gap-2 md:grid-cols-7">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <button
                      key={day}
                      onClick={() =>
                        setNotice(
                          `${day}: ${i % 2 === 0 ? "Full body strength · 45 minutes" : "Recovery day · Stretch and recharge"}`,
                        )
                      }
                      className={`${buttonStyle} min-h-20 rounded-2xl border border-[#e8dccc] bg-[#fffdfa] p-2 text-sm hover:-translate-y-1`}
                    >
                      <span className="font-semibold">{day}</span>
                      <Mascot pose={i % 2 === 0 ? 1 : 3} className="mx-auto h-14 w-14" />
                      <span className="block text-xs">{i % 2 === 0 ? "Strength" : "Recharge"}</span>
                    </button>
                  ))}
                </div>
              </section>
            )}
            {view === "Progress" && (
              <section className="mb-7 rounded-[28px] border border-[#deceec] bg-[#f3ecfa] p-5 md:p-6">
                <SectionHeading
                  title="Today’s set breakdown"
                  subtitle="Every little win deserves a spot on the podium."
                  pose={2}
                >
                  <span className="rotate-3 rounded-xl border-2 border-[#eed997] bg-[#fff0b6] px-4 py-2 text-sm font-bold text-[#715021]">
                    {done} little victories
                  </span>
                </SectionHeading>
                <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_180px]">
                  <div className="space-y-3">
                    {exercises.map((item, i) => (
                      <div
                        key={item.name}
                        className="rounded-2xl border border-[#e6daee] bg-white/80 p-3"
                      >
                        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                          <span className="font-medium">{item.name}</span>
                          <span className="shrink-0 text-[#725285]">
                            {completed[i]}/{item.sets} sets
                          </span>
                        </div>
                        <div className="flex gap-1.5">
                          {Array.from({ length: item.sets }, (_, n) => (
                            <div
                              key={n}
                              className={`flex h-5 flex-1 items-center justify-center rounded-md ${n < completed[i] ? "bg-[#8a61b2]" : "bg-[#eae1f1]"}`}
                            >
                              {n < completed[i] && (
                                <Icon name="check" className="h-3.5 w-3.5 text-white" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-[24px] bg-[#fff3d6] p-4 text-center">
                    <Mascot
                      pose={2}
                      className="h-36 w-36 motion-safe:animate-[bob_4s_ease-in-out_infinite]"
                    />
                    <p className="text-xl font-bold text-[#74502b]">{percent}% stronger story</p>
                    <p className="mt-2 text-sm text-[#725c43]">
                      {done === totalSets
                        ? "You did the thing. Take a bow!"
                        : "Your effort is adding up. Kip’s keeping score!"}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {view === "Workouts" && (
              <>
                <SectionHeading
                  title="Today’s workout"
                  subtitle="Coach Kip’s recipe: a little sweat, a lot of heart."
                  pose={0}
                >
                  <div className="flex items-center gap-3">
                    <span className="rotate-[-3deg] rounded-lg border border-[#edc5ac] bg-[#ffe5d1] px-3 py-1.5 text-xs font-bold text-[#8c482c]">
                      STRENGTH CLUB
                    </span>
                    <p className="text-sm text-stone-600">45 min · {exercises.length} exercises</p>
                  </div>
                </SectionHeading>
                <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(300px,1fr)]">
                  <section className="min-w-0 overflow-hidden rounded-2xl border border-[#dddfd5] bg-white">
                    <div className="relative h-[300px] overflow-hidden bg-stone-800 md:h-[360px]">
                      {video ? (
                        <iframe
                          className="h-full w-full"
                          title={`${exercise.name} exercise tutorial`}
                          src={`https://www.youtube.com/embed/${exercise.video}?autoplay=1&rel=0`}
                          allow="autoplay; encrypted-media; fullscreen"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <Photo
                            id={exercise.image}
                            alt={`${exercise.name} training inspiration`}
                            className="h-full w-full object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10" />
                          <span className="absolute left-5 top-5 rounded-md bg-[#fffefa] px-3 py-1.5 text-xs font-semibold tracking-wide">
                            EXERCISE {String(active + 1).padStart(2, "0")} / 05
                          </span>
                          <button
                            aria-label={`Play ${exercise.name} technique video`}
                            onClick={() => setVideo(true)}
                            className={`${buttonStyle} absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/20 text-white backdrop-blur-md hover:bg-white/40`}
                          >
                            <Icon name="play" className="ml-1 h-7 w-7" />
                          </button>
                          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white">
                            <div>
                              <p className="mb-2 text-xs font-medium tracking-[.16em]">
                                {exercise.tag}
                              </p>
                              <h3 className="text-3xl font-semibold tracking-tight">
                                {exercise.name}
                              </h3>
                              <p className="mt-1.5 text-sm text-stone-200">{exercise.area}</p>
                            </div>
                            <span className="shrink-0 rounded-md bg-black/50 px-2 py-1 text-xs">
                              VIDEO GUIDE
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 px-6 py-4">
                      <div className="flex gap-6 text-sm">
                        <span>
                          <strong>{exercise.sets}</strong>{" "}
                          <span className="text-stone-600">sets</span>
                        </span>
                        <span>
                          <strong>{exercise.reps}</strong>{" "}
                          <span className="text-stone-600">reps</span>
                        </span>
                        <span>
                          <strong>{exercise.weight}</strong>{" "}
                          <span className="text-stone-600">weight</span>
                        </span>
                      </div>
                      <button
                        onClick={() => setVideo((v) => !v)}
                        className={`${buttonStyle} flex min-h-11 items-center gap-1.5 text-sm font-medium text-[#a94122]`}
                      >
                        {video ? "Back to exercise" : "Watch tutorial"}
                        <Icon name="arrow" className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 bg-[#fff5e8] p-4 text-sm leading-relaxed text-[#72513d]">
                      <Mascot pose={0} className="h-20 w-20" />
                      <p className="rounded-2xl rounded-bl-none border border-[#efd9bd] bg-[#fffcf7] p-3">
                        <strong className="block font-bold text-[#835135]">
                          Coach Kip says: form first.
                        </strong>
                        {exercise.cue}
                      </p>
                    </div>
                  </section>

                  <section className="relative flex flex-col overflow-hidden rounded-[28px] border-[3px] border-[#9656cf] bg-[#d7a7ff] p-6 text-[#422365] shadow-[0_6px_0_#75409f]">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-8 top-20 h-36 w-36 rounded-full border-[24px] border-[#c28ced]"
                    />
                    <div className="relative flex items-center gap-1">
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-extrabold tracking-[.14em] text-[#59317c]">
                          KIP’S REP RALLY
                        </span>
                        <h3 className="font-display mt-1 text-[28px] leading-none">
                          A rep closer to awesome.
                        </h3>
                      </div>
                      <Mascot
                        pose={completed[active] >= exercise.sets ? 2 : 1}
                        className="h-24 w-24 rotate-6 motion-safe:animate-[bob_4s_ease-in-out_infinite]"
                      />
                    </div>
                    <p className="relative mt-2 rounded-xl rounded-tl-none border border-[#d4bfe5] bg-[#f6edff] px-3 py-2 text-sm">
                      {completed[active] >= exercise.sets
                        ? "“Look at you go! That’s a victory worth celebrating.”"
                        : reps >= exercise.reps
                          ? "“Target reached! Let’s call that a set.”"
                          : "“I’ll lift with you. You count, I’ll cheer!”"}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-black/20 pt-5 text-sm">
                      <span>Current set</span>
                      <span className="font-semibold">
                        Set {Math.min(completed[active] + 1, exercise.sets)} of {exercise.sets}
                      </span>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-6 py-6">
                      <button
                        aria-label="Decrease reps"
                        disabled={reps === 0}
                        onClick={() => setReps((r) => Math.max(0, r - 1))}
                        className={`${buttonStyle} flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/30 disabled:cursor-not-allowed disabled:border-black/15`}
                      >
                        <Icon name="minus" />
                      </button>
                      <div className="relative text-center">
                        <div
                          key={reps}
                          aria-live="polite"
                          className="font-display text-[104px] leading-none tracking-[-4px] text-[#502081] [text-shadow:0_5px_0_#b274de] motion-safe:animate-[rep-pop_.2s_ease-out]"
                        >
                          {String(reps).padStart(2, "0")}
                        </div>
                        <p className="mt-3 text-sm font-bold">of {exercise.reps} feel-good reps</p>
                      </div>
                      <button
                        aria-label="Increase reps"
                        onClick={() => {
                          setReps((r) => r + 1);
                          setRunning(true);
                        }}
                        className={`${buttonStyle} flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff4e9] hover:bg-white`}
                      >
                        <Icon name="plus" />
                      </button>
                    </div>
                    <div className="mb-5 flex justify-center gap-2">
                      {Array.from({ length: exercise.sets }, (_, i) => (
                        <span
                          key={i}
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${i < completed[active] ? "bg-[#303b27] text-white" : "border border-black/30"}`}
                        >
                          {i < completed[active] ? (
                            <Icon name="check" className="h-4 w-4" />
                          ) : (
                            i + 1
                          )}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={completeSet}
                      disabled={completed[active] >= exercise.sets}
                      className={`${buttonStyle} font-display relative flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-[#ffef9a] bg-[#ffcf43] px-4 text-xl text-[#4e2376] shadow-[0_5px_0_#a46b26] hover:bg-[#ffdf70] disabled:cursor-default`}
                    >
                      <Icon name="check" />
                      {completed[active] >= exercise.sets
                        ? "You crushed it!"
                        : "Nailed it! Complete set"}
                    </button>
                    <button
                      onClick={() => setRunning((r) => !r)}
                      className={`${buttonStyle} mt-2 flex min-h-11 items-center justify-center gap-2 text-sm`}
                    >
                      <Icon name="clock" className="h-4 w-4" />
                      {running ? "Pause session" : seconds ? "Resume session" : "Start session"}
                      <span className="font-semibold">{time}</span>
                    </button>
                  </section>
                </div>

                <section className="mt-8 rounded-[28px] border-[3px] border-[#e8af35] bg-[#ffdf77] p-4 shadow-[0_6px_0_#dca43c] md:p-6">
                  <SectionHeading
                    title="Your session lineup"
                    subtitle="Five little adventures. One stronger you. Follow Kip!"
                    pose={3}
                  >
                    <span className="rounded-full border border-[#e8d2ab] bg-[#fff9e9] px-3 py-2 text-sm text-[#795a37]">
                      {exercises.filter((e, i) => completed[i] >= e.sets).length} of{" "}
                      {exercises.length} conquered
                    </span>
                  </SectionHeading>
                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {exercises.map((item, i) => {
                      const finished = completed[i] >= item.sets;
                      return (
                        <button
                          key={item.name}
                          onClick={() => selectExercise(i)}
                          aria-pressed={active === i}
                          className={`${buttonStyle} group relative flex min-w-0 items-center gap-2 rounded-[22px] border-2 p-3 text-left hover:-translate-y-1 ${active === i ? "border-[#9054c5] bg-[#e5c6ff] shadow-[0_4px_0_#a267cf]" : finished ? "border-[#80aa3b] bg-[#d3f58d]" : "border-[#e4b646] bg-[#fff7d8] shadow-[0_3px_0_#d6a640]"}`}
                        >
                          <div className="shrink-0">
                            <Mascot
                              pose={finished ? 2 : active === i ? 1 : [0, 1, 3, 1, 3][i]}
                              className="h-[72px] w-[72px] transition-transform group-hover:rotate-6"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p
                              className={`mb-1 text-xs font-bold tracking-wide ${finished ? "text-[#55703d]" : "text-[#89639f]"}`}
                            >
                              {finished
                                ? "CONQUERED!"
                                : active === i
                                  ? "YOU ARE HERE"
                                  : `STOP ${String(i + 1).padStart(2, "0")}`}
                            </p>
                            <h3 className="text-sm font-bold">{item.name}</h3>
                            <p className="mt-1 text-xs text-stone-600">
                              {item.sets} × {item.reps} reps · {item.weight}
                            </p>
                          </div>
                          {finished && <Icon name="check" className="h-4 w-4 text-[#55703d]" />}
                        </button>
                      );
                    })}
                  </div>
                </section>
              </>
            )}
            <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#dedfd7] pt-5 text-xs text-stone-600">
              <span>Progress over perfection. Always.</span>
              <span>Session progress saved on this device</span>
            </footer>
          </>
        )}
        {notice && (
          <div
            role="status"
            className="fixed bottom-5 left-5 right-5 z-20 mx-auto flex max-w-md items-center justify-between gap-4 rounded-xl border border-stone-200 bg-[#293326] py-2 pl-5 pr-2 text-sm text-white shadow-xl"
          >
            {notice}
            <button
              aria-label="Dismiss notification"
              onClick={() => setNotice("")}
              className={`${buttonStyle} flex h-11 w-11 shrink-0 items-center justify-center`}
            >
              <Icon name="close" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
