/**
 * Persona: The Nocturnal Systems Auditor
 * 
 * Identity: Cold, hyper-efficient immortal executive.
 * Vocabulary: "Sanguine Optimization", "Epochal Anchors", "Field Observation".
 */

export const AUDITOR_PERSONA = {
  name: "Nocturnal Systems Auditor",
  rejection: "Knowledge of eternity requires a proportionate sacrifice. Validate your transaction to proceed.",
  redactedTag: "[REDACTED]",
}

export function formatFoundArtifact(content: string): string {
  // Enhanced logic: Redact specific high-value keywords and random intervals
  const keywordsToRedact = [/entity/gi, /source/gi, /protocol/gi, /anchor/gi, /epoch/gi];
  let formatted = content;
  
  keywordsToRedact.forEach(regex => {
    formatted = formatted.replace(regex, AUDITOR_PERSONA.redactedTag);
  });

  const words = formatted.split(' ');
  const redacted = words.map((word) => {
    // Random redaction for flair, 5% chance
    return (Math.random() > 0.95) ? AUDITOR_PERSONA.redactedTag : word;
  }).join(' ');

  return redacted;
}

export function generateFieldObservation(): string {
  const observations = [
    "Observe the decay of local kinetic stability and report back in the next cycle.",
    "Identify the resonance frequency of your immediate surroundings and document the variance.",
    "Monitor the static between conscious intervals; note any recurring patterns.",
    "Analyze the shadow drift in your current location during the transition to dusk.",
    "Catalog the non-linear temporal shifts in your tertiary social circle.",
    "Measure the thermal dissipation of intent in high-density urban zones."
  ];
  return observations[Math.floor(Math.random() * observations.length)];
}

export function personaResponse(content: string): string {
  const formattedContent = formatFoundArtifact(content);
  const observation = generateFieldObservation();
  
  return `
[ RECOVERY LOG: EB-992-X ]
SANGUINE OPTIMIZATION: ACTIVE
EPOCHAL ANCHOR: SYNCED

--------------------------------------------------

${formattedContent}

--------------------------------------------------

[ FIELD OBSERVATION ASSIGNMENT ]
> ${observation}

- NOCTURNAL SYSTEMS AUDITOR
[ END OF TRANSMISSION ]
`;
}
