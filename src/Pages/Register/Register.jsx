import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import loginImg from '../../assets/authentication2.png'
import loginPng from '../../assets/authentication.png'
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useAuth()

    const { register, handleSubmit, formState: { errors }, } = useForm()


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "SuccessFully Registered",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.error(error))
    }


    return (
        <div style={{
            backgroundImage: `url(${loginPng})`
        }} className="hero min-h-screen  ">

            <div>

                <h1 className='text-center text-3xl font-bold'>SIgn Up!</h1>

                <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse justify-center items-center  ">


                    <div className="text-center  w-1/2 ">

                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card   w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"  {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                                {errors.photoUrl && <span className='text-red-600'>Photo Url field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"
                                    {...register("email", { required: true })}
                                    placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password"
                                    {...register("password", {
                                        required: true, minLength: 6, maxLength: 18,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Pass field is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 character</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password shouldn't exceed 18 characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have an UpperCase letter one Lower Case letter and one number and a special characters </p>}

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="signUp" className="btn" style={{ backgroundColor: "rgba(209, 160, 84, 0.70)" }} />
                            </div>

                            <p className='text-center'>Already have an Account?<Link style={{ backgroundColor: "rgba(209, 160, 84, 0.70)" }} to={'/login'}> Please Login</Link></p>

                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;