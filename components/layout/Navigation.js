import Link from 'next/link';
import classes from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={classes.nav_header}>
      <nav className={classes.nav_div}>
        <ul className={classes.nav_ul}>
          <li className={classes.nav_li}> <Link href="/">Главная</Link> </li>
          <li className={classes.nav_li}> <Link href="/about">Обо мне</Link> </li>
          <li className={classes.nav_li}> <Link href="/articles">Статьи</Link> </li>
          <li className={classes.nav_li}> <Link href="/reviews">Отзывы</Link> </li>
          <li className={classes.nav_li}> <Link href="/contacts">Контакты</Link> </li>
        </ul>
      </nav>
    </header>
  )
}
