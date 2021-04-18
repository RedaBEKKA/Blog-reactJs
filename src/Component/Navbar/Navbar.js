import React,{useState,useEffect} from 'react';
import "./Navbar.css"
const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false);
    const [largeur,setLargeur] = useState(window.innerWidth);
    const toggleNav = () =>{
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
        

        const changeWidth=()=>{
            setLargeur(window.innerWidth)
        }
        window.addEventListener('resize',changeWidth)

        return ()=>{
            window.removeEventListener('resize',changeWidth)
        }
    }, [])
    return (
        <nav>
            {(toggleMenu || largeur>500)&&(
            <ul className="liste">
                <li className="item">Acceuil</li>
                <li className="item">Services</li>
                <li className="item">Contact</li>
               
            </ul>
            )}
            <button onClick={toggleNav} className="btn">Envoyer</button>
        </nav>
    );
};

export default Navbar;