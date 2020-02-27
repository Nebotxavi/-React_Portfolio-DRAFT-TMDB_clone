import React, { useState, useEffect } from "react";

import { getSessionId } from "../services/authService";
import { rateMovie } from "../services/itemsService";

export const AddNewItem = () => {
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const sessionId = getSessionId();
    setSessionId(sessionId);
  }, [setSessionId]);

  return (
    <div>
      <p>
        Click the button for testing the capacity to send POST requests that
        require session ID. In this case, a specific movie (Fallen Angels) rate,
        will be updated.
      </p>
      <button onClick={() => rateMovie("movie", "11220", sessionId, 10)}>
        Click for rating
      </button>
    </div>
  );
};
