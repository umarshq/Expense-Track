import { setExpenses } from "@/redux/expenseSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetExpenses = () => {
    const dispatch = useDispatch();
    const { category, markAsDone } = useSelector(store => store.expense);

    useEffect(() => {
        const fetchExpense = async () => {
            try {
                axios.defaults.withCredentials = true;

                // Build query params conditionally
                const params = new URLSearchParams();
                if (category !== "all") params.append("category", category);
                if (markAsDone !== "all") params.append("done", markAsDone);
                

                const res = await axios.get(`http://localhost:3000/api/v1/expense/getall?${params.toString()}`);
                
                if (res.data.success) {
                    dispatch(setExpenses(res.data.expense));
                }
            } catch (error) {
                console.log("API Error:", error);
            }
        };

        fetchExpense();
    }, [dispatch, category, markAsDone]);
};

export default useGetExpenses;
