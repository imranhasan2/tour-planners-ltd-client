import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../usePublic/usePublicAxios";


const usePackages = () => {
    const axiosPublic=usePublicAxios()
    const {data: packages}=useQuery({
        queryKey:['packages'],
        queryFn:async() =>{
            const res =await axiosPublic.get('/package')
            return res.data
        }
        
    })
    return [packages]
    }

export default usePackages;