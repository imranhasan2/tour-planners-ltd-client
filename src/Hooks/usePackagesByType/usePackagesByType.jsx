import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";

const usePackagesByType = (type) => {
    const axiosSecure = useAxiosSecure();

    const { data: packages } = useQuery({
        queryKey: ['packages', type],
        queryFn: async () => {
            const response = await axiosSecure.get(`/tour/${type}`);
            return response.data;
        },
        enabled: !!type
    });

    return { packages };
};

export default usePackagesByType;