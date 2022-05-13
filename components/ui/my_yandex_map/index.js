
// https://react-yandex-maps.vercel.app/
// <Script src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A073253eba8e611e348ad6fdb0754ff2a407086b365cc377b36e589d2fd3d1304&amp;width=600&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></Script>

import { YMaps, Map } from 'react-yandex-maps';
import ymp from './my_y_map.module.css';

export default function MyYandexMap(props) {
  return (
    <YMaps >
      <Map className={ymp.map_wrapper}  defaultState={{ center: [55.76461278056556, 37.60310955038978], zoom: 17}} /> {/* className={ymp.wrp}  */}
    </YMaps>    
  )
}