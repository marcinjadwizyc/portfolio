import React from "react";
import Particles from "react-particles-js";

const ParticlesBg = () => {
	return (
		<Particles
			className="background"
			params={{
				particles: {
					number: {
						value: 40
					},
					color: {
						value: "#ffffff"
					},
					opacity: {
						value: 0.2
					},
					size: {
						value: 2
					},
					line_linked: {
						enable: true,
						distance: 150,
						color: "#ffffff",
						opacity: 0.1,
						width: 1
					},
					move: {
						enable: true,
						speed: 2,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "out",
						bounce: false
					}
				},
				interactivity: {
					detect_on: "canvas",
					events: {
						resize: true
					}
				},
				retina_detect: true
			}}
		/>
	);
};

export default ParticlesBg;
