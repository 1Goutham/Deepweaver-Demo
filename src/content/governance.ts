export const governanceWorkflow = [
  { step: "01", name: "Discovery & scoping", body: "Use cases, stakeholders, regulatory exposure" },
  { step: "02", name: "Gap assessment", body: "Current state against a regulatory framework" },
  { step: "03", name: "Process governance", body: "Controls, roles and decision rights" },
  { step: "04", name: "Implementation", body: "Tooling, evidence and reporting live" },
];

export const sixPillars = [
  { name: "Leadership", body: "Committee, sponsorship, decision rights", proof: "Named owner for every AI decision" },
  { name: "Policies", body: "Principles, policy suite, procedures", proof: "Ratified and version-controlled" },
  { name: "Risk", body: "Taxonomy, assessments, register", proof: "Treatment plans with due dates" },
  { name: "Controls", body: "Gates, monitoring, human review", proof: "Release blocked without evidence" },
  { name: "Training", body: "AI literacy, role-based enablement", proof: "Certification pathway for key staff" },
  { name: "Reporting", body: "Evidence, lineage, external reporting", proof: "Audit pack produced on demand" },
];

export const threeLevels = [
  { name: "Organisational", body: "Oversight, structure, culture" },
  { name: "System", body: "Lifecycle, risk, incidents, gates" },
  { name: "Model", body: "Registry, drift, monitoring, evidence" },
];

export const governanceModules = [
  { code: "G1", name: "Assessment & Risk Tiering", weeks: "4–6 weeks", body: "Inventory and risk-tier the AI estate, score maturity, price the gap.", deliverables: "Risk-tiered inventory, maturity scorecard" },
  { code: "G2", name: "Policy, Framework & Literacy", weeks: "6–8 weeks", body: "Policy suite, committee, decision rights, GRC literacy.", deliverables: "Policy suite, committee charter, intake gate" },
  { code: "G3", name: "Risk & Impact Assessment", weeks: "8–10 weeks", body: "ISO 42005 impact assessments, FRIA, risk register, controls.", deliverables: "Impact assessments, risk register" },
  { code: "G4", name: "Testing, Evaluation & Red-Teaming", weeks: "8–12 weeks", body: "Evals, red-teaming, bias and drift testing, evidence platform.", deliverables: "Eval results, red-team findings" },
  { code: "G5", name: "Audit, Certification & Assurance", weeks: "10–14 weeks", body: "Internal audit, conformity audit, vendor audit, attestation.", deliverables: "Audit report, control scores, attestation" },
  { code: "G6", name: "AIOps & Managed Governance", weeks: "Annuity · 12 months+", body: "Continuous monitoring, evidence on demand, retained expertise.", deliverables: "Monthly dashboards, incident register" },
];

/** Four-week accelerators — fixed scope, fixed deliverables. Descriptions use the
 *  deck's own terms for the module each accelerator draws from. */
export const accelerators = [
  { code: "A1", name: "Transparency", weeks: "4 weeks", body: "Explainability, audit trail and reporting for the AI systems already in use.", module: "Reporting" },
  { code: "A2", name: "Vendor audit", weeks: "4 weeks", body: "Vendor audit against ISO/IEC 42001 and NIST AI RMF, with control scores.", module: "G5 Audit, Certification & Assurance" },
  { code: "A3", name: "Agent guardrails", weeks: "4 weeks", body: "Guardrail tuning, approval gates and exception and escalation paths for agents in production.", module: "Controls" },
  { code: "A4", name: "Red-team sprint", weeks: "4 weeks", body: "Evals, red-teaming, bias and drift testing — eval results and red-team findings.", module: "G4 Testing, Evaluation & Red-Teaming" },
  { code: "A5", name: "GRC literacy", weeks: "4 weeks", body: "AI literacy and role-based enablement, with a certification pathway for key staff.", module: "G2 Policy, Framework & Literacy" },
  { code: "A6", name: "AIOps baseline", weeks: "4 weeks", body: "Continuous monitoring and evidence on demand — monthly dashboards and an incident register.", module: "G6 AIOps & Managed Governance" },
];
