import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

interface collectionForm{
  id: string
  handle: string
  title: string
}

export default async function Layout({children}:{children: React.ReactNode}){
  const collections = await getCollections()  
  return (
    <main>
      <nav>
        {
          collections.map((collection:collectionForm) => {
            return(
              <Link key={collection.id} href={collection.handle}>
                {collection.title}
              </Link>
            )
          })
        }
      </nav>
      {children}
    </main>
  )
}