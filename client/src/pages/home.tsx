import { Header } from "../components/Header";
import { MagnifyingGlass } from "phosphor-react";

export default function Home() {
  return (
    <div className="w-screen h-screen p-0 m-0 bg-linear-container">
      <div className="w-screen p-0 m-0">
        <Header />
        <nav className="w-full">
          <ul className="flex justify-between px-40 mt-5">
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="sistema.php">
                Consultar exames
              </a>
            </li>
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="formulario.php">
                Cadastrar exames
              </a>
            </li>
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="usuarios.php">
                Cadastrar Usuarios
              </a>
            </li>
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="imprimir.php">
                Imprimir Exames
              </a>
            </li>
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="">
                frase Doctor
              </a>
            </li>
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="">
                Codigos de exames
              </a>
            </li>
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="importar.php">
                Importar
              </a>
            </li>
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="pdf.php">
                Gerar PDF
              </a>
            </li>
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="visualizar_arquivo.php">
                visualizar exames
              </a>
            </li>
            <li className="hover:scale-110 ease-in duration-200">
              <a className="menu" href="resultado.php">
                Gerar Resultados
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col justify-items-center items-center gap-5">
        <div className="">
          <div className="flex flex-row justify-center items-center mt-20">
            <input type="search" className="w-96 h-8" placeholder="Pesquisar" id="pesquisar" />
            <button onClick={() => {}} className="ml-2 w-6 h-6">
              <MagnifyingGlass size={24}/>
            </button>
          </div>
          <div className="">
            <form className="flex flex-row justify-items-center items-center" method="POST" action="processa.php" encType="multipart/form-data">
              <input className="" type="file" name="arquivo" multiple required />
              <input type="submit" value="importar" />
            </form>
          </div>
        </div>
        {/* <?php
        if (isset($_SESSION['msg'])) {
          echo $_SESSION['msg'];
          unset($_SESSION['msg']);
        }
        ?> */}
        <div className="mt-5 container-fluid justify-content">
          <table className="table align-middle table-dark table-hover text-white table-bg">
            <thead>
              <tr className="align-middle align-items-center text-center">
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
              {/* <?php
              while ($user_data = mysqli_fetch_assoc($result)) {
                echo "<tr className='list justify-content-center align-items-center text-center'>";
                echo "<td className='list text-center'>" . $user_data['id'] . "</td>";
                echo "<td className='list align-items-center text-center'>" . $user_data['data_exame'] . "</td>";
                echo "<td className='list'>" . $user_data['prontuario'] . "</td>";
                echo "<td className='list'>" . $user_data['nome'] . "</td>";
                echo "<td className='list'>" . $user_data['telefone'] . "</td>";
                echo "<td className='list'>" . $user_data['convenio'] . "</td>";
                echo "<td className='list'>" . $user_data['medico_solicitante'] . "</td>";
                echo "<td className='list'>" . $user_data['medico_executante'] . "</td>";
                echo "<td className='list'>" . $user_data['procedimento'] . "</td>";
                echo "<td className='list'>" . $user_data['protocolo'] . "</td>";
                echo "<td>
                        <a className='d-flex flex-column btn btn-sm btn-primary' href='edit.php?id=$user_data[id]' title='Editar'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-pencil' viewBox='0 0 16 16'>
                            <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z'/>
                          </svg>
                        </a>
                        <a className='d-flex flex-column btn btn-sm btn-danger'  id='del' title='Deletar' href='#' onclick='apagarUsuario($user_data[id])'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-trash-fill' viewBox='0 0 16 16'>
                            <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z'/>
                          </svg>
                        </a>
                        <a className='py-1 d-flex flex-column btn btn-sm btn-success' href='visualizar_arquivo.php'imprimir'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-printer-fill' viewBox='0 0 16 16'>
                            <path d='M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z'/>
                            <path d='M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z'/>
                          </svg>
                        </a>
                      </td>";
                echo "</tr>";
              }
              ?> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}