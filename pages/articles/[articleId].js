import { useRouter } from 'next/router';

export default function Article(props) {
  const router = useRouter();
  let articleId = router.query.articleId;

  return (
    <div>
      <h2>Статья id={articleId}</h2>
      <div>Тут будет текст</div>
    </div>
  )
}

