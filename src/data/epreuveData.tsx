export interface EpreuveDto {
    year: string;
    aperitif: EpreuvePlatDto | null;
    entreeFroide: EpreuvePlatDto | null;
    soupe: EpreuvePlatDto | null;
    entreeChaude: EpreuvePlatDto | null;
    sorbet: EpreuvePlatDto | null;
    plat: EpreuvePlatDto | null;
    dessert: EpreuvePlatDto | null;
}

export interface EpreuvePlatDto {
    title: string;
    image: string;
    name: string;
    video: string | null;
    wav: string | null;
}

export const EpreuveData: EpreuveDto[] = [
    {
        year: "2023-2024",
        aperitif: {
            title: "Apéritifs et mise en bouche",
            image: "souris-apero.png",
            name: "Cette année-la - version film",
            video: "2023-apero-small.mp4",
            wav: null,
        },
        entreeFroide: {
            title: "Entrée froide",
            image: "souris-entree-froide.png",
            name: "Blind test - reverso",
            video: "2023-entree-froide-small.mp4",
            wav: null,
        },
        soupe: {
            title: "Soupe",
            image: "souris-soupe.png",
            name: "Question de pub",
            video: "2023-soupe-small.mp4",
            wav: null,
        },
        entreeChaude: {
            title: "Entrée chaude",
            image: "souris-entree-chaude.png",
            name: "Blind test 2023",
            video: "2023-entree-chaude-small.mp4",
            wav: null,
        },
        sorbet: {
            title: "Sorbet",
            image: "souris-sorbet.png",
            name: "Just Dance",
            video: null,
            wav: null,
        },
        plat: {
            title: "Plat",
            image: "souris-plat.png",
            name: "Dessiner, mimer, fredonner, c'est gagner",
            video: null,
            wav: null,
        },
        dessert: null,
    },
    {
        year: "2022-2023",
        aperitif: null,
        entreeFroide: null,
        soupe: null,
        entreeChaude: null,
        sorbet: null,
        plat: null,
        dessert: null,
    },
    {
        year: "2021-2022",
        aperitif: {
            title: "Apéritifs et mise en bouche",
            image: "souris-apero.png",
            name: "Tournoi de fléchettes",
            video: null,
            wav: null,
        },
        entreeFroide: {
            title: "Entrée froide",
            image: "souris-entree-froide.png",
            name: "Blind test - Back in time",
            video: "2021-entree-froide-small.mp4",
            wav: null,
        },
        soupe: {
            title: "Soupe",
            image: "souris-soupe.png",
            name: "Time's up",
            video: null,
            wav: null,
        },
        entreeChaude: {
            title: "Entrée chaude",
            image: "souris-entree-chaude.png",
            name: "Géograph'quizz",
            video: "2021-entree-chaude-small.mp4",
            wav: null,
        },
        sorbet: {
            title: "Sorbet",
            image: "souris-sorbet.png",
            name: "Just Dance",
            video: null,
            wav: null,
        },
        plat: {
            title: "Plat",
            image: "souris-plat.png",
            name: "Dessiner, mimer, fredonner, c'est gagner",
            video: null,
            wav: null,
        },
        dessert: null,
    },

    {
        year: "2019-2020",
        aperitif: {
            title: "Apéritifs et mise en bouche",
            image: "souris-apero.png",
            name: "Blind test - let's rock",
            video: null,
            wav: "2019-apero.wav",
        },
        entreeFroide: {
            title: "Entrée froide",
            image: "souris-entree-froide.png",
            name: "Blind test - Bad video clip",
            video: "2019-entree-froide-small.mp4",
            wav: null,
        },
        soupe: {
            title: "Soupe",
            image: "souris-soupe.png",
            name: "Time's up",
            video: null,
            wav: null,
        },
        entreeChaude: {
            title: "Entrée chaude",
            image: "souris-entree-chaude.png",
            name: "Pavlova Coco",
            video: null,
            wav: null,
        },
        sorbet: {
            title: "Sorbet",
            image: "souris-sorbet.png",
            name: "Just Dance",
            video: null,
            wav: null,
        },
        plat: {
            title: "Plat",
            image: "souris-plat.png",
            name: "Blind test - Série Mix",
            video: "2019-plat-small.mp4",
            wav: null,
        },
        dessert: {
            title: "Dessert",
            image: "souris-dessert.png",
            name: "Dessiner, mimer, fredonner, c'est gagner",
            video: null,
            wav: null,
        },
    },
];
