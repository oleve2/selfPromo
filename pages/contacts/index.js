//import Script from 'next/script';
import FeedbackForm from "../../components/ui/feedback_form"
//import YMaps from "../../components/ui/ymaps"

import MyYandexMap from "../../components/ui/my_yandex_map"

export default function Contacts(props) {
  return (
    <div>
      <h2>Контакты</h2>
      <div>Варианты проведения консультации</div>
      <ul>
        <li>в офисе</li>
        <li>по видеосвязи</li>
        <li>выезд на территорю Заказчика (оговаривается отдельно)</li>
      </ul>
    
      <div>Подробности Вы можете узнать по контактам или отправить вопрос с формы</div>
      <FeedbackForm/>
      <br/><br/>
      <MyYandexMap/>
    </div>
  )
}
