import { ControlBar, ForwardControl, Player } from "video-react";


export const Video = () => {
    return (
        <Player
            autoPlay
            poster="/assets/poster.png"
            src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
        >
            <ControlBar autoHide={false}>
                <ForwardControl seconds={5} order={3.1} />
                <ForwardControl seconds={10} order={3.2} />
                <ForwardControl seconds={30} order={3.3} />
            </ControlBar>
        </Player>
    );
};
export default Video