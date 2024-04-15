import React, { createContext, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { HomePage } from "./Pages/HomePage";
import { User } from "./Pages/User";
import { Gallery } from "./Gallery/Gallery";
import OrderPage from "./Pages/OrderPage";
import Charcoal from "./Gallery/Charcoal";
import { WaterColor } from "./Gallery/WaterColor";
import Landscape from "./Gallery/Landscape";
import ArtDisplay from "./Gallery/ArtDisplay";
import NewUser from "./Pages/NewUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const AppContext = createContext()
 

function App() {
  const [user, setUser] = useState("9861626364")
  
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }})

  return (
    <div className="App">
      
      <AppContext.Provider value={{user, setUser}}>
        <QueryClientProvider client={client}>
      <Router>
          <div>
              <nav className="NavBar">
              <Link to={"/"}> HomePage </Link>
              <Link to={"/Gallery"}>Gallery</Link>
              <Link to={"/User"}>User</Link>  
              </nav>
          </div>
          <Routes>
                <Route path="/" element={<HomePage />}></Route> 
                <Route path="/Gallery" element={<Gallery />}>
                      <Route path="Charcoal" element={<Charcoal />}></Route>
                      <Route path="WaterColor" element={<WaterColor /> }></Route>
                      <Route path="Landscape" element={<Landscape />}></Route>
                      <Route path=":id" element={<ArtDisplay />}></Route>
                </Route>
                <Route path="/User" element={<User />}> </Route>
                <Route path="/OrderPage" element={<OrderPage />}></Route>
                <Route path = "/NewUser" element={<NewUser />}></Route>
                <Route path="*" element={<h1>Page not found !!</h1>}></Route>

          </Routes>
      </Router>
      </QueryClientProvider>
      </AppContext.Provider>

    </div>
  );
}

export default App; 
