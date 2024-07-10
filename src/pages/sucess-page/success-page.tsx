
import logoImage from '../../../Logo.png';

export default function SuccessPage() {

    


    return (
        <>
            <main className='h-full w-full bg-backColorMain flex items-center justify-center'>

                <section className="bg-backColorWhite h-1/2 w-1/2 flex flex-col items-center justify-center space-y-6">

                    <figure className="bg-backColorWhite h-fit w-fit flex items-center justify-center rounded-full">
                        <img src={logoImage}></img>
                    </figure>

                    <section className='text-wrap'>
                        <h1>Obrigado por comprar conosco, maiores informações sobre o pedido serão enviadas pelo email</h1>
                    </section>
                </section>


            </main>            
        </>
    )
}