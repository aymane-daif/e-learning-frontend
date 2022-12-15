import ListCourse from './components/ListCourse';

function App() {
  return (
    <div className='container'>
      <h3>
        <h2 className='fw-bolder text-dark mb-0'>Learn something new!</h2>
        <span className='text-muted h6 mt-0'>
          Learn in-demand skills in half the time
        </span>
      </h3>
      <ListCourse />
    </div>
  );
}

export default App;
