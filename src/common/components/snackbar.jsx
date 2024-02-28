import { closeSnackbar, enqueueSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

function setSnackbar(message, showCloseButton) {
  enqueueSnackbar(message, {
    action: (snackbarId) => (
      <>
        {showCloseButton && (
          <IconButton
            className="snackbar-close"
            onClick={() => {
              closeSnackbar(snackbarId);
            }}
          >
            <Close />
          </IconButton>
        )}
      </>
    ),
    // persist: true,
  });
}

export function setMessage(message, showCloseButton = true) {
  return setSnackbar(
    <div className={`snackbar message`}>{message}</div>,
    showCloseButton
  );
}

export function setError(message, showCloseButton = false) {
  return setSnackbar(
    <div className={`snackbar error`}>{message}</div>,
    showCloseButton
  );
}

export function setWarning(message, showCloseButton = false) {
  return setSnackbar(
    <div className={`snackbar warning`}>{message}</div>,
    showCloseButton
  );
}

export function setSuccess(message, showCloseButton = false) {
  return setSnackbar(
    <div className={`snackbar success`}>{message}</div>,
    showCloseButton
  );
}
