import React, { Fragment, useState } from "react";

const InputMaterial = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name: name,
      };
      console.log(description);
      const response = await fetch("http://localhost:5000/material", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5"> Materials App</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success">Add+</button>
      </form>
    </Fragment>
  );
};

export default InputMaterial;
