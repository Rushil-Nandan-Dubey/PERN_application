import React, { Fragment, useEffect, useState } from "react";

import EditMaterial from "./EditMaterial";
import { MaterialRow } from "./MaterialRow";

const ListMaterials = () => {
  const [materials, setMaterials] = useState([]);

  const deleteMaterial = async (id) => {
    try {
      const deleteMaterial = await fetch(
        `http://localhost:5000/material/${id}`,
        {
          method: "DELETE",
        }
      );
      setMaterials(materials.filter((material) => material.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  const getMaterials = async () => {
    try {
      const response = await fetch("http://localhost:5000/material");
      const jsonData = await response.json();

      setMaterials(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMaterials();
  }, []);
  console.log(materials);
  return (
    <Fragment>
      <div>
        <br></br>
      </div>
      <h6>
        <em>** Click the material name to get the details.</em>
      </h6>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Color</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td bgcolor={material.color}>
                <div></div>
              </td>
              <td>
                <MaterialRow material={material}></MaterialRow>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteMaterial(material.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListMaterials;
