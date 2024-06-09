import './Home.css';

// import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function Home() {
    // const { t } = useTranslation()

    const location = useLocation(); // Obtenha a localização atual

    // Verifique se a rota atual é a página inicial
    const isHomePage = location.pathname === '/';

    return (
        <>
            {isHomePage && ( // Renderiza a barra de navegação apenas se a rota atual for a página inicial
                <section style={{ backgroundColor: 'purple' }}>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            )}
            <Outlet />
        </>
    );
}

export default Home