import AllRoutes from './routes/Routes';
import { ModulesProvider } from './contexts/ModulesContext';

import 'primeicons/primeicons.css';
import { SnackbarContext } from './contexts/SnackbarContext';
import { HelmetProvider } from 'react-helmet-async';

function App () {
  return (
    <SnackbarContext>
      <ModulesProvider>
        <HelmetProvider>
          <AllRoutes />
        </HelmetProvider>
      </ModulesProvider>
    </SnackbarContext>
  );
}

export default App;
