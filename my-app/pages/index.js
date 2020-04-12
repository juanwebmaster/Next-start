import Layout from './components/MyLayout'
import Link from 'next/link';


const PostLink = props => (
  <Link href={`/post?title=${props.title}`}>
    <a>{props.title}</a>
  </Link>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <li><PostLink title="Hello Next.js" /></li>
        <li><PostLink title="Learn Next.js is awesome" /></li>
        <li><PostLink title="Deploy apps with Zeit" /></li>
      </ul>
    </Layout>
  );
}
