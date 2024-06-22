import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";


const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
});

const UseAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    // Request interceptor to add authorization header for every secure call to API
    axiosSecure.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem('access-token');
            console.log('request stopped by interceptor', token);
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }

            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // Response interceptor for 401 and 403 status
    axiosSecure.interceptors.response.use(
        function (response) {
            return response;
        },
        async (error) => {
            const status = error.response ? error.response.status : null;
            console.log('status error in the interceptor', status);
            if (status === 401 || status === 403) {
                console.log('Logging out user');
                await logOut();
                console.log('Navigating to login');
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default UseAxiosSecure;