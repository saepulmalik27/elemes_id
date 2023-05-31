import { TFoodCategory, TFoodRating, TNavbarList } from "@/libs/types";

export const NAVBARLIST : TNavbarList = [
    {
        label: "Home",
        href : "/",
    },
    {
        label: "About",
        href : "/about",
    },
    {
        label: "Promotion",
        href : "/promotion",
    },
    {
        label: "Blogs",
        href : "/blogs",
    },
    {
        label: "Contact Us",
        href : "/contact-us",
    }
]

export const FOODCATEGORYLIST : Array<TFoodCategory> = [
    {
        title: "Cupcake",
        description: "22 items",
        imageUrl : "/assets/icons/custome/cupcake_icon.png",
        color : "olivegreen"
    },
    {
        title: "Pizza",
        description: "25 items",
        imageUrl : "/assets/icons/custome/pizza_icon.png",
        color : "tealblue"
    },
    {
        title: "Kebab",
        description: "12 items",
        imageUrl : "/assets/icons/custome/kebab_icon.png",
        color : "royalblue"
    },
    {
        title: "Salmon",
        description: "22 items",
        imageUrl : "/assets/icons/custome/salmon_icon.png",
        color : "deepmagenta"
    },
    {
        title: "Doughnut",
        description: "11 items",
        imageUrl : "/assets/icons/custome/doughnut_icon.png",
        color : "limegreen"
    },
]

export const FOODREVIEWLIST : Array<TFoodRating> = [
    {
        imageUrl : "/assets/images/trending/pizza_paperoni.png",
        title : "Pizza Paperoni",
        description : "Pizza",
        rating : "4.5",
        color : "tealblue"
    },
    {
        imageUrl : "/assets/images/trending/pizza_meat.png",
        title : "Pizza Meat",
        description : "Pizza",
        rating : "4.5",
        color : "tealblue"
    },
    {
        imageUrl : "/assets/images/trending/doner_kebab.png",
        title : "Doner Kebab",
        description : "Kebab",
        rating : "4.5",
        color : "royalblue"
    },
    {
        imageUrl : "/assets/images/trending/salmon_roll.png",
        title : "Salmon Roll",
        description : "Salmon",
        rating : "4.5",
        color : "deepmagenta"
    },
    {
        imageUrl : "/assets/images/trending/cupcake_choco.png",
        title : "Cupcake Choco",
        description : "Cupcake",
        rating : "4.5",
        color : "olivegreen"
    },
    {
        imageUrl : "/assets/images/trending/doughnut_milk.png",
        title : "Doughnut Milk",
        description : "Doughnut",
        rating : "4.5",
        color : "limegreen"
    },
    {
        imageUrl : "/assets/images/trending/doughnut_unicorn.png",
        title : "Doughnut Unicorn",
        description : "Doughnut",
        rating : "4.5",
        color : "limegreen"
    },
    {
        imageUrl : "/assets/images/trending/kathi_kebab.png",
        title : "Kathi Kebab",
        description : "Kebab",
        rating : "4.5",
        color : "royalblue"
    }

]