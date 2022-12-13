import Image from "next/image";
import { useState } from "react";
import logoImg from '../../public/imagens/Logo_CENTROCOR-01.png'
import userImg from '../../public/imagens/usuario.png'

export function Header() {
  const [buttonExitActive, setButtonExitActive] = useState(false);
  return (
    <header className="bg-linear-header h-40 flex justify-between navbar navbar-expand-lg navbar-dark">
      <div className="ml-3 flex justify-center items-center">
        <Image
          src={logoImg}
          alt="Logo centrocor"
          className="w-32"
        />
      </div>
      <div className="flex flex-col justify-center items-center mr-10">
        <Image
          id="user"
          className="bg-white rounded-full w-16"
          src={userImg}
          alt="Icone de usuário"
          onClick={() => setButtonExitActive(!buttonExitActive)}
        />
        <p className="text-white">Anderson</p>
        {buttonExitActive && (
          <button
            onClick={() => { }}
            type="button"
            className="bg-red-500 text-white hover:brightness-90 w-16 h-7 rounded-sm mt-2"
          >
            Sair
          </button>
        )}
      </div>
    </header>
  );
}
