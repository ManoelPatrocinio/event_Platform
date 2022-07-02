import  logo  from "../assets/logo.svg";
import { LogoMenu } from "./Logo_menu";

type PropsHeader = {
  toggleMenuVisibility: any
  valueMenu:boolean
}
export function Header({toggleMenuVisibility,valueMenu}:PropsHeader) {

  return (
    <header className="w-full py-5 flex items-center justify-around md:justify-center bg-gray-700 border-b border-gray-600">

    <img src={logo} alt="logo Rocketseat" className="w-[10.4rem] h-[1.4rem] md:w-[14.8rem] md:h-[3rem]"/>
      

      <button onClick={()=> toggleMenuVisibility(!valueMenu) } className="flex items-center justify-center md:hidden">
        <span className="text-sm text-gray-100 mx-2">Aulas</span>
        <LogoMenu/>
      </button>
    </header>
  );
}
