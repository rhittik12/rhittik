"use client";

import { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { RiCheckboxCircleFill } from "react-icons/ri";

/**
 * A clipboard copy button that provides visual feedback when content is copied.
 *
 * @param props - Component props
 * @param props.content - The text content to copy to the clipboard
 * @returns A button that copies content to clipboard and shows a checkmark for 1.5 seconds
 */
export default function Clipoboard({ content }: { content: string }) {
  const [status, setStatus] = useState(false);

  /**
   * Handles copying content to the clipboard and shows success feedback.
   */
  function handleClipboard() {
    navigator.clipboard.writeText(content);
    setStatus(true);

    setTimeout(() => {
      setStatus((status) => !status);
    }, 1500);
  }

  return (
    <button onClick={handleClipboard}>
      {!status ? (
        <BiCopy />
      ) : (
        <RiCheckboxCircleFill className="text-secondary-color transition" />
      )}
    </button>
  );
}
