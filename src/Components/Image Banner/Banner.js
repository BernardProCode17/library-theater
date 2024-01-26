import './Banner.css'
function Banner({ image, h1, alt}) {

   return (
      <section className='banner-section'>
         <h1>{h1}</h1>
         <img src={image} alt={alt} />
      </section>

   )
}

export default Banner