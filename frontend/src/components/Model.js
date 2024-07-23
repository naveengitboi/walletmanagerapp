import { useEffect, useRef, useState } from 'react'
import '../componentStyles/Model.css'

const Model = ({ type, header, description, onCancel, onSubmit, setViewModel }) => {
  const modelRef = useRef(null)
  useEffect(() => {
    const outerClick = (e) => {
      if (modelRef?.current?.className != e.target.className) {
        setViewModel(false)
      }
    }
    window.addEventListener('click', outerClick)

    return () => {
      window.removeEventListener('click', outerClick)
    }
  })
  return (
    <div className={`modelWrapper openModel`} ref={modelRef} >
      < div className="modelInfo" >
        <p className="pLarge">
          {header}
        </p>
        <p className="pSmall">
          {description}
        </p>
      </div >
      <div className="btnsGroup ">
        <button className="pMedium defaultBtn"
          onClick={() => {
            if (onCancel) {
              onCancel();
            }
            setViewModel(false)
          }}
        >
          Cancel
        </button>
        <button className="darkGreenBg pMedium defaultBtn" onClick={() => {
          setViewModel(false);
          onSubmit()
        }}>
          {type}
        </button>
      </div>
    </div >
  )
}


export default Model
