import React    from "react";
import template from "./HeaderComponent.jsx";

class HeaderComponent extends React.Component {
  render() {
    return template.call(this);
  }
}

export default HeaderComponent;
