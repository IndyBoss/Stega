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
        <Button className="primary" onClick={() => setMessage("setMessage")}>
          Message
        </Button>
        <Button className="primary" onClick={() => setError("setError")}>
          Error
        </Button>
        <Button onClick={() => setWarning("setWarning")}>Warning</Button>
        <Button onClick={() => setSuccess("setSuccess")}>Success</Button>
        <div>
          <Button
            className="secondary"
            onClick={() =>
              loginFunc("indy.bosschem@gmail.com", "FloepieDoepie10")
            }
          >
            login
          </Button>
        </div>
      </div>
    </AppWrapper>
  );
}
