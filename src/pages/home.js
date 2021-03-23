import PostList from '../components/PostList'
import Layout from '../components/Layout'

function Home() {
  return (
    <div className="Home">
     <Layout>
        <main className=".col-md-6 .col-md-offset-3 mx-auto w-75">
            <div>
              <h3>Hello there,</h3>
              <p>Ik ben Daniel van der Schuur, een 23 jarige UX designer. Gedurende mijn study Communicatie & Multimedia Design heb ik me gespecialiseerd in oplossingen ontwerpen voor grote, op date gerichtte probleemstukken.</p>
            </div> 
            <h3>Mijn werk</h3>
            <PostList />
        </main>
      </ Layout>
    </div>
  );
}

export default Home;