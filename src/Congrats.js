import React from "react";

const Congrats = (props) => {
  return (
    <div data-test="component-congrats">
      {props.success ? (
        <span data-test="congrats-message">
          Congratulations you guessed the word!
        </span>
      ) : null}
    </div>
  );
};

export default Congrats;
