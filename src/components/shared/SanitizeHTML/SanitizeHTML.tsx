import { HTMLAttributes, createElement } from "react"
import sanitize from "sanitize-html"

type SanitizeHTMLProps={
    children:string,
    tag:string
}&HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({tag, children,...res}:SanitizeHTMLProps)=>{
    const sanitizedHTML = sanitize(children,{
        allowedTags:["strong","b"]
    })

    return createElement(
        tag,
        {...res},
        sanitizedHTML
    )
}