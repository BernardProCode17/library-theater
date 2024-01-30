// import { useState } from "react";
import React, { useState } from "react";
import TMDBLOGO from '../../media/tmdb_logo.svg'
import './about.css'
import about_header from '../../media/about_page_header_image.jpg'
import Banner from "../../Components/Image Banner/Banner";

function About() {
   const h1 = 'About';
   const alt = 'photo of a library shelf with books running along a wall and light bulbs lining the path of the shelf';


   return (
      <>
         < Banner image={about_header} h1={h1} alt={alt} />
         <main id='about' className="about-main">

            <section className="about-section">
               <h2>About Library Theater</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, saepe ipsam itaque repellat adipisci blanditiis recusandae temporibus, id ex quae libero alias facere repudiandae. Voluptatibus, magnam harum aspernatur, quidem reprehenderit autem corporis inventore dolores ad eaque hic corrupti! Aut necessitatibus architecto aliquid temporibus dignissimos quod soluta officiis, maxime cum quas magnam, animi a fuga aperiam corporis voluptates quos saepe delectus iste recusandae ducimus provident.               </p>

               <article>
                  <img src="http://unsplash.it/330/350?random" alt="" />

                  <div className="staff-info">
                     <h3><span>Hyu Lo</span></h3>
                     <p><span>Title:</span> CEO</p>
                     <p><span>Bio:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quas vitae consectetur! Molestias neque in a, dolore, officia obcaecati autem numquam omnis iure quae quis fugit vel porro sunt doloremque voluptates expedita unde veritatis dolores? Nihil fugiat ratione, aspernatur doloremque ullam velit nesciunt iure alias voluptatum, ex tenetur minima. Dignissimos.</p>
                  </div>
               </article>

               <article>
                  <img src="http://unsplash.it/330/350?random" alt="" />

                  <div className="staff-info">

                     <h3><span>Ceecee Mann</span></h3>
                     <p><span>Title:</span> CTO</p>
                     <p><span>Bio:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus, reiciendis, pariatur omnis dicta minus cupiditate, ipsa facere et odit sint quae ratione deserunt vel accusamus commodi repellendus voluptatem ullam consequuntur mollitia? Est, molestiae rem, ipsam quis accusamus asperiores in libero corrupti assumenda ratione quod laudantium eius officia dicta perferendis.</p>
                  </div>
               </article>
            </section>

            <section className="attribution">
               <h2>TMDB Attribution</h2>

               <img src={TMDBLOGO} alt="TMDB logo" width={100} />

               <p>"This app uses the <b>TMBD</b> api but is not <em>endorsed</em> or <em>certified</em> by <b>TMDb</b>"</p>

               <a href="https://www.themoviedb.org/faq/api">TMBD Attribution Requirement Link</a>
               
            </section>

         </main>
      </>
   )
}
export default About;