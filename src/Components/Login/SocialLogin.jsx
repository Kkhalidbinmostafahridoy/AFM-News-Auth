import { FcGoogle } from "react-icons/fc";
import { SiRefinedgithub } from "react-icons/si";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login with</h2>
            <div className='*:w-full space-y-2'>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white hover:bg-gray-100 shadow hover:shadow-md transition text-blue-500">
                    <FcGoogle className="mr-2" />
                    Login With Google
                </button>

                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  shadow hover:shadow-md transition ">
                    <SiRefinedgithub className="mr-2" />
                    Login With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;