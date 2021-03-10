import PostList from '../components/PostList'
import Layout from '../components/Layout'

function Home() {
  return (
    <div className="Home">
     <Layout>
        <main className=".col-md-6 .col-md-offset-3 mx-auto w-75">
            <h3>Projecten</h3>
            <PostList />
        </main>
      </ Layout>
    </div>
  );
}

export default Home;