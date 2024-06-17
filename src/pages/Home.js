import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Logo from "../components/Logo";
import "./Home.css";
import MainMenu from "../components/MainMenu";
import Cart from "../components/Cart";
import {useState} from "react";
import { useGlobal } from "../GlobalContext";


function Home(){
    const [cartItems, setCartItems] = useState([]);
    const {user} = useGlobal();

    return (
        <div className="home-container">
            <div className="home-nav">
                <Logo />
                <div>
                    {user ? (
                        <Link to = "/admin">
                            <Button colorScheme="blue">Go to Dashboard</Button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button colorScheme='blue' variant='outline'>Login</Button>
                            </Link>
                            <Link to="/register">
                                <Button colorScheme='yellow' variant='outline'>Register</Button>
                            </Link>
                        </>
                    )}        
                </div>
            </div>
            <div className="home-inner-container">
                <MainMenu cartItems={cartItems} setCartItems={setCartItems} />
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
            </div>
        </div>
    )
}

export default Home;