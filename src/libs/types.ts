export type TNavbarList = Array<{
    label : string,
    href  : string,
    isNew : boolean
}>

export type TFoodCategory = {
    title : string
    description : string
    imageUrl : string
    color : string
}

export type TFoodRating = {
    imageUrl : string
    title : string
    description : string
    rating : number
    color : string
}

export type TSocialMedia = {
    label : string
    icon : string
    href : string
}

type TFloatingBar = {
    icon:  string
    href: string
    name : string
}

export type TFloatingBarList = Array<{
    children?: Array<TFloatingBar>,
} & TFloatingBar >