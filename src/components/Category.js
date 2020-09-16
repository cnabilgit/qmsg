import React, { useRef } from "react";
export default function Category({ data, setcat }) {
  const catinput = useRef();

  return data.lenght === 0 ? (
    <div> loading category </div>
  ) : (
    <div className="form-group">
      <label>Example select</label>
      <select
        className="form-control form-control-lg d-flex"
        ref={catinput}
        onMouseDown={() => {
          setcat(catinput.current.value);
        }}
        onChange={() => {
          setcat(catinput.current.value);
        }}
      >
        <option value="select">select category</option>
        {data.map((data, i) => (
          <option value={data} key={i}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
}
