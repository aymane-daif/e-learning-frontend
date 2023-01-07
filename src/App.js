import { useKeycloak } from '@react-keycloak/web';
import Loader from './shared/loader/loader';
import StudentNavbar from './components/bars/StudentNavbar';
function App({ children }) {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <Loader></Loader>;
  }

  return (
    <>
      <StudentNavbar></StudentNavbar>
      {children}
    </>
  );
}

export default App;
