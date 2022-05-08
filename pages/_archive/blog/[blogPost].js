import { useRouter } from 'next/router';

export default function BlogPost(props) {
  const router = useRouter();
  let subBlogTheme = router.query.blogPost;
  return (
    <div>
      <h2>Блог на тему: {subBlogTheme}</h2>
      <div>
        тут скоро будет текст
      </div>
    </div>
  )
}