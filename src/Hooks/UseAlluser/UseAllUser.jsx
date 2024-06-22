import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";


const UseAllUser = () => {


    const axiosSecure=useAxiosSecure()

    const {data: users,refetch}=useQuery({

        queryKey:['allUser'],
        queryFn:async ()=>{
            const res = await axiosSecure.get('/users')
            return res.data
        }

    })
    return [users,refetch]
};

export default UseAllUser;