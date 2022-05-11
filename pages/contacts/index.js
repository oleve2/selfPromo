
import { useEffect } from "react";

import FeedbackForm from "../../components/ui/feedback_form"
import MyYandexMap from "../../components/ui/my_yandex_map"

export default function Contacts(props) {
  useEffect(() => {
    document.title = "Дейнекина Айгуль: Контакты";
  }, []);

  //
  return (
    <div>
      <h2>Контакты</h2>
      <div>Варианты проведения консультации</div>
      <ul>
        <li>в офисе</li>
        <li>по видеосвязи</li>
        <li>выезд на территорию Заказчика (оговаривается отдельно)</li>
      </ul>
    
      <div>Подробности Вы можете узнать по контактам или отправить вопрос с формы</div>
      <FeedbackForm/>
      <br/><br/>
      <MyYandexMap/>
    </div>
  )
}
