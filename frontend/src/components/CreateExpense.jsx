import React, { useState } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'

const CreateExpense = () => {
    const [formData, setFormData] = useState({
        description: '', amount: '', category: ''
    });
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const changeEventHandler = (e) => {
        const {name, value} = e.target; setFormData(prev => ({ ...prev, [name]: value }));
    }
    const changeCategoryHandler = (value) => {
        setFormData((prevData) => ({ ...prevData, category: value }));
    }
    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(formData);
        try{
            setLoading(true);
            const res = await axios.post("http://localhost:3000/api/v1/expense/add", formData,{
                
                
                    headers: {
                      'Content-Type': 'application/json',
                   
                    },
                    withCredentials: true
                
                
            });
            if (res.data.success){
                toast.success(res.data.message);
                setIsOpen(false);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={()=> setIsOpen(true)} variant="outline">Add New Expense</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>
            Create expense here
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submitHandler}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Description
            </Label>
            <Input id="description" 
            placeholder="Enter description" required
             className="col-span-3"
             name="description"
             onChange={changeEventHandler}
             value={formData.description}
              />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Amount
            </Label>
            <Input id="amount" 
            placeholder="xxx ₹"
            required name="amount" type="number" 
             className="col-span-3" 
             onChange={changeEventHandler} 
             value={formData.amount} 
             />
          </div>
          <Select onValueChange={changeCategoryHandler}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Catagery</SelectLabel>
          <SelectItem value="food">food</SelectItem>
          <SelectItem value="rent">Rent</SelectItem>
          <SelectItem value="salary">Salary</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
          <SelectItem value="others">others</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <DialogFooter>
            {
                loading ? <Button className= 'w-full my-4'>
                    <Loader2 className='mr-2 h-4 animate-spin'/>
                    Loading...
                </Button> :
                   <Button type="submit">Add</Button>
            }
       
        </DialogFooter>
        </form>
       
      </DialogContent>
    </Dialog>
  )
}

export default CreateExpense