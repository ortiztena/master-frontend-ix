import React from "react";
import classes from "./logoComponentStyles.scss";

export const LogoComponent = () => {

  return (
    <div>
      {/* <span className={classes.resultBackground}> */}
        Logo: <img className={classes.resultBackground} src="src/content/logo_1.png" />
      {/* </span> */}
    </div>
  );
};