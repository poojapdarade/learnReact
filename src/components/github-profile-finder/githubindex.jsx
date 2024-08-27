import { useState, useEffect } from "react";
import { User } from "./user";

export function GithubProfileFinder() {
  const [username, setUsername] = useState("poojapdarade");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
    console.log(data);
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading Data!!1 Please wait.</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="search GitHub username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
