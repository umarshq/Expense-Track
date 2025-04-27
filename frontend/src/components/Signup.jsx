import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import axios from 'axios'
import { toast } from 'sonner'


const Signup = () => {
    const [input, setInput] = useState({
        fullName: '', email: '', password: ''
    });
    const navigate = useNavigate();
    const changeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const submitHandler =  async (e) => {
        e.preventDefault();
        try{
          const res = await axios.post("http://localhost:3000/api/v1/user/register" ,input, {
            headers: { 'Content-Type': 'application/json' },
          
        });
        console.log(res);
        if(res.data.success){
          toast.success(res.data.message);
          navigate('/login');
        }
    
          
        } catch (error) {
          toast.error (error.response.data.message);

        }
        
    } 
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <div>
            
        </div>
        <form onSubmit={ submitHandler} className='w-96 p-8 shadow-lg'>
            <div>
                <Label>
                    Full Name
                </Label>
                <Input type="text" name="fullName" value={input.fullName} required onChange={changeHandler} />
            </div>
            <div>
                <Label>
                    Email Address
                </Label>
                <Input type="email" name="email" value={input.email} required onChange={changeHandler} />
            </div>
            <div>
                <Label>
                    Password
                </Label>
                <Input type="password" name="password" value={input.password} required onChange={changeHandler} />

                </div>
                <button className='w-full my-5'>Signup</button>
                <h4 className ='text-sm text-center'>Already have an accoynt?<Link to="/Login" className='text-blue-500'>Login</Link></h4>
        </form>
    </div>
  )
}

export default Signup