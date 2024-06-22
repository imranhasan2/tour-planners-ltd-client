import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";
import useAuth from "../useAuth";


const useGuide = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isGuide, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isGuide'],
        queryFn: async () => {
            const res = await axiosSecure.get(`users/guide/${user?.email}`);
            console.log(res.data)
            return res.data?.guide
        }
    })
    return [isGuide, isAdminLoading]
};

export default useGuide;