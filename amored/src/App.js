import Navigation from './components/Navigation';
import ImageSection from './components/ImagesSection';
import Footer from './components/footer';
import Panel from './components/Panel';
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Panel/>
      <ImageSection/> 
      <Footer/>
    </div>
  );
}

export default App;
