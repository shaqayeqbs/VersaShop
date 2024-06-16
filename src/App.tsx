import { useTranslation } from 'react-i18next';
import { useThemeStore } from './stores/theme';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import client from './apolo/client';

function App() {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useThemeStore();
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="p-4">
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          <h1>{t('welcome')}</h1>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
