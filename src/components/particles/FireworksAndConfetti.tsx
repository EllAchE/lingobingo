import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

export default function FireworksAndConfetti(props: any) {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <>
      <Particles
        id="sideConfetti"
        init={particlesInit}
        options={{
          emitters: [
            {
              position: {
                x: 0,
                y: 30,
              },
              rate: {
                quantity: 5,
                delay: 0.15,
              },
              particles: {
                move: {
                  direction: 'top-right',
                  outModes: {
                    top: 'none',
                    left: 'none',
                    default: 'destroy',
                  },
                },
              },
            },
            {
              position: {
                x: 100,
                y: 30,
              },
              rate: {
                quantity: 5,
                delay: 0.15,
              },
              particles: {
                move: {
                  direction: 'top-left',
                  outModes: {
                    top: 'none',
                    right: 'none',
                    default: 'destroy',
                  },
                },
              },
            },
          ],
          particles: {
            color: {
              value: '#ffd700',
            },
            move: {
              decay: 0.05,
              direction: 'top',
              enable: true,
              gravity: {
                enable: true,
              },
              outModes: {
                top: 'none',
                default: 'destroy',
              },
              speed: {
                min: 10,
                max: 50,
              },
            },
            number: {
              value: 0,
            },
            opacity: {
              value: 1,
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: 'random',
              animation: {
                enable: true,
                speed: 30,
              },
            },
            tilt: {
              direction: 'random',
              enable: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 30,
              },
            },
            size: {
              value: {
                min: 0,
                max: 2,
              },
              animation: {
                enable: true,
                startValue: 'min',
                count: 1,
                speed: 16,
                sync: true,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 25,
              },
              enable: true,
              speed: {
                min: 5,
                max: 15,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -7,
                max: 7,
              },
            },
            shape: {
              type: 'triangle',
            },
          },
        }}
      />
      <Particles
        id="fireworks"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          background: {
            color: '#000',
          },
          fpsLimit: 60,
          emitters: {
            direction: 'top',
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.1,
            },
            rate: {
              delay: 0.5,
              quantity: 1,
            },
            size: {
              width: 100,
              height: 0,
            },
            position: {
              y: 100,
              x: 50,
            },
          },
          particles: {
            number: {
              value: 0,
            },
            destroy: {
              mode: 'split',
              split: {
                count: 1,
                factor: {
                  value: 0.333333,
                },
                rate: {
                  value: 100,
                },
                particles: {
                  stroke: {
                    width: 0,
                  },
                  color: {
                    value: [
                      '#ff595e',
                      '#ffca3a',
                      '#8ac926',
                      '#1982c4',
                      '#6a4c93',
                    ],
                  },
                  number: {
                    value: 0,
                  },
                  collisions: {
                    enable: false,
                  },
                  opacity: {
                    value: {
                      min: 0.1,
                      max: 1,
                    },
                    animation: {
                      enable: true,
                      speed: 0.7,
                      sync: false,
                      startValue: 'max',
                      destroy: 'min',
                    },
                  },
                  shape: {
                    type: 'circle',
                  },
                  size: {
                    value: 2,
                    animation: {
                      enable: false,
                    },
                  },
                  life: {
                    count: 1,
                    duration: {
                      value: {
                        min: 1,
                        max: 2,
                      },
                    },
                  },
                  move: {
                    enable: true,
                    gravity: {
                      enable: false,
                    },
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    outMode: 'destroy',
                  },
                },
              },
            },
            life: {
              count: 1,
            },
            shape: {
              type: 'line',
            },
            size: {
              value: {
                min: 0.1,
                max: 50,
              },
              animation: {
                enable: true,
                sync: true,
                speed: 90,
                startValue: 'max',
                destroy: 'min',
              },
            },
            stroke: {
              color: {
                value: '#ffffff',
              },
              width: 1,
            },
            rotate: {
              path: true,
            },
            move: {
              enable: true,
              gravity: {
                acceleration: 15,
                enable: true,
                inverse: true,
                maxSpeed: 100,
              },
              speed: {
                min: 10,
                max: 20,
              },
              outModes: {
                default: 'destroy',
                top: 'none',
              },
              trail: {
                fillColor: '#000',
                enable: true,
                length: 10,
              },
            },
          },
        }}
      />
    </>
  );
}
