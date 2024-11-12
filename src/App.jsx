import Navbar from './components/Navbar'
import Mission from './components/Mission'
import Collection from './components/Collection'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
      <div className="header">
        <header>
          <Navbar />
        </header>
      </div>
      <main>
        <section id="mission">
          <Mission />
        </section>
        <section id="collections">
          <Collection />
        </section>
      </main>

      <footer>
        <section id="footer">
          <Footer />
        </section>
      </footer>
    </>
  )
}

export default App
