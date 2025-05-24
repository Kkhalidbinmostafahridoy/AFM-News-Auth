import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";

const PrivateRoute = ({ children }) => {
    const { user ,loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;
    }

    // Redirect to login with current location saved
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
