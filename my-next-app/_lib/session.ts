import { UserType } from "@/_types/user";
import { cookies } from "next/headers";
import path from "path";

//set session cookies
    export const setSession = async(user:UserType)=>{
        (await cookies()).set("session", JSON.stringify(user),{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:60*60*24*7, //1 week
            path:"/"
        })
    }

//get cookies
export const getSession = async():Promise<UserType | null>=>{
    const session = (await cookies()).get("session")?.value;
    if(!session){
        return null;
    }
    const user:UserType=JSON.parse(session) as UserType;
    return user;
   
}

//delete cookies
export const deleteSession = async()=>{
    const cookieStore = await cookies();
    cookieStore.delete("session")
}
        
    