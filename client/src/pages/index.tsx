import Image from "next/image";
import * as yup from 'yup';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Input";

import logoImg from '../../public/imagens/Logo_CENTROCOR-01.png'

type UseProps = {
  name: string;
  password: string;
}

const createUseSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório.'),
  password: yup.string().required('Senha é obrigatória.').min(8, 'Mínimo 8 caracteres.').max(10, 'Máximo 10 caracteres.')
});

export default function Home() {

  const { register, handleSubmit, formState } = useForm<UseProps>({
    resolver: yupResolver(createUseSchema)
  });

  const errors = formState.errors;

  const handleCreateUser: SubmitHandler<UseProps> = async (values) => {
    console.log(values);
  }

  return (
    <main className="bg-sky-900 bg w-screen h-screen flex justify-center items-center">
      <div className="w-[30rem] h-[35rem] flex justify-center items-center flex-col bg-zinc-400 rounded-md">
        <Image src={logoImg} alt="Logo Centrocor"/>
        <form onSubmit={handleSubmit(handleCreateUser)} className="mt-12">
          <Input error={errors.name} type="text" label="Nome" {...register('name')}/>
          <Input error={errors.password} type="password" label="Senha" {...register('password')}/>
        </form>
      </div>
    </main>      
  )
}
