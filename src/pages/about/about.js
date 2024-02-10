import TMDBLOGO from '../../media/tmdb_logo.svg'
import hyu_lo from '../../media/hyu_lo.jpg'
import ceece_roberts from '../../media/ceece_roberts.jpg'
import './about.css'
import about_header from '../../media/about_page_header_image.jpg'
import Banner from "../../Components/Image Banner/Banner";

function About() {
   // info for the banner Component
   const h1 = 'About';
   const alt = 'photo of a library shelf with books running along a wall and light bulbs lining the path of the shelf';


   return (
      <>
         < Banner image={about_header} h1={h1} alt={alt} />
         <main id='about' className="about-main">
            {/* Company infor */}
            <section className="about-section">
               <h2>About Library Theater</h2>

               <div className="about-info">
                  <p> <span className="bold">Library Theater</span> is a comprehensive movie database and discovery platform that was established in 2018. It was initiated by a team of passionate movie enthusiasts who sought to create a user-friendly and feature-rich platform for movie lovers. The website was built using the TMDb (The Movie Database) API, allowing users to explore a vast collection of movies, TV shows, and other entertainment content. Library Theater was born out of a desire to provide a centralized hub for film aficionados to access detailed information about their favorite movies, discover new releases, and connect with a community of fellow cinephiles. With an intuitive interface and robust search capabilities, the platform aims to offer an immersive and engaging experience for users seeking to delve into the world of cinema.</p>

                  <p>Library Theater serves as a one-stop destination for film enthusiasts, offering a wealth of information on movies, including synopses, trailers, cast and crew details, ratings, and reviews. Users can create personalized watchlists, track their favorite films, and engage in discussions about various cinematic works. With regular updates and a commitment to enhancing the user experience, Library Theater continues to be a go-to resource for individuals seeking to enrich their movie-watching endeavors.</p>
               </div>

               <div className="article-container">
                  <article>
                     <img src={hyu_lo} alt="portrait Hyu Lo smiling in a ground, CEO of Library theater" />

                     <div className="staff-info">
                        <h3><span>Hyu Lo</span></h3>
                        <p><span>Title:</span> CEO</p>
                        <p><span>Bio:</span>As the CEO of Library Theater, John Smith brings a wealth of experience in the entertainment and technology sectors. With a background in film production and a deep understanding of consumer behavior, John spearheads the strategic direction and overall management of the platform. Having previously worked with major studios, John envisions Library Theater as the ultimate destination for movie enthusiasts, aiming to curate an immersive and personalized experience for users. His vision includes expanding the platform's global reach, fostering partnerships with content creators, and leveraging emerging technologies to enhance the platform's capabilities. John is committed to cementing Library Theater's position as a leading authority in the digital film landscape, empowering users to discover, engage, and connect through the art of cinema.</p>
                     </div>
                  </article>

                  <article>
                     <img src={ceece_roberts} alt="Portrait of Ceecee man, in her office smiling, CTO of library theater" />

                     <div className="staff-info">
                        <h3><span>Ceece Roberts</span></h3>
                        <p><span>Title:</span> CTO</p>
                        <p><span>Bio:</span> as the CTO of Library Theater, brings a strong technical acumen and a passion for innovation to her role. With a background in software engineering and a track record of developing cutting-edge digital solutions, Roberts is instrumental in driving the technological roadmap of Library Theater. Her vision encompasses leveraging data insights to continually enhance the platform's functionality and user experience. Roberets is committed to ensuring that Library Theater remains at the forefront of technological advancements, creating a seamless and dynamic environment for users to explore and interact with cinematic content. With a focus on scalability and performance, she aims to solidify the platform's position as a pioneering force in the intersection of entertainment and technology.</p>
                     </div>
                  </article>
               </div>
            </section>
            
            {/* TMDB attribution */}
            <section className="attribution">
               <h2>TMDB Attribution</h2>

               <img src={TMDBLOGO} alt="TMDB logo" width={100} />

               <p>"This app uses the <b>TMBD</b> api but is not <em>endorsed</em> or <em>certified</em> by <b>TMDB</b>"</p>

               <a href="https://www.themoviedb.org/faq/api">TMBD Attribution Requirement Link</a>

            </section>

         </main>
      </>
   )
}
export default About;