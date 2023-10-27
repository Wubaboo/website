export const projects = [
  {
    title: "Coming soon: A Mobile Party Game",
    description:
      "I'm currently in the process of developing a mobile party game inspired by the popular board game, Just One. Using AWS Lambda and WebSockets, I'm working to create a scalable, seamless and highly responsive gaming experience. Stay tuned!",
    technologies: ["AWS", "JavaScript", "React Native"],
    link: null,
    image: process.env.PUBLIC_URL + "/assets/img/only_one.png",
  },
  {
    title: "YouTube to PDF Generated Sheet Music",
    description:
      "ytSheetMusic is a utility I created to extract sheet music from YouTube videos that feature musical scores. It captures and assembles the relevant image portions, consolidating the results into a PDF file.",
    technologies: ["AWS", "Python", "JavaScript", "React", "Flask"],
    link: "https://github.com/Wubaboo/ytSheetMusic",
    image: process.env.PUBLIC_URL + "/assets/img/ytSheetMusic.png",
  },
  {
    title: "Memory Games",
    description:
      "I've developed a collection of memory games using React Native. My inspiration for this project stems from a family history of Dementia, and this initiative represents my personal effort to address and combat it.",
    technologies: ["JavaScript", "React Native"],
    link: "https://play.google.com/store/apps/details?id=com.wubaboo.memoryapp",
    image: process.env.PUBLIC_URL + "/assets/img/memory_games.png",
  },
  {
    title: "Ambigrams",
    description:
      "Ambigram: a calligraphic design that can be viewed from multiple perspectives \nI encountered Ambigrams reading Gödel, Escher, Bach: an Eternal Golden Braid by Douglas Hofstadter",
    link: "ambigrams/",
    technologies: [],
    image: process.env.PUBLIC_URL + "/assets/img/placid.png",
    style: {
      objectFit: "contain",
      backgroundColor: "rgb(230,230,230)",
    },
  },
];
