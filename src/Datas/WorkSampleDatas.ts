export const WorkSampleDatas:WorkSamplesProps[] = [
	{
		"title": "Equine therapy",
		"image": `${process.env.PUBLIC_URL}/assets/equimed.webp`,
		"description": "This is a website for a therapist who make therapies with the help of Earth horses. ",
		"githubLink": "https://github.com/Ngc1987/Mediation-equine",
		"liveDemoLink": "https://domequimediation.netlify.app/",
	},
	{
		"title": "Portfolio",
		"image": `${process.env.PUBLIC_URL}/assets/portfolio.webp`,
		"description": "This is my portfolio. You are already on this, but if you like infinite loops, click on it !",
		"githubLink": "https://github.com/Ngc1987/portfolio",
		"liveDemoLink": "https://thomasemeriaportfolio.netlify.app/",
	},
	{
		"title": "UniverseGram",
		"image": `${process.env.PUBLIC_URL}`,
		"description": "UniverseGram is the first social media inter-galaxys. Talk and share with other peoples of the universe 🪐. I'll made it with React, Redux, NodeJS, Express, and MongoDB",
		"githubLink": "",
		"liveDemoLink": "",
		"inProgress": true
	},
	{
		"title": "KasaRent",
		"image": `${process.env.PUBLIC_URL}/assets/kasa.webp`,
		"description": "KasaRent, immo web site",
		"githubLink": "https://github.com/Ngc1987/ThomasSemeria_11_20092021/tree/main/kasa",
		"liveDemoLink": "https://kasarent.netlify.app/",
	},
	{
		"title": "Sportsee App",
		"image": `${process.env.PUBLIC_URL}/assets/sportsee.webp`,
		"description": "Sportsee App, a dashboard to follow your performances",
		"githubLink": "https://github.com/Ngc1987/-ThomasSemeria_12_14102021",
		"liveDemoLink": "https://sportseeapp.netlify.app/",
	},
	{
		"title": "ToDo application",
		"image": `${process.env.PUBLIC_URL}/assets/todo.webp`,
		"description": "This is a beautiful ToDo application, with a drag and drop function to manage your todos.",
		"githubLink": "https://github.com/Ngc1987/Todo-React-TypeScript-App",
		"liveDemoLink": "https://taskedapp.netlify.app/",
	},
	{
		"title": "TsModale (Npm package)",
		"image": `${process.env.PUBLIC_URL}/assets/tsmodale.webp`,
		"description": "Here is a customizable modale validation builded for an old project. Check the link to the Npm page to see the customizables props of this amazing modale !",
		"githubLink": "https://github.com/Ngc1987/tsmodale",
		"liveDemoLink": "https://www.npmjs.com/package/tsmodale",
	},
]

export interface WorkSamplesProps {
	title: string;
	image: string;
	description: string;
	liveDemoLink: string;
	githubLink: string;
	inProgress?: boolean;
}