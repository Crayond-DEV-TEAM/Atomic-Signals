import * as React from "react"

const DownArrow = (props) => (
  <svg
    className="svg-icon"
    style={{
      width: "1em",
      height: "1em",
      verticalAlign: "middle",
      fill: "currentColor",
      overflow: "hidden",
    }}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M507.8 727.728a30.016 30.016 0 0 1-21.288-8.824L231.104 463.496a30.088 30.088 0 0 1 0-42.568 30.088 30.088 0 0 1 42.568 0L507.8 655.056l234.16-234.128a30.088 30.088 0 0 1 42.568 0 30.088 30.088 0 0 1 0 42.568L529.08 718.904a30 30 0 0 1-21.28 8.824z"
      fill="#888"
    />
  </svg>
)

export default DownArrow
