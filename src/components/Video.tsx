import ReactPlayer from "react-player";

// 나중에 파일로 가져오는 형식으로 바꿀것!
export default function VideoComponent() {
  return (
    <div className="relative">
      <ReactPlayer
        url="/assets/video.mp4"
        width="100%"
        height="100%"
        controls={false}
        playing
        muted
        loop
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30  flex items-center justify-center"></div>
    </div>
  );
}
