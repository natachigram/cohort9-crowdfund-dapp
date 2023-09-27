import CreateCampaign from './component/CreateCampaign';
import Crowd from './component/Crowd';
import Header from './component/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='mt-10'>
        <CreateCampaign />
        <Crowd />
      </main>
    </div>
  );
}

export default App;
