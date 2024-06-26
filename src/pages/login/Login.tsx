import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import axios from "axios";
import logoImage from '../../../Logo.png';
 
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useEffect } from "react"
import { useForm } from "react-hook-form"

import { Button } from "../../../@/components/ui/button.tsx"
import { Input } from "../../../@/components/ui/input.tsx"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../@/components/ui/form"

const formSchema = z.object({
  userEmail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  userPassword: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  })
})

function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['user-token']);

  useEffect(() => { 
    
    if (cookies["user-token"])
      return navigate("/home");

  }, [cookies]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userEmail: "",
      userPassword: ""
    },
  })

  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {

    const responsValue = await axios.post('http://localhost:8080/auth/login', {
      email: values.userEmail,
      password: values.userPassword
    })
    
    if (responsValue.data.token) {
      setCookie('user-token', responsValue.data.token, { path: '/' });
      return navigate("/home");
    } 
  };

  return (
    <>
      <main className="flex justify-center bg-lime-100 h-full items-center">

        <section className="flex flex-col space-y-4 h-3/4 w-2/6 sm:w-5/6">

          <section className="flex flex-col bg-backColorWhite h-full w-full items-center justify-center gap-8 rounded-lg">

            <section className="bg-backColorWhite h-fit w-fit flex items-center justify-center rounded-full">
              <img src={logoImage}></img>
            </section>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6 w-1/2 text-left">
                <FormField
                  control={form.control}
                  name="userEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail:</FormLabel>
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
                      <FormLabel className="">Senha:</FormLabel>
                      <FormControl>
                        <Input className="bg-darkGreen text-white	placeholder:text-white focus-within:border-4 border-darkGreen" placeholder="Digite sua senha" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <section className="text-center">
                  <p>Esqueceu a senha?</p>
                </section>
                
                <Button className="bg-lightBrown w-full hover:bg-darkBrown" type="submit">Entrar</Button>

                <section className="text-center">
                  <p>Cadastre-se aqui</p>
                </section>
              </form>
            </Form>
          </section>

        </section>
      </main>
    </>
  )
}
  
export default Login