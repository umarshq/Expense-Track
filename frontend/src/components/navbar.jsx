import React from 'react'
import { Popover, PopoverContent } from './ui/popover';
import { PopoverTrigger } from './ui/popover';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'sonner';


const Navbar = () => {
    const user = false;
    const navigate = useNavigate();

    const logoutHandler = async ()=>{
        try{
            const res = await axios.get("http://localhost:3000/api/v1/user/logout");
            if(res.data.success){
                navigate("/signup");
                toast.success(res.data.message);
            }

        }catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

  return (
    <div className='border-b border-amber-300'>
        <div className='flex items-center justify-between max-w-7xl mx-auto h-16'>
        {
            user ? (
                <Popover>
                    <PopoverTrigger>
                    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      
    </Avatar>


                    </PopoverTrigger>
                    <PopoverContent>
                        <Button variant="Link" onClick={logoutHandler}>Logout</Button>

                    </PopoverContent>
                </Popover>

            ) : (
                <div className='flex items-center gap-2 '>
                    <Link to="/login"><Button variant= "outline">Login</Button></Link>
                    <Link to="/signup"><Button>signup</Button></Link>
                </div>

            )
        }



        </div>
        
    </div>
  )
}

export default Navbar