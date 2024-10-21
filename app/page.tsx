/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import TypingEffect from "@/hooks/typing-hooks";
import { useRef, useState } from "react";

const resp = {
  help: "Available commands: help, about, bark, play, tweet, clear, ca, dextools, twitter, telegram",
  about:
    "$DOGAI: The AI-powered memecoin that's pawsitively revolutionary! Our mission is to make cryptocurrency fun, accessible, and full of AI-enhanced belly rubs.",
  bark: `Woof woof! You've unlocked a secret message: "Every dog has its day, but with $DOGAI, every day is an AI-powered dog day!"`,
  tweet: "Every bark is an investment in my future $DOGAI gains.",
  ca: "$DOGAI CA: Dogg6xWSgkF8KbsHkTWD3Et4J9a8VBLZjrASURXGiLe1",
  dextools: "Opening dextools...",
  twitter: "Opening Twitter...",
  telegram: "Opening Telegram...",
};

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>();
  const [inputValue, setInputValue] = useState("");
  const [prevElement, setPrevElement] = useState<string[]>([
    `Welcome to $DOGAI - The Matrix of AI Cryptocurrencies! 
/\___/\ ( o o ) / V \ /( \_/ )\ ^^ ^^ 
I'm not just a good boy, I'm an AI-powered good boy!`,
  ]);

  const handleSubmit = (event: { key: string }) => {
    if (event?.key == "Enter") {
      const command = inputRef.current?.value.toLocaleLowerCase();
      switch (command) {
        case "help":
        case "about":
        case "bark":
        case "ca":
          setPrevElement((val) => [...val, `> ${command}`, resp[command]]);
          break;
        case "dextools":
          window.open(
            "https://www.dextools.io/app/en/token/dogai?t=1729546688295",
            "_blank"
          );
        case "twitter":
          window.open("https://x.com/home", "_blank");
        case "telegram":
          window.open("https://telegram.com", "_blank");
          setPrevElement((val) => [...val, `> ${command}`, resp[command]]);
          break;
        case "clear":
          setPrevElement([]);
          break;
        default:
          setPrevElement((val) => [
            ...val,
            `> ${command}`,
            "Command not recognized. Type 'help' for available commands.",
          ]);
      }
      setInputValue("");
    }
  };

  return (
    <div className="w-full h-screen bg-black   py-10 text-[#00FF00]">
      <div className="max-w-[50rem] border-2 rounded-md  border-[#00FF00] py-5 px-3  mx-auto">
        <div className="w-full border-b border-[#00FF00] py-5 text-center">
          <h2 className="uppercase text-xl">$DOGAI Terminal</h2>
          <p>Dogg6xWSgkF8KbsHkTWD3Et4J9a8VBLZjrASURXGiLe1</p>
        </div>
        <div className="container font-medium min-h-[70vh] max-h-[70vh] overflow-y-auto py-2 px-2  my-3 border border-[#00FF00]">
          {prevElement.map(
            (val, index) =>
              index < prevElement.length - 1 && <p key={index}>{val}</p>
          )}
          {prevElement.length > 0 && (
            <TypingEffect
              key={prevElement.length}
              text={prevElement[prevElement.length - 1]}
              speed={40}
            />
          )}
        </div>
        <div className="flex gap-2">
          <p> {"> "} </p>
          <input
            //@ts-expect-error
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleSubmit}
            className="w-full  bg-black outline-none"
            placeholder="Enter command (type 'help' for options)"
          />
        </div>
      </div>
    </div>
  );
}
