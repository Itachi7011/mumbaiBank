import { NavLink } from "react-router-dom";

const NewFooter = () => {
  return (
    <>
   
      <footer className="footer-main">
         <hr style={{width: "100%",height: "0.4vw", background:"black", marginTop: "-10px"}}/><div className="left-footer">
         
            

            <br />
            <NavLink className="footer-buttons" to="/">Special Offers</NavLink><br/>
            <br />
            <NavLink className="footer-buttons" to="/">RBI New Schemes</NavLink><br/><br/>
            <NavLink className="footer-buttons" to="/">RBI Circulars</NavLink>
           
            <p className="footer-buttons">Beware of Frauds And Scams!</p>
          
        </div>

        <div className="left-footer">
         
            

            <br />
            <NavLink className="footer-buttons" to="/GradeSystem">GradeSystem</NavLink>
            <br />
            <p className="footer-buttons">Contact Us : +011 2869845</p>
            <p className="footer-buttons">Email : nationalmumbaibank@gmail.com</p>
            
            <p className="footer-buttons">copyright &copy; 2023 - Mumbai National Bank Of India</p>
          
        </div>
      </footer>
    </>
  );
};
export default NewFooter;
