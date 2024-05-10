import  supabase  from "../../services/supabase";
import { useEffect, useState } from 'react'
import Send from "./icons/Send";
const SendMessage = ({ scroll }) => {
    const [user, setUser] = useState("");
    const [newMessage, setNewMessage] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        if (newMessage !== "") {
            const { error }= await supabase.from('messages').insert({ 
                content: newMessage,
                email: user
            })
            setNewMessage("");

            if (error) {
                console.error(error);
                throw new Error("Sugerencias no pudieron ser cargadas");
              }
            

        }
        scroll.current.scrollIntoView({Behavior: 'smooth'})
    }
    
    const getSeccion = async () => {
        const {data} = await supabase.auth.getSession();
        setUser(data.session.user.email);
    }
    useEffect( () =>{
        getSeccion()
    }, [])

    return (
        <section className="send-mesage">
            <form onSubmit={sendMessage}>
                <input 
                    type="text" 
                    name="message" 
                    onChange={e=>setNewMessage(e.target.value)}
                    placeholder="Mensaje"
                    value={newMessage}
                />
                <button type='submit'><Send/></button>
            </form> 
        </section>
    );
}
 
export default SendMessage;