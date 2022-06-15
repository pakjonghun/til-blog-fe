import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
const Detail = React.lazy(() => import("./page/Detail"));
const Home = React.lazy(() => import("./page"));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Detail />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
