import './App.css';
import Review from './components/Review';

function App() {
  return (
    <main>
      <section>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
          <Review />
        </div>
      </section>
    </main>
  );
}

export default App;
