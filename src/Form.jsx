// This is a form component where we can write text and perform some operations on it.
import React from 'react'
import { useState } from 'react'
export default function Form({ fordata,size}) {
    const store = {
        fontSize :`${size}px`,
        fontWeight : 'bold',
    }
    const [name, setname] = useState("");
    // name = "haider" //Wrong way to change state in React.js
  
    const Update = (event)=>{
        event.preventDefault();
        console.log("Upper case clicked");
        setname("You have to rights to text here")
    }
    const change = (e)=>{
        setname(e.target.value);
     }
    const Uppercase = (expanded)=>{
        expanded.preventDefault();
        setname(name.toUpperCase());
    }
    const LowerCase = (e)=>{
        e.preventDefault();
        setname(name.toLowerCase());
    }
    const pro = (e)=>{
        e.preventDefault();
      let data = prompt("Enter a value")
        if(data){
            setname(data);
        }
        else{
         window.location.href = "/"
        }
    }
    const cleartext = ()=>{
        setname("")
    }
    const printtable = (e)=>{
        e.preventDefault();
        let table = prompt("Enter a table name");
        if(table){
            const resulttable = []
            for(let i = 1; i <= 10; i++){
                resulttable.push(table + " X " + i + " = " + table * i)
            }
            setname(resulttable.join('\n'));
        }
        else{
            window.location.href = "/"
      }
    }
 const extraspace = () =>{
    let newtext = name.split(/[ ]+/);
    setname(newtext.join(" "));
}
    return (
        <>
            <div className='container mt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label"  style={store}>{fordata}</label>
                                <textarea className="form-control" value={name} onChange = {change} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary"  onClick={Update}>Trigger</button>
                            <button type="submit" className="btn btn-primary mx-4" onClick={Uppercase} >Convert To UpperCase</button>
                            <button type="submit" className="btn btn-primary mx-3" onClick={LowerCase}>Convert To LowerCase</button>
                            <button type="submit" className="btn btn-primary mt-3" onClick={pro}>Open a Prompt</button>
                            <button type="submit" className="btn btn-primary mt-3 mx-2" onClick={cleartext} >Clear Text</button>
                            <button type="submit" className="btn btn-primary mt-3 mx-2" onClick={printtable}>print table</button>
                            <button type="submit" className="btn btn-primary mt-3 mx-2" onClick={extraspace}>Remove Extra Spaces</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <h1>Your Text Summary</h1>
                    <p>{name.length} Characters {name.split(" ").length-1} Words</p>
                    <p>{name.split(" ").length-1 * 0.005} Minutes</p>
                    <p>{name.length * 0.05} Seconds</p>
                    <h2>Prview</h2>
                    <p>{name}</p>
                    </div>
                </div>
            </div>
        </>

    )
}
