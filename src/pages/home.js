import PostList from '../components/PostList'

function Home() {
  return (
    <div className="Home">
      <main className=".col-md-6 .col-md-offset-3 mx-auto w-75">
        <h3>Projecten</h3>
        <PostList />
      </main>
    </div>
  );
}

export default Home;