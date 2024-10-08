export interface DishDto {
    aperitif: OneDishDto;
    entreeFroide: OneDishDto;
    soupe: OneDishDto;
    entreeChaude: OneDishDto;
    sorbet: OneDishDto;
    plat: OneDishDto;
    dessert: OneDishDto;
}

export interface OneDishDto {
    title: string;
    image: string;
    name: string;
}

export const DishData: DishDto =
    {
        aperitif: {
            title: "Apéritifs et mise en bouche",
            image: "souris-apero.png",
            name: "Découvertes culinaires",
        },
        entreeFroide: {
            title: "Entrée froide",
            image: "souris-entree-froide.png",
            name: "un bon petit truc",
        },
        soupe: {
            title: "Soupe",
            image: "souris-soupe.png",
            name: "et slurp !",
        },
        entreeChaude: {
            title: "Entrée chaude",
            image: "souris-entree-chaude.png",
            name: "un bon petit truc mais chaud",
        },
        sorbet: {
            title: "Sorbet",
            image: "souris-sorbet.png",
            name: "c'est froid et frais",
        },
        plat: {
            title: "Plat",
            image: "souris-plat.png",
            name: "petit piece de viande accompagnée de ses légumes bien cuit et préparé sur nid de truc much",
        },
        dessert: {
            title: "Dessert",
            image: "souris-dessert.png",
            name: "miam miam",
        },
    }
;