import React from 'react'

function AuthCheck(Component){

    let authenticated = true;

    return (props)=>{
        if(authenticated){
            return <Component {...props}/>
        }
        else{
            return <Login />
        }
    }
}

const User = (props)=>{
    return (
        <div>
            I am User Component
             <h2>hello{props.username}</h2>
        </div>
       
    )
}
const Login = ()=>{
    return (
        <div>I am Login Component</div>
    )
}

const AuthChecked = AuthCheck(User)
const HigherOrder = () => {
  return (
    <div>
        <AuthChecked username={"Jhon"}/>
    </div>
  )
}

export default HigherOrder