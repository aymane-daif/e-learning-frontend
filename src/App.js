import { useKeycloak } from '@react-keycloak/web';
import Loader from './shared/loader/loader';
import StudentNavbar from './components/bars/StudentNavbar';
import { Container } from 'react-bootstrap';
function App({ children }) {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <Loader></Loader>;
  }

  return (
    <>
      <StudentNavbar></StudentNavbar>
      <Container style={{ marginTop: '6rem', marginBottom: '3rem' }}>
        {children}
      </Container>
    </>
  );
}

export default App;
