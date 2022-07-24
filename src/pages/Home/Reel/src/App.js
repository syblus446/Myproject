import './App.css';
import VideoCard from './VideoCard';


function App() {
  return (
    <div className="App">
      {/* We are using BEM naming convention divides the user interface into small.. */}
      <div className="app">
        <div className="app_top">
          {/* image at top - logo */}
          <img
            className="app_logo"
            src=""
            alt=""
          />
          <h1>Reels</h1>

          {/* reels text */}
        </div>
        <div className="app_videos">
          {/* Container of app_videos in which reels plays */}

          { /* vidoes here */}
          <VideoCard 
          channel='syblus'
          avatarSrc='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj'
          song='test-song'
          url={process.env.PUBLIC_URL + '/videol.mp4'} height="700"
          likes={930}
          shares={200}
           />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );

}

export default App;
