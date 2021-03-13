import React, { Fragment, useState } from "react";
import NumericInput from "react-numeric-input";
const EditMaterial = ({ material }) => {
  const [description, setDescription] = useState(material.description);
  const [name, setName] = useState(material.name);
  const [volume, setVolume] = useState(material.volume);
  const [delivery_date, setDelivery_Date] = useState(material.delivery_date);
  const [color, setColor] = useState(material.color);
  const [cost, setCost] = useState(material.cost);
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name: name,
        volume: volume,
        delivery_date: delivery_date,
        color: color,
        cost: cost,
      };
      const response = await fetch(
        `http://localhost:5000/material/${material.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${material.id}`}
      >
        Edit
      </button>
      <div
        class="modal"
        id={`id${material.id}`}
        onClick={() => setDescription(material.description)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Material</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(material.description)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              Name{" "}
              <input
                type="text"
                className="form-control-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br></br>
              Volume{" "}
              <NumericInput value={volume} onChange={(e) => setVolume(e)} />
              <br></br>
              Delivery Date{" "}
              <input
                type="date"
                className="form-control-sm"
                value={delivery_date}
                onChange={(e) => setDelivery_Date(e.target.value)}
              />
              <br></br>
              Color{" "}
              <input
                type="color"
                className="form-control-sm"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <br></br>
              Cost{" "}
              <NumericInput
                step={0.1}
                precision={2}
                value={cost}
                onChange={(e) => {
                  // console.log(e)
                  setCost(e);
                }}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setName(material.name);
                  setVolume(material.volume);
                  setDelivery_Date(material.delivery_date);
                  setColor(material.color);
                  setCost(material.cost);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditMaterial;
