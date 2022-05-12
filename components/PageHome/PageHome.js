import React from 'react';
import { useState, useEffect } from "react"
import Image from 'next/image';

import HomeTherapyItem from './HomeTherapyItem';
import FeedbackForm from '../ui/feedback_form';

//import g from '../../styles/globals.css';
import s from './PageHome.module.css';

//import profPhoto from '../../public/Portrait_Placeholder.png';
import profPhoto from '../../public/aigul_dein.jpg';


export const PageHome = () => {
  const [dataTherapy, setDataTherapy] = useState([
    {id: 1, title: 'Личная терапия', subtitle:'Индивидуальный подход к Вашим проблемам', branches: ['консультирование','психотерапия']},
    {id: 2, title: 'ЕМДТ терапия', subtitle:'', branches: []},
    {id: 3, title: 'Групповая терапия', subtitle:'', branches: ['ЕМДР группа','прокрастинация']},

    {id: 4, title: 'Направление 4', subtitle:'', branches: ['направление 4-1','направление 4-2']},
    {id: 5, title: 'Направление 5', subtitle:'', branches: ['направление 5-1','направление 5-2']},
    {id: 6, title: 'Направление 6', subtitle:'', branches: ['направление 6-1','направление 6-2']},
  ])

  useEffect(() => {
    document.title = "Дейнекина Айгуль: Главная";
  }, []);

  //
  return (
    <div>

      {/*<HomeCard/>*/}
      <div className={s.block_info}>
        <div className={s.block_info_image}> <Image  src={profPhoto} alt="photo" /> </div>
        <div className={s.block_info_rightSection}>
          <div className={s.block_info_rightSection__content}>
            <div className={s.block_info_rightSection__content_name}>Дейнекина Айгуль</div>
            <div className={s.block_info_rightSection__content_descr}>Психолог, гештальт и ЕМДТ терапевт</div>
          </div>
          <div className={s.block_info_rightSection__content}>
            <div className={s.block_info_rightSection__content_slogan}>Надежно</div>
            <div className={s.block_info_rightSection__content_slogan}>Профессионально</div>
            <div className={s.block_info_rightSection__content_slogan}>Эффективно</div>
          </div>
        </div>
      </div>

      <hr/>
      {/*<HomeTherapy/>*/}
      <ul className={s.block_therapy__ul}>
        { dataTherapy.map( (item) => {
          return <li key={item.id} className={s.block_therapy__li}>
            <HomeTherapyItem card={item} />
          </li>
        }) }
      </ul>

      <hr/>
      {/*<FeedbackForm/>*/}
      <div>
      <FeedbackForm/>
      </div>

      <hr/>
    </div>
  )
}
