import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'sonner';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        input,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true // if your backend needs cookies/session
        }
      );

      console.log(res.data);

      if (res.data?.success) {
        toast.success(res.data.message || 'Login successful!');
        navigate('/');
      } else {
        toast.error(res.data?.message || 'Login failed');
      }

    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <form onSubmit={submitHandler} className='w-96 p-8 shadow-lg bg-white rounded-xl space-y-4'>
        <div>
          <Label>Email Address</Label>
          <Input
            type="email"
            name="email"
            value={input.email}
            required
            onChange={changeHandler}
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={input.password}
            required
            onChange={changeHandler}
          />
        </div>
        <Button className='w-full' type="submit">Login</Button>
        <h4 className='text-sm text-center'>
          Don't have an account?
          <Link to="/Signup" className='text-blue-500'> Signup</Link>
        </h4>
      </form>
    </div>
  );
};

export default Login;
