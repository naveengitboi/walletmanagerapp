import { useEffect, useRef, useState } from 'react'
import '../componentStyles/Model.css'

const Model = ({type,  header, description, onCancel, onSubmit }) => {
  const [openModel, setOpenModel] = useState(true)
  const modelRef = useRef(null)
  useEffect(() => {
    const outerClick = (e) => {
      if (modelRef?.current?.className != e.target.className) {
        setOpenModel(false)
      }
    }
    window.addEventListener('click', outerClick)
    window.addEventListener('keydown', setOpenModel(false) )

    return () => {
      window.removeEventListener('click', outerClick)
    window.removeEventListener('keydown', setOpenModel(false) )
    }
  })
  return (
    <div className={`modelWrapper ${openModel ? "openModel" : ""}`} ref={modelRef} >
      < div className="modelInfo" >
        <p className="pLarge">
          {header}
        </p>
        <p className="pSmall">
          {description}
        </p>
      </div >
      <div className="btnsGroup ">
        <button className="pMedium defaultBtn" onClick={() => {
          setOpenModel(false)
          onCancel()}
        }>
          Cancel
        </button>
        <button className="darkGreenBg pMedium defaultBtn" onClick={() => {
          onSubmit();
          setOpenModel(false)
        }}>
          {type}
        </button>
      </div>
    </div >
  )
}


export default Model
