
import { useState, useEffect } from 'react';
import Image from 'next/image';

import rev from './PageReviews.module.css';
//import profPhoto from '../../public/Portrait_Placeholder.png';
import placeHolder from '../../public/placeholder.png';

import phPrivateTherapy from '../../public/group_programs/private_therapy.jpg';
import phEMDR from '../../public/group_programs/emdr.png';
import phProkrast from '../../public/group_programs/prokrastination.jpg';

export default function Reviews(props) {
  const [groupPrograms, setGroupPrograms] = useState(props.data); 

  const toggleReviews = (id) => {
    let grpProgUpd = groupPrograms.map( (a) => {
      let returnVal = {...a};
      if (a.id === id) {
        returnVal.showReview = !returnVal.showReview;
      }
      return returnVal
    });
    setGroupPrograms(grpProgUpd);
  }

  const PicNyId = (id) => {
    if (id === 1) {return phPrivateTherapy}
    if (id === 2) {return phEMDR}
    if (id === 3) {return phProkrast}
  }

  const [pics, setPics] = useState([phPrivateTherapy, phEMDR, phProkrast])

  useEffect(() => {
    document.title = "Дейнекина Айгуль: Отзывы";
  }, []);  

  //
  return (
    <div>
      <h2>Отзывы о групповых программах</h2>

      { groupPrograms.map( (item, index) => {
        return <div  key={item.id}>
        <div className={rev.review_content}>
          <div className={rev.review_img}> <Image src={pics[index]} alt="photo" /> </div>
          <div className={rev.content_text}>
            <div className={rev.content_text_name}>{item.reviewName}</div> {/* #{item.id} :  */}
            <div>Рейтинг: {item.cntStars}/5</div>
            <div>
              <button type="button" onClick={() => {toggleReviews(item.id)}}>
                { item.showReview ? 'Скрыть отзывы' : 'Перейти к отзывам' } 
              </button>
            </div>
          </div>
        </div>

        { (item.showReview === true) 
          ? <>
            {/*<div>this is reviews for {item.id}</div>*/}
            <ul className={rev.singleRev_ul}>
              { item.reviews.map( (elem) => {
                return <li key={elem.id} className={rev.singleRev_li}>
                  <div>{elem.userName}</div>
                  <div>{elem.reviewText}</div>
                </li>
              }) }
            </ul>
            <br/>
          </>  
          : <></> 
        }
        
        </div>
      }) }
      </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  let url = process.env.APP_URL;
  let res = await fetch(`${url}/reviews`, {method: 'GET'});
  let data = await res.json();
  // Pass data to the page via props
  return {props: {data}}
}


