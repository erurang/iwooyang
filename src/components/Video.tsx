import ReactPlayer from "react-player";

// 나중에 파일로 가져오는 형식으로 바꿀것!
export default function VideoComponent() {
  return (
    <ReactPlayer
      url="https://youtu.be/0Unm7pDnEQI"
      width="100%"
      controls
      playing
      muted
      loop
    />
  );
}
