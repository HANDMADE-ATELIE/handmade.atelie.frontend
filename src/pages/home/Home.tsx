import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    
    const [cookies, setCookie, removeCookie] = useCookies(['user-token']);
    const navigate = useNavigate();

    const deleteCookieOnLogout = () => {

        if (cookies['user-token']) {
            removeCookie('user-token');
        }

        navigate("/login");
    }

    return (
        <>
            <div>Home</div>
            <button onClick={deleteCookieOnLogout}>Deslogar</button>
        </>
    )
}
