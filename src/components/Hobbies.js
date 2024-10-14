import React from 'react';
import Card from './Card'; 
import './Hobbies.css'; 
import Bali from '../image/bali.jpeg';
import CameronHighlands from '../image/cameronhighland.jpeg';
import Jakarta from '../image/jakarta.jpeg';
import Penang from '../image/penang.jpeg';
import Maxwell from '../image/maxwell.jpeg';
import Gym from '../image/gym.jpeg';

const Hobbies = () => {
  return (
    <div className="hobbies-container">

      <Card 
        title="Traveling"
        content={
          <>
            I love traveling because it allows me to explore new cultures, meet different people, and experience the world from various perspectives. Whether it's discovering hidden gems in a foreign city or immersing myself in nature, traveling fuels my curiosity and keeps me inspired. It broadens my horizons and challenges me to step out of my comfort zone.
            <img src={Bali} alt="Traveling" className="hobby-image" />
            <img src={CameronHighlands} alt="Traveling" className="hobby-image" />
            <img src={Jakarta} alt="Traveling" className="hobby-image" />
            <img src={Penang} alt="Traveling" className="hobby-image" />
          </>
        }
      />

      <Card 
        title="Theatre"
        content={
          <>
            Theatre has always been a passion of mine, as it combines creativity, storytelling, and performance. I enjoy attending plays, musicals, and other live performances, as they offer a unique and immersive form of entertainment. Theatre not only inspires my creativity but also teaches me the importance of collaboration and dedication in bringing stories to life.
            <br></br>
            The link to a play that i was involved <a href='https://youtu.be/BfK0Ti16-ig?si=umWicwRvuHZ_-OD4'>Alexandria Galleria</a>
            <img src={Maxwell} alt="Theatre" className="theatre-image"/>
          </>
        }
      />
      
      <Card 
        title="Gym"
        content={
          <>
            Staying active and going to the gym is a key part of my daily routine. It helps me stay physically fit and mentally focused. Whether lifting weights or engaging in high-intensity workouts, going to the gym pushes me to be disciplined and committed to self-improvement. It’s not just about physical fitness but also about building resilience and maintaining a balanced lifestyle.
            <img src={Gym} alt="Gym" className="gym-image"/>
          </>
        }
      />
    </div>
  );
};

export default Hobbies;