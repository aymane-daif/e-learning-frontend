import { useKeycloak } from '@react-keycloak/web';
import Loader from './shared/loader/loader';
import StudentNavbar from './components/bars/StudentNavbar';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function App({ children }) {
  const { initialized } = useKeycloak();
  const location = useLocation();
  const path = location.pathname;
  if (!initialized) {
    return <Loader></Loader>;
  }

  return (
    <>
      {path !== '/auth/register' && !path.startsWith('/certifications') && (
        <StudentNavbar></StudentNavbar>
      )}
      {path.startsWith('/certifications') ? (
        <>{children}</>
      ) : (
        <Container style={{ marginTop: '6rem', marginBottom: '3rem' }}>
          {children}
        </Container>
      )}
    </>
  );
}

export default App;
