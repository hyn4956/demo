import './App.css';
import React, {useState, useEffect} from 'react';
import logo from "./logo.svg";

function App() {
    const [message, setMessage]=useState([]);
    useEffect(()=>{
        fetch("/hello")
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setMessage(data);
            });
    },[]);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/*기본코드*/}
                <ul>
                    {message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
                </ul>
            </header>
        </div>
    );
}

export default App;