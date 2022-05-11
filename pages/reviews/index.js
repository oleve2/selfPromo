
import { useState, useEffect } from 'react';
import Image from 'next/image';

import rev from './PageReviews.module.css';
//import profPhoto from '../../public/Portrait_Placeholder.png';
import placeHolder from '../../public/placeholder.png';

export default function Reviews(props) {
  const [groupPrograms, setGroupPrograms] = useState(props.data); /*useState([
    {id: 1, reviewName: 'Отзывы о личной терпаии', photoLink: '', cntStars: 4, showReview: false, reviews: [
      {id:1, userName: 'Петя Петров',   reviewText: 'И нет сомнений, что некоторые особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут быть представлены в исключительно положительном свете.'},
      {id:2, userName: 'Иван Иванов',   reviewText: 'Банальные, но неопровержимые выводы, а также диаграммы связей своевременно верифицированы.'},
      {id:3, userName: 'Сидор Сидоров', reviewText: 'Кстати, некоторые особенности внутренней политики призывают нас к новым свершениям, которые, в свою очередь, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.'},
    ]},
    {id: 2, reviewName: 'Отзывы о ЕМДР сессиях', photoLink: '', cntStars: 4, showReview: false, reviews: [
      {id:1, userName: 'Петя Петров',   reviewText: 'Значимость этих проблем настолько очевидна, что современная методология разработки не оставляет шанса для прогресса профессионального сообщества.'},
      {id:2, userName: 'Иван Иванов',   reviewText: 'Как принято считать, независимые государства заблокированы в рамках своих собственных рациональных ограничений.'},
      {id:3, userName: 'Сидор Сидоров', reviewText: 'Сложно сказать, почему элементы политического процесса неоднозначны и будут описаны максимально подробно.'},
    ]},
    {id: 3, reviewName: 'Отзывы о проекте “Прокрастинация”', photoLink: '', cntStars: 5, showReview: false, reviews: [
      {id:1, userName: 'Петя Петров',   reviewText: 'Но некоторые особенности внутренней политики призывают нас к новым свершениям, которые, в свою очередь, должны быть объединены в целые кластеры себе подобных.'},
      {id:2, userName: 'Иван Иванов',   reviewText: 'Сложно сказать, почему элементы политического процесса неоднозначны и будут функционально разнесены на независимые элементы.'},
      {id:3, userName: 'Сидор Сидоров', reviewText: 'Акционеры крупнейших компаний, инициированные исключительно синтетически, призваны к ответу.'},
    ]},        
  ])*/

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

  useEffect(() => {
    document.title = "Дейнекина Айгуль: Отзывы";
  }, []);  

  //
  return (
    <div>
      <h2>Отзывы о групповых программах</h2>

      { groupPrograms.map( (item) => {
        return <div  key={item.id}>
        <div className={rev.review_content}>
          <div className={rev.review_img}> <Image src={placeHolder} alt="photo" /> </div>
          <div className={rev.content_text}>
            <div>{item.reviewName}</div> {/* #{item.id} :  */}
            <div>stars: {item.cntStars}</div>
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


