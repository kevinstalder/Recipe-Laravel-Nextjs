import {data} from '@/data'


function  Recipe({ret}) {

  return (
    <div className="">
      {ret.title}
      
    </div>
  );
    
}


export default Recipe;
// This function gets called at build time
export async function getStaticPaths() {
  // console.log(data);
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  const post = data.filter(item => {
    return item.id == params.id
  });
  const ret = post[0]
  console.log(post);

  // Pass post data to the page via props
  return { props: { ret } }
}