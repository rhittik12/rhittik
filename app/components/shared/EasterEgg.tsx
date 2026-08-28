"use client";

import Image from "next/image";
import { useState } from "react";
import funImage from "@/public/yeah-right.png";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";

/**
 * An interactive easter egg component that displays a checkbox and reveals a fun image when clicked.
 *
 * @param props - Component props
 * @param props.isMet - Whether the condition has been met (changes checkbox appearance)
 * @returns A button with a checkbox icon that triggers a temporary image animation
 */
export default function EasterEgg({ isMet }: { isMet: boolean }) {
  const [image, setImage] = useState(false);

  /**
   * Triggers the display of the easter egg image for 3 seconds.
   */
  const toggleImage = () => {
    const interval = setInterval(() => {
      setImage(true);
    });

    setTimeout(() => {
      setImage(false);
      clearInterval(interval);
    }, 3000);
  };

  return (
    <>
      <button onClick={toggleImage}>
        {isMet !== true ? (
          <BiCheckbox
            className="text-3xl dark:text-zinc-300 text-zinc-600"
            aria-hidden="true"
          />
        ) : (
          <BiSolidCheckboxChecked
            className="text-3xl dark:text-primary-color text-secondary-color"
            aria-hidden="true"
          />
        )}
      </button>

      <Image
        className={`fixed z-30 bottom-1/2 duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          image ? "left-0" : "-left-80"
        }`}
        src={funImage}
        width={250}
        height={250}
        quality={100}
        alt="yeah right"
      />
    </>
  );
}
