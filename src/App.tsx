import '@mantine/core/styles.css';
import { AppShell, Burger, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './App.css';
import { Sidebar } from './components';
import { useSpotifyAuth, useSearch } from './services';
import { useEffect } from 'react';

function App() {
  const [opened, { toggle }] = useDisclosure();
  const UseSpotifyAuth = useSpotifyAuth();
  const { data, isLoading, isError } = useSearch();

  useEffect(() => {
    UseSpotifyAuth.mutateAsync().then(() => {
      console.log('Spotify token has been set');
    });

    console.log(data);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  console.log(data);

  return (
    <MantineProvider defaultColorScheme="dark">
      <div className="text-sm">
        <AppShell
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
          withBorder={false}
          padding="md"
        >
          <AppShell.Navbar p="md">
            <Sidebar />
          </AppShell.Navbar>
          <AppShell.Main>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </AppShell.Main>
        </AppShell>
      </div>
    </MantineProvider>
  );
}

export default App;
