import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";

export default function home({children}:{children:React.ReactNode}){
    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    )
}