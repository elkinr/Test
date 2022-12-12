import React    from "react";
import template from "./ContentComponent.jsx";

class ContentComponent extends React.Component {
  render() {
    return template.call(this);
  }
}

export default ContentComponent;
