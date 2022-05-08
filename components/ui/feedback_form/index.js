
import hps from './feedback_form.module.css';
import { useState } from 'react';

export default function FeedbackForm(props) {
  const [consultFormat, setConsultFormat] = useState('');

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name, value);
    setConsultFormat(value);
  }

  const handleSendQuestion = () => {
    console.log('message sent');
  }

  return (
    <>
    <form className={hps.form_question}>

      <div className={hps.form_block}>
        <label>ФИО</label> 
        <input />
      </div>

      <div className={hps.form_block}>
        <label>Контактный телефон или email</label> 
        <input />
      </div>

      <div>
        <div>Формат консультации ({consultFormat})</div>
        
        <input
          id="offline"
          value="Очно"
          name="format"
          type="radio"
          onChange={handleChange}
        /> Очно <br/>
        
        <input
          id="online"
          value="Заочно"
          name="format"
          type="radio"
          onChange={handleChange}
        /> Заочно <br/>      
      </div>

      <div className={hps.form_block}>
        <label>Причина обращения</label> <br/> 
        <textarea />
      </div>          

      <button className={hps.form_block} 
        type="button" 
        onClick={() => {handleSendQuestion()}}
      >Отправить заявку
      </button>

    </form>
  </>
  )
}
