import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

const getTopPartsHeight = (penTop) => penTop.current.clientHeight + 22;

function App() {
  // HEIGHT OF FIRST 2 PEN COMPONENTS
  let penTop = useRef(null);

  useEffect(() => {
    gsap.set('.part3', {
      y: () => {
        return -getTopPartsHeight(penTop);
      },
      scrollTrigger: {
        id: 'pen-body',
        trigger: '.part3',
        start: 'top bottom-=270px',
        end: `+=${getTopPartsHeight(penTop)}`,
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="App">
      <div id="intro">
        <div class="content">
          <h1>Pen Animation</h1>
          <p>
            Learn how to reveal parts of a product or uncover your story step by
            step.
          </p>
          <p>
            <img src={require('./img/img_pen-landscape.png')} alt="" />
          </p>
        </div>
      </div>

      <div id="main" class="main-container">
        <section class="section-static bcg-white">
          <div class="wrapper">
            <div class="copy">
              <h2>Static Section</h2>

              <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula.
              </p>
            </div>
          </div>
        </section>

        <section id="reveal-effect" class="section-static bcg-blue">
          <div class="wrapper">
            <div class="copy">
              <h2>Reveal Effect</h2>

              <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula.
              </p>
            </div>

            <div class="parts">
              <div ref={penTop}>
                <div class="part part1">
                  <h3>Heading 1</h3>
                  <div class="image"></div>
                  <p>
                    Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                    Nullam in dui mauris.
                  </p>
                </div>

                <div class="part part2">
                  ``
                  <h3>Heading 2</h3>
                  <div class="image"></div>
                  <p>
                    Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                    Nullam in dui mauris.
                  </p>
                </div>
              </div>
              <div class="part part3">
                <h3>Heading 3</h3>
                <div class="image"></div>
                <p>
                  Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                  Nullam in dui mauris.
                </p>
              </div>
              <div class="part part4">
                <h3>Heading 4</h3>
                <div class="image"></div>
                <p>
                  Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                  Nullam in dui mauris.
                </p>
              </div>
              <div class="part part5">
                <h3>Heading 5</h3>
                <div class="image"></div>
                <p>
                  Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                  Nullam in dui mauris.
                </p>
              </div>
              <div class="part part6">
                <h3>Heading 6</h3>
                <div class="image"></div>
                <p>
                  Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                  Nullam in dui mauris.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section-static bcg-white">
          <div class="wrapper">
            <div class="copy">
              <h2>Static Section</h2>

              <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div class="footer-container">
        <footer class="wrapper">
          <h3>
            2020 &copy;
            <a href="https://ihatetomatoes.net" target="_blank">
              Ihatetomatoes.net
            </a>
            |
            <a href="https://twitter.com/ihatetomatoes" target="_blank">
              @ihatetomatoes
            </a>
            | Animate responsibly!
          </h3>
        </footer>
      </div>
    </div>
  );
}

export default App;
