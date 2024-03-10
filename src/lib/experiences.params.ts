import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'rg-2023',
		company: 'Riot Games',
		description: `Improved player experience in the popular shooter game VALORANT by eliminating cheaters through a high-latency match filter in the Go backend matchmaking services, impacting over 25 million+ active monthly users.
		Collaborated with the Insights Team to leverage Data Analytics for optimizing competitive matchmaking by upgrading the match selection algorithm, resulting in a 15% improvement in matchmaking equity.
		Hot-fixed in-game bugs in Unreal Engine and C++, including a live tournament bug that affected 1 million+ players.`,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Los Angeles, CA',
		period: { from: new Date(2023, 5, 1), to: new Date(2023, 8, 14) },
		skills: getSkills('go', 'unreal-engine', 'cpp'),
		name: 'Software Engineer (Internship)',
		color: '#ffffff',
		links: [],
		logo: Assets.RiotGames,
		shortDescription: '',
		website: 'https://www.riotgames.com/en' 
	},
	{
		slug: 'apple-2023',
		company: 'Apple',
		description: `Designed and implemented backend REST API endpoints in .NET for automating a large-scale service testing service, resulting in a 98% enhanced flow efficiency and streamlining of testing.
		Developed a deployable Python testing framework with Docker that automated unit and integration tests, enabling efficient multi-environment validation for hardware engineers and reducing onboarding time by 80%.
		Engineered and integrated XGBoost Machine Learning models in Python to predict hardware charge behavior, enabling real-time anomaly detection and explainable insights for 90% improved decision-making.`,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Cupertino, CA',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 5, 31) },
		skills: getSkills('docker', 'python', 'numpy', 'c-sharp'),
		name: 'Software/AI Engineer (Internship)',
		color: '#ffffff',
		links: [],
		logo: Assets.Apple,
		shortDescription: '',
		website: 'https://www.apple.com/' 
	},
	{
		slug: 'rg-2022',
		company: 'Riot Games',
		description: `Led an initiative to streamline data access across team products by developing an automated support Slackbot using Go with JIRA and Slack REST API integrations, resulting in a 75% improvement in support time and team productivity.
		Implemented an NLP classifier using Python and BERT, reducing data support on-call team workload by 33% through automated product triaging and solution generation.
		Performed data analysis using Python and automated Databricks notebook jobs, enhancing AI chatbot integration which improved on-call service response time by 40%.`,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Los Angeles, CA',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 7, 31) },
		skills: getSkills('go', 'node'),
		name:  'Software Engineer (Internship)',
		color: '#ffffff',
		links: [],
		logo: Assets.RiotGames,
		shortDescription: '',
		website: 'https://www.riotgames.com/en' 
	},
	{
		slug: 'bns-2021',
		company: 'Scotiabank',
		description: `Processed and displayed data from ML recommender models into a Django app with Python to enhancing productivity for over 300 Customer Relational Managers all over Canada by reducing data processing time by 20%.
		Increased generated business leads for Relational Managers by 500% by writing Spark and SQL queries.`,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Toronto, ON',
		period: { from: new Date(2021, 4, 1), to: new Date(2021, 7, 31) },
		skills: getSkills('css', 'html', 'js', 'python', 'django', 'numpy'),
		name: 'Data Scientist (Internship)',
		color: '#ffffff',
		links: [],
		logo: Assets.Scotiabank,
		shortDescription: '',
		website: 'https://www.scotiabank.com/ca/en/personal.html' 
	},
	{
		slug: 'sonicaly-2021',
		company: 'Sonical.ly',
		description: `Developed an educational mobile game in Unity, taking charge of backend system design in C# for an immersive audio production learning experience that was beta-tested by a community of 1000+ users.
		Created Firebase backend services for user logins and persistent data, leading to a 300% increase in player base.`,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Vancouver, BC',
		period: { from: new Date(2021, 0, 1), to: new Date(2021, 3, 30) },
		skills: getSkills('unity', 'node', 'firebase'),
		name: 'Mobile Engineer (Internship)',
		color: '#ffffff',
		links: [],
		logo: Assets.Sonically,
		shortDescription: '',
		website: 'https://www.sonical.ly/' 
	}
];

export default MY_EXPERIENCES;
