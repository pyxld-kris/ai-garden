import React from "react";
import constate from "constate"; // State Context Object Creator
import axios from "axios";

const DEFAULT_USER = {
  id: 0,
  name: "",
  username: "",
  email: "",
};

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useUserData() {
  const [userData, setUserData] = React.useState(DEFAULT_USER);

  React.useEffect(() => {
    // Setting timeout because of environment variable hack
    axios(`${process.env.API_URL}/users/me`, {
      withCredentials: true,
    })
      .then(({ data: currentUser }) => {
        setUserData({
          id: currentUser.id,
          name: currentUser.profile.displayName,
          username: currentUser.username,
          email: currentUser.email,
        });
      })
      .catch(() => {
        // setUserData({ id: "invalid" });
      });
  }, []);

  return { userData };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };
