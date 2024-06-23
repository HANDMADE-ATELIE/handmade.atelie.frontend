import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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

import logoImage from '../../../Logo.png';
 
const formSchema = z.object({
  userEmail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  userPassword: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  })
})

function Login() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userEmail: "",
    },
  })

  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <main className="flex justify-center bg-lime-100 h-full items-center">

        <section className="flex flex-col space-y-4 h-3/4 w-2/6">

          <section className="bg-backColorWhite h-full w-full flex flex-col items-center justify-center gap-8 rounded-md">

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