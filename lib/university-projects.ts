import type { Project } from "./projects";

// Restored from the university-project descriptions in commit 3d41268.
// Doodle Jump details are also verified against its public repository.
export const universityProjects: Project[] = [
  {
    slug: "machine-learning-doodle-jump",
    name: "Machine Learning & Doodle Jump",
    repository: "https://github.com/elliotshohet/doodle-jump-machine-learning",
    title: "Learning to play Doodle Jump through interaction",
    subtitle: "A collaborative UC Davis project applying Q-learning to an HTML5 game.",
    description: "Contributed to a UC Davis team project applying Q-learning to HTML5 Doodle Jump, with training controls, performance charts, and browser persistence.",
    role: "University project · Contributor",
    period: "2015",
    tags: ["Q-learning", "HTML5", "JavaScript"],
    summary: "I contributed to a UC Davis team project applying Q-learning to HTML5 Doodle Jump. The browser interface includes training-speed controls, performance charts, and saved learning state.",
    contribution: "Contributed to the collaborative university project exploring how a Q-learning agent learns to play Doodle Jump through interaction.",
    sections: [
      {
        heading: "Q-learning in a game environment",
        text: "The team applied Q-learning to an HTML5 implementation of Doodle Jump. The browser interface lets users adjust game speed and disable rendering while the agent trains.",
      },
      {
        heading: "Inspecting and preserving training",
        text: "Charts show average score and explored states per ten deaths. The agent’s learning state is automatically saved and loaded between browser sessions.",
      },
    ],
    outcome: "A collaborative browser-based reinforcement-learning project with visible training controls, performance charts, and persistent learning state.",
    flowHeading: "The project scope",
    flow: ["HTML5 Doodle Jump", "Q-learning agent", "Learning through interaction"],
  },
];
