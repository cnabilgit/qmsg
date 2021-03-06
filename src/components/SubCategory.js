import React, { useRef } from "react";
export default function SubCategory({ data, subcatset }) {
  const subcatinput = useRef();

  return data.lenght === 0 ? (
    <div> loading sub category </div>
  ) : (
    <div className="form-group">
      <label>Sub Category : </label>
      <select
        className="form-control form-control-lg d-flex"
        onMouseDown={() => {
          subcatset(subcatinput.current.value);
        }}
        onChange={() => {
          subcatset(subcatinput.current.value);
        }}
        ref={subcatinput}
      >
        <option value="subcategory">select Sub Category</option>
        {data.map((data, i) => (
          <option value={data.title} key={i}>
            {data.title}
          </option>
        ))}
      </select>
    </div>
  );
}
