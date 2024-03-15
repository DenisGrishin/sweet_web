import { ContainerFooter } from './components/Footer/ContainerFooter';

import { Header } from './ui/Header/Header';
import { Main } from './ui/Main/Main';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <ContainerFooter />
    </div>
  );
}

export default App;
