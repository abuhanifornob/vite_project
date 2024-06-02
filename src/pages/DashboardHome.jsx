import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const DashboardHome = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching user info:", error));
    }
  }, [user]);
  console.log(userInfo);
  if (loading) {
    return <div>Loading...</div>; // Render loading state while fetching
  }

  return (
    <div className="text-center flex justify-between mx-20 my-12">
      {userInfo ? (
        <div>
          <h3>Name: {userInfo.name}</h3>
          <h3>Email: {userInfo.email}</h3>
          <h1>Hello</h1>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Link to={`edit-user/${userInfo._id}`} className="btn btn-primary">
        Edit Profile
      </Link>
    </div>
  );
};

export default DashboardHome;
