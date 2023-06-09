import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/user'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'


function App() {

  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App;

// import Navbar from './Navbar'
// import Signup from './Signup'
// import Login from './Login'

// function App(props) {

//   return (
//     <div className="App">
//       <UserProvider>
//         <Navbar />
//         <Routes>
//           <Route exact path ="/" element={<Home />} />
//           <Route exact path ="/signup" element={<Signup />} />
//           <Route exact path ="/login" element={<Login />} />
//           <Route exact path ="/commands" element={<Commands />} />
//         </Routes>
//       </UserProvider>
//     </div>
//   )
// }

// export default App;