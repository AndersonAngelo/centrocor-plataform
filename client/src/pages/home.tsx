import { Header } from "../components/Header";
import { MagnifyingGlass } from "phosphor-react";
import { Menu } from "../components/Menu";
import { api } from "../services/api";

export default function Home() {

  try {
    //api.get('/exams')
  } catch(error) {
    console.log(error)
  }
  return (
    <div className="w-screen h-screen p-0 m-0 bg-linear-container">
      <div className="w-screen p-0 m-0">
        <Header />
        <Menu />
      </div>

      <div className="flex flex-col justify-items-center items-center gap-5">
        <div className="">
          <div className="flex flex-row justify-center items-center mt-20">
            <input type="search" className="w-96 h-8 pl-1" placeholder="Pesquisar" id="pesquisar" />
            <button onClick={() => {}} className="ml-2 w-6 h-6 hover:scale-125 ease-in duration-200">
              <MagnifyingGlass size={24}/>
            </button>
          </div>
          <div className="mt-10">
            <form className="flex flex-row justify-items-center items-center" method="POST" action="" encType="multipart/form-data">
              <input type="file" name="arquivo" multiple required />
              <input className="bg-zinc-200 ml-2 rounded-sm hover:bg-zinc-300 ease-in duration-100 px-1" type="submit" value="Enviar" />
            </form>
          </div>
        </div>
        <div className="mt-10 w-screen flex justify-center">
          <table className="flex flex-col text-white border-b-2">
            <thead>
              <tr className="flex px-2 w-screen justify-between">
                <th className="list" scope="col">#</th>
                <th className="list" scope="col">Data do Exame</th>
                <th className="list" scope="col">Prontuario</th>
                <th className="list" scope="col">Nome</th>
                <th className="list" scope="col">telefone</th>
                <th className="list" scope="col">Convenio</th>
                <th className="list" scope="col">Medico Solicitante</th>
                <th className="list" scope="col">Medico executante</th>
                <th className="list" scope="col">Procedimento</th>
                <th className="list" scope="col">email</th>
                <th className="list" scope="col">Protocolo</th>
                <th className="list" scope="col">CPF</th>
                <th scope="col">sexo</th>
                <th className="list" scope="col">Exames</th>
                <th className="list" scope="col">...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {exams.map(() => {
                  <td key={exams.id}>{exams}</td>
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}