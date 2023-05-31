import { TFoodCategory, TNavbarList } from "@/libs/types";

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
        className : "bg-olivegreen-light"
    },
    {
        title: "Pizza",
        description: "25 items",
        imageUrl : "/assets/icons/custome/pizza_icon.png",
        className : "bg-tealblue-light"
    },
    {
        title: "Kebab",
        description: "12 items",
        imageUrl : "/assets/icons/custome/kebab_icon.png",
        className : "bg-royalblue-light"
    },
    {
        title: "Salmon",
        description: "22 items",
        imageUrl : "/assets/icons/custome/salmon_icon.png",
        className : "bg-deepmagenta-light"
    },
    {
        title: "Doughnut",
        description: "11 items",
        imageUrl : "/assets/icons/custome/doughnut_icon.png",
        className : "bg-limegreen-light"
    },
]