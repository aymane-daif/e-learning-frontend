import { useKeycloak } from '@react-keycloak/web';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Loader from './shared/loader/loader';

function App({ children }) {
  // const { initialized } = useKeycloak();

  // if (!initialized) {
  //   return <Loader />;
  // }
  // return { children };
  return <Home />;
}

export default App;
