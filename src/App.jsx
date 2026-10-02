import AppShell from "./layout/AppShell.jsx";
import Hero from "./hero/Hero.jsx";
import MainSection from "./MainSection.jsx";

/**
 * Root layout. Legacy section components render inside the shell
 * until each is rebuilt under components/sections/.
 */
function App() {
  return (
    <AppShell>
      <Hero />
      <MainSection />
    </AppShell>
  );
}

export default App;
