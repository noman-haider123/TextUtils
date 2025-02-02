import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import First from './First'
import Form from './Form'
import About from './About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function Main() {
  const obj = {
    color: "black",
    backgroundColor: "white",
  }
  const [mode, setmode] = useState(obj);
  const togglemode = () => {
    if (mode.color === "black") {
      setmode({
        color: "white",
        backgroundColor: "black",
      })
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      document.title = "Dark Mode Enabled";
    }
    else {
      setmode({
        color: "black",
        backgroundColor: "white",
      })
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      document.title = "Light Mode Enabled";
    }
  }
  return (
    <>
        <Router>
      <StrictMode>
           <First titles="TextUtils" person={{ name1: "Home", name2: "About" ,name3 : "Form" }} mode={mode} togglemode={togglemode}/>
          <Routes>
          <Route  exact path='/About' element={<About color = "black"/>}></Route>
          <Route exact path='/Form' element={<Form fordata="Enter Your Text" size={25} />}></Route>
          </Routes>
      </StrictMode>
     </Router>
    </>

  )
}
createRoot(document.getElementById('root')).render(
  <Main />
)