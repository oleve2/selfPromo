
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import art from './PageArticles.module.css';
import profPhoto from '../../public/Portrait_Placeholder.png';

export default function Articles(props) {


  useEffect(() => {
    document.title = "Дейнекина Айгуль: Статьи";
  }, []);

  return (
    <div>
      <h2>Статьи</h2>
      <ul className={art.articles_ul}>
      { props.data.map( (item) => {
        return <li key={item.id} className={art.articles_li}>
          <div></div> {/* #{item.id} - {item.name}  --> убрать отсюда пустой тег (верстка)*/}
          <div className={art.articles_content}>
            <div className={art.articles_content_left}>
              <div className={art.articles_img}> <Image src={profPhoto} alt="photo" /> </div>
            </div>
            
            <div className={art.articles_content_left}>
              <div className={art.articles_name}>{item.name}</div>
              <div className={art.articles_text}>Дата публикации: {item.date}</div>
              <div className={art.articles_text}>{item.text.slice(0, 300) + ' ...'}</div>
              <button className={art.articles_buttonReadMore} type="button">
                <Link href={item.articleLink}>Читать подробнее</Link>
              </button>              
            </div>
          </div>

          <br/>
        </li>
      }) }
      </ul>

    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  let url = process.env.APP_URL;
  let res = await fetch(`${url}/articles`, {method: 'GET'});
  let data = await res.json();
  // Pass data to the page via props
  return {props: {data}}
}

