import Image from "next/image";

export const NavBar = () => {
  return (
  <nav
          className="flex flex-col gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 p-2 w-70 h-screen
        "
        >
          <div>
            <Image  
              className="m-auto"
              src="/game-controller.svg"
              alt="Icone de um controle de videogame"
              width={160}
              height={150}
            />
          </div>
          <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
            <li className="my-2 px-2 rounded-lg bg-transparen hover:bg-slate-800 cursor-pointer">Home</li>
            <li className="my-2 px-2 rounded-lg bg-transparen hover:bg-slate-800 cursor-pointer">Games</li>
            <li className="my-2 px-2 rounded-lg bg-transparen hover:bg-slate-800 cursor-pointer">Top 10</li>
            <li className="my-2 px-2 rounded-lg bg-transparen hover:bg-slate-800 cursor-pointer">Walkthroughs</li>
          </ul>
          <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
            <li className="my-2 px-2 rounded-lg bg-transparen hover:bg-slate-800 cursor-pointer">User</li>
          </ul>
        </nav> 
    );
}