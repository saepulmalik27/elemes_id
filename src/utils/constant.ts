import { EFOODCATEGORY } from "@/libs/enum";
import { TFloatingBarList, TFoodCategory, TFoodRating, TNavbarList, TSocialMedia } from "@/libs/types";

export const NAVBARLIST : TNavbarList = [
    {
        label: "Home",
        href : "/",
        isNew: false
    },
    {
        label: "About",
        href : "/about",
        isNew: false
    },
    {
        label: "Promotions",
        href : "/promotions",
        isNew: true
    },
    {
        label: "Blogs",
        href : "/blogs",
        isNew: false
    },
    {
        label: "Contact Us",
        href : "/contact-us",
        isNew: false
    }
]

export const FOODCATEGORYLIST : Array<TFoodCategory> = [
    {
        title: EFOODCATEGORY.CUPCAKE,
        description: "22 items",
        imageUrl : "/assets/icons/custome/cupcake_icon.png",
        color : "olivegreen"
    },
    {
        title: EFOODCATEGORY.PIZZA,
        description: "25 items",
        imageUrl : "/assets/icons/custome/pizza_icon.png",
        color : "tealblue"
    },
    {
        title: EFOODCATEGORY.KEBAB,
        description: "12 items",
        imageUrl : "/assets/icons/custome/kebab_icon.png",
        color : "royalblue"
    },
    {
        title: EFOODCATEGORY.SALMON,
        description: "22 items",
        imageUrl : "/assets/icons/custome/salmon_icon.png",
        color : "deepmagenta"
    },
    {
        title: EFOODCATEGORY.DOUGHNUT,
        description: "11 items",
        imageUrl : "/assets/icons/custome/doughnut_icon.png",
        color : "limegreen"
    },
]

export const FOODREVIEWLIST : Array<TFoodRating> = [
    {
        imageUrl : "/assets/images/trending/pizza_paperoni.png",
        title : "Pizza Paperoni",
        description : EFOODCATEGORY.PIZZA,
        rating : 4,
        color : "tealblue"
    },
    {
        imageUrl : "/assets/images/trending/pizza_meat.png",
        title : "Pizza Meat",
        description : EFOODCATEGORY.PIZZA,
        rating : 3,
        color : "tealblue"
    },
    {
        imageUrl : "/assets/images/trending/doner_kebab.png",
        title : "Doner Kebab",
        description : EFOODCATEGORY.KEBAB,
        rating : 5,
        color : "royalblue"
    },
    {
        imageUrl : "/assets/images/trending/salmon_roll.png",
        title : "Salmon Roll",
        description : EFOODCATEGORY.SALMON,
        rating : 4,
        color : "deepmagenta"
    },
    {
        imageUrl : "/assets/images/trending/cupcake_choco.png",
        title : "Cupcake Choco",
        description : EFOODCATEGORY.CUPCAKE,
        rating : 4,
        color : "olivegreen"
    },
    {
        imageUrl : "/assets/images/trending/doughnut_milk.png",
        title : "Doughnut Milk",
        description : EFOODCATEGORY.DOUGHNUT,
        rating : 5,
        color : "limegreen"
    },
    {
        imageUrl : "/assets/images/trending/doughnut_unicorn.png",
        title : "Doughnut Unicorn",
        description : EFOODCATEGORY.DOUGHNUT,
        rating : 4,
        color : "limegreen"
    },
    {
        imageUrl : "/assets/images/trending/kathi_kebab.png",
        title : "Kathi Kebab",
        description : EFOODCATEGORY.KEBAB,
        rating : 4,
        color : "royalblue"
    }

]

export const SOCIALMEDIA : Array<TSocialMedia> = [
    {
        label : "email",
        icon : "/assets/icons/flat/mail.svg",
        href : "mailto:elemesid@gmail.com"
    },
    {
        label : "phone",
        icon : "/assets/icons/flat/phone.svg",
        href : "https://api.whatsapp.com/send?phone=6281999197186&text=Hi%20Team%20Elemes,%20Saya%20tertarik%20dengan%20Sewa%20tim%20developer%20dari%20elemes.%20bisa%20diskusi%20lebih%20lanjut?"
    },
    {
        label : "instagram",
        icon : "/assets/icons/flat/instagram.svg",
        href : "https://www.instagram.com/"
    },
]

export const CONTACT = {
    phone : "0888 1111 2222",
    email : "elemesid@gmail.com"
}

export const FOODCATEGORIES : Array<string> = [
    EFOODCATEGORY.CUPCAKE,
    EFOODCATEGORY.PIZZA,
    EFOODCATEGORY.KEBAB,
    EFOODCATEGORY.SALMON,
    EFOODCATEGORY.DOUGHNUT,
]

export const ABOUTLIST : Array<string> = [
    "About us",
    "FAQ",
    "Report Problem",
]

export const FLOATINGBARLIST : TFloatingBarList = [
    {
        icon: "/assets/icons/flat/menu.svg",
        href: "/",
        name : "Home"
    },
    {
        icon: "/assets/icons/flat/menu.svg",
        href: "/promotions",
        name : "Promotions"
    },{
        icon: "/assets/icons/flat/menu.svg",
        href: "/other",
        name : "Other",
        children : [
            {
                icon: "/assets/icons/flat/menu.svg",
                href: "/blogs",
                name : "Blogs"
            },
            {
                icon : "/assets/icons/flat/menu.svg",
                href : "/contact-us",
                name : "Contact Us"
            }
        ]
    }
]