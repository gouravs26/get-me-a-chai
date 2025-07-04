'use client'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const [showdropdown, setShowdropdown] = React.useState(false)
  const { data: session, status } = useSession()

  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center md:h-16 px-4 flex-col md:flex-row'>
      <Link href={"/"} className="logo font-bold text-lg flex items-center justify-center">
        <img src="tea.gif" alt="" width={44} />
        <span className='text-xl md:text-base my-3 md:my-0'>
          GetMeAChai!
        </span>
      </Link>
      <div className='relative flex flex-col md:block gap-4 items-center md:items-start'>
        {session && <>
          <button 
            onClick={() => setShowdropdown(!showdropdown)} 
            onBlur={() => setTimeout(() => setShowdropdown(false), 100)} 
            id="dropdownDefaultButton" 
            data-dropdown-toggle="dropdown" 
            className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            type="button"
          >
            Welcome {session.user.email}
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute right-[125px] md:right-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your page</Link>
              </li>
              <li>
                <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
        </>}
        {session && 
          <button 
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-32 md:w-auto" 
            onClick={() => signOut()}
          >
            Logout
          </button>
        }
        {!session &&
          <Link href={"/login"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Login
            </button>
          </Link>
        }
      </div>
    </nav>
  )
}

export default Navbar
