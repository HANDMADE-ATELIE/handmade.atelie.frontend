// import { useTranslation } from 'react-i18next';
import './Login.css';
import sideImageLogin from '../../assets/images/photo-1503149779833-1de50ebe5f8a.avif';

function Login() {
    // const { t } = useTranslation()

    return (
        <>
            <main className="loginMain">

                <section className="childSection">
                    <header>                        
                        <p style={{ color: '#224209', textAlign: 'center', fontFamily: 'verdana', fontSize: 30}}>
                            <b>Olá, bom ter você aqui!</b>
                        </p>

                        <p style={{ color: '#224209', textAlign: 'center', fontFamily: 'Arial', fontSize: 12}}>
                            Realize o login para poder acessar todas funcionalidades do site
                        </p>
                    </header>
                    
                    <section className="formSection">
                        <form className="loginForm">
                            <input name="emailInput" type="text" className="loginFormInput" placeholder="Email"></input>
                            <input name="emailInput" type="text" className="loginFormInput" placeholder="Senha"></input>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </section>
                </section>

                <section className="seconChildSection">
                    <img src={sideImageLogin} style={{height: 'auto', width: '100%'}}></img>
                </section>
            </main>
        </>
    )
}

export default Login;