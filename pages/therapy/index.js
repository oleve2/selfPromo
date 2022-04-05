import Link from 'next/link';
import { useState } from 'react';

export default function Therapy() {
  const [topics, setTopics] = useState([
    {id:1, name: 'Тема 1 первая', lnk: '/therapy/topic_1'},
    {id:2, name: 'Тема 2 вторая', lnk: '/therapy/topic_2'},
    {id:2, name: 'Тема 3 третья', lnk: '/therapy/topic_3'},
    {id:2, name: 'Тема 4 четвертая', lnk: '/therapy/topic_4'},
    {id:2, name: 'Тема 5 пятая', lnk: '/therapy/topic_5'},
    {id:2, name: 'Тема 6 шестая', lnk: '/therapy/topic_6'}
  ])

  return (
    <>
    <div>Правильно определить проблему клиента и оказать "первую помощь" - очень важно для успешной терапии</div>
    <h2>Виды психологической терапии:</h2>
    <ul>
      { topics.map((item) => {
        return <>
          <li key={item.id}> 
            <div>{item.name}</div>
            <Link href={item.lnk}>Узнать подробнее</Link> 
          </li>
        </>
      }) }
    </ul>
    </>
  )
}
