import Layout from "./components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import useSWR from 'swr';
import { useRouter } from 'next/router';

const PostLink = props => {
  console.log(props)
  return (
    <Link href="/p/[id]" as={`/p/${props.props.id}`}>
      <a>{props.props.name}</a>
    </Link>
  )
}

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Blog = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
    fetcher
  )
  const author = data?.author;
  let quote = data?.quote;
  
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}
    </main>
  )

  // return (
  //   <Layout>
  //     <h1>Batman TV Shows</h1>
  //     <ul>
  //       {props.shows.map(show => (
  //         <li key={show.id}>
  //           <PostLink props={show} />
  //         </li>
  //       ))}
  //     </ul>
  //   </Layout>
  // );
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