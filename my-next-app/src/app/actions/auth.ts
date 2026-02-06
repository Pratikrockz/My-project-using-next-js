"use server"

import { UserType } from "@/_types/user";
import axios from "axios";


import {redirect } from "next/navigation";
import { deleteSession, setSession } from "../../../_lib/session";

 
const API_URL="http://localhost:3001";

export const LoginAction =async(formdata:FormData)=>{
    try {
        const response = await axios.get(`${API_URL}/users?email=${formdata.get("email")}&password=${formdata.get("password")}`)
        const user:UserType=response.data[0]
        if(!user) throw new Error("Invalid credential");
        //set user in  cookies
        await setSession({name:user.name,email:user.email,id:user.id});
       
    } catch (error) {
        throw new Error("Failed to Login")
    }
     redirect("/")
};

export const LogoutAction =async()=>{
    await deleteSession();
    redirect("/login")
}

