import { } from "react";
import '../styles/Nav.scss';
import { Link, useNavigate } from "react-router-dom";

export default function Nav ( ){

    const navigate= useNavigate();

    const handleLogout= async()=>{
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('senhaData');
        alert('Sessão Finalizada');
        navigate('/');
    }
     
    return(
        <>
        <nav>
            <div className="menu_logo">

                <h1 className="logo_nome"> QuickHealth </h1>
            </div>
            
            <div className="menu_geral">
                <ul className="menu_nav">
                    
                    <li>
                        <Link to='login' className='rotas'>Login</Link>
                    </li>

                    <li> 
                        <button onClick={handleLogout}> Logout </button> 
                    </li>
                    
                </ul>
            </div>
        </nav>
            
        
        </>
    )
}