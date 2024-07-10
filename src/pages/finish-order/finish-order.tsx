import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"

import { Button } from "../../../@/components/ui/button.tsx"
import { Input } from "../../../@/components/ui/input.tsx"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../@/components/ui/form.tsx"
import { ShoppingCart } from "lucide-react"

import { useNavigate } from "react-router-dom"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../@/components/ui/select.tsx"

const formSchema = z.object(
  { 
    userName: z.string(),
    userCpf: z.string(), 
    userCep: z.string(),
    userStreet: z.string(),
    userCity: z.string(),
    userState: z.string(),
    userNeighbourhood: z.string(),
    userAddressNumber: z.string(),
    userPaymentMethod: z.string()
  }
)

export default function FinishOrder() {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema), 
            defaultValues: { userName: ""},
        }
    )

    const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <>

            <main className="bg-backColorMain h-full w-full p-4 flex">

                <section className="w-1/2 bg-[#C1C6B4] h-[90%] p-6 rounded-md">

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6 w-full h-full">

                            <section className="h-fit w-full font-bold bg-[#A1A88E] rounded-md p-4">

                                <section className="flex text-start h-[20%] items-center">
                                    <h1 className="font-bold text-2xl text-white">Informações do cliente</h1>
                                </section>

                                <section className="h-[50%] flex space-x-4 py-4 text-start justify-start items-start">

                                    <FormField control={form.control} name="userName" render={({ field }) => (
                                        <FormItem className="w-1/2">
                                            <FormLabel className="font-bold text-white">Nome</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite seu nome" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>

                                    <FormField control={form.control} name="userCpf" render={({ field }) => (
                                        <FormItem className="w-1/2 text-white">
                                            <FormLabel className="font-bold">CPF</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite seu CPF" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>

                                </section>

                            </section>

                            <section className="h-fit w-full font-bold bg-[#A1A88E] rounded-md p-4">

                                <section className="flex text-start h-[20%] items-center">
                                    <h1 className="font-bold text-2xl text-white">Informações de endereço</h1>
                                </section>

                                <section className="grid grid-rows-3 grid-flow-col gap-4 py-4">

                                    <section>

                                        <FormField control={form.control} name="userCep" render={({ field }) => (
                                            <FormItem className="w-[95%]">
                                                <FormLabel className="text-white font-bold">CEP</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Digite seu CEP" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}/>

                                    </section>

                                    <section>
                                        <FormField control={form.control} name="userStreet" render={({ field }) => (
                                            <FormItem className="w-[95%]">
                                                <FormLabel className="text-white font-bold">Rua</FormLabel>
                                                <FormControl>
                                                    <Input className='w-full' placeholder="Digite sua rua" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}/>

                                    </section>

                                    <section>
                                        <FormField control={form.control} name="userCity" render={({ field }) => (
                                            <FormItem className="w-[95%]">
                                                <FormLabel className="text-white font-bold">Cidade</FormLabel>
                                                <FormControl>
                                                    <Input className='w-full' placeholder="Digite sua cidade" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}/>
                                    </section>

                                    <section>
                                        <FormField control={form.control} name="userState" render={({ field }) => (
                                            <FormItem className="w-[95%]">
                                                <FormLabel className="text-white font-bold">Estado</FormLabel>
                                                <FormControl>
                                                    <Input className='w-full' placeholder="Digite seu estado" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}/>
                                    </section>

                                    <section>
                                        <FormField control={form.control} name="userNeighbourhood" render={({ field }) => (
                                            <FormItem className="w-[95%]">
                                                <FormLabel className="text-white font-bold">Bairro</FormLabel>
                                                <FormControl>
                                                    <Input className='w-full' placeholder="Digite seu bairro" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}/>
                                    </section>

                                    <section>
                                        <FormField control={form.control} name="userAddressNumber" render={({ field }) => (
                                            <FormItem className="w-[95%]">
                                                <FormLabel className="text-white font-bold">Número</FormLabel>
                                                <FormControl>
                                                    <Input className='w-full' placeholder="Digite o número da sua casa" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}/>
                                    </section>

                                </section>


                            </section>


                            <section className="h-fit w-full font-bold bg-[#A1A88E] rounded-md p-4">

                                <section className="flex text-start h-[20%] items-center">
                                    <h1 className="font-bold text-2xl text-white">Informações de pagamento</h1>
                                </section>

                                <section className="h-[50%] flex flex-col space-x-4 py-4 text-start justify-start items-start">

                                    <FormField
                                        control={form.control}
                                        name="userPaymentMethod"
                                        render={({ field }) => (
                                            <FormItem className="w-[100%]">
                                            <FormLabel className="font-bold text-white">Forma de pagamento</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione uma forma de pagamento" />
                                                </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Pix">Pix</SelectItem>
                                                    <SelectItem value="Boleto">Boleto</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </section>
                            </section>

                            <Button className="w-full h-[7%] bg-lightBrown" type="submit" onClick={() => { navigate("/success-order") }}>Finalizar Compra</Button>
                        </form>
                    </Form>

                </section>

                <section className="h-[98%] w-1/2 px-6 rounded-md">
                    
                    <section className="h-[40%] w-full bg-[#C1C6B4] p-4 rounded-md space-y-4">
                        
                        <section className="flex space-x-2">
                            <ShoppingCart className="text-white"/>
                            <h1 className="text-white font-bold text-xl text-left"> Sumário Carrinho</h1>  
                        </section>

                        <section className="h-[25%] flex">

                            <section className="flex flex-col bg-[#A1A88E] w-[80%] text-start p-4 justify-center text-white text-wrap">
                                <h1 className="font-bold">1x Caderno Verde Teste</h1>
                                <p>Um caderno vermelho bem bonitinho utilizado para testar a funcionalidade</p>
                            </section>

                            <section className="flex bg-[#A1A88E] w-[20%] justify-center items-center text-white font-bold">
                                <p>$240</p>
                            </section>

                        </section>

                        <hr className="border-white border-2"></hr>

                        <section className="h-[25%] flex">

                            <section className="flex flex-col bg-[#A1A88E] w-[80%] text-start p-4 justify-center text-white text-wrap">
                                <h1 className="font-bold">1x Caderno Verde Teste</h1>
                                <p>Um caderno verde bem bonitinho utilizado para testar a funcionalidade</p>
                            </section>

                            <section className="flex bg-[#A1A88E] w-[20%] justify-center items-center text-white font-bold">
                                <p>$240</p>
                            </section>

                        </section>

                        <hr className="border-white border-2"></hr>

                        <section className="h-[10%] flex justify-end">

                            <section className="flex w-[20%] justify-center items-center text-white font-bold">
                                <p>Subtotal: $480</p>
                            </section>

                        </section>

                    </section>

                </section>

            </main>


        </>
    )
}