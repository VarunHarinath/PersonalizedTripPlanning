import React from "react";
import InitialPageRender from "./Components/InitalPage/InitialPageRender";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPageRender from "./Components/SearchPage/SearchPageRender";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPageRender />} />
          <Route
            path="/destination-search/:destination/:cost"
            element={<SearchPageRender />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
