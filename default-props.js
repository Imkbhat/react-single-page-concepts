import React from "react";
import propTypes from "prop-types";

const Header = props => {
  return (
    <div>
      <h1 style={{ color: "#FF9933" }}>{props.branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};

export default Header;

