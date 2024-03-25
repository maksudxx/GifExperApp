import React from 'react'
import styles from './GifCard.module.css'

export const GifCard = ({url, key, title}) => {
  return (
    <div key={key} className={styles.card} >
         <img src={url} className={styles.cardImg}/>
         <h3 className={styles.CardTitle}>{title}</h3>
    </div>
       
    
  )
}
