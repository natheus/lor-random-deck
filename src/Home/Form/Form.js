import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Script from "../Script/Script.js";
import "./Form.css";

export default function Form() {
  return (
    <div>
      <div className="btn-container">
        <Button
          onClick={Script}
          className="btn"
          variant="contained"
          disableElevation
        >
          Get Random Deck!
        </Button>
      </div>
      <div className="field-container">
        <TextField
          className="textfield"
          InputProps={{ readOnly: true, style: { fontSize: 14 } }}
          id="tb"
        />
      </div>
    </div>
  );
}
