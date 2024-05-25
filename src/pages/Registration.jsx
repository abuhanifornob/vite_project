import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createNewUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);
    setPassMatch(true);
    if (password !== confirmPassword) {
      setPassMatch(false);
    }

    await createNewUser(email, password)
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
      });
  };
  return (
    <div className="hero min-h-screen px-24 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:w-1/2 lg:text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirmPassword"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {!passMatch && (
                <label className="label">
                  <p className="text-red-600 text-xl font-bold">
                    Password Do not Match
                  </p>
                </label>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
            <div className="mt-6">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
