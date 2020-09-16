import React, { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import SubCategory from "./components/SubCategory";
// ---------------- REACT ---------------------//

// VARIABLES 
let myset = new Set()
// let url = "https://sheetsu.com/apis/v1.0bu/05c2c5a08ead";
let url = "./data.json";
const App = () => {

  // -----  GLOBAL STATES
  const [data, setData] = useState([]);
  const [sub, setsub] = useState([]);
  const [subcatVal, setsubcatVal] = useState([]);


  // -----  fetching data
  if (data.length === 0) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
  }

  function setcat(v) {
    data.map(data => myset.add(data.cat))


    setsub(data.filter(cat => cat.cat === v))
  }

  function subcatset(v) {
    setsubcatVal(sub.filter(cat => cat.title === v))
  }

  function clipboard() {
    var copyText = document.getElementById("text");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById('alert').classList.add('scale-up-center')
    setTimeout(() => {
      document.getElementById('alert').classList.remove('scale-up-center')
    }, 2000)
  }

  // -----  USER interface
  return data.length === 0 ?
    (<div className='container'> <div className="loading">
      <img src="/annimated.svg" alt="spinner" />
    </div></div>)
    : (<div className='container mt-5'>
      <div className="alert alert-success mt-2 d-none" role="alert" id='alert'>
        Text sucessfyly copied to clipboard !!!
</div>
      <div className="row">
        <img src="/logo.png" alt="logo" className="logo" />
      </div>

      <div className="row">
        {}
        <Category data={[...myset]} setcat={setcat} />
      </div>
      <div className="row" >
        <SubCategory data={sub} subcatset={subcatset} />
      </div>
      <div className="row" >
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="text" rows={8} defaultValue={subcatVal.map(cat => cat.msg)} />
        </div>
        <button type="button" className="btn btn-primary btn-lg" onClick={clipboard}>Copy to clipboard </button>

      </div>
    </div>)
};
export default App;
