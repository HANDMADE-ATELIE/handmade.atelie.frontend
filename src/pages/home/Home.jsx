import './Home.css';

import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation()

    return (
        <>
            <h1>{t('homePage.title')}</h1>
        </>
    )
}

export default Home