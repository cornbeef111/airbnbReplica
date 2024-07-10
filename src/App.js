import './App.css';
import Nav from './Nav.js';
import Hero from './Hero.js';
import Card from './Card.js';
import Test from './Test.js';
// import Navbar from './Navbar.js'
// import Travel from './Travelcard.js';
// import Journaldata from './Journaldata.js';


function App() {
  let cards = Test.map((detail) =>{
    return (
        <Card 
          key={detail.id}
          detail={detail}
        />
    )
  })

  return (
    <div>
      <Nav />
      <Hero />
      <div className='app--card'>
        {cards}
      </div>
    </div>
  );
}

export default App;


// let Card = Journaldata.map((jdata) =>{
//   return(
//     <Travel 
//        key={jdata.id}
//        name={jdata.name}
//        image={jdata.image}
//        location={jdata.location}
//        date={jdata.date}
//        text={jdata.text}
//     />
//   )
// })


/* <div>
<Navbar />
{Card}
</div> */