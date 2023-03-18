import React, { Component } from "react";
import "./App.css";

//COMPONENTS

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardProductos from "./components/CardProductos/CardProductos";
import Greting from "./components/itemListContainer/itemListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Greting texto="Welcome to my website" />
        <Header
          title="Compras seguras"
          subtitle="Clickea y recibi gratis en 24hs."
        />
        <div className="CardProductos">
          <CardProductos
            name="SMART LED TV SAMSUNG 70 PULGADAS 4K"
            precio="12 x $ 29.687,42
            CUOTAS SIN INTERÉS"
            img="https://medias.musimundo.com/medias/00524011-145779-145779-02-145779-02.jpg-size515?context=bWFzdGVyfGltYWdlc3w0MjAzM3xpbWFnZS9qcGVnfGgyNC9oMWMvMTA0MTk3MTgxNjA0MTQvMDA1MjQwMTEtMTQ1Nzc5LTE0NTc3OV8wMi0xNDU3NzlfMDIuanBnX3NpemU1MTV8OWZmMWFjNGRkYThjYjAxNDBjY2NmYmU2OTZlYTE2Y2M4OWI3NTMyMWZiZGY2MGUyZDEyZjdhNzM1MDNhMGI1Yg"
            backgroundColor="rgb(192, 192, 192)"
          />
          <CardProductos
            name="SMART NEO QLED TV SAMSUNG 43"
            precio="12 x $ 27.499,92
            CUOTAS SIN INTERÉS"
            img="https://medias.musimundo.com/medias/00620057-147339-147339-02-147339-02.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MzI2N3xpbWFnZS9qcGVnfGg4OC9oOGIvMTA0NTg1NTUxODcyMzAvMDA2MjAwNTctMTQ3MzM5LTE0NzMzOV8wMi0xNDczMzlfMDIuanBnX3NpemU1MTV8NDg4MTgxMWJiY2Y5ZWI0ZGYxYThlMmMyMTVmYjczZmRkMDhjMzBlM2FkZjU1OTdmY2Y1MmVhZjhjNDYzOTRlOA"
            backgroundColor="rgb(192, 192, 192)"
          />
          <CardProductos
            name="SMART LED TV SAMSUNG 75 PULGADAS 4K"
            precio="18 x $ 29.999,94
            CUOTAS SIN INTERÉS"
            img="https://medias.musimundo.com/medias/00597014-146976-146976-02-146976-02.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MDY0N3xpbWFnZS9qcGVnfGgwZi9oY2UvMTA0NDE1NjA0MjQ0NzgvMDA1OTcwMTQtMTQ2OTc2LTE0Njk3Nl8wMi0xNDY5NzZfMDIuanBnX3NpemU1MTV8NzZmMGVmNTJjZGQyOGU4YTQ2NmQ3ZTdiNTIyNGE1MTdkYzQ3MWQwMjhjYzE3ODUzOWMwNzM4MjQxZWM0YzI2MA"
            backgroundColor="rgb(192, 192, 192)"
          />
        </div>
      </div>
    );
  }
}

export default App;
