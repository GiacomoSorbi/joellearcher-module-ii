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
import dice from "./images/dice_5.png";
import social from "./images/wtg-img-sprite.png";

const Islands = _props => {
  return (
    <div className="main-content">
      <h2>Top 3 Reasons You Should Go To Each Of These 12 Caribbean Islands</h2>

      <div className="island-section">
        <h1 className="island-number">1.</h1>    
        <h3 className="island-title">Jamaica</h3>    
        <img
          className="island-img-1"
          src={jamaica}
          alt="Jamaican beach with palm trees in foreground"
        />
        <div className="island-text">
          <p>
            1. <strong>Bob Marley Museum </strong>Stop off in Kingston to vist
            the museum dedicated to the reggae music legend.
          </p>
          <p>
            2. <strong>Doctor's Cave Bathing Club</strong> This is one of the
            most famous beaches in Montego Bay, known for its crystal clear
            waters. industry.
          </p>
          <p>
            3. <strong>Blue Mountains</strong> Take a long trek in these
            beautiful mountains with lush vegetation in Portmore.
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">2.</h1>    
        <h3 className="island-title">Antigua</h3>
        <img
          className="island-img-2"
          src={antigua}
          alt="Antiguan beach-house on the water"
        />
        <div className="island-text">
          <p>
            1. <strong>Shirley Heights</strong> Head out just before sunset to
            get an amazing view of the English Harbour.
          </p>

          <p>
            2. <strong>Dickenson Bay</strong> If sandy white beaches and seafood
            restaurants are your thing, this is the place to be.
          </p>

          <p>
            3. <strong>Nelson's Dockyard</strong> Come and visit the marina in
            and tell everyone back home you have visited a UNESCO World Heritage
            site!
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">3.</h1>    
        <h3 className="island-title">Barbados</h3>     
        <img
          className="island-img-1"
          src={barbados}
          alt="Barbadian beach-house by the water"
        />
        <div className="island-text">
          <p>
            1. <strong>Carlisle Bay</strong> Carlisle Bay is a small natural
            harbour with ideal water for scuba-diving with friends.
          </p>

          <p>
            2. <strong>Hunte's Gardens</strong> Created in the 1950s by
            horticulturist Anthony Hunte, this is a beautiful escape for an
            afternoon in a botanical garden.
          </p>

          <p>
            3. <strong>Harrison's Cave</strong>
            The caves are naturally formed by water erosion through the
            limestone rock and can be accessed by tourists using a tramway.
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">4.</h1>    
        <h3 className="island-title">Saint Lucia</h3>           
        <img
          className="island-img-2"
          src={saintlucia}
          alt="St Lucia. Boat crossing the sea."
        />
        <div className="island-text">
          <p>
            1. <strong>Pigeon Island</strong> Composed of two peaks the island
            is a historic site with numerous forts, perfect for holiday history
            lesson!
          </p>

          <p>
            2. <strong>Rodney Bay</strong> This is probably the most popular
            beach on the island and is know for its cleanliness and great food.
          </p>

          <p>
            3. <strong>Gros Piton</strong> Antigua isn't the only island with a
            World Heritage site, these two mountainous volcanic plugs are a
            sight to see!
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">5.</h1>    
        <h3 className="island-title">Dominican Republic</h3>    
        <img
          className="island-img-1"
          src={domrepub}
          alt="Overhead view of dominican republic island. Bright coloured sea and beach"
        />
        <div className="island-text">
          <p>
            1. <strong>Ocean World Adventure Park</strong> If you like water
            parks, this is the place to be. The end.
          </p>

          <p>
            2. <strong>Bacardi Island</strong> This place got it's name due to
            its location use in advertisements for the white rum spirit
            manufacturer Bacardi. Say no more.
          </p>

          <p>
            3. <strong>27 Waterfalls</strong> This is a large complex of 27
            waterfalls with great hikes and fantastic swimming.
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">6.</h1>    
        <h3 className="island-title">Martinique</h3>      
        <img
          className="island-img-2"
          src={martinique}
          alt="Martinique. Cliff view of the island."
        />
        <div className="island-text">
          <p>
            1. <strong>Plage des Salines</strong> If you are into remote
            beaches, try this place out.
          </p>

          <p>
            2. <strong>Mount Pelée</strong> If you want to get a look at an
            active look at a live volcano, make sure you don't miss this one!
          </p>

          <p>
            3. <strong>Habitation Clément</strong> Or on the other hand, if
            drinking high quality rum is your thing, forget the volcano and come
            here!
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">7.</h1>    
        <h3 className="island-title">Saint Kitts and Nevis</h3>           
        <img
          className="island-img-1"
          src={saintkitts}
          alt="Bat view of Saint Kitts and Nevis island."
        />
        <div className="island-text">
          <p>
            1. <strong>Adonis Tour & Beach from Porte Zante</strong> Try this if
            you'd like a good tour of this glorious island.
          </p>

          <p>
            2. <strong>Frigate Bay</strong> This is a gorgeous developed bay and
            a great place to go if you want to get to know the locals.
          </p>

          <p>
            3. <strong>St. Kitts Scenic Railway</strong> This scenic route runs
            along the coastline of the island, nice for a Sunday afternoon
            jaunt.
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">8.</h1>    
        <h3 className="island-title">Trinidad and Tobago</h3>          
        <img
          className="island-img-2"
          src={trinidad}
          alt="Trinidadian forest view."
        />
        <div className="island-text">
          <p>
            1. <strong>Maracas Beach</strong> Relatively close to the capital
            city, this a bay with sandy beach is known for it's beautiful
            sunsets.
          </p>
          <p>
            2. <strong>La Brea Pitch Lake</strong> The Pitch Lake is the largest
            natural deposit of asphalt in the world, estimated to contain 10
            million tons!
          </p>
          <p>
            3. <strong>Caroni Bird Sanctuary</strong> If you like birdwatching,
            take a boat tour along this gorgeous lake.
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">9.</h1>    
        <h3 className="island-title">The Bahamas</h3>           
        <img
          className="island-img-1"
          src={bahamas}
          alt="Man jumping into water in The Bahamas."
        />
        <div className="island-text">
          <p>
            1. <strong>Pig Beach</strong> Like pigs? Like beaches? Like
            beautiful, clear water? Go here.
          </p>
          <p>
            2. <strong>Harbor Island</strong> For a beautifulbeach, without the
            pigs, this is a great option.
          </p>
          <p>
            3. <strong>Atlantis Casino</strong> This ocean-themed resort with
            water rides and river slides will create hours of fun for a group of
            friends.
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">10.</h1>    
        <h3 className="island-title">Aruba</h3>           
        <img
          className="island-img-2"
          src={aruba}
          alt="Overhead view of Aruban beach"
        />
        <div className="island-text">
          <p>
            1. <strong>Eagle Beach</strong> Often rated as one of the best
            eaches in the world, need we say more?
          </p>

          <p>
            2. <strong>Arikok National Park</strong> Known for two unique
            species of snake and two bird species, this is a must visit.
          </p>

          <p>
            3. <strong>California Lighthouse</strong> For wide-reaching views of
            the island, the Lighthouse is a great option for an evening sunset.
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">11.</h1>    
        <h3 className="island-title">Cayman Islands</h3>           
        <img
          className="island-img-1"
          src={cayman}
          alt="Two divers in the sea in the Cayman Islands."
        />
        <div className="island-text">
          <p>
            1. <strong>Cayman Turtle Centre</strong> If you prefer turtles over
            pigs, this is the place to be!
          </p>

          <p>
            2. <strong>Seven Mile Beach</strong>
            Scenic blue water and long walks that feel like they'll never end.
          </p>

          <p>
            3. <strong>Pedro St. James</strong> This is the oldest existing
            building in the Cayman Islands.
          </p>
        </div>
      </div>

      <div className="island-section">
        <h1 className="island-number">12.</h1>    
        <h3 className="island-title">Guadeloupe</h3>            
        <img
          className="island-img-2"
          src={guadeloupe}
          alt="A surfer rides the waves in Guadalopean waters."
        />
        <div className="island-text">
          <p>
            1. <strong>Petite Terre Islands</strong> One of the best places on
            the island for snorkelling.
          </p>
          <p>
            2. <strong>Guadeloupe National Park</strong> You'll find all kinds
            of mammals, birds and reptiles here.
          </p>
          <p>
            3. <strong>La Grande Soufrière</strong> One of the highest mountain
            peaks in the Lesser Antilles, this active volcano is a sight to see!
          </p>
        </div>
      </div>

      <div className="dice-link">
        <h1>
          <a href="/rollthedice">
            Now lets roll the dice!
            <img className="dice-link-image" src={dice} alt="die number five" />
          </a>
        </h1>
      </div>
      <div>
        <footer>
          <img
            className="social-image"
            src={social}
            alt="instagram, facebook, twitter, whatsapp sprite"
          />
          <p className="footer-text">Copyright 2020 by Joelle Archer-D'Mello</p>{" "}
        </footer>
      </div>
    </div>
  );
};

export default Islands;
