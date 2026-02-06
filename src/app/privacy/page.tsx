import Link from 'next/link';

export default function PrivacyPage() {
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
              Privacy <span className="text-zinc-600">Protocol.</span>
            </h1>
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
              Last Updated: February 6, 2026 • Encryption Level: Sanguine-4
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 1.0 Data Ingestion ]</h2>
              <p>
                We do not harvest mortal data for commercial trade. When you request clearance (newsletter signup), we store your email address solely for the delivery of encrypted transmissions. This data is kept within isolated silos protected by the Nocturnal Systems Auditor.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 2.0 Tracking & Cookies ]</h2>
              <p>
                Our systems utilize minimal tracking required for operational stability. We use local storage for terminal persistence and session management. No third-party ad beacons are permitted within this domain.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 3.0 Third-Party Handshakes ]</h2>
              <p>
                We utilize Beehiiv for our intelligence briefings. Their own security protocols apply to information submitted via the request forms. We do not sell your soul or your data to external entities.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 4.0 Your Rights ]</h2>
              <p>
                You may request data expungement at any time by utilizing the &quot;unsubscribe&quot; link in any transmission or by contacting the Auditor directly. Upon request, all traces of your identity will be purged from our primary silos.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-tight">[ 5.0 Security ]</h2>
              <p>
                Transmission of data over the public internet is inherently insecure. While we employ Sanguine-grade encryption, we cannot guarantee the absolute invisibility of your connection while traversing mortal infrastructure.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-12 border-t border-zinc-900 text-[10px] uppercase tracking-widest text-zinc-600">
          Transmission Terminal: PRIVACY_V1.0.4 // Sanguine Systems
        </footer>
      </main>
    </div>
  );
}
