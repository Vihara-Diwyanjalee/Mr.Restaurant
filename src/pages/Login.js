import { useState } from "react";
import {useNavigate} from "react-router-dom";
import FormInput from "../components/common/FormInput";
import "./Login.css";
import SubmitButton from "../components/common/SubmitButton";
import toast from "react-hot-toast";
import axios from "axios";
import {api} from "../config.js";
import { useGlobal } from "../GlobalContext.js";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { user, setUser } = useGlobal();

    const handleSubmit = async () => {
        try{
            const result = await axios.post(api + "/auth/login", {
                email,
                password,
            },
            {withCredentials: true}
            );

            setUser(result.data);

            toast.success("Login successfully");
            setEmail("");
            setPassword("");
            navigate("/admin");
        }catch(err){
            console.log(err);
            toast.error("Invalid Credentials");
        }
    };

    return (
        <div className="center-div">
            <form className="login-container">
                <h2>Login</h2>
                <FormInput 
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) =>{
                        setEmail(e.target.value);
                    }}
                />
                <FormInput 
                    label="Password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <SubmitButton text="Submit" onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default Login;