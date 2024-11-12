import Navbar from './components/Navbar'
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
          <h2>Our Mission</h2>

          <div class="row">
            <p>We strive to bring people interesting and unique art that inspires them to be more creative and enjoy
              their homes. We know art can be expensive, so we work with a rotating set of artists and
              photographers
              to bring you fantastic prints - all for free. We just ask that you donate what you think is fair, or
              share the site with someone who might like great art as much as you do. </p>
            <img src="./assets/images/logo.png" alt="wall of wonders logo" />

          </div>

        </section>
        <section id="collections">
          <h2>Collections</h2>
          <ul>
            <li>
              <figure class="color7">
                <img src="./assets/images/pop-art.jpg" alt="Pop Art: This must be the place" />
                <figcaption><a href="#">Pop Art</a></figcaption>
              </figure>
            </li>
            <li>
              <figure class="color2">
                <img src="./assets/images/abstract.jpg" alt="Abstract: grey and green squares." />
                <figcaption><a href="#">Abstract</a></figcaption>
              </figure>
            </li>
            <li>
              <figure class="color6">
                <img src="./assets/images/vivid.jpg" alt="Tree on island in lake with purple sunrise." />
                <figcaption><a href="#">Vivid</a></figcaption>
              </figure>
            </li>
            <li>
              <figure class="color8">
                <img src="./assets/images/music.jpg" alt="Music: guitar leaning against wall." />
                <figcaption><a href="#">Music</a></figcaption>
              </figure>
            </li>
            <li>
              <figure class="color4">
                <img src="./assets/images/vehicles.jpg" alt="Vehicles: 1930's car on street." />
                <figcaption><a href="#">Vehicles</a></figcaption>
              </figure>
            </li>
            <li>
              <figure class="color3">
                <img src="./assets/images/landscape.jpg"
                  alt="Landscape: moonrise over tree-covered mountains." />
                <figcaption><a href="#">Landscape</a></figcaption>
              </figure>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <section id="footer">
          <div class="social">
            <h4>Stay Connected!</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank"><img src="./assets/icons/facebook-icon.svg"
                  alt="Visit us at Facebook." /></a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank"><img src="./assets/icons/instagram-icon.svg"
                  alt="Visit us on Instagram." /></a>
              </li>
            </ul>
          </div>
          <address>
            Wall of Wonder <br />
            RBC Plaza<br />
            60 South 6th Street<br />
            Minneapolis, MN 55402
          </address>
        </section>
      </footer>
    </>
  )
}

export default App
