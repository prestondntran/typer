import Image from 'next/image';
import styles from '../styles/Home.module.css';
import monkey from '../assets/monkeytyping.jpeg';


function Home() {
  return (
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h2>Welcome to SpeedTyper!</h2>
          <p>Click the <b>Play Game</b> button at the top to start a game. 
              Go to <b>History</b> to view past games. 
          </p>
      </div>
      <div className={styles.image}><Image src={monkey} width={300} height={300} alt="monkey"/>
      </div>
    </div>
  );
}

export default Home;
