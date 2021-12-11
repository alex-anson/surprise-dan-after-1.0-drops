import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function InitialDialog() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        // leaving this empty, so the only way he can close the modal is by clicking the button.
      }}
      className="fixed z-10 inset-0 overflow-y-auto bg-gray-900 flex flex-col items-center justify-center"
    >
      <Dialog.Overlay className="fixed inset-0" />

      <Dialog.Title className="text-gray-50 uppercase tracking-wide font-extralight text-5xl -mt-4 mb-2">
        psst... hey you
      </Dialog.Title>
      <Dialog.Description className="text-gray-50 text-xl my-5">
        Enter, if you dare 😈
      </Dialog.Description>

      <button
        className="z-50 text-gray-50 btn uppercase border border-gray-50 rounded-sm tracking-wide text-xl font-light py-2 px-4 hover:bg-purple-300 hover:text-gray-900 focus:ring-4 focus:ring-purple-100 focus:ring-offset-2"
        onClick={() => setIsOpen(false)}
      >
        Risk Taker
      </button>
    </Dialog>
  );
}
