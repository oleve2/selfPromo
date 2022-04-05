
import hps from './feedback_form.module.css';

export default function FeedbackForm(props) {
  return (
    <>
    <form className={hps.form_question}>
    <div className={hps.form_block}>
      <label>Ваше имя</label> 
      <input />
    </div>
    <div className={hps.form_block}>
      <label>Ваша контактная информация (почта или телефон)</label> 
      <input />
    </div>
    <div className={hps.form_block}>
      <label>Сформулируйте Ваш вопрос</label> <br/> 
      <textarea />
    </div>          
    <button className={hps.form_block} type="button" onClick={() => {handleSendQuestion()}}>Отправить вопрос</button>
  </form>
  </>
  )
}
