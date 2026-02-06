import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-50 font-sans selection:bg-red-900 selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-20" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-20" />
        <div className="scanline" />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32">
        {/* Auditor Header */}
        <div className="mb-24 flex items-center justify-between border-b border-zinc-800 pb-4 text-[10px] uppercase tracking-widest text-zinc-500">
          <div className="flex items-center gap-4">
            <span>Status: Sanguine Optimization Active</span>
            <span className="h-1 w-1 rounded-full bg-red-600 animate-pulse" />
          </div>
          <div>Terminal ID:EB-992-X</div>
        </div>

        {/* Hero Section */}
        <section className="mb-32 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
              THE ETERNITY <br />
              <span className="text-zinc-600">ENGINE.</span>
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-zinc-400 md:text-xl">
              High-Yield Intelligence for the Immortal Elite.
            </p>
          </div>

          <p className="max-w-2xl leading-relaxed text-zinc-500">
            Stop managing minutes. Start architecting eras. This is not &quot;self-help.&quot; This is a Systems-Audit for those who have transcended the mortal clock. Access the <span className="text-zinc-300">[REDACTED]</span> protocols for hyper-productivity, shadow integration, and century-scale legacy building.
          </p>
        </section>

        {/* Product Section */}
        <section className="mb-32 grid gap-12 md:grid-cols-2 bg-zinc-950/50 p-8 rounded-2xl border border-zinc-900 glass">
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-[0.2em] text-red-500 font-bold">
              The Product: Nocturnal Success
            </h2>
            <p className="text-zinc-400">
              Our first data stream provides the clinical manual for the immortal executive.
            </p>
            
            <ul className="space-y-4 text-sm font-mono text-zinc-500">
              <li className="flex gap-3">
                <span className="text-zinc-700">01</span>
                <div>
                  <span className="text-zinc-300 block">The Crypt Protocol</span>
                  Designing sensory-vacuum workspaces.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-700">02</span>
                <div>
                  <span className="text-zinc-300 block">Sanguine Optimization</span>
                  Bio-hacking for the 500-year metabolic cycle.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-700">03</span>
                <div>
                  <span className="text-zinc-300 block">The Renfield Filter</span>
                  Eliminating mortal administrative noise.
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="relative group cursor-crosshair">
              <div className="absolute -inset-4 bg-red-900/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <button className="relative px-8 py-4 bg-zinc-50 text-black font-bold uppercase tracking-widest text-xs hover:bg-white hover:scale-105 transition-all active:scale-95 sanguine-border">
                [ INITIALIZE DATA STREAM ]
              </button>
            </div>
            <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
              Standard Access Clearance Required
            </span>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-32 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.2em] text-red-500 font-bold">
              [ Intelligence Briefings ]
            </h2>
            <p className="text-2xl font-semibold tracking-tight text-zinc-200 max-w-lg mx-auto">
              Join the Immortal Elite
            </p>
            <p className="text-zinc-500 max-w-md mx-auto">
              Receive encrypted transmissions on shadow integration, epochal strategy, and nocturnal optimization protocols.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://immortaleliteintheshadows.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-4 bg-red-900/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative inline-block px-8 py-4 border border-zinc-700 text-zinc-300 font-bold uppercase tracking-widest text-xs hover:border-red-800 hover:text-white hover:bg-zinc-900/50 transition-all">
                [ REQUEST CLEARANCE ]
              </span>
            </a>
            <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
              Secure Channel • No Mortal Data Harvesting
            </span>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-48 pt-12 border-t border-zinc-900 pb-24">
          <div className="flex flex-col md:flex-row justify-between gap-12 opacity-60 hover:opacity-100 transition-opacity duration-700">
            <div className="max-w-md space-y-4">
              <p className="text-[10px] leading-relaxed uppercase tracking-widest">
                [ ACCESS NOTICE ] This portal is monitored by the Nocturnal Systems Auditor. Unauthorized attempts to breach the data silos will result in [DATA EXPUNGED].
              </p>
              <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-zinc-500">
                <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy Protocol</Link>
                <Link href="/terms" className="hover:text-red-500 transition-colors">Terms of Engagement</Link>
                <Link href="/disclaimer" className="hover:text-red-500 transition-colors">Liability Waiver</Link>
              </nav>
            </div>
            <div className="text-[10px] md:text-right uppercase tracking-[0.3em] flex flex-col justify-end">
              <span>© 2026 Sanguine Systems</span>
              <span className="text-zinc-600 mt-1">All Rights Reserved • [REDACTED]</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
