import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const SectionHeader = ({ title, subtitle }) => (
  <div className="max-w-6xl mx-auto px-4 text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const ActionCard = ({ title, description, href, icon, badge }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 text-2xl">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
          {badge && (
            <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
              {badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
          Open <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </div>
  </a>
);

const PillLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-800"
  >
    {children}
  </a>
);

export default function Electors() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50" />
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Electors' Services
              </h1>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Enroll, update, search the electoral roll, download e-EPIC and
                access official voter services from Election Commission of India.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink href="#quick-actions">Explore services</PillLink>
                <PillLink href="https://play.google.com/store/apps/details?id=com.eci.citizen">
                  Get Voter Helpline App
                </PillLink>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Official portals open in a new tab.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-200/30 via-fuchsia-200/30 to-sky-200/30 blur-2xl" />
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-indigo-50 p-4">
                    <p className="font-semibold text-indigo-900">Apply Online</p>
                    <p className="text-indigo-700/80">Form 6, 6B, 7, 8</p>
                  </div>
                  <div className="rounded-xl bg-sky-50 p-4">
                    <p className="font-semibold text-sky-900">Search Roll</p>
                    <p className="text-sky-700/80">Find your name</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="font-semibold text-emerald-900">Download e-EPIC</p>
                    <p className="text-emerald-700/80">Digital voter card</p>
                  </div>
                  <div className="rounded-xl bg-fuchsia-50 p-4">
                    <p className="font-semibold text-fuchsia-900">Track Status</p>
                    <p className="text-fuchsia-700/80">Application updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section id="quick-actions" className="py-10 md:py-14">
        <SectionHeader
          title="Quick Actions"
          subtitle="Most-used electors' services in one place."
        />
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <ActionCard
            title="Search in Electoral Roll"
            description="Find your name and polling details."
            href="https://electoralsearch.eci.gov.in/"
            icon={<span>🔎</span>}
          />
          <ActionCard
            title="Apply for Voter ID"
            description="Online registration and updates."
            href="https://voters.eci.gov.in/"
            icon={<span>📝</span>}
          />
          <ActionCard
            title="Track Application"
            description="Check your form status online."
            href="https://voters.eci.gov.in/track-application"
            icon={<span>📬</span>}
          />
          <ActionCard
            title="Download e-EPIC"
            description="Get your digital voter card."
            href="https://voters.eci.gov.in/"
            icon={<span>💳</span>}
            badge="Digital"
          />
        </div>
      </section>

      {/* Know Your */}
      <section className="py-6 md:py-10">
        <SectionHeader
          title="Know Your"
          subtitle="Important lookups for electors."
        />
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ActionCard
            title="Polling Station & Assembly Details"
            description="Locate your polling booth and assembly constituency."
            href="https://electoralsearch.eci.gov.in/"
            icon={<span>🗺️</span>}
          />
          <ActionCard
            title="BLO / ERO / DEO"
            description="Know your local election officials."
            href="https://electoralsearch.eci.gov.in/"
            icon={<span>👤</span>}
          />
        </div>
      </section>

      {/* Forms */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-white to-slate-50">
        <SectionHeader
          title="Online & Offline Forms"
          subtitle="Use online forms for fastest processing. Offline forms are available as PDFs."
        />
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <ActionCard
            title="Form 6"
            description="New voter registration."
            href="https://voters.eci.gov.in/"
            icon={<span>6️⃣</span>}
          />
          <ActionCard
            title="Form 6B"
            description="Aadhaar details submission."
            href="https://voters.eci.gov.in/"
            icon={<span>🪪</span>}
          />
          <ActionCard
            title="Form 7"
            description="Object to inclusion or seek deletion."
            href="https://voters.eci.gov.in/"
            icon={<span>7️⃣</span>}
          />
          <ActionCard
            title="Form 8"
            description="Corrections, address, or photo update."
            href="https://voters.eci.gov.in/"
            icon={<span>8️⃣</span>}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 text-center">
          <PillLink href="https://eci.gov.in/files/category/105-forms/">
            View Offline Forms (PDF)
          </PillLink>
        </div>
      </section>

      {/* Apps & Help */}
      <section className="py-10 md:py-14">
        <SectionHeader
          title="Apps & Help"
          subtitle="Use official channels for secure services and assistance."
        />
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ActionCard
            title="Voter Helpline App"
            description="Access services on mobile."
            href="https://play.google.com/store/apps/details?id=com.eci.citizen"
            icon={<span>📱</span>}
            badge="Android"
          />
          <ActionCard
            title="Voter Helpline (iOS)"
            description="Official iPhone app."
            href="https://apps.apple.com/in/app/voter-helpline/id1456535004"
            icon={<span>🍎</span>}
            badge="iOS"
          />
          <ActionCard
            title="cVIGIL"
            description="Report MCC violations with photo/video."
            href="https://cvigil.eci.gov.in/"
            icon={<span>🛡️</span>}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 text-center text-slate-600">
          <p>
            For assistance, call Toll Free <span className="font-semibold">1950</span>
            . Visit the official portal at
            {" "}
            <a
              className="text-indigo-600 font-medium hover:underline"
              href="https://eci.gov.in/electors"
              target="_blank"
              rel="noreferrer"
            >
              eci.gov.in/electors
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
