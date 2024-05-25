import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleRegister from "../components/login_register/GoogleRegister";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await signIn(email, password).then(() => {
      navigate(from);
    });
  };

  return (
    <div className="hero bg-base-200 px-24">
      <div className="hero-content flex-col justify-between lg:flex-row-reverse">
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="mt-2 mx-auto">
            <p>
              New Hear ?{" "}
              <Link to="/register" className="text-red-500">
                Register
              </Link>
            </p>
          </div>
          <div className="mt-6 mx-6 mb-2 ">
            <GoogleRegister />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
