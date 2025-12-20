import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import qZone1 from '../../assets/class.png'
import qZone2 from '../../assets/playground.png'
import qZone3 from '../../assets/swimming.png'

const RightSide = () => {
    return (
        <div>
            <div>
                <h1 className='font-semibold'>Login With</h1>
                <div className='space-y-3 mt-2'>
                    <button className='btn btn-ghost w-full btn-outline'><FaGoogle /> With Google</button>
                    <button className='btn btn-ghost w-full btn-outline'><FaGithub /> With Github</button>
                </div>
            </div>

            <div className="mt-3">
                <h1 className="font-semibold">Find Us On</h1>
                <div className="space-y-2 mt-2">
                    <button className="btn w-full btn-ghost btn-outline"> <IoLogoWhatsapp /> Whatsapp</button>
                    <button className="btn w-full btn-ghost btn-outline"><FaFacebook /> Facebook</button>
                    <button className="btn w-full btn-ghost btn-outline"><AiFillTwitterCircle /> Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default RightSide;