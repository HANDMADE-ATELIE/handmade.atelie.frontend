import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { LogOut, ShoppingBag, CircleUserRound } from 'lucide-react';
import { Button } from "../../../@/components/ui/button.tsx"
import { Trash } from 'lucide-react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../@/components/ui/carousel.tsx"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "../../../@/components/ui/sheet.tsx"

import logoImage from '../../../caderno-teste.webp';

export default function Home() {
    const [cookies, setCookie, removeCookie] = useCookies(['user-token']);
    const navigate = useNavigate();

    const deleteCookieOnLogout = () => {

        if (cookies['user-token']) {
            removeCookie('user-token');
        }

        navigate("/user-login");
    }

    return (
        <>
            
            <main className='h-full w-full bg-blue-600'>

                <section className='bg-backColorMain w-full h-[8%] flex flex-row space-x-2 items-center justify-end'>

                    <Button className='bg-backColorMain text-darkGreen hover:bg-backColorMain'> 
                        <CircleUserRound/>
                    </Button>

                    <Sheet>
                    <SheetTrigger>
                        <Button className='bg-backColorMain text-darkGreen hover:bg-backColorMain'> 
                            <ShoppingBag/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className='w-[40%] bg-backColorMain'>
                        <SheetHeader>
                        <SheetTitle className='text-darkBrown font-bold'>Seu carrinho</SheetTitle>
                        <SheetDescription className='text-darkBrown font-bold'>
                            Aqui estão os itens adicionados ao carrinho
                        </SheetDescription>
                        </SheetHeader>

                        <section className='h-[95%] w-full flex flex-col p-4 space-y-4'>

                            <section className='bg-[#C4CBB1] h-1/2 w-full flex space-x-2 p-3'>

                                <section style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover' }} className='h-full w-2/5 bg-purple-500'></section>

                                <section className='bg-[#C4CBB1] h-[100%] w-[60%] flex p-2'>

                                    <section className='bg-[#C4CBB1] h-full w-full flex flex-col justify-center items-center space-y-6'>

                                        <h1 className='text-darkBrown font-bold text-wrap'>Caderno Coração</h1>
                                        <p className='text-darkBrown font-bold text-wrap'>$500</p>
                                        <p className='text-darkBrown text-wrap'>Caderno de coração rosa</p>
                                        <h1 className='text-darkBrown font-bold text-wrap'>Quantidade: 2</h1>
                                        <h1 className='text-darkBrown font-bold text-wrap'>Valor unidade: $250</h1>
                                        <Button className='bg-[#C4CBB1] text-darkBrown hover:bg-[#C4CBB1]'> 
                                            <Trash/>
                                        </Button>
                                    </section>

                                </section>

                            </section>

                            <section className='bg-[#C4CBB1] h-1/2 w-full flex space-x-2 p-3'>

                                <section style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover' }} className='h-full w-2/5 bg-purple-500'></section>

                                <section className='bg-[#C4CBB1] h-[100%] w-[60%] flex p-2'>

                                    <section className='bg-[#C4CBB1] h-full w-full flex flex-col justify-center items-center space-y-6'>

                                        <h1 className='text-darkBrown font-bold text-wrap'>Caderno Coração</h1>
                                        <p className='text-darkBrown font-bold text-wrap'>$500</p>
                                        <p className='text-darkBrown text-wrap'>Caderno de coração rosa</p>
                                        <h1 className='text-darkBrown font-bold text-wrap'>Quantidade: 2</h1>
                                        <h1 className='text-darkBrown font-bold text-wrap'>Valor unidade: $250</h1>
                                        <Button className='bg-[#C4CBB1] text-darkBrown hover:bg-[#C4CBB1]'> 
                                            <Trash/>
                                        </Button>
                                    </section>

                                </section>

                            </section>

                            <section className='flex items-center justify-center'>
                                <Button className='bg-lightBrown hover:bg-darkBrown w-[70%]' onClick={() => { navigate("/finish-order") }}>Finalizar Pedido</Button>
                            </section>

                        </section>

                    </SheetContent>
                    </Sheet>

                    <Button className='bg-backColorMain text-darkGreen hover:bg-backColorMain' onClick={deleteCookieOnLogout}> 
                        <LogOut/>
                    </Button>
                </section>

                <section className='bg-darkGreen w-full h-2/6 flex flex-col items-center justify-center space-y-6'>

                    <h1 className='font-bold text-white text-3xl'>Cadernos personalizados</h1>
                    <pre className='font-bold text-lg text-[#F5ECDB] text-wrap'>
                        Oferecemos um serviço onde você pode personalizar <br/>
                        seu caderno da forma que quiser, <br/>
                        desde cor e material da capa, tamanho, tipo de folha, e muito mais.
                    </pre>

                    <Button className="bg-lightBrown font-bold hover:bg-darkBrown">Quero personalizar meu caderno</Button>
                </section>

                <section className='bg-backColorMain w-full h-4/6 flex items-center justify-center flex-col space-y-4 p-4'>

                    <h1 className='font-bold text-3xl text-darkBrown'>Cadernos com capa de couro</h1>

                    <section className='h-[98%] w-1/2 flex flex-col'>
                        
                        <section style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover' }} className='h-full w-full bg-purple-500'></section>

                        <section className='bg-darkGreen h-full w-full flex flex-col justify-center items-center text-wrap rounded-md text-[#F5ECDB] space-y-4'>

                            <h1 className='font-bold'>Caderno com capa de couro</h1>
                            <p>Um caderno feito a mão com capa de couro sendo seu atributo principal, entregando conforto e estilo</p>

                            <Button className="bg-lightBrown font-bold hover:bg-darkBrown w-[50%]" onClick={() => { navigate("/product-info") }}>Visualizar Produto</Button>

                        </section>

                    </section>

                </section>

            </main>
            
        </>
    )
}
