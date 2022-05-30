import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState,useEffect} from 'react';
//const Axios=require('axios');
function App(){

const [state,setState]= useState({
  data:[],
  flag:false
});

const fetchData = async () => {
  const response = await fetch('http://localhost:8080/');
  const body = response.json();

  return body;
};

useEffect(()=>{
  

  fetchData()
			.then(res => setState({data:res}))
			.catch(err => console.log(err));

    //Axios.get('/').then((res)=>res.json()).then((val)=>setState({data:val,flag:true})).catch((err)=>console.log(err))
},[]);



console.log(state.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>DATA FROM HAPI</h1>
          {(state.flag===false)?<h1>Loading...</h1>:<h2>{state.data.map((person)=>
            (
              <ul key={person.id}>
                <li>NAME:{person.name}</li>
                <li>AGE:{person.age}</li>
              </ul>
          ) 
          )
          }</h2>}
          {
           /*state.data.map((person)=>
            (
              <ul key={person.id}>
                <li>NAME:{person.name}</li>
                <li>AGE:{person.age}</li>
              </ul>
          ) 
          )*/
          }
          
        </header>
      </div>
    );
  }
  

export default App;
