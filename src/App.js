import React, { useState, useEffect } from 'react';
import './App.css';
let url = 'https://sheetsu.com/apis/v1.0bu/05c2c5a08ead';
// let url = './data.json'
let myset = new Set()
let data = []
export default function App() {
  const [cat, setCat] = useState([])
  const [t, setT] = useState([])

  useEffect(() => {
    if (cat.length === 0) {

      try {
        fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
          .then(response => response.json())
          .then(json => {
            if (json.length > 0) {
              json.map(d => myset.add(d.cat))
              json.map(d => data.push(d))
            }
          }).then(() => {
            setCat(data);
          }).then(() => {

          })
      } catch (err) { console.log(' catched err is :', err) }
    }
  }, [cat])

  return (
    <div>
      <div className="container" dir="rtl">
        {cat.length !== 0 ?
          (<div className="row">
            <div className="col-sm-12 logo">
              <img src="logo.png" alt='logo'  className='logo'/>
            </div>
            <div className="col-sm-12" dir="rtl">
              <select className="custom-select custom-select-lg mb-3" id="cate" >
              <option value={1} > Salact option</option>
                {[...myset].map((cat, i) => <option value={cat} key={i}> {cat} </option>)}
              </select>
            </div>

            <div className="col-sm-12 text-right" dir="rtl" >
              <select className="custom-select custom-select-lg mb-3">
              <option value={1} > Salact option</option>
                {t.map((cat, i) => {
                  if(cat == document.getElementById("cate").value){
                    return <option value={cat.cat} key={i}> {cat.title} </option>
                  }
                  console.log(document.getElementById("cate").value)
                }
                )}
              </select>
              <label htmlFor="exampleFormControlTextarea1">نص الحدمة</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <button type="button" className="btn btn-primary btn-lg mt-2" id='copy'>Large button</button>
            </div>

          </div>) : (
            <div>
            <div className='container loading'>
              <img  src='./annimated.svg' />
            </div>
            <div className='container loading-text'> Loading ... </div>
            </div>
          )}
      </div>
    </div>
  )
}


