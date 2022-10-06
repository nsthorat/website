import * as React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const TEXT = "NIKHIL THORAT";

async function main() {
  console.log("hello world");
}

async function nextFrame() {
  return new Promise<void>((resolve, _) => {
    requestAnimationFrame(() => resolve());
  });
}
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()";

function randomChar() {
  return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}
function App(): JSX.Element {
  const inputEl = React.useRef<HTMLDivElement>(null);

  requestAnimationFrame(async () => {
    //let cont = true;
    if (randomChar() != null) {
      //return;
    }

    let textIndex = 0;
    let frameIndex = 0;
    const frameRate = 3;

    // First animation coming in.
    while (textIndex < TEXT.length) {
      if (frameIndex == 0) {
        textIndex = textIndex + 1; // % TEXT.length;
      }
      let finalText = TEXT.split("");
      for (let i = textIndex; i < TEXT.length; i++) {
        finalText[i] = randomChar();
      }
      frameIndex = (frameIndex + 1) % frameRate;

      if (inputEl.current != null) {
        inputEl.current.innerText = finalText.join("");
      }
      await nextFrame();
    }
    console.log("tliching");

    // // Glitch animation.
    // frameIndex = 0;

    // let cont = true;
    // let glitchFrameLength = 2;
    // while (cont) {
    //   let finalText = TEXT.split("");

    //   if (Math.floor(Math.random() * 100) < 5) {
    //     finalText[Math.floor(Math.random() * TEXT.length)] = randomChar();
    //     for (let i = 0; i < glitchFrameLength; i++) {
    //       inputEl.current!.innerText = finalText.join("");
    //       await nextFrame();
    //     }
    //   }
    //   inputEl.current!.innerText = TEXT;
    //   await nextFrame();
    // }
  });

  return (
    <div className="main-wrapper">
      <header>
        <div className="header-container">
          <div className="header">
            <div className="name-text-container">
              <div className="name-text" ref={inputEl}>
                NIKHIL THORAT
              </div>
            </div>
          </div>
          <div className="header-nav">
            <nav>
              <ul>
                <li className="selected-nav">
                  <a href="www.google.com">
                    <span className="nav-text">bio</span>
                  </a>
                </li>
                <li>projects</li>
                <li>music</li>
                <li>experiments</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="subheader-container">
          <div className="subheader">software, music, art</div>
        </div>
      </header>
      <div className="header-separator"></div>
      <div className="main-content">
        <div className="main-content-row">
          <div className="main-content-row-title">about</div>
          <div className="main-content-row-body">
            <p>I am a software engineer, musician, and playful tinkerer.</p>
            <br />
            <p>
              I've been working at Google for 10 years and co-lead the{" "}
              <a href="https://knowyourdata.withgoogle.com/">Know Your Data</a> project under the{" "}
              <a href="https://ai.google/responsibilities/">Responsible AI</a> org.
            </p>
            <br />
            <p>
              I also co-created <a href="http://js.tensorflow.org">TensorFlow.js</a>, a library for
              machine learning in JavaScript.
            </p>
          </div>
        </div>
        <div className="main-content-row">
          <div className="main-content-row-title">selected projects</div>
          <div className="main-content-row-body">
            <p>
              <img src="https://smilkov.com/static/images/tfjs.png"></img>
            </p>
            <p>
              <video className="home-card-video" loop={true} autoPlay={true} muted={true}>
                <source
                  src="https://knowyourdata.withgoogle.com//assets/videos/filter-beaver.mp4"
                  type="video/mp4"
                />
              </video>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

window.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root") as HTMLDivElement);
  root.render(<App />);

  main();
});
