import React from 'react'
import Particles from "react-particles-js";

const ParticlesBg = () => {
    return (
        <Particles className="background" params={{
            "particles": {
                "number": {
                  "value": 50,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "opacity": {
                  "value": 0.2,
                  "random": false
                },
                "size": {
                  "value": 2,
                  "random": true
                },
                "line_linked": {
                  "enable": true,
                  "distance": 200,
                  "opacity": 0.1,
                  "width": 2
                },
                "move": {
                  "enable": true,
                  "speed": 1
                }
              },
              "interactivity": {
                "events": {
                    "resize": true
                }
              },
              "retina_detect": true
        }} />
    )
}

export default ParticlesBg;