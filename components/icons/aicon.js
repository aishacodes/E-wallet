import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={30}
      viewBox="0 0 19 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.553.994c.373 0 .675.347.675.774a.88.88 0 01-.02.187l-.504 2.32c3.03 1.142 4.503 4.124 3.938 7.818l-1.188 7.75c-.732 4.741-3.111 6.947-6.809 7.584l-.442 2.03c-.074.345-.344.587-.654.587h-3.95c-.373 0-.675-.347-.675-.774 0-.063.007-.125.02-.187l.354-1.629c-3.63-.682-5.666-3.291-5.243-6.927l.066-.532c.462-4.14 2.905-6.572 8.617-6.572 2.179 0 3.797.38 4.556.874l.297-2.014c.363-2.203-.495-3.684-2.938-3.684-2.047 0-3.533.797-3.83 2.81H2.07C2.633 6.8 4.8 4.307 9.454 3.852l.495-2.27c.075-.345.345-.587.654-.587h3.95zM9.2 17.032c-2.608 0-3.763.912-4.094 3.039l-.066.38c-.363 2.127.826 3.077 3.17 3.077 2.41 0 3.862-1.292 4.16-3.115l.033-.342c.363-2.128-.496-3.04-3.203-3.04z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
