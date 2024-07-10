import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import axios from "axios";
import logoImage from '../../../Logo.png';
 
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { Button } from "../../../@/components/ui/button.tsx"
import { Input } from "../../../@/components/ui/input.tsx"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../@/components/ui/form.tsx"
import Register from "../user-register/register.tsx";
import { Toaster, toast } from 'sonner'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog.tsx"



const formSchema = z.object(
  { 
    userEmail: z.string().regex(/.+@.+/, 'O email padrão do email deve ser: email@test.com'), 
    userPassword: z.string().min(8, {message: 'A senha deve possuir pelo menos 8 digitos'})
  }
)

export default function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user-token']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { 
    
    if (cookies["user-token"]) {
      navigate("/home");
    }
      
  }, [cookies]);

  const form = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema), 
      defaultValues: { userEmail: "", userPassword: ""},
    }
  )

  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {

    await axios.post('http://localhost:8080/auth/login', {
      email: values.userEmail,
      password: values.userPassword
    }).then((response) => {

      if (response.data.token) {
        setCookie('user-token', response.data.token, { path: '/' });
        navigate("/home");
      }
        
    }).catch((error) => {
      
      toast.error(
        error.response.data.message === 'Invalid credentials' ? 'Email ou Senha Inválidos' : 'Ocorreu um problema com a requisição de login'
      );
    })

  };

  return (
    <>

      <main className="flex justify-center bg-backColorMain h-full w-full items-center">

        <Toaster position="top-center" richColors closeButton/>

        <section className="flex flex-col space-y-4 h-3/4 w-2/6 sm:w-5/6">
        
          <section className="flex flex-col bg-backColorWhite h-full w-full items-center justify-center gap-8 rounded-lg">

            <section className="bg-backColorWhite h-fit w-fit flex items-center justify-center rounded-full">
              <img src={logoImage}></img>
            </section>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6 w-1/2">
                <FormField
                  control={form.control}
                  name="userEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input className="bg-darkGreen text-white placeholder:text-white" placeholder="Digite seu e-mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Senha</FormLabel>
                      <FormControl>
                        <Input type="password" className="bg-darkGreen text-white	placeholder:text-white focus-within:border-4 border-darkGreen" placeholder="Digite sua senha" {...field} />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                
                <section className="text-center">

                  <Dialog>
                    <DialogTrigger>
                      <Button variant="link" className="text-blue-400">Esqueceu a senha?</Button>
                    </DialogTrigger>
                    <DialogContent className="bg-darkGreen">
                      <DialogHeader>
                        <DialogTitle className="text-white">Alteração de senha</DialogTitle>
                        <DialogDescription className="text-white">

                        <div className="flex items-center space-x-2">
                          <div className="grid flex-1 gap-4">
                            Para realizar a troca da sua senha informe o email do usuário que deseja trocar e enviaremos um email para a troca da senha
                            <Input className=" bg-backColorMain text-[#888C75] placeholder:text-[#888C75]" placeholder="Digite seu e-mail"/>
                            <Button className="bg-lightBrown w-full hover:bg-darkBrown" onClick={() => { toast.success('Email enviado com sucesso')  }} >Enviar</Button>
                          </div>
                        </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </section>
                
                <Button className="bg-lightBrown w-full hover:bg-darkBrown" type="submit">Entrar</Button>

                <section className="text-center">
                  <Button variant="link" className="text-blue-400" onClick={() => { setIsVisible(true) }}>Cadastrar-se</Button>
                </section>
              </form>
            </Form>
          </section>
        </section>          

        <section className={`h-3/4 w-2/6 ${isVisible ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity duration-500 ease-in-out`}>
          <Register/>
        </section>
      </main>
    </>
  )
}