import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import swal from "@sweetalert/with-react";
import SweepstakeCard from "./components/SweepstakeCard/SweepstakeCard";
import NavBar from "./components/NavBar/NavBar";
import PaymentForm from "./components/Payment/PaymentForm";
import data from "./data/data.json";
import SweeptakesCardsList from "./containers/SweepstakeCardsList/SweeptakesCardsList";
import GameCardsList from "./containers/GameCardsList/GameCardsList";
import IntroductionCarrousel from "./components/IntroductionCarrousel/IntroductionCarrousel";
import Participations from "./components/Participations/Participations";
function App() {
  // useEffect(() => {
  //   swal(<IntroductionCarrousel></IntroductionCarrousel>);
  // }, []);
  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        {/* <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header> */}
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <Route
              path="/(home|)"
              render={(props) => <SweeptakesCardsList {...props} data={data} />}
            ></Route>

            <Route
              path="/games"
              render={(props) => <GameCardsList {...props} data={data} />}
            ></Route>

            <Route
              path="/mybets"
              render={(props) => <Participations {...props} data={data} />}
            ></Route>

            {/* /End replace */}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
