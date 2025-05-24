import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { logIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const handleLoginBtn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then((result) => {
                const user = result.user;

                // ✅ Check display name
                console.log("Display Name:", user.displayName);

                setUser(user);
                toast.success("Login successful!");

                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1000);
            })
            .catch((err) => {
                console.error("Login failed", err);
                setError({ ...error, login: err.code });
                toast.error("Login failed: Password or email error");
            });
    };

    return (
        <div className='min-h-screen flex justify-center items-center bg-[#F3F3F3]'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white p-6">
                <h2 className='text-2xl font-semibold text-center mb-4'>Login to your account</h2>
                <form className="card-body p-0" onSubmit={handleLoginBtn}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                        {error.login && (
                            <label className="label text-sm text-red-600">
                                {error.login}
                            </label>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <h2 className="mt-2 text-center">
                        Don’t have an account? <Link className='link text-red-500' to='/auth/register'>Register</Link>
                    </h2>
                </form>
            </div>

            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default Login;
