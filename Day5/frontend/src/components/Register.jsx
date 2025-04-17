import React from 'react'
import axios from 'axios'

const Register = () => {
    const handleregister = async(e) => {
        e.preventDefault();
        const name=e.target.name.value;
        const age=e.target.age.value;
        const user=(name,age)
        await axios.post('http://localhost:9000/users',user)
        alert('User Registered')
    }
  return (
    <div>
        <h1>Register User</h1>
        <form onSubmit={(handleregister)}>
        <label>
        </label>
    </div>
  )
}

export default Register