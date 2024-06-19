import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsappSquare, FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <img src="https://www.tour-planners.com/uploads/vaQdkhSEelNt.gif" className="w-48" alt="" />
                <h6 className="footer-title">Tower Hamlet (9th Floor), 16-Kemal <br /> Ataturk Avenue, Banani, Dhaka-1213,<br /> Bangladesh.</h6>
                <a className="link link-hover flex items-center gap-2"><BsFillTelephoneForwardFill />+88-01993111222</a>
                <a className="link link-hover flex items-center gap-2"><MdOutlineMail /> tourplan@tour-planners.com</a>
            </nav>
            <nav>
                <h1 className="text-white text-xl">Top Tour Destination</h1>
                <h6 className="footer-title">Dhaka</h6>
                <a className="link link-hover">Sylhet </a>
                <a className="link link-hover">bandarban</a>
                <a className="link link-hover">Rangamati</a>
                <a className="link link-hover">Sreemangal </a>
                <a className="link link-hover">Chittagong </a>
                <a className="link link-hover">Coxs bazar </a>
                <a className="link link-hover">Khulna </a>
            </nav>
            <nav>
                <h1>SOCIAL MEDIA</h1>
                <h6 className="footer-title">Feel Free to join us on <br /> our Social Media. Be in touch with <br /> Tour Planners Limited</h6>
                
                <a className=" link link-hover flex gap-3"><FaFacebook size={24} /><FaWhatsappSquare size={24} /> <FaYoutube size={24} /><FaInstagram size={24} /> </a>
            </nav>
        </footer>
    );
};

export default Footer;