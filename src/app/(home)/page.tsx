
import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata:Metadata ={
  title:"Platzi Future Store",
  description:"To build a better future",
  keywords:["Next", "Nextjs", "Future", "Store"],
  authors:[
    {
      name:"AngelPrz8a",
      url:"https://www.linkedin.com/in/angelprz8a"
    }
  ]
}

export default function Home() {
  return (
    <main>
      <MainProducts/>
    </main>
  )
}