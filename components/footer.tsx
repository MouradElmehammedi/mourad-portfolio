"use client";

import { useLanguage } from "@/context/lang-switch-context";
import React from "react";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear() + 1} Mourad El mehammedi. {language === "fr" ? "Tous droits réservés." : "All rights reserved."}
      </small>
    </footer>
  );
}
