import Layout from './components/MyLayout'
import Link from 'next/link';


const PostLink = props => (
  <Link href="/p/[id]" as={`/p/${props.id}`}>
    <a>{props.id}</a>
  </Link>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <li><PostLink id="hello-next" /></li>
        <li><PostLink id="learn-next" /></li>
        <li><PostLink id="deploy-next" /></li>
      </ul>
    </Layout>
  );
}
