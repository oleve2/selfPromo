
import { useState, useEffect } from 'react';
import Image from 'next/image';

import reviewPhoto from '../../public/Portrait_Placeholder.png';
import profPhoto from '../../public/aigul_dein.jpg';

import s from '../../components/PageHome/PageHome.module.css';
import abt from './PageAbout.module.css';

export default function About(props) {
  //
  const [confs, setConfs] = useState([
    {id:1, name: 'Конференция ЕМДР', text: 'текст', result: 'результат 1'},
    {id:2, name: 'Конференция 2', text: 'текст', result: 'результат 2'},
    {id:3, name: 'Конференция 3', text: 'текст', result: 'результат 3'},
    {id:4, name: 'Конференция 4', text: 'текст', result: 'результат 4'},
  ]);

  const [clientReviews, setClientReviews] = useState([
    {id: 1, userName: 'Иван Иванов', reviewDate: '2022-05-01', 
      reviewText: 'Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы разоблачены. Каждый из нас понимает очевидную вещь: экономическая повестка сегодняшнего дня позволяет оценить значение модели развития. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта будут объединены в целые кластеры себе подобных!'},
    {id: 2, userName: 'Петр Петров', reviewDate: '2022-05-02', 
      reviewText: 'В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения способствует подготовке и реализации модели развития. Банальные, но неопровержимые выводы, а также интерактивные прототипы формируют глобальную экономическую сеть и при этом - превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Значимость этих проблем настолько очевидна, что современная методология разработки позволяет выполнить важные задания по разработке соответствующих условий активизации.'},
    {id: 3, userName: 'Сидор Сидоров', reviewDate: '2022-05-03', 
      reviewText: 'Являясь всего лишь частью общей картины, диаграммы связей могут быть призваны к ответу. Как уже неоднократно упомянуто, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, подвергнуты целой серии независимых исследований. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса прогресса профессионального сообщества!'},
  ]);

  useEffect(() => {
    document.title = "Дейнекина Айгуль: Обо мне";
  }, []);

  return (
    <div>

      <div className={s.block_info}>
        <div className={s.block_info_image}> <Image  src={profPhoto} alt="photo" /> </div>
        <div className={s.block_info_rightSection}>
          <div className={s.block_info_rightSection__content}>
            <h3>Образование</h3>
            <div className={abt.div_edu}>2002-2008 – Педагог, Московский гуманитарный университет, специалист по направлению &quot;Педагогика и психология&quot;, специализация &quot;Менеджмент в образовании&quot;,  диплом с отличием, 7065ч</div>
            <div className={abt.div_edu}>2002-2007 – Психолог, Московский гуманитарный университет специалист по направлению &quot;Психология&quot;, специализация &quot;Психология креативного развития человека (и его потенциала)&quot;,  диплом с отличием, 8804ч</div>
          </div>
          <div className={s.block_info_rightSection__content}>
            <h3>Дипломы и квалификации</h3>
            <div className={abt.div_edu}>2020- по настоящее время – обучение гештальт-терапии, МИГИП</div>
            <div className={abt.div_edu}>2020-2021 – EMDR Basic Training and supervision, Ehud (Udi) Oren, Ph.D., St-Petersdurg, Russia (56ч, 10ч)</div>
            <div className={abt.div_edu}>2009-2011 – Танцевально-двигательный психотерапевт Институт Практической психологии и Психоанализа, специалист в сфере практической психологии и психокоррекции, диплом с отличием, 842ч</div>
          </div>
        </div>
      </div>      
      
      <hr/>
      <h2>Участие в мериприятиях и конференциях</h2>
      <ul className={abt.conf_ul}>
        { confs.map( (item) => {
          return <li key={item.id} className={abt.conf_li}>
            <div>#{item.id} - {item.name}</div>
            <div>Описание: {item.text}</div>
            <div>Достигнутый результат: {item.result}</div>
            <br/>
          </li>
        }) }
      </ul>
      
      <hr/>
      <h2>Отзывы клиентов обо мне</h2>
      <ul className={abt.review_ul}>
        { clientReviews.map( (item) => {
          return <li key={item.id} className={abt.review_li}>
            <div className={abt.review_li__left}>
              <div className={abt.review_li__img}> <Image  src={reviewPhoto} alt="photo" /> </div>
              <div>{item.userName}</div>
              <div>{item.reviewDate}</div>
            </div>
            <div className={abt.review_text}>{item.reviewText}</div>
            <br/>
          </li> 
        }) }
      </ul>
      <hr/>

    </div>
  )
}
