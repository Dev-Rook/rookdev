import React from 'react'
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css"

import Featured from '../../Components/Data/Project-Data/Featured-Projects/Featured'

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <Featured />
    </div>
  )
}

export default Landing