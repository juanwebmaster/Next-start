import Layout from "./components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import useSWR from 'swr';

const PostLink = props => {
  console.log(props)
  return (
    <Link href="/p/[id]" as={`/p/${props.props.id}`}>
      <a>{props.props.name}</a>
    </Link>
  )
}

const Blog = props => {
  
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <PostLink props={show} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

Blog.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Blog;