import { GraphQLClientSingleton } from "app/graphqL"
import { customerAccessTokenCreateMutation } from "app/graphqL/mutations/customerAccessTokenCreate"
import {cookies} from "next/headers"

export  const createAcessToken = async(email:string, password:string)=>{
    const cookiesStore = cookies()
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient() 
    const {customerAccessTokenCreate} = await graphqlClient.request(customerAccessTokenCreateMutation,{
        "email":email,
        "password":password
    })

    const {accessToken, expiresAt} = customerAccessTokenCreate?.customerAccessToken

    if(accessToken){
        cookiesStore.set("accessToken",accessToken,{
            path:"/",
            expires: new Date(expiresAt),
            httpOnly: true,
            sameSite: "strict",
        })
        return accessToken
    }
}