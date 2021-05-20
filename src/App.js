import "./App.css";
import VideoPlayer from "./VideoPlayer";

const videoJsOptions = {
  autoplay: true,
  controls: true,
  height: 600,
  width: 1200,
  sources: [
    {
      src: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
      type: "application/dash+xml",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <VideoPlayer {...videoJsOptions} />
    </div>
  );
}

export default App;
