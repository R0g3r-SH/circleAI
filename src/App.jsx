import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import RegisterView from "./views/registerView";
import { BrowserView, MobileView } from "react-device-detect";
import ComputerView from "./views/computerView";
import MatchesView from "./views/matchesView";
import { useState, useEffect } from "react";


function App() {

  const [data, setData] = useState([]);

  return (
    <>
      <MobileView>
        <Routes>
          <Route path='/' element={<RegisterView  data={data} setData={setData} />} />
          <Route path='/matches' element={<MatchesView  data={data} setData={setData} />} />
        </Routes>
      </MobileView>
      <BrowserView>
        <ComputerView />
      </BrowserView>
    </>
  );
}

export default App;
