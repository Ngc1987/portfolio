export const WorkSampleDatas:WorkSample[] = [
	{
		"title": "Equine therapy",
		"image": process.env.PUBLIC_URL + "/assets/equitherapie.webp",
		"description": "This is a website for a therapist who make therapies with the help of Earth horses. ",
		"githubLink": "https://github.com/Ngc1987/Mediation-equine",
		"liveDemoLink": "https://domequimediation.netlify.app/",
	},
	{
		"title": "Portfolio",
		"image": process.env.PUBLIC_URL + "/assets/portfolio.webp",
		"description": "This is my portfolio. You are already on this, but if you like infinite loops like a bugged code, click on it !",
		"githubLink": "https://github.com/Ngc1987/portfolio",
		"liveDemoLink": "https://thomasemeriaportfolio.netlify.app/",
	},
	{
		"title": "TsModale (Npm package)",
		"image": process.env.PUBLIC_URL + "/assets/tsmodale.webp",
		"description": "Here is a customizable modale validation builded for an old project. Check the link to the Npm page to see the customizables props of this amazing modale !",
		"githubLink": "https://github.com/Ngc1987/tsmodale",
		"liveDemoLink": "https://www.npmjs.com/package/tsmodale",
	},
	{
		"title": "ToDo application",
		"image": process.env.PUBLIC_URL + "/assets/toDoApp.webp",
		"description": "This is a beautiful ToDo application, with a drag and drop function to manage your todos.",
		"githubLink": "https://github.com/Ngc1987/Todo-React-TypeScript-App",
		"liveDemoLink": "https://taskedapp.netlify.app/",
	},
]

interface WorkSample {
	title: string;
	image: string;
	description: string;
	liveDemoLink: string;
	githubLink: string;
}