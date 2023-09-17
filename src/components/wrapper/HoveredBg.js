import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled("div")(({ x, y }) => ({
  minHeight: "100vh",
  width: "100%",
  background: `radial-gradient( at ${x}px ${y}px ,#e66465 0%, #9198e5 80%)`,
  transition: "background ease-in-out 5000ms"
}));

const HoveredBg = () => {
  const [state, setState] = useState({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setState({
        x: e.clientX,
        y: e.clientY,
      });
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {
      setState({
        x: e.clientX,
        y: e.clientY,
      });
    });
    };
  }, []);

  console.log(state);
  return <StyledDiv x={state.x} y ={state.y}/>;
};

export default HoveredBg;
