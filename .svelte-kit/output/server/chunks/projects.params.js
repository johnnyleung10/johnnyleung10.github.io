import { A as Assets, g as getSkills } from "./skills.params.js";
const MY_PROJECTS = [
  {
    slug: "unity-genetic-algorithm",
    color: "#5e95e3",
    description: "Designed and created a platformer game in Unity where the primary objective was to mine diamonds in a Minecraft-like world. This was done through a neural network and a genetic algorithm model to train the AI into learning the game through evolution in over 300 generations, where each generation had 20 models, the top 2 of which were chosen to reproduce and cross over DNA into the new generation",
    shortDescription: "Designed and created a platformer game in Unity where the primary objective was to mine diamonds in a Minecraft-like world. This was done through a neural network and a genetic algorithm model to train the AI into learning the game through evolution in over 300 generations, where each generation had 20 models, the top 2 of which were chosen to reproduce and cross over DNA into the new generation",
    links: [{ to: "https://github.com/johnnyleung10/MinemanNeuralNetwork", label: "GitHub" }],
    logo: Assets.Unknown,
    name: "Minecraft Mining Neural Network",
    period: {
      from: new Date()
    },
    skills: getSkills("angular", "ts", "tailwind"),
    type: "Website Template"
  },
  {
    slug: "python-breast-cancer-model",
    color: "#ff3e00",
    description: "Extracted 699 cases of breast cancer data from the UCI Machine Learning Repository to train a program to predict whether a tumor is benign or malignant. The data was then extrapolated using a Support Vector Machine (SVM) model to find the correlation between the measured factors and the type of tumor. I used TensorFlow, NumPy, and scikit-learn for manipulating the data and to implement machine learning for predict the results to a ~95% accuracy.",
    shortDescription: "Extracted 699 cases of breast cancer data from the UCI Machine Learning Repository to train a program to predict whether a tumor is benign or malignant. The data was then extrapolated using a Support Vector Machine (SVM) model to find the correlation between the measured factors and the type of tumor. I used TensorFlow, NumPy, and scikit-learn for manipulating the data and to implement machine learning for predict the results to a ~95% accuracy.",
    links: [{ to: "https://github.com/RiadhAdrani/slick-portfolio-svelte", label: "GitHub" }],
    logo: Assets.Svelte,
    name: "Breast Cancer SVM Predictor",
    period: {
      from: new Date()
    },
    skills: getSkills("svelte", "ts", "tailwind", "sass"),
    type: "Website Template",
    screenshots: [
      {
        label: "screen 1",
        src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "2",
        src: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "3",
        src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "4",
        src: "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "5",
        src: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      },
      {
        label: "6",
        src: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  {
    slug: "slick-portfolio-angular",
    color: "#5e95e3",
    description: "Utilizing TD Bank's Da Vinci API, Firebase API, and Google Maps API, we created a web-app with a heatmap for displaying transaction hotspots in Toronto. I was in charge of the front-end component, using React and Firebase to retrieve and convert the data from numbers into points on the graph. It was my first time using react so it was a great opportunity for me to practice learning on the go and to work with something I was not comfortable with.",
    shortDescription: "Utilizing TD Bank's Da Vinci API, Firebase API, and Google Maps API, we created a web-app with a heatmap for displaying transaction hotspots in Toronto. I was in charge of the front-end component, using React and Firebase to retrieve and convert the data from numbers into points on the graph. It was my first time using react so it was a great opportunity for me to practice learning on the go and to work with something I was not comfortable with.",
    links: [{ to: "https://github.com/mslwang/mapa", label: "GitHub" }],
    logo: Assets.Unknown,
    name: "MAPA",
    period: {
      from: new Date()
    },
    skills: getSkills("react", "js", "firebase"),
    type: "Website Template"
  }
];
export {
  MY_PROJECTS as M
};
