import React from 'react'
import Link from 'next/link';

import postCls from './Post.module.css';

export const Post = (props) => {
  return (
    <div className={postCls.post_wrapper}>
      <div>id: {props.post.id}</div>
      <div>Title: {props.post.title}</div>
      <div>{props.post.content}</div>
      { (props.post.link2 !== undefined) ? <Link href={props.post.link2}>Подробнее...</Link> : <></> }
    </div>
  )
}
