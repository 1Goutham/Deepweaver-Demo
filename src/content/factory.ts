export const factoryStack = [
  { layer: "Human", body: "Approves, overrides, sets priorities", tone: "amber" },
  { layer: "Factory Brain · AI", body: "AI planning · scheduling · optimisation · recommendations", tone: "brand" },
  { layer: "Business & operations", body: "ERP · MES · Inventory · CRM · Purchase · Maintenance · Quality · Dispatch", tone: "neutral" },
  { layer: "Deterministic control", body: "SCADA · PLC · CNC · Sensors · Vision systems", tone: "neutral" },
  { layer: "Machines", body: "Lines, cells, tooling, plant", tone: "neutral" },
];

export const whoNeeds = [
  { name: "Schedules built in spreadsheets", body: "Planners re-plan by hand whenever an order or machine changes" },
  { name: "Unplanned downtime", body: "Breakdowns found after the line stops, not before" },
  { name: "ERP says one thing, the floor another", body: "No layer reconciling plan against actual production" },
  { name: "Quality caught late", body: "Defects found at final inspection rather than at the cell" },
  { name: "Inventory buffered on instinct", body: "Safety stock covering for forecasts nobody trusts" },
  { name: "Expertise walking out the door", body: "Scheduling knowledge held by a handful of people" },
];

export const factoryFunctions = [
  { area: "Sales", items: ["Demand prediction", "Order prioritisation", "Delivery prediction", "Quote conversion"] },
  { area: "Inventory", items: ["Stock optimisation", "Raw material alerts", "Dead stock detection", "Reorder points"] },
  { area: "Production", items: ["Finite capacity scheduling", "Line balancing", "Machine allocation", "Shift planning"] },
  { area: "Maintenance", items: ["Predictive maintenance", "Planned downtime", "Maintenance windows", "Spare-parts prediction"] },
  { area: "Quality", items: ["Vision inspection", "Root-cause suggestions", "Rework prediction", "Defect trend analysis"] },
  { area: "Dispatch", items: ["Truck planning", "Delivery ETA", "Loading optimisation", "Route consolidation"] },
  { area: "Procurement", items: ["Vendor performance", "Purchase suggestions", "Shortage alerts", "Lead-time forecasting"] },
];

export const factoryOutcomes = [
  { label: "Less machine idle time", sub: "Better scheduling" },
  { label: "Less scheduling effort", sub: "AI-assisted planning" },
  { label: "Lower inventory carrying cost", sub: "Demand prediction" },
  { label: "Improved on-time delivery", sub: "Dynamic dispatch" },
];

export const deployment = [
  { name: "Cloud", body: "Fastest, usage-based" },
  { name: "Hybrid", body: "On-premise data, 4–8 weeks" },
  { name: "On-premise", body: "Fully in-house, 8–12+ weeks" },
];
