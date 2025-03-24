import React, { ReactNode } from 'react'

const Authlayout = ({children}: {children: ReactNode}) => {
  return <main className='flex min-h-screen items-center justify-center 
  bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10'>
    {children}</main>
}

export default Authlayout
