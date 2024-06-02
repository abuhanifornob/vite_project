import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const GoogleRegister = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogin().then((data) => {
      const user = data?.user;
      const userInfo = {
        email: user?.email,
        name: user?.displayName,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      toast.success("Login Successful!!");
      navigate(from);
    });
  };
  return (
    <button onClick={handleGoogleLogin} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleRegister;
