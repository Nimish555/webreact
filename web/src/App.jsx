import React from 'react'
import { BrowserRouter, Routes, Route , useNavigate } from 'react-router-dom';
// function Home() {
//    return <h1>Home page</h1>
// }
 
// function About() {
//   return <h1>About page</h1>
// }

// function Contact() {
//   return <h1>conatct page</h1>
// }


// 

function Home() {
  const navigate = useNavigate();


  return (
    <div>
      <h1>Home page</h1>

      <button onClick={() => navigate("/about")}>
        Go about
      </button>
    </div>
  )
}

function About() {
   return <h1>About page</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        

         
      </Routes>
    </BrowserRouter>
  )
}
export default App