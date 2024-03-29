import { useEffect, useRef, useState } from 'react'
import './svg_styles.css'

function Favourites({ id }) {
console.log(id)
   const [StorageManagement, setStoragemanagement] = useState(false);
   const [arrayStorage, setArrayStorage] = useState([])
   const buttonRef = useRef();


   useEffect(() => {
      setArrayStorage(JSON.parse(localStorage.getItem('id')) || [])
   }, [])

   useEffect(() => {
      localStorage.setItem('id', JSON.stringify(arrayStorage));
   }, [arrayStorage])

   function storageMgn() {
      if (arrayStorage.includes(id)) {
         setArrayStorage(array => array.filter(movieID => movieID !== id))
      } else {
         setArrayStorage(array => [...array, id])
      }
   }
   const svgIcons = {
      favourites: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='add remove'>
         <path d="M22.813 7.338a6.736 6.736 0 0 0-3.8-4.49c-3.206-1.471-6 .878-7.016 1.9-1.013-1.025-3.813-3.374-7.016-1.9a6.736 6.736 0 0 0-3.8 4.49 5.818 5.818 0 0 0 1 4.98c1.708 2.215 9.156 8.891 9.472 9.174a.514.514 0 0 0 .688 0c.316-.283 7.764-6.959 9.472-9.174a5.815 5.815 0 0 0 1-4.98zM21 11.689c-1.448 1.878-7.488 7.362-9 8.726-1.512-1.364-7.552-6.848-9-8.726a4.8 4.8 0 0 1-.812-4.1 5.711 5.711 0 0 1 3.226-3.8c2.229-1.027 4.731.311 6.186 2.05a.516.516 0 0 0 .4.188.516.516 0 0 0 .4-.188c.029-.035 2.958-3.536 6.188-2.055a5.714 5.714 0 0 1 3.226 3.8A4.8 4.8 0 0 1 21 11.689z" />
         <path d="M6.346 5a4.39 4.39 0 0 0-2.473 2.928 3.818 3.818 0 0 0 .656 3.272.515.515 0 0 0 .816-.629 2.8 2.8 0 0 1-.472-2.392 3.366 3.366 0 0 1 1.9-2.237A.515.515 0 0 0 6.346 5z" />
      </svg>,

      allTimeFavourites: <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24">
         <path d="M22.857 12.291a5.1 5.1 0 0 0-2.876-3.4 4.127 4.127 0 0 0-4 .374c.256-.278.47-.52.614-.707a4.43 4.43 0 0 0 .76-3.788 5.106 5.106 0 0 0-2.876-3.4c-2.34-1.083-4.39.515-5.228 1.33-.837-.814-2.887-2.413-5.232-1.337a5.106 5.106 0 0 0-2.876 3.4A4.427 4.427 0 0 0 1.9 8.555a57.143 57.143 0 0 0 4.613 4.6 4.438 4.438 0 0 0 .224 1.685 3.8 3.8 0 0 0-.992.624 2.73 2.73 0 0 0-2.959-.628 3.022 3.022 0 0 0-1.7 2.017 2.651 2.651 0 0 0 .457 2.27c.706.915 3.73 3.626 3.858 3.741a.517.517 0 0 0 .688 0c.128-.115 3.153-2.826 3.858-3.741a2.414 2.414 0 0 0 .148-.245 191.201 191.201 0 0 0 4.308 3.986.516.516 0 0 0 .687 0c.234-.21 5.737-5.142 7.005-6.786a4.426 4.426 0 0 0 .762-3.787zm-16.118-.332a47.562 47.562 0 0 1-4.02-4.033 3.4 3.4 0 0 1-.575-2.913A4.08 4.08 0 0 1 4.449 2.3c1.577-.723 3.427.276 4.4 1.479a.514.514 0 0 0 .4.187.515.515 0 0 0 .4-.187c.02-.026 2.114-2.529 4.4-1.479a4.082 4.082 0 0 1 2.306 2.713 3.407 3.407 0 0 1-.575 2.913 21.339 21.339 0 0 1-1.647 1.764 4.592 4.592 0 0 0-3.253-1.151 4.984 4.984 0 0 0-4.127 3.388l-.014.032zM9.133 18.5a46.1 46.1 0 0 1-3.386 3.293A46.3 46.3 0 0 1 2.361 18.5a1.628 1.628 0 0 1-.273-1.4 2 2 0 0 1 1.131-1.327 1.9 1.9 0 0 1 2.13.744.515.515 0 0 0 .8 0 2.953 2.953 0 0 1 1.038-.753 3.767 3.767 0 0 0 .217.314 27.237 27.237 0 0 0 1.933 2.057 1.384 1.384 0 0 1-.204.365zm12.148-3.044c-1.035 1.342-5.287 5.212-6.532 6.338-.8-.724-2.841-2.58-4.473-4.171a19.962 19.962 0 0 1-2.069-2.184C5.671 12.1 10.721 6.856 14.351 11.3a.514.514 0 0 0 .4.187.606.606 0 0 0 .4-.187c.021-.026 2.117-2.529 4.4-1.479a4.079 4.079 0 0 1 2.305 2.712 3.4 3.4 0 0 1-.575 2.918z" />
         <path d="M10.521 10.476a3.372 3.372 0 0 0-1.9 2.251 2.947 2.947 0 0 0 .508 2.525.515.515 0 0 0 .816-.629 1.929 1.929 0 0 1-.324-1.65 2.353 2.353 0 0 1 1.329-1.56.515.515 0 0 0-.43-.937z" />
      </svg>
   }


   console.log(arrayStorage)

   return (
      <button ref={buttonRef} style={{ width: '2.5rem' }} onClick={storageMgn}>
         {svgIcons.favourites}
      </button>
   )
}

export default Favourites;