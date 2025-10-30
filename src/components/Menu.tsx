import { Code, Link, TableCellsSplit, User } from "lucide-react";


export function Menu() {
  return (
    <div className="fixed hidden md:flex flex-col gap-4  bottom-4 left-2 px-2 py-4 bg-clip-padding bg-linear-to-b from-purple-500 to-purple-700 drop-shadow-lg hover:from-purple-400/50 hover:to-purple-700/50 transition-all duration-150 rounded-xl">
      <a href="#about" title="Sobre"><User className="w-8 h-8 bottom-40 left-2 text-gray-100 cursor-pointer hover:text-gray-100/50 transition-all duration-150 " /></a>
      <a href="#skills" title="Habilidades"><Code className="w-8 h-8 bottom-16 left-2 text-gray-100 cursor-pointer hover:text-gray-100/50 transition-all duration-150 " /></a>
      <a href="#portfolio" title="Portfólio"><TableCellsSplit className="w-8 h-8 bottom-28 left-2 text-gray-100 cursor-pointer hover:text-gray-100/50 transition-all duration-150 " /></a>
      <a href="#links" title="Links"><Link className="w-8 h-8 bottom-4 left-2 text-gray-100 cursor-pointer hover:text-gray-100/50 transition-all duration-150 " /></a>
    </div>
  )
}