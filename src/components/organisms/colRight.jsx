import React from "react";

export const ColRight = (props) => {
    const {source, width, height} = props;
    return (
        <div id="col__right">
        <iframe
          title="iframe"
          src={source}
          // height={height}
          width={width}
          height={height}
          id="elem"
        />
      </div>
    );
}