import { SiFacebook } from "react-icons/si";
import { ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import swimming from "../../assets/swimming.png";
import classroom from "../../assets/class.png"; 
import playground from "../../assets/playground.png";
import background from "../../assets/bg.png"





const ScoialAccount = () => {
    return (
        <div>
            <h2 className='text-[#403F3F] font-semibold'>Find Us On</h2>

            <div className="*:w-full space-y-2 mt-5 mb-12">
                <button className="btn btn-active btn-ghost"><SiFacebook/>FaceBook</button>
                <button className="btn btn-active btn-ghost"><ImTwitter />Twitter</button>
                <button className="btn btn-active btn-ghost"><BsInstagram />Instagram</button>
            </div>
            <div className="*:w-full">
                <h2 className="text-black font-semibold mb-5">Q-Zone</h2>
                <img src={swimming}/>
                <img src={classroom}/>
                <img src={playground}/>
                <img src={background}/>
            </div>
        </div>
    );
};

export default ScoialAccount;