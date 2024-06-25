import '@mantine/core/styles.css';
import { AppShell, Burger, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './App.css';
import { Sidebar } from './components';
import { useSpotifyAuth } from './services';
import { useEffect } from 'react';

function App() {
  const [opened, { toggle }] = useDisclosure();
  const UseSpotifyAuth = useSpotifyAuth();

  useEffect(() => {
    UseSpotifyAuth.mutateAsync();
  }, []);
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
