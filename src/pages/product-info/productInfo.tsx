
import { Button } from "../../../@/components/ui/button.tsx"
import logoImage from '../../../caderno-teste.webp';

export default function ProductInfo() {
 

  return (
    <>

      <main className="bg-backColorMain h-full w-full flex flex-row">

        <section className="bg-backColorMain h-full w-1/2 flex items-center justify-center">

            <section className="bg-backColorMain h-[70%] w-[90%] flex items-center text-center justify-center">
                <figure>
                    <img src={logoImage}></img>
                </figure>
            </section>

        </section>
        
        <section className="bg-backColorMain h-full w-1/2 flex items-center justify-center">

            <section className="bg-darkGreen h-[80%] w-[90%] flex flex-col rounded-md">
                <p className="p-6 py-7 text-start text-3xl font-extrabold text-[#F5ECDB]">Caderno Couro</p>
                <p className="px-6 text-start text-2xl font-bold text-[#F5ECDB]">R$ 479,00</p>

                <pre className="px-6 py-5 text-start font-sans text-wrap text-[#F5ECDB]">
                    Um caderno estiloso e despojado, com sua capa de couro protege suas anotações de acidentes com água.
                    Um caderno estiloso e despojado, com sua capa de couro protege suas anotações de acidentes com água.
                    Um caderno estiloso e despojado, com sua capa de couro protege suas anotações de acidentes com água.
                </pre>

                <p className="p-5 text-start text-2xl font-extrabold text-[#F5ECDB]">Especificações</p>
                <p className="px-5 text-start font-semibold text-[#F5ECDB]">Peso: 400g</p>
                <p className="px-5 text-start font-semibold text-[#F5ECDB]">Folhas: 90und</p>
                <p className="px-5 text-start font-semibold text-[#F5ECDB]">Dimensões: 210x297mm</p>
                <p className="px-5 text-start font-semibold text-[#F5ECDB]">Capa: Couro Preto</p>

                <section className="items-center justify-center">
                    <p className="p-6 py-5 text-start text-2xl font-extrabold text-[#F5ECDB]">Avaliações</p>

                    <pre className="px-6 text-start font-sans text-wrap text-[#F5ECDB]">
                        Avaliações 
                    </pre>

                </section>

                
                <section className="p-5 flex items-center justify-center">
                    <Button className="bg-lightBrown w-[70%] hover:bg-darkBrown" type="submit">Comprar</Button>
                </section>

                <section className="px-5 flex items-center justify-center">
                    <Button className="bg-lightBrown w-[70%] hover:bg-darkBrown" type="submit">Personalizar</Button>
                </section>


            </section>
        </section>
      </main>
    </>
  )
}