import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserContext from '../contexts/UserContext';
import ProtectedParentRoute from './ProtectedParentRoute';
import Login from "../pages/Login"
import Landing from '../pages/Landing';
import General from '../pages/General';
function App() {
  const [isLoged, setIsLoged] = useState(false)

  return (
      <BrowserRouter>
        <UserContext.Provider value={{isLoged, setIsLoged}}>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Login" element={<Login/>}/>
              <Route element={<ProtectedParentRoute isLoged={isLoged}/>}>
                <Route path="/General" element={<General/>}/>
              </Route>
          </Routes>
        </UserContext.Provider>

      </BrowserRouter>
);
}

export default App;
