import React from 'react'
import { useState } from 'react';
import { Post } from './Post';

export const PostList = () => {
  const [posts, setPosts] = useState([
    {id:0, title: 'Как победить беспокойство', content: 'Как победить беспокойство ...', link2: '/blog/как-победить-беспокойство'},
    {id:1, title: 'Стать уверенным в себе', content: 'Стать уверенным в себе ...', link2: '/blog/стать-уверенным-в-себе'},
    {id:2, title: 'Детские страхи', content: 'Детские страхи это ...', link2: '/blog/детские-страхи'},
    {id:3, title: 'Проблемы с личной жизнью', content: 'Проблемы с личной жизнью - её наладить можно с помощью ...', link2: '/blog/проблемы-с-личной-жизнью'}
  ]);

  return (
    <div>
      <h2>Персональный блог</h2>
      {posts.map((item) => {
        return <Post post={item} key={item.id}/>
      })}
    </div>
  )
}

