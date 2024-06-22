import { FaUsers } from "react-icons/fa";
import UseAllUser from "../../Hooks/UseAlluser/UseAllUser";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";




const AllUsers = () => {
    // const [users,refetch] = UseAllUser()

    const axiosSecure=useAxiosSecure()

     

    const { data: users,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res =await axiosSecure.get('/users',{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.data
        }
    })


  const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is a Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
  const handleMakeGuide = (user) => {
        axiosSecure.patch(`/users/guide/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is a Guide now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }




    return (
        <div>
            {/* <SectionTitle

                subHeading={'How many??'}
                heading={'MANAGE ALL USERS'}
            >

            </SectionTitle> */}
            <div>
                <h2 className="text-3xl ">Total Users: {users?.length}</h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr className="bg-[#D1A054]  ">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role </th>
                                <th>Role </th>
                            </tr>
                        </thead>


                        <tbody>
                            {users?.map((user, idx) => (
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#D1A054]">
                                                <FaUsers className="text-2xl text-white"></FaUsers>
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        { user?.role === 'guide'? 'Guide' :
                                        <button onClick={() => handleMakeGuide(user)} className="btn btn-lg bg-[#B91C1C]">
                                            <FaUsers
                                                className=" text-2xl" />
                                        </button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>




                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;