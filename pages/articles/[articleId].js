
// https://stackoverflow.com/questions/69058259/how-to-access-route-parameter-inside-getserversideprops-in-next-js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Article(props) {
  const router = useRouter();
  let articleId = router.query.articleId;
  
  useEffect(() => {
    document.title = `Дейнекина Айгуль: Статьи - ${props.data2.name}`;
  }, []);

  return (
    <div>
      {/*<div>{JSON.stringify(props)}</div>*/}
      <h2>#{props.data2.id} - {props.data2.name}</h2>
      <div>Дата статьи: {props.data2.date}</div>
      <br/>
      <div>{props.data2.text}</div>
      <hr/>
      {/**/}
      <div>Комментарии:</div>
      <ul>
      { props.data2.comments.map( (item) => {
        return <li key={item}>{item}</li>
      }) }
      </ul>
    </div>
  )
}


export async function getServerSideProps(context) {
  const articleId = context.params.articleId;
  // Fetch data from external API
  let url = process.env.APP_URL;
  let res = await fetch(`${url}/articles/${articleId}`, {method: 'GET'});
  let data2 = await res.json();
  // Pass data to the page via props
  return {props: {data2}}
}
