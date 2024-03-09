import React from 'react'
import '../componentStyles/Button.css'
import { MdArrowForward } from "react-icons/md";

function Button_Icon(props) {
  return (
      <button className={`defaultBtn pLarge ${props.color}`}>Button_Icon  <MdArrowForward/></button>
  )
}

export default Button_Icon