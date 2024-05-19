import Link from 'next/link'
import React from 'react'
import { LuListTodo } from "react-icons/lu";
import { TiUserAdd } from "react-icons/ti";



const Header = () => {
      return (
            <div>
                  <header className="max-h-[96px] bg-white pt-2 shadow-lg dark:bg-cyan-700">
                        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                              <h1 className="flex title-font text-lg font-semibold items-center mb-4 md:mb-0">

                                    <LuListTodo className={"m-2 h-7 w-7"} />
                                    <Link href={"/home"} className='text-white '>
                                          Todo List App</Link>
                              </h1>
                              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                                    <Link href={"/home/todo/add"} className="mr-1 text-white">Add
                                    </Link>
                                    <TiUserAdd className={"fill-white h-6 w-6 mr-5"} />
                                    <Link href={"/home/todo"} className="mr-5 bg-sky-50  hover:bg-cyan-950 border-2 p-2 hover:text-white text-cyan-950 border-sky-950 rounded shadow-lg">My Todos </Link>
                                    <Link href={"/home/users"} className="mr-5 bg-sky-50  hover:bg-cyan-950 border-2 p-2 hover:text-white text-cyan-950 border-sky-950 rounded shadow-lg">Users </Link>
                              </nav>

                        </div>
                        <hr className="border-t-2 border-gray-200" />
                  </header>
            </div>
      )
}

export default Header
