import './Banner.css'
function Banner({ image, h1, alt }) {
   // banner for the about and the favorites pages 
   return (
      <section className='banner-section'>
         <h1>{h1}</h1>
         <img src={image} alt={alt} />
      </section>

   )
}

export default Banner