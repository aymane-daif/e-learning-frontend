import { useKeycloak } from '@react-keycloak/web';

import Loader from './shared/loader/loader';

function App({ children }) {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <Loader></Loader>;
  }

  return children;
}

export default App;
