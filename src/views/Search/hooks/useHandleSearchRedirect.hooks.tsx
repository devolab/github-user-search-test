import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useHandleSearchRedirect() {

  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleForm = (): void => {
    navigate(`/profile/${username}`, { state: { username: username } });
  };

  return { handleForm, setUsername }
}