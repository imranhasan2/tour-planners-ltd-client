import { useNavigate } from "react-router-dom";
import usePublicAxios from "../../Hooks/usePublic/usePublicAxios";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";


const SocialLogin = () => {

    const { googleSignIn } = useAuth()

    const navigate = useNavigate()

    const axiosPublic = usePublicAxios()

    const handleGoogleSIgnIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {

                        if (res.data.insertedId > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User logged SuccessFully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        console.log(res.data)
                        navigate('/')
                    })

            })
    }
    return (
        <div className=" flex justify-center flex-col items-center space-y-4">
            <h2 className="text-[#444] text-2xl">Or sign in with</h2>
            <button onClick={handleGoogleSIgnIn}>
                <FaGoogle className=" border-2 rounded-full p-4 text-6xl" ></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;