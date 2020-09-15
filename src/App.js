import React, { useState, useEffect } from "react";
import "./App.css";
// let url = "https://sheetsu.com/apis/v1.0bu/05c2c5a08ead";
let url = "./data.json";
let myset = new Set();
let data = [];
export default function App() {
  const [cat, setCat] = useState([]);
  const [selectCat, setselectCat] = useState("");
  const [selectsubcat, setselectsubcat] = useState("");
  const [subcat, setsubcat] = useState([]);

  function handleselectsubcat(e) {
    setselectsubcat(e.target.value);
  }

  function handleselectCat(e) {
    setselectCat(e.target.value);
    let n = cat.filter((cat) => cat === "category");
    setsubcat(n);
    console.log("filter", n);
    console.log("selected", selectCat);
  }
  useEffect(() => {
    if (cat.length === 0) {
      try {
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            if (json.length > 0) {
              json.map((d) => myset.add(d.cat));
              json.map((d) => data.push(d));
            }
          })
          .then(() => {
            setCat(data);
          })
          .then(() => {});
      } catch (err) {
        console.log(" catched err is :", err);
      }
    }
  }, [cat]);

  return (
    <div>
      <div className="container" dir="rtl">
        {cat.length !== 0 ? (
          <div className="row">
            <div className="col-sm-12 logo">
              <img src="logo.png" alt="logo" className="logo" />
            </div>

            {/* ---------- CATEGORIES */}
            <div className="col-sm-12" dir="rtl">
              <select
                className="custom-select custom-select-lg mb-3"
                id="cate"
                value={selectCat}
                onChange={handleselectCat}
              >
                <option value={1}> Salact option</option>
                {[...myset].map((cat, i) => (
                  <option value={cat} key={i}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            {/* ---------- SUB CATEGORIES */}

            <div className="col-sm-12 text-right" dir="rtl">
              <select
                className="custom-select custom-select-lg mb-3"
                value={selectsubcat}
                onChange={handleselectsubcat}
              >
                <option value={1}> select option</option>
                {subcat.map((cat, i) => (
                  <option value={cat} key={i}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* ---------- TEXT  */}

              <label htmlFor="exampleFormControlTextarea1"> نص الحدمة</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button
                type="button"
                className="btn btn-primary btn-lg mt-2"
                id="copy"
              >
                copy to clipboard
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="container loading">
              <img src="./annimated.svg" alt="loading img" />
            </div>
            <div className="container loading-text"> Loading ...</div>
          </div>
        )}
      </div>
    </div>
  );
}
