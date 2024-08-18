
import './App.css'
import Navbar from './components/navbar'
import Cards from './components/cards'
import Questioncontainer from './components/questions-container'
import Footer from './components/footer'

import tv from '../src/assets/netflix-tv.png'






function App() {

  const netflixCardsInformation = [
    {
      title: 'Enjoy on your TV',
      description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      imagesrc:'../src/assets/netflix-tv.png',
      reverse: false
    },
    {
      title: 'Download your shows to watch offline',
      description: 'Save your favourites easily and always have something to watch..',
      imagesrc:'../src/assets/netflix-mobile.jpg' ,
      reverse: true
    }
    ,
    {
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      imagesrc: '../src/assets/netflix-monitor.png',
      reverse: false
    },
    {
      title: 'Create profiles for kids',
      description: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
      imagesrc: '../src/assets/netflix-children.png',
      reverse: true
    }
  ];

  return (
    <div>

      <Navbar></Navbar>
      {
        netflixCardsInformation.map((card) => {
          return (
            <Cards title={card.title} description={card.description} imagesrc={card.imagesrc} reverse={card.reverse}> </Cards>
          )
        })
      }
      <div>

      </div>
      <div>
        <Questioncontainer > </Questioncontainer>
      </div>

      <div>
        <Footer></Footer>
       
      </div>
    </div>
  )
}

export default App
