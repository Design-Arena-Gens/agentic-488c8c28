import Image from "next/image";
import Link from "next/link";
import { serryBeachResort } from "@/data/hotel";

const heroImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1526481280695-3c4695f9125d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1400&q=80",
];

const levelBadge: Record<(typeof serryBeachResort.reefSpots)[number]["level"], string> = {
  Beginner: "text-emerald-300 border-emerald-300/60 bg-emerald-300/10",
  Intermediate: "text-sky-300 border-sky-300/60 bg-sky-300/10",
  Advanced: "text-rose-300 border-rose-300/60 bg-rose-300/10",
};

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-12 sm:px-10 lg:px-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10 backdrop-blur">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-slate-900/80 to-slate-900/95" />
        <div className="relative grid gap-10 p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div className="flex flex-col gap-6">
            <span className="inline-flex max-w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Reef-front intel
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {serryBeachResort.name}
            </h1>
            <p className="text-lg leading-relaxed text-cyan-100/90 sm:text-xl">
              {serryBeachResort.tagline}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-200/80">
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                <svg className="h-5 w-5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="M12 21c4.97-4.686 8-8.313 8-11a8 8 0 1 0-16 0c0 2.687 3.03 6.314 8 11z"
                  />
                  <circle cx="12" cy="10" r="2.4" strokeWidth="1.6" />
                </svg>
                <div>
                  <p className="font-semibold text-white">{serryBeachResort.location}</p>
                  <p className="text-xs uppercase tracking-wide text-cyan-100/70">{serryBeachResort.opening}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                <svg className="h-5 w-5 text-lime-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="M4 4v5.33a2 2 0 001.2 1.84l5.6 2.4a2 2 0 001.6 0l5.6-2.4A2 2 0 0018 9.33V4m-7 13v3m-3 0h6"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-white">Ultra all-inclusive</p>
                  <p className="text-xs uppercase tracking-wide text-cyan-100/70">
                    Purpose-built for reef-friendly escapes
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base leading-relaxed text-slate-100/80">{serryBeachResort.intro}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {serryBeachResort.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-slate-100/90 backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 lg:grid-rows-3">
            {heroImages.map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 ${
                  index === 0 ? "lg:row-span-2" : "lg:row-span-1"
                }`}
              >
                <Image
                  src={src}
                  alt="Red Sea resort scenery"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/10 backdrop-blur lg:p-10">
          <h2 className="text-2xl font-semibold text-white">Why Serry is the standout newcomer</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200/85">
            With its late-2023 debut, Serry Beach Resort is currently Hurghada&apos;s freshest five-star address. The
            resort reclaimed a quiet crescent of shoreline south of the marina, layering in a swimmable lagoon, reef-gentle
            piers, on-site marine lab and an adults-only mangrove deck. It is the only recent opening that combines
            elevated gastronomy, full-service butler tech and daily conservation programming focused on keeping the house
            reef alive.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-200/85">
            Unlike the older Makadi Bay properties that shuttle guests to offshore reefs, Serry&apos;s wooden jetty drops
            snorkelers directly onto a coral plateau protected from boat traffic. Its partnership with local NGOs means
            reef briefings, coral-fragment tables and reef-safe amenities are hard-baked into the guest experience rather
            than optional extras.
          </p>
        </article>

        <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/10 backdrop-blur lg:p-10">
          <h3 className="text-lg font-semibold text-white">Day-planner snapshot</h3>
          <ul className="space-y-4 text-sm text-slate-200/85">
            {serryBeachResort.experiences.map((exp) => (
              <li key={exp} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span>{exp}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/70">Coordinates</h4>
            <p className="mt-2 text-2xl font-semibold text-white">
              {serryBeachResort.coordinates.lat.toFixed(4)}°N · {serryBeachResort.coordinates.lng.toFixed(4)}°E
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-300/70">
              Tap to open maps
            </p>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${serryBeachResort.coordinates.lat},${serryBeachResort.coordinates.lng}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-300/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M7 17 17 7M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/10 backdrop-blur lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">House reef playbook</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-200/85">
              Choose your swim depending on confidence. The marine concierge posts tide, current and visibility forecasts
              each morning from the dock hut—use them to match the best window with your skill level.
            </p>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
            Reef-safe advisory
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {serryBeachResort.reefSpots.map((spot) => (
            <div key={spot.title} className="flex h-full flex-col rounded-3xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{spot.title}</h3>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${levelBadge[spot.level]}`}>
                  {spot.level}
                </span>
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-cyan-200/70">
                {spot.distanceKm === 0 ? "On property" : `${spot.distanceKm.toFixed(1)} km away`}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-200/85">{spot.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/10 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-white">Stay-smart checklist</h2>
          <ul className="mt-6 space-y-4 text-sm text-slate-200/85">
            {serryBeachResort.practicalTips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/30 p-4">
                <svg className="mt-1 h-4 w-4 text-lime-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 13l4 4L19 7" />
                </svg>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/10 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-white">Opening timeline</h2>
          <ol className="mt-6 space-y-5">
            {serryBeachResort.timeline.map((event) => (
              <li key={event.year} className="relative rounded-2xl border border-white/5 bg-black/30 p-5">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{event.year}</span>
                <p className="mt-2 text-lg font-semibold text-white">{event.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/85">{event.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-lg shadow-cyan-500/10 backdrop-blur lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">On-site orientation</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200/85">
              Drop the pin below into your travel planner. The lagoon sits just north of Abu Hashish Island, inside the
              Sahl Hasheesh protectorate—boat traffic is limited to resort tenders, so snorkeling lanes stay calm even when
              the wind picks up.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Serry Beach Resort map"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${serryBeachResort.coordinates.lat},${serryBeachResort.coordinates.lng}&z=14&output=embed`}
              className="h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/10 backdrop-blur lg:p-12">
        <h2 className="text-2xl font-semibold text-white">Sources to explore</h2>
        <p className="mt-3 text-sm text-slate-300/80">
          Dip into launch announcements, destination explainers and conservation briefings for deeper trip planning.
        </p>
        <ul className="mt-6 space-y-4">
          {serryBeachResort.sources.map((source) => (
            <li
              key={source.url}
              className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
              <Link href={source.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                <span className="text-sm font-semibold text-cyan-200 group-hover:text-cyan-100">{source.title}</span>
                <span className="text-xs uppercase tracking-[0.28em] text-slate-300/60 group-hover:text-cyan-200/70">
                  {source.url}
                </span>
                <p className="text-sm leading-relaxed text-slate-200/85">{source.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
