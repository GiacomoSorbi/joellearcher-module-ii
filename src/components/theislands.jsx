import React from "react";
import jamaica from "./images/jamaica.jpg";
import antigua from "./images/antigua.jpg";
import barbados from "./images/barbados.jpg";
import saintlucia from "./images/saint-lucia.jpg";
import domrepub from "./images/dom_repub.jpg";
import martinique from "./images/martinique.jpg";
import saintkitts from "./images/saint-kitts.jpg";
import trinidad from "./images/trinidad_tobago.jpg";
import bahamas from "./images/bahamas.jpg";
import aruba from "./images/aruba.jpg";
import cayman from "./images/cayman_islands.jpg";
import guadeloupe from "./images/guadelope.jpg";

const Islands = props => {
  return (
    <div className="main-content">
      <h2>The Top 3 Reasons You Should Go To These 12 Caribbean Islands</h2>

      <div className="island-thumbnail">
        <h3 className="island-title">1. Jamaica</h3>    
        <img src={jamaica} alt="jamaican beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">2. Antigua</h3>
        <img src={antigua} alt="antiguan beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">3. Barbados</h3>     
        <img src={barbados} alt="barbadian beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">4. Saint Lucia</h3>           
        <img src={saintlucia} alt="St Lucian beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">5. Dominican Republic</h3>    
        <img src={domrepub} alt="Dominican beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">6. Martinique</h3>      
        <img src={martinique} alt="Martinique beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">7. Saint Kitts and Nevis</h3>           
        <img src={saintkitts} alt="Saint Kitts and Nevis beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">8. Trinidad and Tobago</h3>          
        <img src={trinidad} alt="Trinidadian beach" />
        <p className="island-text">
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">9. The Bahamas</h3>           
        <img src={bahamas} alt="Bahamian beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">10. Aruba</h3>           
        <img src={aruba} alt="Aruban beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">11. Cayman Islands</h3>           
        <img src={cayman} alt="Cayman beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="island-thumbnail">
        <h3 className="island-title">12. Guadeloupe</h3>           
        <img src={guadeloupe} alt="Guadeloupe beach" />
        <p>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          2. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br></br>
          3. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="dice-link">
        <h1>
          {" "}
          <a href="/rollthedice">Now lets roll the dice!>>></a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Islands;
