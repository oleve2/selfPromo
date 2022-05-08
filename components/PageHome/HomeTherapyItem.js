
import s from './PageHome.module.css';

export default function HomeTherapyItem(props) {
  return (
    <>
      <div className={s.therapCard_head}> {/* header */}
        <div className={s.therapCard_head__title}>{props.card.title}</div>
        <div className={s.therapCard_head__subtitle}>{props.card.subtitle}</div>
      </div>
      <div> {/* body */}
        <ul className={s.therapCard_body_ul}>
          { props.card.branches.map( (item) => {
            return <li key={item} className={s.therapCard_body_ul__li}>{item}</li>
          }) }
        </ul>
      </div>
    </>
  )
}


