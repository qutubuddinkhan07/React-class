import React from "react";
import usefetch from "./utils/usefetchhook";
import { toast } from "react-toastify";

const GithuubUsers = () => {
  const { urlData, loading, error } = usefetch("https://api.github.com/users");
  if (error) {
    toast.error(error);
    return;
  }

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        urlData.map((item) => {
          return <p key={item.id}>{item.login}</p>;
        })
      )}
    </div>
  );
};

export default GithuubUsers;
