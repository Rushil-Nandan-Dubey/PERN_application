import React, { Fragment, useEffect, useState } from "react";
import EditMaterial from "./EditMaterial";

export const MaterialRow = ({ material }) => {
  const [description, setDescription] = useState(material.description);
  const [name, setName] = useState(material.name);
  const [volume, setVolume] = useState(material.volume);
  const [delivery_date, setDelivery_Date] = useState(material.delivery_date);
  const [color, setColor] = useState(material.color);
  const [cost, setCost] = useState(material.cost);
  const [isClicked, setIsClicked] = useState(false);

  function showVolume(vol) {
    if (vol) {
      return (
        <h6>
          {material.volume + " m"}
          <sup>3</sup>
        </h6>
      );
    }
    return (
      <h6>
        {"0 m"}
        <sup>3</sup>
      </h6>
    );
  }
  return (
    <div>
      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target={"#" + material.name}
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {material.name}
      </button>
      {showVolume(material.volume)}

      <div class="collapse" id={material.name}>
        <div class="card card-body">
          <table class="table mt-5 text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>
                  Volume(m<sup>3</sup>)
                </th>
                <th>Delivery Date</th>
                <th>Color</th>
                <th>
                  Cost(USD per m<sup>3</sup>)
                </th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr key={material.id}>
                <td>{name}</td>
                <td>{material.volume}</td>
                <td>{material.delivery_date}</td>
                <td bgcolor={material.color}></td>
                <td>{material.cost}</td>
                <td>
                  <EditMaterial material={material} />
                </td>
              </tr>
            </tbody>
          </table>
          <h6>Total Cost : ${material.volume * material.cost}</h6>
        </div>
      </div>
    </div>
  );
};
