import { Header } from "../../features/theme/Header";
import styles from "./Home.module.css";
import { useAppSelector } from "../../app/hooks";
import { Feed } from "../../features";
import { Link, Route } from "react-router-dom";
import './Reel/src/App';



export function Home(): JSX.Element {
  const { currentUserImage } = useAppSelector((state: { currentUser: any; }) => state.currentUser);


  return (
    <div className={styles.home}>
      <Header page="Home" />
      <div className={styles.tweetField}>
        <div className={styles.userAvatar}>
          <img src={currentUserImage} alt="" />
          <h1>Mowe</h1>
        </div>
        <Route>
        <Link to="./Reel/src/App">
        <div className={styles.userAvatar}>
        <img src={currentUserImage} alt=""/>
          <h1>Haewae</h1>
        </div>
        </Link>
        </Route>
        <div className={styles.userAvatar}>
          <img src={currentUserImage} alt="" />
          <h1>‎ ‎ ‎  Lveewe</h1>
        </div>
        <div className={styles.userAvatar}>
       <img src={currentUserImage} alt=""/>
          <h1>gy</h1>
        </div>
        <div>

          <div>
          </div>
        </div>
      </div>
      <Feed />
    </div>
  );

}

