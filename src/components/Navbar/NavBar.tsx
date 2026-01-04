import { GameIcon, HomeIcon, MedalIcon, PathIcon } from "@/components/";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const NavBarList = ({ children, className }: Props) => {
  return <ul className={`my-4 border-t border-indigo-400/20 hover:border-indigo-400/40 ${className}`}>{children}</ul>;
};

const NavBarItem = ({ children, className }: Props) => {
  return (
    <li
      className={`my-2 px-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100 font-bold ${className}`}
    >
      {children}
    </li>
  );
};

export const NavBar = () => {
  return (
    <nav
      className="flex flex-col gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 p-2 w-70 h-screen
        "
    >
      <div className="my-2">
        <Image className="m-auto" src="/logo.png" alt="Icone de um controle de videogame" width={200} height={50} />
      </div>

      <NavBarList className="flex-grow">
        <NavBarItem>
          <HomeIcon className="w-4 h-4" /> Home
        </NavBarItem>
        <NavBarItem>
          <GameIcon className="w-4 h-4" /> Games
        </NavBarItem>
        <NavBarItem>
          <MedalIcon className="w-4 h-4  " /> Top 10
        </NavBarItem>

        <NavBarItem>
          <PathIcon className="w-4 h-4 " /> Walkthroughs
        </NavBarItem>
      </NavBarList>

      <NavBarList>
        <NavBarItem> User</NavBarItem>
      </NavBarList>
    </nav>
  );
};
