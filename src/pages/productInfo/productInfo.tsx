
import { Button } from "../../../@/components/ui/button.tsx"

export default function ProductInfo() {
 

  return (
    <>

      <main className="bg-backColorMain h-full w-full flex flex-row">

        <section className="bg-darkGreen h-full w-1/2 flex items-center justify-center">

            <section className="bg-backColorMain h-[70%] w-[90%] flex items-center text-center justify-center">
                <h1 className="text-darkGreen">Imagem Produto</h1>
            </section>

        </section>
        
        <section className="bg-darkGreen h-full w-1/2 flex items-center justify-center">

            <section className="bg-backColorMain h-[70%] w-[90%] flex flex-col">
                <p className="p-6 py-7 text-start text-3xl font-extrabold text-[#6A6D5C]">Caderno Couro</p>
                <p className="px-6 text-start text-2xl font-bold text-[#6A6D5C]">R$ 479,00</p>

                <pre className="px-6 py-5 text-start font-sans text-wrap text-[#6A6D5C]">
                    Um caderno estiloso e despojado, com sua capa de couro protege suas anotações de acidentes com água.
                    Um caderno estiloso e despojado, com sua capa de couro protege suas anotações de acidentes com água.
                    Um caderno estiloso e despojado, com sua capa de couro protege suas anotações de acidentes com água.
                </pre>

                <p className="p-5 text-start text-2xl font-extrabold text-[#6A6D5C]">Especificações</p>
                <p className="px-5 text-start font-semibold text-[#6A6D5C]">Peso: 400g</p>
                <p className="px-5 text-start font-semibold text-[#6A6D5C]">Folhas: 90und</p>
                <p className="px-5 text-start font-semibold text-[#6A6D5C]">Dimensões: 210x297mm</p>
                <p className="px-5 text-start font-semibold text-[#6A6D5C]">Capa: Couro Preto</p>

                <section className="items-center justify-center">
                    <p className="p-6 py-5 text-start text-2xl font-extrabold text-[#6A6D5C]">Avaliações</p>

                    <pre className="px-6 text-start font-sans text-wrap text-[#6A6D5C]">
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