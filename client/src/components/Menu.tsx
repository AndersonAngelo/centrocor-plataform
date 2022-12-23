export function Menu() {
  return (
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
  );
}
