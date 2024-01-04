import React, { useState } from "react";
import { useMayus } from "../hooks/useMayus";

export const PruebasCustom = () => {
  const { estado, mayusculas, minusculas, concatenar } =
    useMayus("Victor Robles Web");

  return (
    <div>
      <h3>Probando componentes personalizados</h3>
      <h2>{estado}</h2>

      <button
        onClick={(e) => {
          mayusculas();
        }}
      >
        Poner en Mayusculas
      </button>

      <button
        onClick={(e) => {
          minusculas();
        }}
      >
        Poner en Minusculas
      </button>

      <button
        onClick={(e) => {
          concatenar("Hola");
        }}
      >
        Poner en Mayusculas
      </button>
    </div>
  );
};
