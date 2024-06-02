import React from "react";
import Button from "../../ui/Button";
function Send() {
  return (
    <div>
      <Button
        onClick={async () => {
          await fetch("/api/emails", {
            method: "POST",
          });
        }}
      >
        Send
      </Button>
    </div>
  );
}

export default Send;
