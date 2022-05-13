import React from 'react'
import fs from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

import picWhatsapp from '../../public/socials/WhatsApp_logo-color-vertical.svg.png';
import picTelegram from '../../public/socials/Telegram_logo.svg.png';
import picFacebook from '../../public/socials/1200px-Facebook_Logo_(2019).png';
import picInstagram from '../../public/socials/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png';

export const Footer = () => {
  return (
    <div className={fs.div_footer}>

      <div className={fs.div_footer__content}>

        <div className={fs.footer_block}>
          <h4 className={fs.txt_center}>Дейнекина Айгуль</h4>
          {/*<div className={fs.txt_center}>Персональная страница Такого-сякого</div>*/}
        </div>

        <div className={fs.footer_block}>
          <h4 className={fs.txt_center}>Соцсети</h4>
          <ul className={fs.socials_ul}>
            <li className={fs.social_image}> 
              <Link href="https://www.whatsapp.com/">
                <a> <Image src={picWhatsapp} height={40} width={40} alt="whatsapp"/> </a>
              </Link>
            </li>
            <li className={fs.social_image}> 
              <Link href="https://telegram.org/">
                <a> <Image src={picTelegram} height={40} width={40} alt="tg"/> </a>
              </Link>
            </li>
            <li className={fs.social_image}> 
              <Link href="https://www.facebook.com/">
                <a> <Image src={picFacebook} height={40} width={40} alt="fb"/> </a>
              </Link>
            </li>
            <li className={fs.social_image}> 
              <Link href="https://www.instagram.com/">
                <a> <Image src={picInstagram} height={40} width={40} alt="insta"/> </a>
              </Link>
            </li>                        
          </ul>
        </div>

        <div className={fs.footer_block}>
          <h4 className={fs.txt_center}>Контактный адрес</h4>
          <div className={fs.txt_center}>г.Москва, ул Пушкина дом 4 корп 3, офис 201</div>
        </div>
      </div>

      <div className={fs.div_footer__content}>
        <div className={fs.txt_center}>Copyright © 2022, Personal Page Plus, powered by oleve2</div>
      </div>
    </div>
  )
}
