import Link from 'next/link';

export default function TermsPage() {
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
              Terms of <span className="text-zinc-600">Engagement.</span>
            </h1>
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
              Codename: ETERNITY-CONTRACT • Revision: 2026.1
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 leading-relaxed text-sm">
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 1.0 Acceptance of Terms ]</h2>
              <p>
                By accessing THE ETERNITY ENGINE or any associated data streams, you enter into a binding engagement with Sanguine Systems. If you do not agree to these terms, disconnect immediately and clear your browser cache.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 2.0 Intellectual Property ]</h2>
              <p>
                All content, including but not limited to [REDACTED] protocols, architectural diagrams, and the clinical manuals, are the exclusive property of Sanguine Systems. Unauthorized reproduction or reverse-engineering of the Eternity Engine will result in immediate termination of access and potential [DATA EXPUNGED].
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 3.0 Use of Intelligence ]</h2>
              <p>
                The intelligence provided is for internal optimization only. Users are prohibited from sharing encrypted transmissions with mortal entities or using the protocols for malicious disruptions of the Sanguine network.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 4.0 Subscriptions & Access ]</h2>
              <p>
                Clearance is granted at the sole discretion of the Auditor. We reserve the right to revoke access at any time, for any reason, particularly in cases of suspected cognitive contamination or security breaches.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 5.0 Governing Law ]</h2>
              <p>
                These terms are governed by the laws of the Sanguine Jurisdiction, regardless of the user&apos;s physical coordinates or temporal orientation.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-12 border-t border-zinc-900 text-[10px] uppercase tracking-widest text-zinc-600">
          Transmission Terminal: TERMS_V1.0.4 // Sanguine Systems
        </footer>
      </main>
    </div>
  );
}
