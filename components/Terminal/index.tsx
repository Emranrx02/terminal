/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import TypingEffect from "@/hooks/typing-hooks";
import Image from "next/image";
import { useRef, useState } from "react";

const resp = {
  help: "Available commands: help, chart, twitter, telegram",
  chart: "Opening chart...",
  twitter: "Opening Twitter...",
  telegram: "Opening Telegram...",
};

export default function Terminal() {
  const inputRef = useRef<HTMLInputElement | null>();
  const [inputValue, setInputValue] = useState("");
  const [prevElement, setPrevElement] = useState<string[]>([
    `Welcome to $Tr(A.i)mp  - The Matrix of Donald Trump  Cryptocurrencies! /___/ ( o o ) / V /( _/ ) ^^ ^^`,
  ]);

  const handleSubmit = (event: { key: string }) => {
    if (event?.key == "Enter") {
      const command = inputRef.current?.value.toLocaleLowerCase();
      switch (command) {
        case "help":
          setPrevElement((val) => [...val, `> ${command}`, resp[command]]);
          break;
        case "chart":
          window.open("https://x.com/home", "_blank");

        case "twitter":
          window.open("https://x.com/TrA_Imp", "_blank");
        case "telegram":
          window.open("https://t.me/DonaldTrAimp", "_blank");
          setPrevElement((val) => [...val, `> ${command}`, resp[command]]);
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
    <div className="w-full min-h-screen h-full bg-black   py-10 text-white">
      <div className="max-w-[50rem] relative overflow-hidden border-2 rounded-md  border-white py-5 px-3  mx-auto">
        <div className="w-full terminal border-b border-white pb-5 text-center">
          <Image
            src={"/traimp.png"}
            width={1920}
            height={1080}
            alt="tramp logo"
            className=" w-36 mx-auto"
          />
          <h2 className="uppercase font-bold text-xl">$Donald Tr(A.i)mp</h2>
          <p className="sm:text-base text-sm">
            Dogg6xWSgkF8KbsHkTWD3Et4J9a8VBLZjrASURXGiLe1
          </p>
        </div>
        <div className="container font-bold text-sm min-h-[65vh] max-h-[65vh] overflow-y-auto py-2 px-2  my-3 border border-white">
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
        <div className="">
          <div className=" gap-2 flex    ">
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
          <p className="text-center mt-2">$TR(A.I)MP: 0</p>
        </div>
      </div>
    </div>
  );
}
