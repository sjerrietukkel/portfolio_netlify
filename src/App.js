import './App.css';
import Navbar from './containers/Navbar/Navbar';
import PostList from './components/PostList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        <h1>Test</h1>
        <PostList />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
 