import React, { Component } from "react";
import PropTypes from "prop-types";

const Hero = props => (
  <div
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "65vh",
      display: "block",
      backgroundImage: `url(${props.image})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}
  >
    <img
      src={props.image}
      alt={props.alt}
      style={{ maxHeight: "inherit", minWidth: "100%", visibility: "hidden" }}
    />
  </div>
);

Hero.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
};

export default Hero;
