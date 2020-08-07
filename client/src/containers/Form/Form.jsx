import React from "react";

const Form = () => {

    const styles = {
        inputStyle: {
            // textAlign: "center",
            justifyContent: "center",
            marginLeft: "15%"
        }
    }

  return (
    <div>
      <form style={styles.inputStyle}>
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Search for a Book
        </label>
        <div className="form-group row">
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
