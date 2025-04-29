import ModalVideo from "react-modal-video"; 

type Props = {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoId?: string;
};

const VideoPopup = ({isVideoOpen, setIsVideoOpen, videoId = "bgMEvrd2E"}: Props ) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        // autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;

