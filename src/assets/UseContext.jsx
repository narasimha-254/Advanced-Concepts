import React, { createContext } from 'react'
import Home from './Home'

export const context = createContext()
const UseContext = () => {
    let isAdmin = 'true'

    let p = {
        name:'Narasimha',
        age:27
    }
  return (
    <div>
        <context.Provider value={p}>
            <Home />
        </context.Provider>
    </div>
  )
}

export default UseContext