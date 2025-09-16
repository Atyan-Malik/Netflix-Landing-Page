import React, { useState } from "react";

type Props = {};

export default function NetflixCloneLanding(_: Props){
  const [showSignIn, setShowSignIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAV */}
      <header className="fixed w-full top-0 left-0 z-40 bg-black/80 border-b border-red-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-extrabold tracking-tight text-red-600">NETFLIX</div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSignIn(true)}
              className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded text-sm font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="pt-24">
        <section className="relative overflow-hidden">
          {/* Background image/video overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-50"
            style={{
              backgroundImage:
                "url('/download.jpg')",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-36 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-red-600">Unlimited movies, TV shows, and more.</h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200">
              Watch anywhere. Cancel anytime.
            </p>

            <div className="mt-8">
              <p className="text-sm mb-3">Ready to watch? Enter your email to create or restart your membership.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowSignIn(true);
                }}
                className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              >
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full sm:w-[420px] px-4 py-3 rounded bg-black/60 border border-red-600 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-sm font-semibold"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>

          {/* Decorative gradient */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
        </section>

        {/* FEATURES */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <Feature
              title="Watch on your TV"
              desc="Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
              svg={TVSVG}
            />
            <Feature
              title="Download your shows"
              desc="Save your data — download and watch offline."
              svg={DownloadSVG}
            />
            <Feature
              title="Watch everywhere"
              desc="Stream on your phone, tablet, laptop, and TV without paying more."
              svg={DevicesSVG}
            />
          </div>
        </section>

        {/* FAQ like CTA rows */}
        <section className="border-t border-red-600/40">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="text-2xl font-bold text-red-600">Frequently asked questions</h2>
            <div className="mt-8 space-y-4 text-left">
              <Accordion question="What is Netflix?" answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices." />
              <Accordion question="How much does Netflix cost?" answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low monthly fee. Plans vary by country and device support." />
              <Accordion question="Where can I watch?" answer="You can watch anywhere, anytime — simply sign in with your account to watch instantly on the web or on the Netflix app." />
            </div>

            <div className="mt-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowSignIn(true);
                }}
                className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              >
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full sm:w-[420px] px-4 py-3 rounded bg-black/60 border border-red-600 placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-sm font-semibold">Try 30 days free</button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="max-w-6xl mx-auto px-6 py-12 text-gray-400 border-t border-red-600/40">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Questions? Contact us.</h4>
              <p className="text-sm">Ready to watch? Call 1-800-000-000</p>
            </div>

            <div className="text-sm">
              <ul className="space-y-2">
                <li className="hover:text-red-600 cursor-pointer">FAQ</li>
                <li className="hover:text-red-600 cursor-pointer">Help Centre</li>
                <li className="hover:text-red-600 cursor-pointer">Account</li>
                <li className="hover:text-red-600 cursor-pointer">Media Centre</li>
              </ul>
            </div>

            <div>
              <label className="text-sm block mb-2">Select Language</label>
              <select className="bg-black/60 border border-red-600 px-3 py-2 rounded text-sm">
                <option>English</option>
                <option>Urdu</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>

          <div className="mt-8 text-xs">© {new Date().getFullYear()} NETFLIX, Inc.</div>
        </footer>
      </main>

      {/* SIGN IN MODAL */}
      {showSignIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowSignIn(false)} />
          <div className="relative bg-black border border-red-600 max-w-md w-full mx-4 rounded overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-red-600">Sign In</h3>
                <button className="text-gray-400" onClick={() => setShowSignIn(false)} aria-label="close">✕</button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // placeholder behaviour for example only
                  alert(`Signed in as ${email || "(no email entered)"}`);
                  setShowSignIn(false);
                }}
                className="mt-4 space-y-4"
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-black/60 border border-red-600"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded bg-black/60 border border-red-600"
                />
                <div className="flex items-center justify-between">
                  <label className="text-sm">
                    <input type="checkbox" className="mr-2 accent-red-600" /> Remember me
                  </label>
                  <a className="text-sm text-red-600 hover:underline" href="#">Need help?</a>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



function Feature({ title, desc, svg }: { title: string; desc: string; svg: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="w-16 h-16 flex items-center justify-center rounded bg-red-600/20 text-red-600">{svg}</div>
      <h3 className="text-xl font-semibold text-red-600">{title}</h3>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  );
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-red-600/40 rounded overflow-hidden">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-4 flex items-center justify-between text-red-600"
      >
        <span className="font-medium">{question}</span>
        <span className="text-2xl">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-gray-300">{answer}</div>}
    </div>
  );
}

const TVSVG = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DownloadSVG = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="3" y="17" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const DevicesSVG = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="16" y="7" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);