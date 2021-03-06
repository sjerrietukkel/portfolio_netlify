import PostList from '../components/PostList'
import Layout from '../components/Layout'

function Home() {
  return (
    <div className="Home">
     <Layout>
        <main className="col-md-8 col-md-offset-3 mx-lg-auto mx-sm-2 w-lg-75 w-sm-80">
            <div className="about d-flex flex-column justify-content-center">
                <h3 id="about">Hello there 👋,</h3>
                <p>Ik ben Daniel van der Schuur, een onlangs afgestudeerde UX designer en opzoek naar werk!</p>
                <div className="social-row justify-content-center" id="cases">
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