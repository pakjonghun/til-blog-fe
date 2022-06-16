import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
const Detail = React.lazy(() => import("./page/Detail"));
const Home = React.lazy(() => import("./page"));

function App() {
  return (
    <div className='App'>
      <Suspense
        fallback={
          <div className='flex items-center justify-center h-screen bg-slate-800'>
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Detail />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
