import { useNavigate } from "react-router-dom"; 
import './BackButton.css'


// function for the back button to go back to the previous pages
function BackButton() {
   const history = useNavigate();

   function backfn() {
      return history(-1);
   };
   return (
      <button type="button" className="backButton" onClick={backfn}>Back</button>
   )
}
export default BackButton;