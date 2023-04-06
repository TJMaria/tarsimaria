export default function About({ posts }: any) {
    return <div style={ { position: 'absolute', top: '100px' }}>About :{JSON.stringify(posts)}</div>
}
// This function gets called at build time
export async function getStaticProps() {
    const {NODE_ENV, DEV_HOST, PROD_HOST} = process.env;
    const host = NODE_ENV === 'development' ? DEV_HOST : PROD_HOST;
    // Call an external API endpoint to get posts
    const res = await fetch(host+'/test.json')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts
        },
    }
}