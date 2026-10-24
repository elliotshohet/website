import type { Project } from "./projects";

export const blockchainProjects: Project[] = [
  {
    slug: "chrono-token",
    name: "ChronoToken",
    repository: "https://github.com/elliotshohet/chrono-token",
    title: "Scheduling Ethereum transactions with execution incentives",
    subtitle: "A smart-contract prototype for scheduled callbacks and execution bounties.",
    description: "An Ethereum scheduling prototype that uses funded bounties and execution slots to coordinate callbacks and reassign missed work.",
    role: "Repository project",
    period: "Nov 2017",
    tags: ["Solidity", "Ethereum", "JavaScript", "Truffle", "Web3"],
    summary: "ChronoToken explores a decentralized marketplace for executing scheduled Ethereum transactions. Each transaction is assigned an execution slot, whose owner has an initial opportunity to execute the callback and collect its bounty. After a grace window, another executor can claim the work and, when permitted, capture the slot.",
    contribution: "A scheduling contract and initial JavaScript client, with example callbacks, protocol documentation, and tests for timing, execution rights, and reentrancy.",
    sections: [
      { heading: "Execution incentives in the contract", text: "The Scheduler contract records a target callback, start time, gas allowance, owner, and funded bounty for each scheduled transaction. Slot ownership determines the initial beneficiary; a grace window opens missed transactions to other executors. The implementation also includes slot transfers, cancellation with refunds, and events for scheduling, execution, cancellation, and slot transfers." },
      { heading: "Protocol exploration and test coverage", text: "Repository tests exercise scheduling, execution timing, beneficiary checks, gas requirements, slot capture, and reentrancy behavior. This remains a prototype: the README lists unfinished client software and protocol TODOs, including beneficiary separation and changes to slot-capture timing." },
    ],
    outcome: "A scheduling prototype with funded execution, cancellation refunds, and rules for another executor to pick up missed work.",
    flowHeading: "The scheduling flow",
    flow: ["Fund a callback", "Assign an execution slot", "Wait for the start time", "Execute and collect the bounty"],
  },
  {
    slug: "continuous-payments",
    name: "Continuous Payments",
    repository: "https://github.com/elliotshohet/Continuous-Payments",
    title: "Per-second wage vesting in an Ethereum contract",
    subtitle: "Accrued wages, contractor withdrawals, and employer access to unvested funds.",
    description: "A Solidity prototype that calculates wages from elapsed time, caps claims at available funds, and separates contractor and employer withdrawal rules.",
    role: "Repository project",
    period: "Dec 2017 – Mar 2018",
    tags: ["Solidity", "Ethereum", "JavaScript", "Truffle", "Web3", "Webpack"],
    summary: "Continuous Payments models wages as funds that vest every second. A configurable payment rate determines the amount available to a contractor, capped by the contract balance. The employer can withdraw the remaining unvested balance.",
    contribution: "Implemented the vesting and withdrawal contract, a mock clock for time-based tests, and JavaScript tests with Truffle/Webpack tooling.",
    sections: [
      { heading: "Time-based payment logic", text: "The contract records a contractor, employer, start time, and wei-per-second rate. Funding starts the payment period, and balanceOwed calculates accrued payment from elapsed time while capping it at available funds. Contractor and employer withdrawals emit events recording the amount and withdrawing address." },
      { heading: "A focused contract experiment", text: "A mock contract overrides the clock to support time-dependent tests, and the README documents running tests with TestRPC and Truffle. The implementation uses Solidity 0.4.15 and includes a TODO for contract reuse. The focus is the vesting calculation and withdrawal behavior." },
    ],
    outcome: "A time-based payment contract with distinct withdrawal rules for accrued wages and remaining employer funds.",
    flowHeading: "The payment flow",
    flow: ["Set a payment rate", "Fund the contract", "Accrue wages over time", "Withdraw available funds"],
  },
];
