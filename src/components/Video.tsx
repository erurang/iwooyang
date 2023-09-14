import ReactPlayer from "react-player";

// 나중에 파일로 가져오는 형식으로 바꿀것!
export default function VideoComponent() {
  return (
    <ReactPlayer
      url="/assets/video.mp4"
      width="100%"
      height="100%"
      controls
      playing
      muted
      loop
    />
  );
}
