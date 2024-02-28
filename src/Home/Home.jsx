import React from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import { Button } from "@mui/material";

import {
  setError,
  setMessage,
  setSuccess,
  setWarning,
} from "../common/components/snackbar";
import { loginFunc } from "../common/utils/api";

export default function Home() {
  // useEffect(() => {
  //   authorize();
  // });

  return (
    <AppWrapper>
      <div>
        <h2>This is the Homepage</h2>
        <p>Have you seen the rest yet?</p>
        <Button onClick={() => setMessage("setMessage")}>setMessage</Button>
        <Button onClick={() => setError("setError")}>setError</Button>
        <Button onClick={() => setWarning("setWarning")}>setWarning</Button>
        <Button onClick={() => setSuccess("setSuccess")}>setSuccess</Button>
        <Button
          onClick={() =>
            loginFunc("indy.bosschem@gmail.com", "FloepieDoepie10")
          }
        >
          login
        </Button>
      </div>
    </AppWrapper>
  );
}
