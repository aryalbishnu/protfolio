import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Navbar  from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Certificate from './components/certificates';
import Education from './components/education';
import WorkExperience from './components/workExperiences';
import CareerObjective from './components/careOjective';
import MyCommitment from './components/commitment';
import Contact from './components/contact';
import ScrollProgress from './components/scroller';
import ScrollToTopButton from './components/scrollToTopButton';
import Footer from './components/footer';

function App() {
  return (
    <>
<Navbar />
<downloadCV />
<Hero />
<About />
<Skills />
<Certificate />
<Education />
<WorkExperience />
<CareerObjective />
<MyCommitment />
<Contact />
<ScrollProgress />
<ScrollToTopButton />
<Footer />
        
        </>

  );
}

export default App;
