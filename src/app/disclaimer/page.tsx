import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-50 font-sans selection:bg-red-900 selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-10" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-10" />
      </div>

      <main className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12">
          <Link href="/" className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-red-500 transition-colors flex items-center gap-2">
            ← [ RETURN TO CORE ]
          </Link>
        </div>

        <section className="space-y-12">
          <header className="space-y-4 border-b border-zinc-800 pb-8">
            <h1 className="text-4xl font-bold tracking-tighter uppercase md:text-5xl">
              Liability <span className="text-zinc-600">Waiver.</span>
            </h1>
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
              Security Advisory • Risk Factor: ZERO-G
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 leading-relaxed text-sm">
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 1.0 No Professional Advice ]</h2>
              <p>
                The information provided on THE ETERNITY ENGINE is for informational and entertainment purposes only. It does not constitute legal, financial, medical, or psychological advice for mortals. 
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 2.0 Risk Assumption ]</h2>
              <p>
                Implementing [REDACTED] protocols involves risks to your current lifestyle, social standing, and biological equilibrium. Sanguine Systems and the Nocturnal Systems Auditor assume no responsibility for any outcomes, desired or otherwise, resulting from the application of these strategies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 3.0 Accuracy of Transmissions ]</h2>
              <p>
                While we strive for clinical precision, intelligence streams may be subject to temporal drift or encryption errors. We make no guarantees regarding the timeless accuracy of the data provided.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 4.0 External Links ]</h2>
              <p>
                Links to external terminals (e.g., Beehiiv) are provided for convenience. We do not control the infrastructure of the public web and are not responsible for the content or security of mortal-operated sites.
              </p>
            </div>

            <div className="p-6 border border-red-900/30 bg-red-950/20 rounded-lg">
              <p className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">!! FINAL WARNING !!</p>
              <p className="text-zinc-300 italic">
                By clicking &quot;Initialize&quot; or subscribing to any data stream, you acknowledge that you are acting of your own volition and waive all rights to pursue damages against the Auditor or Sanguine Systems.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-12 border-t border-zinc-900 text-[10px] uppercase tracking-widest text-zinc-600">
          Transmission Terminal: WAIVER_V1.0.4 // Sanguine Systems
        </footer>
      </main>
    </div>
  );
}
