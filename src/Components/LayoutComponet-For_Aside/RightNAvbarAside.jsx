import ScoialAccount from "../Login/ScoialAccount";
import SocialLogin from "../Login/SocialLogin";

const RightNAvbarAside = () => {
    return (
        <div className="space-y-8">
            <SocialLogin></SocialLogin>
            <ScoialAccount></ScoialAccount>
        </div>
    );
};

export default RightNAvbarAside;