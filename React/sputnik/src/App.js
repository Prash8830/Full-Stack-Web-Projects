import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Progress from './components/Progress';

function App() {
  return (
    <>
      {/* used navbar.js file for importing navbar which is coded there */}
      {/* we can use props it is basicallly like we can change the attributes of file which we loaded */}
      {/* below i change title of navigation bar using props  */}
      <Navbar title="Profile" num={91482293838}/>
      {/* used buttons from progress.js file which is in components folder so like this u can use it  */}
      <Progress />
    </>
  );
}

export default App;
