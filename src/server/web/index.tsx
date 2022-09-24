import * as React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const TEXT = "Nikhil Thorat";

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

    let textIndex = 0;
    let frameIndex = 0;
    const frameRate = 5;

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

    // Glitch animation.
    frameIndex = 0;

    let cont = true;
    let glitchFrameLength = 2;
    while (cont) {
      let finalText = TEXT.split("");

      if (Math.floor(Math.random() * 100) < 5) {
        finalText[Math.floor(Math.random() * TEXT.length)] = randomChar();
        for (let i = 0; i < glitchFrameLength; i++) {
          inputEl.current!.innerText = finalText.join("");
          await nextFrame();
        }
      }
      inputEl.current!.innerText = TEXT;
      await nextFrame();
    }
  });

  return (
    <div className="main-text" ref={inputEl}>
      Nikhil Thorat
    </div>
  );
}

window.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root") as HTMLDivElement);
  root.render(<App />);

  main();
});
