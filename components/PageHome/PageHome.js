import React from 'react';
import { useState } from "react"
import Image from 'next/image';

import HomeTherapyItem from './HomeTherapyItem';
import FeedbackForm from '../ui/feedback_form';

import s from './PageHome.module.css';
import profPhoto from '../../public/Portrait_Placeholder.png';

export const PageHome = () => {
  const [dataTherapy, setDataTherapy] = useState([
    {id: 1, title: 'Личная терапия', subtitle:'Индивидуальный подход к Вашим проблемам', branches: ['консультирование','психотерапия']},
    {id: 2, title: 'ЕМДТ терапия', subtitle:'', branches: []},
    {id: 3, title: 'Групповая терапия', subtitle:'', branches: ['ЕМДР группа','прокрастинация']},

    {id: 4, title: 'Направление 4', subtitle:'', branches: ['123','321']},
    {id: 5, title: 'Направление 5', subtitle:'', branches: ['123','321']},
    {id: 6, title: 'Направление 6', subtitle:'', branches: ['123','321']},
  ])

  //
  return (
    <div>

      {/*<HomeCard/>*/}
      <div className={s.block_info}>
        <div className={s.block_info_image}> <Image  src={profPhoto} alt="photo" /> </div>
        <div className={s.block_info_rightSection}>
          <div className={s.block_info_rightSection__content}>
            <div className={s.block_info_rightSection__content_name}>Дейнекина Айгуль</div>
            <div>Психолог, гештальт и ЕМДТ терапевт</div>
          </div>
          <div className={s.block_info_rightSection__content}>
            <div>Надежно</div>
            <div>Профессионально</div>
            <div>Эффективно</div>
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
