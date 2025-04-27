import React from 'react'
import Navbar from './navbar'
import CreateExpense from './CreateExpense'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { useDispatch } from 'react-redux'
import { setCategory } from '@/redux/expenseSlice'
import useGetExpenses from '@/hooks/useGetExpenses'

const Home = () => {
  useGetExpenses();
  const dispatch = useDispatch();

  const changeCategoryHandler = (value) => {
    dispatch(setCategory(value));
  }

  const changeDoneHandler = (value) => {
    dispatch(setCategory(value));
  }

  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto mt-6'>

        <div className='flex items-center justify-between mb-5 p-4 bg-gray-100 rounded shadow'>
          <h1 className='text-2xl font-bold'>Expense Tracker</h1>
          <CreateExpense />
        </div>

        <div className='flex items-center justify-between mb-5 p-4 bg-gray-100 rounded shadow'>
          <h1 className='text-lg font-semibold'>Filter By:</h1>
          <div className="flex gap-4">
            <Select onValueChange={changeCategoryHandler}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="rent">Rent</SelectItem>
                  <SelectItem value="salary">Salary</SelectItem>
                  <SelectItem value="shopping">Shopping</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="transport">Transport</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                  <SelectItem value="all">All</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select onValueChange={changeDoneHandler}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="done">Done</SelectItem>
                  <SelectItem value="undone">Undone</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Sample Expense Table */}
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Example Rows */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">2025-04-27</td>
                <td className="px-6 py-4 whitespace-nowrap">Lunch with friends</td>
                <td className="px-6 py-4 whitespace-nowrap">₹200</td>
                <td className="px-6 py-4 whitespace-nowrap">Food</td>
                <td className="px-6 py-4 whitespace-nowrap">Done</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">2025-04-26</td>
                <td className="px-6 py-4 whitespace-nowrap">Monthly Rent</td>
                <td className="px-6 py-4 whitespace-nowrap">₹500</td>
                <td className="px-6 py-4 whitespace-nowrap">Rent</td>
                <td className="px-6 py-4 whitespace-nowrap">Done</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">2025-04-25</td>
                <td className="px-6 py-4 whitespace-nowrap">Movie Night</td>
                <td className="px-6 py-4 whitespace-nowrap">₹1000</td>
                <td className="px-6 py-4 whitespace-nowrap">Entertainment</td>
                <td className="px-6 py-4 whitespace-nowrap">Undone</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">2025-04-24</td>
                <td className="px-6 py-4 whitespace-nowrap">Bus Ticket</td>
                <td className="px-6 py-4 whitespace-nowrap">₹300</td>
                <td className="px-6 py-4 whitespace-nowrap">Transport</td>
                <td className="px-6 py-4 whitespace-nowrap">Done</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              {/* More rows can be added dynamically */}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Home
