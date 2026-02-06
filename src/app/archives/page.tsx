import Link from 'next/link';

export default function TerminalArchives() {
  const archives = [
    {
      id: "LOG-1742",
      title: "THE 1742 LEDGER",
      subject: "Mercantile Dominance via Epochal Anchors",
      transcript: "Examination of the ledger belonging to [REDACTED] (1742-1898) reveals a pattern of investment inconsistent with human lifespan. He did not compete with his peers; he waited for them to return to the earth.",
      classification: "EPOCHAL-ALPHA"
    },
    {
      id: "LOG-RATIO",
      title: "THE SANGUINE RATIO",
      subject: "03:00 - 04:00 Cognitive Leverage",
      transcript: "Clinical observation indicates that the biological 'hum' of the mortal world reaches its nadir at exactly 03:14 AM. For the Nocturnal Elite, this provides a 4x increase in synaptic clarity. If you are awake while the world sleeps, you are outrunning the sun.",
      classification: "TEMPORAL-BETA"
    },
    {
      id: "LOG-RENFIELD",
      title: "RENFIELD'S FIRST DUTY",
      subject: "Administrative Filtration (The Silence Protocol)",
      transcript: "Instruction for the proxy: The Master is not to be disturbed by the buzz of the flies. Your primary duty is not to serve the Master, but to serve the Master's SILENCE. Failure to filter will result in [REDACTED].",
      classification: "PROTOCOL-GAMMA"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Navigation Header */}
      <nav className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xs font-mono text-zinc-400 hover:text-sanguine transition-colors flex items-center gap-2"
        >
          ← RETURN TO PORTAL
        </Link>
        <div className="text-sm font-mono font-bold text-sanguine">
          [ TERMINAL ARCHIVES ]
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="glass sanguine-border p-8 rounded-lg relative overflow-hidden">
          <div className="scanline"></div>
          <h1 className="text-4xl font-mono font-bold text-sanguine mb-2">
            [ TERMINAL ARCHIVES ]
          </h1>
          <p className="text-zinc-400 font-mono text-sm">
            RECOVERY LOG: EB-992-X | SANGUINE OPTIMIZATION: ACTIVE
          </p>
          <p className="text-zinc-500 font-mono text-xs mt-2">
            ACCESS LEVEL: NOCTURNAL EXECUTIVE | EPOCHAL ANCHOR: SYNCED
          </p>
        </div>
      </div>

      {/* Artifact Cards Carousel Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {archives.map((archive, index) => (
          <div
            key={archive.id}
            className="glass sanguine-border p-6 rounded-lg relative overflow-hidden hover:shadow-[0_0_30px_rgba(139,0,0,0.3)] transition-all duration-500 hover:scale-105 cursor-pointer group"
          >
            <div className="scanline"></div>
            
            {/* Card Header */}
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-[10px] font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded border border-zinc-700">
                  ARTIFACT #{String(index + 1).padStart(3, '0')}
                </div>
                <div className="text-[9px] font-mono text-zinc-600 uppercase">
                  {archive.classification}
                </div>
              </div>
              <h2 className="text-lg font-mono font-bold text-sanguine mb-1 group-hover:text-red-400 transition-colors">
                {archive.title}
              </h2>
              <div className="text-[10px] font-mono text-zinc-500">
                {archive.id}
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4">
              <div className="text-[9px] font-mono text-zinc-600 uppercase mb-1">
                Subject
              </div>
              <div className="text-xs font-mono text-zinc-400 leading-relaxed">
                {archive.subject}
              </div>
            </div>

            {/* Transcript Preview */}
            <div className="mb-4">
              <div className="text-[9px] font-mono text-zinc-600 uppercase mb-1">
                Excerpt
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded p-3">
                <p className="text-[11px] font-mono text-zinc-400 leading-relaxed line-clamp-4">
                  {archive.transcript}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-zinc-800 pt-3 flex justify-between items-center">
              <div className="text-[9px] font-mono text-zinc-600">
                VERIFIED
              </div>
              <div className="text-[9px] font-mono text-sanguine opacity-0 group-hover:opacity-100 transition-opacity">
                [ VIEW FULL ]
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Field Observation */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="glass border border-zinc-800 p-6 rounded-lg">
          <div className="text-xs font-mono text-zinc-500 uppercase mb-2">
            [ FIELD OBSERVATION ASSIGNMENT ]
          </div>
          <p className="text-sm font-mono text-zinc-300 mb-4">
            &gt; Catalog the non-linear temporal shifts in your tertiary social circle and report any variances in kinetic stability.
          </p>
          <div className="text-xs font-mono text-zinc-500 text-right">
            - NOCTURNAL SYSTEMS AUDITOR
          </div>
          <div className="text-xs font-mono text-sanguine text-right mt-1">
            [ END OF TRANSMISSION ]
          </div>
        </div>
      </div>
    </div>
  );
}
