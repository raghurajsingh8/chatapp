import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
function App() {
  return <BrowserRouter>

    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/login' element={<h1>Login</h1>}/>
      <Route path='/register' element={<h1>Register</h1>}></Route>
    </Routes>
  
  </BrowserRouter>
}

export default App