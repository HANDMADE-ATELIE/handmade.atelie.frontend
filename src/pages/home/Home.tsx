import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { LogOut, ShoppingBag, CircleUserRound } from 'lucide-react';
import { Button } from "../../../@/components/ui/button.tsx"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../@/components/ui/carousel"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "../../../@/components/ui/sheet"
  
  

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
                    <SheetContent className='w-[20%] bg-backColorMain'>
                        <SheetHeader>
                        <SheetTitle className='text-darkBrown font-bold'>Seu carrinho</SheetTitle>
                        <SheetDescription className='text-darkBrown font-bold'>
                            Aqui estão os itens adicionados ao carrinho
                        </SheetDescription>
                        </SheetHeader>
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

                <section className='bg-backColorMain w-full h-4/6 flex items-center justify-center flex-col space-y-4'>

                    <h1 className='font-bold text-3xl text-darkBrown'>Cadernos com capa de couro</h1>

                    <Carousel className='w-1/2 h-4/6 bg-white flex items-center justify-center'>
                        <CarouselContent>
                            <CarouselItem>
                                1
                            </CarouselItem>
                            <CarouselItem>
                                2
                            </CarouselItem>
                            <CarouselItem>
                                3
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>

                </section>

            </main>
            
        </>
    )
}
