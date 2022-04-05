import React from 'react';
import Image from 'next/image';

import hps from './HomePage.module.css';
import profPhoto from '../../public/Portrait_Placeholder.png';

import FeedbackForm from '../ui/feedback_form';

export const HomePage = () => {
  const handleSendQuestion = () => {
    alert('Ваш вопрос отправлен!');
  }

  return (
    <div>
      <div className={hps.div_block}>
        <div className={hps.block_info}>
          <Image 
            src={profPhoto}
            alt="photo" 
            className={hps.block_info_image}
          />
          <div className={hps.block_info_item}>
            Я - Такой-то Такой-то <br/>
            г.Москва, практикующий психолог <br/>
            тренер личной эффективности <br/>
          </div>
          <div className={hps.block_info_item}>
            <b>Базовое образование:</b> <br/>
            МГУ им. М.В.Ломоносова, факультет психологии <br/>
            ГУ ВШЭ, магистр психологии <br/>
            <br/><br/>
            <b>Дополнительная квалификация:</b><br/>
            курсы в Оксфорде <br/>
            курсы в Стенфорде <br/>
            что-то еще (придумать) <br/>
          </div>
        </div>

      </div>
      <div className={hps.div_block}>
        <b>Какие Ваши проблемы я могу решить: (тут будет список кнопок )</b> <br/>
        <ul className={hps.tasks_ul}>
          <li>
            <div className={hps.tasks_div}>Убрать страхи перемен в Вашей жизни</div>
          </li> 
          <li>
            <div className={hps.tasks_div}>Расширение сферы осознания собственного тела, его особенностей и возможностей</div>
          </li>
          <li>
            <div className={hps.tasks_div}>Развитие глубинного доверия себе и повышение самооценки путём развития более положительного образа тела</div>
          </li>
          <li>
            <div className={hps.tasks_div}>Совершенствование социальных умений в безопасном пространстве терапевтических отношений</div>
          </li>
          <li>
            <div className={hps.tasks_div}>Интеграция внутреннего опыта — установление связи между чувствами, мыслями и движением</div>
          </li>
          <li>
            <div className={hps.tasks_div}>Создание глубокого группового опыта</div>
          </li>
        </ul>
      </div>
      <div className={hps.div_block}>
        <b>У Вас есть волнующий Вас вопрос? Задайте его, я постараюсь Вам помочь</b>
        <FeedbackForm />
      </div>
    </div>
  )
}
