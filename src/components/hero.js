import React, { Component } from "react";
import Button from "../components/button"

class Hero extends Component {

    // hande button click
    handlePlayPause() {
        // update state in parent
        this.props.playPauseFn();

        // Handle video play/pause based on state
        if (this.props.playing) {
            this.refs.loopingVideo.pause();
        } else {
            this.refs.loopingVideo.play();
        }
    }

    // render to DOM
    render() {
        return (
            <div className="relative h-hero-small md:h-hero-large">
                <div className="bg-gray-800 absolute w-full h-full top-0 left-0 overflow-hidden">
                    <video ref="loopingVideo" className="w-full h-full object-cover" loop muted autoPlay preload="auto" playsInline>
                        <source src="videos/Details_Matter_Header.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative h-full flex items-end">
                    <div className="container max-w-screen-lg px-4 mx-auto text-center text-white pb-8">
                        <h1 className="text-5xl md:text-6xl leading-none tracking-tight font-bold mb-6">Quality, Durability, Innovation</h1>
                        <p className="font-bold">When you buy a home with the Clayton Built® stamp on it, you’re getting a home that’s just as important to us as it is to you. You can be confident your home is built on a foundation of strength, integrity and accountability, because for us, “good enough” just doesn’t cut it.</p>
                        <Button href="https://www.claytonhomes.com/find-a-home/" className="mt-6" text="Shop Clayton Built® Homes" />
                        <div className="flex justify-center mt-6">
                            <button className="cursor-pointer focus:outline-none mr-4" onClick={(e) => this.handlePlayPause()}>
                                <img src={`images/${this.props.playing ? "Stop" : "Play"} Button.svg`} alt="" />
                            </button>
                            <button className="cursor-pointer focus:outline-none" onClick={(e) => this.props.openFn()}>
                                <img src="images/Expand Button.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;