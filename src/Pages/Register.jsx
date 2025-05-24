import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { getAuth } from "firebase/auth";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const auth = getAuth(); // Initialize Firebase auth instance

  const handleRegisterBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.Name.value;
    const photoUrl = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name.length < 5) {
      setError({ ...error, name: "Name must be at least 5 characters long." });
      return;
    }

    createNewUser(email, password)
      .then(result => {
        const user = result.user;

        // Update profile with displayName and photoURL
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            // Reload user to refresh profile data
            auth.currentUser.reload()
              .then(() => {
                // Update context with refreshed user object
                setUser(auth.currentUser);
                navigate('/');
              })
              .catch(err => console.log("Reload user error:", err));
          })
          .catch(err => console.log("Update profile error:", err));
      })
      .catch(error => {
        console.log("Create user error:", error);
      });
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-[#F3F3F3]'>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white p-6">
        <h2 className='text-2xl font-semibold text-center mb-4'>Register your account</h2>
        <form className="card-body p-0" onSubmit={handleRegisterBtn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Your Name" className="input input-bordered" name='Name' required />
            {error.name && <p className="text-red-600 text-sm">{error.name}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="Photo URL" className="input input-bordered" name='photo_url' />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered" name='email' required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">Register</button>
          </div>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link className='link text-red-500' to='/auth/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
