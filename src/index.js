import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from '@chakra-ui/react';
import App from "./App";
import './index.css';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ChakraProvider>
        <player />
        < App />
      </ChakraProvider>
    </DndProvider>
  </React.StrictMode>
  , document.getElementById("root")
);
