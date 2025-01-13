import React from 'react';
import './Home.css'; // Importando o CSS para a Home

function Home() {
  return (
    <div className="home">
      {/* Seção 1 */}
      <section className="main-news">
        <div className="main-news-left">
          <div className="main-news-image-container">
            <img
              src="/industria.png"
              alt="Main News"
              className="main-news-image"
            />
          </div>
          <div className="main-news-content">
            <h1>Breaking News: Major Event Shakes the World</h1>
            <p>
              The industrial sector is undergoing significant transformation as it
              faces new challenges in the global market. With increasing competition,
              rising costs of raw materials, and the push for sustainability, 
              businesses are reevaluating their strategies to stay competitive. 
            </p>
          </div>
        </div>

        <div className="main-news-right">
          <div className="smaller-news-item">
            <div>
              <h2>Industry Innovation: New Technologies Revolutionize the Market</h2>
              <p>Discover how emerging technologies are reshaping industries worldwide.</p>
            </div>
            <img src="/sn1.png" alt="News Image" className="smaller-news-image" />
          </div>
          <div className="news-separator"></div>
          <div className="smaller-news-item">
            <div>
              <h2>Global Industry Shifts: How Markets Are Evolving</h2>
              <p>Insights into global market changes and their implications for businesses.</p>
            </div>
            <img src="/sn2.png" alt="News Image" className="smaller-news-image" />
          </div>
        </div>
      </section>

      <div className="separator"></div> {/* LINHA SEPARADORA */}

      {/* Seção 2: Três notícias mais recentes */}
      <section className="recent-news">
        <h2>Recent News</h2>
        <div className="recent-news-grid">
          <div className="news-card">
            <img src="/rec1.png" alt="News 1" />
            <h3>The Future of Artificial Intelligence</h3>
          </div>
          <div className="news-card">
            <img src="/rec2.png" alt="News 2" />
            <h3>Economic Recovery Gains Momentum</h3>
          </div>
          <div className="news-card">
            <img src="/rec3.png" alt="News 3" />
            <h3>How Brands Are Redefining the Industry</h3>
          </div>
          <div className="news-card">
            <img src="/rec4.png" alt="News 4" />
            <h3>Cutting-Edge Innovations in Medical Technology</h3>
          </div>
        </div>
      </section>

      <div className="separator"></div> {/* LINHA SEPARADORA */}

      {/* Seção 3: duas noticias grandes dividada em duas colunas (direita uma noticia e esquerda outra*/}
      <section class="two-column-news">
        {/*<!-- Notícia da esquerda -->*/}
        <div class="news-column">
          <img src="/rec1.png" alt="Left News" />
          <h2>Technology: Major AI Breakthrough</h2>
          <p>
            Scientists have developed an AI model capable of solving complex problems faster than ever before. This innovation could change the way we approach challenges in healthcare, space exploration, and more.
          </p>
          <a href="#">Read the full article...</a>
        </div>
        {/*<!-- Notícia da direita -->*/}
        <div class="news-column">
          <img src="/rec2.png" alt="Right News" />
          <h2>Culture: Exploring the Modern Art Movement</h2>
          <p>
            A new wave of artists is redefining contemporary art with a focus on sustainability, inclusion, and technology. Discover how their work is transforming the global art scene.
          </p>
          <a href="#">Learn more...</a>
        </div>
      </section>

      <div className="separator"></div> {/* LINHA SEPARADORA */}

      {/* Seção 4: Technology e People & Culture e Lifestyle*/}
      <section class="tech-and-people">
      <div class="news-item">
        <img src="/tec.png" alt="Technology" />
        <h4>Technology: AI Breakthrough</h4>
        <p><a href="#">Read more about this...</a></p>
      </div>
      <div class="news-item">
        <img src="/tec2.png" alt="Technology" />
        <h4>AI Drives Innovation in Healthcare</h4>
        <p><a href="#">Discover the details...</a></p>
      </div>
      <div class="news-item">
        <img src="/people.png" alt="People" />
        <h4>People: Celebrity Spotlight</h4>
        <p><a href="#">Who made headlines?</a></p>
      </div>
      <div class="news-item">
        <img src="/people2.png" alt="People" />
        <h4>Inspiring People Stories</h4>
        <p><a href="#">Explore more...</a></p>
      </div>
      <div class="news-item">
        <img src="/culture.png" alt="Culture" />
        <h4>Culture: New Art Exhibition</h4>
        <p><a href="#">What's on display?</a></p>
      </div>
      <div class="news-item">
        <img src="/culture2.png" alt="Culture" />
        <h4>Revival of Old Traditions</h4>
        <p><a href="#">Learn more...</a></p>
      </div>
      <div class="news-item">
        <img src="/lifestyle.png" alt="Lifestyle" />
        <h4>Lifestyle: Healthy Living Tips</h4>
        <p><a href="#">Read the full guide...</a></p>
      </div>
      <div class="news-item">
        <img src="/lifestyle2.png" alt="Lifestyle" />
        <h4>Top Travel Destinations</h4>
        <p><a href="#">Start exploring...</a></p>
      </div>
      <div class="news-item">
        <img src="/rec3.png" alt="aaa" />
        <h4>What's changing in the New York Yankees time?</h4>
        <p><a href="#">Read the full guide...</a></p>
      </div>
      <div class="news-item">
        <img src="/rec4.png" alt="aaa" />
        <h4>Museum of Arts in Paris</h4>
        <p><a href="#">Start exploring...</a></p>
      </div>
    </section>

    {/* Seção 5: Subscribe to Updates */}
    <section className="subscribe-section">
      <h2>Subscribe to Updates</h2>
      <p>Get the latest news delivered straight to your inbox!</p>
      <div className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </section>

     {/* Seção 6: Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Periótico. All rights reserved.</p>
      </footer>
      
    </div>
  );
}

export default Home;
