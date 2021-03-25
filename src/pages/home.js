import PostList from '../components/PostList'
import Layout from '../components/Layout'

function Home() {
  return (
    <div className="Home">
     <Layout>
        <main className=".col-md-6 .col-md-offset-3 mx-auto w-75">
            <div className="about">
              <h3>Hello there 👋,</h3>
              <p>Ik ben Daniel van der Schuur, een 23 jarige UX designer. Gedurende mijn study Communicatie & Multimedia Design heb ik me gespecialiseerd in oplossingen ontwerpen voor grote, op date gerichtte probleemstukken.</p>
              <div className="social-row">
                <div className="socials linkedin"><a href="https://www.linkedin.com/in/dani%C3%ABl-van-der-schuur-8b389510a/ " target="_blank" rel="noreferrer">LinkedIn</a></div>   
                <div className="socials github"><a href="https://www.github.com/sjerrietukkel" target="_blank" rel="noreferrer">Github</a></div> 
              </div>
            </div> 
            {/* <h3>Mijn werk</h3> */}
            <PostList />
        </main>
      </ Layout>
    </div>
  );
}

export default Home;