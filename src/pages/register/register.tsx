import React from 'react'
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import axios from "axios";

import { Button } from "../../../@/components/ui/button.tsx"
import { Input } from "../../../@/components/ui/input.tsx"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../@/components/ui/form.tsx"
// import { Popover, PopoverContent, PopoverTrigger } from "../../../@/components/ui/popover"
// import { Calendar } from "../../../@/components/ui/calendar"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../../@/components/ui/select"

// import { format } from "date-fns"
// import { CalendarIcon } from "lucide-react"
// import { cn } from "../../../@/lib/utils"

// import logoImage from '../../../Logo.png';


const formSchema = z.object(
  { 
    userName: z.string(), 
    userBirthDate: z.string(),
    userCpf: z.string(),
    userEmail: z.string(),
    userPhone: z.string(),
    userPassword: z.string(),
    userConfirmedPassword: z.string(),
    // userGender: z.string(),
    // userCep: z.string(),
    // userStreet: z.string(),
    // userCity: z.string(),
    // userState: z.string(),
    // userNeighbourhood: z.string(),
    // userAddressNumber: z.string(),
    // userAdditionalAddressInfo: z.string(),
  }
)


export default function Register() {
  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {



  };

  const form = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema), 
      defaultValues: { userName: undefined, userBirthDate: undefined},
    }
  )

  return (
    <>

      <main className="flex justify-center bg-backColorTest h-full items-center">

        <section className="flex flex-col h-5/6 w-3/4 sm:w-5/6">  

          <section className="flex flex-col bg-backColorWhite h-full w-full items-center justify-center gap-8 rounded-lg">

            <section className="bg-backColorWhite h-fit w-fit flex items-center justify-center rounded-full">
              <h1 className='text-lg font-extrabold'> Crie sua conta </h1>
            </section>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-4 items-center justify-center gap-x-1">

                <FormField control={form.control} name="userName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField control={form.control} name="userBirthDate" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data de nascimento</FormLabel>
                        <FormControl>
                          <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="00/00/0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                />

                <FormField control={form.control} name="userEmail" render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail:</FormLabel>
                      <FormControl>
                        <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu e-mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField control={form.control} name="userPhone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular</FormLabel>
                      <FormControl>
                        <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu telefone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <section className='flex flex-row'>

                  <FormField control={form.control} name="userPassword" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Crie uma senha</FormLabel>
                        <FormControl>
                          <Input type="password" className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite uma senha" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField control={form.control} name="userConfirmedPassword" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirme a senha</FormLabel>
                        <FormControl>
                          <Input type="password" className="bg-darkGreen text-white placeholder:text-white" placeholder="Confirme a senha" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                </section>

                <Button className="bg-lightBrown w-full hover:bg-darkBrown" type="submit">Cadastrar</Button>
              
            {/* 
              <FormField control={form.control} name="userCep" render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP</FormLabel>
                    <FormControl>
                      <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="userStreet" render={({ field }) => (
                <FormItem>
                  <FormLabel>Rua</FormLabel>
                    <FormControl>
                      <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="userCity" render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
                    <FormControl>
                      <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="userState" render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                    <FormControl>
                      <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="userNeighbourhood" render={({ field }) => (
                <FormItem>
                  <FormLabel>Bairro</FormLabel>
                    <FormControl>
                      <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="userAddressNumber" render={({ field }) => (
                <FormItem>
                  <FormLabel>Número</FormLabel>
                    <FormControl>
                      <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="userAdditionalAddressInfo" render={({ field }) => (
                <FormItem>
                  <FormLabel>Complemento</FormLabel>
                    <FormControl>
                      <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> 
            */}
              
              </form>
            </Form>
          </section>

        </section>

      </main>
    
    </>

  )
}

