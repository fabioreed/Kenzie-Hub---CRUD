import React from 'react'
import { UserProvider } from './userContext'

function Providers({children}) {
  return (
    <UserProvider>
        {children}
    </UserProvider>
  )
}

export default Providers