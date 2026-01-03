"use client";

import { GameIcon, HomeIcon, MedalIcon, PathIcon, SmileyIcon } from "@/components/";
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
      <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40 text-slate-400">
        <li className=" my-2 px-2 rounded-lg bg-transparen hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100 font-bold">
          <HomeIcon className="w-4 h-4 " />
          Home{" "}
        </li>
        <li className="my-2 px-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100 font-bold">
          <GameIcon className="w-4 h-4" />
          Games
        </li>
        <li className="my-2 px-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100 font-bold">
          <MedalIcon className="w-4 h-4  " />
          Top 10
        </li>

        <li className="my-2 px-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer  flex gap-2 items-center hover:text-slate-100 font-bold">
          <PathIcon className="w-4 h-4 " />
          Walkthroughs
        </li>
      </ul>
      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 px-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer flex gap-2 items-center hover:text-slate-100 font-bold">
          <SmileyIcon className="w-4 h-4 " />
          User
        </li>
      </ul>
    </nav>
  );
};
