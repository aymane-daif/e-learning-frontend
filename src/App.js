import { useKeycloak } from '@react-keycloak/web';
import ListCourse from './components/ListCourse';
import Loader from './shared/loader/loader';

function App({ children }) {
  // const { initialized } = useKeycloak();

  // if (!initialized) {
  //   return <Loader />;
  // }
  // return { children };
  return <ListCourse />;
}

export default App;
