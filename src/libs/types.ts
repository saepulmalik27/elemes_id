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

export type TFloatingBar = {
    icon:  string
    href: string
    name : string
    children?: Array<TFloatingBar>
}

export type TFloatingBarList = Array<TFloatingBar>