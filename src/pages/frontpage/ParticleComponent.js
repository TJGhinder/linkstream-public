import React from 'react'
import Particles from 'react-particles-js'

export default function ParticleComponent() {
    return (
        <Particles
            params={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 350,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 0.6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 30,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 3,
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: 'stretch',
                height: 'stretch',
                zIndex: '0'
            }}

        />
    )
}
