import { g as getSkills, A as Assets } from "./skills.params.js";
var Platform = /* @__PURE__ */ ((Platform2) => {
  Platform2["GitHub"] = "github";
  Platform2["StackOverflow"] = "stackoverflow";
  Platform2["Twitter"] = "twitter";
  Platform2["Linkedin"] = "linkedin";
  Platform2["Email"] = "email";
  Platform2["Facebook"] = "facebook";
  Platform2["Youtube"] = "youtube";
  return Platform2;
})(Platform || {});
var ContractType = /* @__PURE__ */ ((ContractType2) => {
  ContractType2["FullTime"] = "Full-time";
  ContractType2["PartTime"] = "Part-time";
  ContractType2["SelfEmployed"] = "Self-employed";
  ContractType2["Freelance"] = "Freelance";
  ContractType2["Contract"] = "Contract";
  ContractType2["Internship"] = "Internship";
  return ContractType2;
})(ContractType || {});
const MY_EXPERIENCES = [
  {
    slug: "open-sourcer",
    company: "Riot Games",
    description: `Improving player experience in the top shooter game VALORANT by eliminating cheaters through backend Go matchmaking services, impacting over 25 million active monthly users
		Collaborated with the Insights Team to leverage Data Analytics for strategic improvements in competitive matchmaking, resulting in significant enhancements affecting over 3 million high-ranked players
		Hotfixing in-game bugs in Unreal Engine and C++, including a live tournament bug that affected 1 million players`,
    contract: ContractType.SelfEmployed,
    type: "Software Development",
    location: "Los Angeles, CA",
    period: { from: new Date(2023, 5, 1), to: new Date(2023, 8, 14) },
    skills: getSkills("ts", "js"),
    name: "Software Engineer (Internship)",
    color: "#ffffff",
    links: [],
    logo: Assets.RiotGames,
    shortDescription: ""
  },
  {
    slug: "software-freelance",
    company: "Apple",
    description: "Creating awesome applications for customers.",
    contract: ContractType.Freelance,
    type: "Software Development",
    location: "Cupertino, CA",
    period: { from: new Date(2023, 0, 1), to: new Date(2023, 5, 31) },
    skills: getSkills("svelte", "ts", "sass", "css", "html", "js"),
    name: "Software/AI Engineer (Internship)",
    color: "#ffffff",
    links: [],
    logo: Assets.Apple,
    shortDescription: ""
  },
  {
    slug: "software-freelance-junior",
    company: "Riot Games",
    description: "Creating awesome applications for customers.",
    contract: ContractType.Freelance,
    type: "Software Development",
    location: "Los Angeles, CA",
    period: { from: new Date(2022, 4, 1), to: new Date(2022, 7, 31) },
    skills: getSkills("css", "html", "js"),
    name: "Software Engineer (Internship)",
    color: "#ffffff",
    links: [],
    logo: Assets.RiotGames,
    shortDescription: ""
  }
];
export {
  MY_EXPERIENCES as M,
  Platform as P
};
