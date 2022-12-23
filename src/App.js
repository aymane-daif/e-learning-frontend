import { useKeycloak } from '@react-keycloak/web';
import Home from './pages/Home';

function App({ children }) {
  // const { initialized } = useKeycloak();

  // if (!initialized) {
  //   return <Loader />;
  // }
  // return { children };
  return <Home />;
}

export default App;
