import AppShell from "./layout/AppShell.jsx";
import MainSection from "./MainSection.jsx";

/**
 * Root layout. Legacy section components render inside the shell
 * until each is rebuilt under components/sections/.
 */
function App() {
  return (
    <AppShell>
      <MainSection />
    </AppShell>
  );
}

export default App;
