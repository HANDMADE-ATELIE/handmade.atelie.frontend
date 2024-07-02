import React from 'react'
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import axios from "axios";

import { Button } from "../../../@/components/ui/button.tsx"
import { Input } from "../../../@/components/ui/input.tsx"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../@/components/ui/form.tsx"
import { Toaster, toast } from 'sonner'
import { format } from 'date-fns';

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
    userBirthDate: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, 'O padrão do campo data deve ser YYYY-MM-DD'),
    userCpf: z.string().min(11, { message: 'O CPF deve ter pelo menos 11 digitos' }).max(11, { message: 'O CPF deve ter no máximo 11 digitos' }),
    userEmail: z.string().regex(/.+@.+/, 'O email padrão do email deve ser: email@test.com'),
    userPhone: z.string().min(10, { message: 'O número de telefone deve ter 10 digitos pelo menos' }).max(11, { message: 'O número de telefone deve ter no máximo 11 digitos' }),
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

    if (values.userPassword != values.userConfirmedPassword) {
      toast.error('As senhas digitadas não coincidem');
      return;
    }

    await axios.post('http://localhost:8080/user/registerCustomerUser', {
      name: values.userName,
      dateOfBirth: values.userBirthDate,
      cpf: values.userCpf,
      email: values.userEmail,
      password: values.userPassword,
      phoneNumbers: [{ phoneNumber: values.userPhone }]
    }).then(() => {

      toast.success('O cadastro foi realizado com sucesso! Agora será possível realizar o login');
        
    }).catch((error) => {

      const toastMessage = 
        error.response.data.message === 'Email already exists' ? 'O email informado já está cadastrado' 
        : error.response.data.message === 'Invalid CPF' || error.response.data.message === 'CPF already exists' ? 'O CPF informado está inválido ou já está cadastrado' 
        : error.response.data.message === 'Invalid phone number, must have only 10 or 11 numeric characters and no special characters' ? 'O telefone informado está inválido' 
        : error.response.data.message === 'Invalid age, must be over 18 years old' ? 'A data de nascimento informada está inválida' 
        : 'Ocorreu algum erro na hora de criar o novo usuário';

      toast.error(toastMessage);

    })

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

        <Toaster position="top-center" richColors closeButton/>

        <section className="flex flex-col h-[95%] w-[85%] sm:w-5/6">  

          <section className="flex flex-col bg-backColorWhite h-full w-full items-center justify-center gap-2 rounded-lg">

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
                
                <FormField control={form.control} name="userCpf" render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF</FormLabel>
                      <FormControl>
                        <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu cpf" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField control={form.control} name="userBirthDate" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data de nascimento</FormLabel>
                        <FormControl>
                          <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="0000-00-00" {...field} />
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

