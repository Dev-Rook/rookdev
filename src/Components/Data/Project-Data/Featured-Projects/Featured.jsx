import React, {useState} from 'react'
import Styles from "../../../../Styles/Pagination-Styles/General/Pagination.module.css"


import FeaturedData from './FeaturedData'

const Featured = () => {

  const [cardData, setCardData] = useState(FeaturedData)

  return (
    <div className={Styles.Paginate_Container}>
      {cardData.map((Card) => {
        const { id, Image, Title, Description, Stack, Links } = Card

        return (
          <></>
        );
      })}
    </div>
  )
}

export default Featured