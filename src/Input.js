import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "./actions";

export class UnconnectedInput extends Component {
  render() {
    const contents = () => {
      return this.props.success ? null : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb2 mx-sm-3"
            type="text"
            placeholder="enter-guess"
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={() => this.props.guessWord("train")}
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      );
    };

    return <div data-test="component-input"> {contents()}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
