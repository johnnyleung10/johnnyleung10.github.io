import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'bloom-notetaking',
		color: '#FF5733',
		description: '',
		shortDescription: 'Bloom is an Android notetaking application that features note creation for everyday users as well as daily journalling in the form of Daily Entries. I worked on the frontend as well as the backend using Java and Springboot to create REST API Endpoints.',
		links: [{ to: 'https://github.com/johnnyleung10/Bloom-Notetaking-App', label: 'GitHub' }],
		logo: Assets.BloomNotetaking,
		name: 'Bloom Notetaking App',
		period: {
			from: new Date(2022, 0, 1),
			to: new Date(2022, 3, 1)
		},
		skills: getSkills('java', 'spring-boot', 'android', 'postgres',),
		type: 'Android Mobile App'
	},
	{
		slug: 'unity-genetic-algorithm',
		color: '#5e95e3',
		description: '',
		shortDescription:
			'Designed and created a platformer game in Unity where the primary objective was to mine diamonds in a Minecraft-like world. This was done through a neural network and a genetic algorithm model to train the AI into learning the game through evolution in over 300 generations, where each generation had 20 models, the top 2 of which were chosen to reproduce and cross over DNA into the new generation',
		links: [{ to: 'https://github.com/johnnyleung10/MinemanNeuralNetwork', label: 'GitHub' }],
		logo: Assets.MinemanNN,
		name: 'Minecraft Mining Neural Network',
		period: {
			from: new Date(2020, 3, 1),
			to: new Date(2020, 8, 1)
		},
		skills: getSkills('c-sharp', 'unity',),
		type: 'Unity Project w/ AI'
	},
	{
		slug: 'python-breast-cancer-model',
		color: '#FF08A7',
		description: '',
		shortDescription:
			'Extracted 699 cases of breast cancer data from the UCI Machine Learning Repository to train a program to predict whether a tumor is benign or malignant. The data was then extrapolated using a Support Vector Machine (SVM) model to find the correlation between the measured factors and the type of tumor. I used TensorFlow, NumPy, and scikit-learn for manipulating the data and to implement machine learning for predict the results to a ~95% accuracy.',
		links: [{ to: 'https://github.com/johnnyleung10/BreastCancerSVM', label: 'GitHub' }],
		logo: Assets.BreastCancer,
		name: 'Breast Cancer SVM Predictor',
		period: {
			from: new Date(2020, 0, 1),
			to: new Date(2020, 0, 1)
		},
		skills: getSkills('python', 'scikit-learn'),
		type: 'Python ML Project',
	},
	{
		slug: 'mapa-react-app',
		color: '#6FDA19',
		description: '',
		shortDescription:
			'Utilizing TD Bank\'s Da Vinci API, Firebase API, and Google Maps API, we created a web-app with a heatmap for displaying transaction hotspots in Toronto. I was in charge of the front-end component, using React and Firebase to retrieve and convert the data from numbers into points on the graph. It was my first time using react so it was a great opportunity for me to practice learning on the go and to work with something I was not comfortable with.',
		links: [{ to: 'https://github.com/mslwang/mapa', label: 'GitHub' }],
		logo: Assets.TDApp,
		name: 'MAPA',
		period: {
			from: new Date(2019, 8, 1),
			to: new Date(2019, 8, 1)
		},
		skills: getSkills('reactjs', 'js', 'firebase'),
		type: 'React Project'
	},
];

export default MY_PROJECTS;
