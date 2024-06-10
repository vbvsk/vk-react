import React from 'react';
import './App.css';

const statesData = [
  {
    id: 'KA',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/kn/e/e2/Map_karnataka_flag.JPG',
    altText: 'Karnataka',
    info: 'Karnataka, in southern India, is known for its rich heritage with sites like Hampi, and Bengaluru\'s tech hub. It features diverse landscapes, from the Western Ghats to Arabian Sea beaches, and is India\'s top coffee producer.'
  },
  {
    id: 'KL',
    imgSrc: 'https://cdn.britannica.com/05/168205-050-23F6B599/Flag-Kerala.jpg',
    altText: 'Kerala',
    info: 'Kerala, located in South India, is celebrated for its backwaters, palm-lined beaches, and tea plantations. Known as "God\'s Own Country," it boasts a rich cultural heritage and high literacy rates.'
  },
  {
    id: 'TN',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_Of_Tamil_Nadu.svg/800px-Flag_Of_Tamil_Nadu.svg.png',
    altText: 'Tamil Nadu',
    info: 'Tamil Nadu, in southern India, is renowned for its Dravidian-style temples, classical arts, and the bustling capital Chennai. It\'s a major hub for the automobile industry and cultural heritage.'
  },
  {
    id: 'MH',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag_of_Maharashtra.svg/1200px-Flag_of_Maharashtra.svg.png',
    altText: 'Maharashtra',
    info: 'Maharashtra, located in western India, is home to Mumbai, India\'s financial capital. It\'s known for Bollywood, historical sites like Ajanta and Ellora caves, and diverse landscapes from beaches to mountains.'
  },
  {
    id: 'RJ',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Rajasthan.svg/800px-Flag_of_Rajasthan.svg.png',
    altText: 'Rajasthan',
    info: 'Rajasthan, in northern India, is famous for its royal heritage, palaces, and vibrant culture. Key attractions include Jaipur\'s Pink City, Udaipur\'s lakes, and Jaisalmer\'s Thar Desert.'
  },
  {
    id: 'PB',
    imgSrc: 'https://cdn.britannica.com/52/2752-004-39967A6F/Flag-Punjab-India.jpg',
    altText: 'Punjab',
    info: 'Punjab, located in northern India, is known as the "Land of Five Rivers" and is the heart of India\'s Sikh community. It\'s celebrated for its rich agricultural land, vibrant festivals, and historical sites like the Golden Temple in Amritsar.'
  },
  {
    id: 'GJ',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_Gujarat.png/1200px-Flag_of_Gujarat.png',
    altText: 'Gujarat',
    info: 'Gujarat, in western India, is known for its diverse culture, vibrant festivals, and significant industrial and economic development. It\'s the birthplace of Mahatma Gandhi and home to the Asiatic Lion in Gir Forest.'
  },
  {
    id: 'AP',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_Andhra_Pradesh.svg/1200px-Flag_of_Andhra_Pradesh.svg.png',
    altText: 'Andhra Pradesh',
    info: 'Andhra Pradesh, situated in southeastern India, is renowned for its rich history, vibrant culture, and coastal beauty. It\'s known for Tirupati Temple, historical forts, and spicy cuisine.'
  },
  {
    id: 'UP',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Uttar_Pradesh.svg/1200px-Flag_of_Uttar_Pradesh.svg.png',
    altText: 'Uttar Pradesh',
    info: 'Uttar Pradesh, in northern India, is India\'s most populous state, known for its historical and religious significance. Key attractions include the Taj Mahal, Varanasi, and Lucknow\'s rich heritage.'
  }
];

const State = ({ imgSrc, altText, info }) => (
  <div className="state">
    <img src={imgSrc} alt={altText} />
    <div className="state-info">{info}</div>
  </div>
);

function App() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="row">
          {statesData.map((state) => (
            <State key={state.id} imgSrc={state.imgSrc} altText={state.altText} info={state.info} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

