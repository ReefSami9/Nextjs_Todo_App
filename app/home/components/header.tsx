import Link from 'next/link'
import React from 'react'

const Header = () => {
      return (
            <div>
                  <header className="text-gray-600 body-fon bg-gray-300">
                        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                              <h1 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                    <span className='text-black'>TodoList APP</span>
                              </h1>
                              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                                    <Link href={"/home/todo/add"} className="mr-5 hover:text-gray-900">Add ➕</Link>
                                    <Link href={"/home/todo"} className="mr-5 hover:text-white hover:bg-blue-300 border-2 p-2 text-black border-blue-300 rounded ">My Todos </Link>
                                    <Link href={"/home/users"} className="mr-5 hover:text-white hover:bg-blue-300 border-2 p-2 text-black border-blue-300 rounded ">Users </Link>
                              </nav>

                        </div>
                        <hr className="border-t-2 border-gray-200" />
                  </header>
            </div>
      )
}

export default Header
