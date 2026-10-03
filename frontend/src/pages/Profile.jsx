import { useState, useEffect } from "react";
import { getProfile } from "../services/authService";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const data = await getProfile(token);
        setUser(data.user);
      } catch (error) {
        console.error(
          error.response?.data?.message || "Failed to fetch profile",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return (
      <div>
        <h2>Not Logged In</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Profile</h2>
      <h3>Welcome, {user.name}</h3>
      <p>Email: {user.email} </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
