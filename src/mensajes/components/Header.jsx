import { useState, useEffect } from "react";
import supabase  from "../../services/supabase";

const Header = () => {
    const [user, setUser] = useState("")
    


    async function insertUserName() {
        const { data: { user} } = await supabase.auth.getUser();
        return user.user_metadata.fullName;
      }
      
      useEffect(() => {
        async function fetchUserName() {
          const userName = await insertUserName();
          setUser(userName);
        }
        fetchUserName();
      }, []);

    return ( 
        <div className="header left">
                <p className="name">{user}</p>
        </div>
    );
}
 
export default Header;