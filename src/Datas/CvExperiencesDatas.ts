export const ExperiencesDatas:ExperienceProps[] = [
	{
		"employer": "Myself",
		"job": "Front-end developer",
		"dates": "01/2022 to actually",
	},
	{
		"employer": "Open Class Rooms",
		"job": "Web developer student",
		"dates": "01/2021 to 01/2022",
	},
	{
		"employer": "Feu Vert",
		"job": "Shop director",
		"dates": "08/2013 to 06/2020",
	},
	{
		"employer": "Feu Vert",
		"job": "Store manager",
		"dates": "02/2009 to 07/2013",
	},
	{
		"employer": "Feu Vert",
		"job": "Seller",
		"dates": "03/2008 to 01/2009",
	},
	{
		"employer": "Feu Vert",
		"job": "Mechanic",
		"dates": "01/2006 to 02/2008",
	},
	{
		"employer": "René Brisach",
		"job": "Worker",
		"dates": "12/2005 to 05/2006",
	},
	{
		"employer": "McDonald's",
		"job": "Formator",
		"dates": "03/2005 to 11/2005",
	},
	{
		"employer": "McDonald's",
		"job": "Versatile crew",
		"dates": "11/2003 to 02/2005",
	},
]

export interface ExperienceProps {
	employer: string
	job: string;
	job2?: string;
	job3?: string;
	job4?: string;
	dates: string;
}