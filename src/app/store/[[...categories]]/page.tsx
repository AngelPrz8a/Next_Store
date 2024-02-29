interface CategoriesProps{
    params:{
        categories:string[],
        searchParams?:string
    }
}

export default function Categories(props:CategoriesProps){
    const {categories} = props.params
    //throw new Error("error")
    return (
        <h1>Categoria dinámica:{categories}</h1>
    )
} 