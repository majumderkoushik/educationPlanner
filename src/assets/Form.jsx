import { useState } from "react";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");
  return (
    <>
      <form onSubmit={submitHandler}>
        <h4>Geekster Education Planner</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            value={newItemName}
            onChange={inputHandler}
          />
          <button type="submit" className="btn">
            Add List
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
