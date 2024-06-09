import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../usePublic/usePublicAxios";



const usePackageDetails = (id) => {
    const axiosPublic=usePublicAxios()  
   const {data : details,refetch} =useQuery({
    queryKey: ['details',id],
    queryFn : async () =>{
        const res = await axiosPublic.get(`/packageDetails/${id}`)
        return res.data
       
    },
   })
   return {details,refetch};
};

export default usePackageDetails;