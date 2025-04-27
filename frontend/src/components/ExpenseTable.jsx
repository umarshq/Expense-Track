import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  import { useSelector } from "react-redux";
  import { Checkbox } from "./ui/checkbox";
  import { Button } from "./ui/button";
  import { Edit2, Icon, Trash } from "lucide-react";
  import UpdateExpense from "./UpdateExpense";
  import { useEffect, useState } from "react";

  
  const ExpenseTable = () => {
    const { expenses } = useSelector((store) => store.expense);
    const [localExpense, setLocalExpense] = useState([]);
  
    const handleCheckboxChange = (expenseId) => {};
  
    useEffect(() => {
      setLocalExpense(expenses);
    }, [expenses]);
    
  
    return (
        
      <Table>
        <TableCaption>A list of your recent expenses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Mark as Done</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {localExpense.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                <span>Add your expense</span>
              </TableCell>
            </TableRow>
          ) : (
            localExpense?.map((expense) => (
              <TableRow key={expense._id}>
                <TableCell className="font-medium">
                  <Checkbox
                    checked={expense.done}
                    onCheckedChange={() => handleCheckboxChange(expense._id)}
                  />
                </TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.amount}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.createdAt?.split("T")[0]}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      size={Icon}
                      className="rounded-full border-amber-300 hover:border-amber-400 "
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                    <Button
                      size={Icon}
                      className="rounded-full border-amber-300 hover:border-amber-400 "
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
  
                    <UpdateExpense />
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableBody>
                  {expenses.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">{invoice.invoice}</TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="font-bold text-xl">
              Total
            </TableCell>
            <TableCell className="text-right font-bold text-xl">$</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  };
  
  export default ExpenseTable;
  
  