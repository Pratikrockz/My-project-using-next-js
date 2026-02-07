import { getSession } from "../../../_lib/session"
import { ContactList } from "../_components/ContactList";
import { getContacts } from "../api/contact";

const Contactpage =async ()=>{
    const user = await getSession();
    if(!user){
    return(
        <div>
           Please <a href="/login" className="text-blue-600 hover:underline">Login</a>{" "}
            to view your contacts.
        </div>
    )
   

}
const contacts = await getContacts(user?.id);
console.log(contacts);

if(!contacts || contacts.length === 0){
    return (<div>
           Please <a href="/contact/new" className="text-blue-600 hover:underline">Add a Contact</a>{" "}
            to view your contact list.
        </div>)
}
return <div>
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Contacts</h1>
        <a href="/contact/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add New Contact</a>
    </div>
    <ContactList contacts={contacts}/>
</div>
}
export default Contactpage