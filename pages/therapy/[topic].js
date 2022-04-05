import { useRouter } from 'next/router';

export default function TopicPost(props) {
  const router = useRouter();
  let topicTheme = router.query.blogPost;

  return (
    <>
      <h2>Терапия {topicTheme}</h2>
      <div>Проблема</div>
      <div>Симптомы и первая помощь</div>
    </>
  )
}
