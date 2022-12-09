import Image from "next/image";

export function Header() {
  return (
    <header className="bg-linear-header h-40 flex justify-between navbar navbar-expand-lg navbar-dark">
      <div className="">
        <a className="navbar-brand" href="#">
          <Image
            src="../../public/image/Logo_CENTROCOR-01.png"
            alt="Logo centrocor"
            width={40}
            height={40}
          />
        </a>
      </div>
      <div className="user-container d-flex flex-column justify-content-center">
        <img
          id="user"
          className="icon-user"
          src="../assets/usuario.png"
          alt="Icone de usuário"
        />
        <div className="bnt-logout-container d-flex">
          <button
            onClick={() => {}}
            type="button"
            className="bnt-logout btn btn-danger"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
