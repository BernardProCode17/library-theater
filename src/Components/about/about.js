// import { useState } from "react";
import React, {useState } from "react";
import TMDBLOGO from '../../logo images/tmdb_logo.svg'

function About() {


   return (
      <main>
         <h1>About</h1>

         <section>
            <h2>About Library Theater</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, saepe ipsam itaque repellat adipisci blanditiis recusandae temporibus, id ex quae libero alias facere repudiandae. Voluptatibus, magnam harum aspernatur, quidem reprehenderit autem corporis inventore dolores ad eaque hic corrupti! Aut necessitatibus architecto aliquid temporibus dignissimos quod soluta officiis, maxime cum quas magnam, animi a fuga aperiam corporis voluptates quos saepe delectus iste recusandae ducimus provident? Deserunt doloremque architecto dolores accusamus commodi iusto laborum neque, est provident minima nam distinctio nostrum nesciunt laudantium debitis nulla quia suscipit qui? Esse quia incidunt aliquid laboriosam inventore beatae, id repellendus asperiores hic eligendi culpa. Perferendis.
            </p>

            <article>
               <img src="http://unsplash.it/330/350?random" alt="" />
               <h>Hyu Lo</h>
               <p>Title: CEO</p>
               <p>Bio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quas vitae consectetur! Molestias neque in a, dolore, officia obcaecati autem numquam omnis iure quae quis fugit vel porro sunt doloremque voluptates expedita unde veritatis dolores? Nihil fugiat ratione, aspernatur doloremque ullam velit nesciunt iure alias voluptatum, ex tenetur minima. Dignissimos?</p>
            </article>

            <article>
               <img src="http://unsplash.it/330/350?random" alt="" />
               <h>Ceecee Mann</h>
               <p>Title: CTO</p>
               <p>BioL Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus, reiciendis, pariatur omnis dicta minus cupiditate, ipsa facere et odit sint quae ratione deserunt vel accusamus commodi repellendus voluptatem ullam consequuntur mollitia? Est, molestiae rem, ipsam quis accusamus asperiores in libero corrupti assumenda ratione quod laudantium eius officia dicta perferendis.</p>
            </article>
         </section>

         <section>
            <h2>TMDB Attribution</h2>
            <img src={TMDBLOGO} alt="TMDB logo" width={200} />
            <p>"This app uses the <b>TMBD</b> api but is not <em>endorsed</em> or <em>certified</em> by <b>TMDb</b>"</p>
            <a href="https://www.themoviedb.org/faq/api">TMBD Attribution Requirement Link</a>
         </section>

      </main>
   )
}
export default About;