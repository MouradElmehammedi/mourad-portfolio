"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/lang-switch-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const {  language } = useLanguage();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {language === "fr" ? "Je suis actuellement disponible pour des projets freelance. N'hésitez pas à me contacter par email à" : "I am currently available for freelance projects. Don't hesitate to contact me at"}{" "}
        <a className="underline" href="mailto:mouradelmehammedi@gmail.com">
          mouradelmehammedi@gmail.com
        </a>{" "}
        {language === "fr" ? "ou en utilisant ce formulaire." : "or using this form."}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(language === "fr" ? "Email envoyé avec succès!" : "Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={language === "fr" ? "Votre email" : "Your email"}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={language === "fr" ? "Votre message" : "Your message"}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
