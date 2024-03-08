import { ProductsWrapper } from "app/components/store/ProductsWrapper"
import { getProducts } from "app/services/shopify/products"

interface CategoriesProps{
    params:{
        categories:string[],
        searchParams?:string
    }
}

export default async function Categories(props:CategoriesProps){
    const products = await getProducts()
    const {categories} = props.params
    
    return (
        <ProductsWrapper products={products}/>
    )
} 