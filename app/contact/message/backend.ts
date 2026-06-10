"use server";
import {Resend} from "resend";
require('dotenv').config();

export type FormHelp = {
    success:boolean,
    message: String
};

export async function sendMessage(state: FormHelp, formdata:FormData){
    const name = formdata.get("name")?.toString();
    const email = formdata.get("email")?.toString();
    const message = formdata.get("message")?.toString();

    if(!name||!email||!message){
        return{success:false,message:"Please fill out all required fields"};
    }
    try{
        const resend = new Resend(process.env.RESEND_API);

        await resend.emails.send({
            from: "OnTime Technician <info@ontimetechnician.com>",
            to: email,
            subject: "Customer message: "+name,
            html: `
                <h1>Your appointment is confirmed</h1>
                <p>Thank you for choosing us.</p>
            `
        });

        return{success:true, message:"Thank you for reaching out. We will repond to your message in due time."}
    }
    catch(error){
        return{success:false, message:"Something went wrong. Please try again later."};
    }
}