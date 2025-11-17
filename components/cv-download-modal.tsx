"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/lang-switch-context";

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLanguage: (lang: "en" | "fr") => void;
}

export default function CVDownloadModal({
  isOpen,
  onClose,
  onSelectLanguage,
}: CVDownloadModalProps) {
  const { language } = useLanguage();

  const handleLanguageSelect = (lang: "en" | "fr") => {
    onSelectLanguage(lang);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10"
            >
              {/* Title */}
              <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                {language === "fr"
                  ? "Choisir la langue du CV"
                  : "Choose CV Language"}
              </h2>

              {/* Language Buttons */}
              <div className="mb-4 flex flex-col gap-3">
                <button
                  onClick={() => handleLanguageSelect("en")}
                  className="group flex h-14 items-center justify-between rounded-xl border-2 border-gray-200 bg-white px-6 text-left transition-all hover:border-indigo-500 hover:bg-indigo-50 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-700 dark:hover:border-indigo-400 dark:hover:bg-indigo-900/20"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      English
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {language === "fr"
                        ? "Version anglaise"
                        : "English version"}
                    </div>
                  </div>
                  <div className="text-2xl">🇺🇸</div>
                </button>

                <button
                  onClick={() => handleLanguageSelect("fr")}
                  className="group flex h-14 items-center justify-between rounded-xl border-2 border-gray-200 bg-white px-6 text-left transition-all hover:border-indigo-500 hover:bg-indigo-50 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-700 dark:hover:border-indigo-400 dark:hover:bg-indigo-900/20"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Français
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {language === "fr"
                        ? "Version française"
                        : "French version"}
                    </div>
                  </div>
                  <div className="text-2xl">🇫🇷</div>
                </button>
              </div>

              {/* Cancel Button */}
              <button
                onClick={onClose}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-6 py-3 text-center font-medium text-gray-700 transition-all hover:bg-gray-100 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                {language === "fr" ? "Annuler" : "Cancel"}
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
