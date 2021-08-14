import React from "react";

import attributes from "../data/attributes.json";
import sushi from "../data/sushi.json";

function DataValidator() {
  let errors = [];

  sushi.map((item) => {
    item.attributes.map((attrib) => {
      const match = attributes.findIndex((att) => att.value === attrib);
      if (match === -1) errors.push(attrib);
    });
  });

  return (
    <>
      {errors.map((error) => (
        <div>{error}</div>
      ))}
    </>
  );
}

export default DataValidator;
