"use client";

import { useLanguage } from "@/context/lang-switch-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function LangSwitch() {
  const { language, switchLanguage } = useLanguage();

  return (
    <button
      className="fixed bottom-16 right-5  bg-white w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => switchLanguage("fr" === language ? "en" : "fr")}
    >
      <span className="text-[0.8rem] pointer-events-none">
        {language.toUpperCase()}
      </span>
    </button>
  );
}
