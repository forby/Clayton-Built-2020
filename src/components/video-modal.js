import React, { Component } from "react"

class VideoModal extends Component {

    handleClose() {
        // Stop Video
        this.refs.fullVideo.pause();

        // Close Modal
        this.props.closeFn();
    }

    render() {
        if(!this.props.modalActive) {
            return null;
        }
        return (
            <div className="fixed w-full h-full bg-gray-900 bg-opacity-75 z-10">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                    <button className="text-right text-white mb-2 uppercase text-sm font-semibold focus:outline-none" onClick={() => this.handleClose()}>Close Video</button>
                    <video ref="fullVideo" className="w-full focus:outline-none" controls preload="auto" autoPlay>
                        <source src="videos/Details_Matter.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }

}

export default VideoModal