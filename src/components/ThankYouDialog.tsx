//Libs
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import AlexContent from "./AlexContent";
import ElisaContent from "./ElisaContent";

interface Props {
  open: boolean;
  closeModal: () => void;
  showElisaContent: boolean;
}

export default function ThankYouDialog({
  open,
  closeModal,
  showElisaContent,
}: Props) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        onClose={closeModal}
        className="fixed z-10 inset-0 overflow-y-auto "
      >
        <div className="min-h-screen px-1 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-sm backdrop-brightness-50" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle "
            aria-hidden="true"
          ></span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`p-6 py-8 max-w-xs sm:max-w-md md:max-w-2xl text-left inline-block w-full overflow-hidden align-middle transition-all transform bg-gray-50 shadow-2xl rounded-xl border-2 border-gradient-customPurple`}
            >
              <Dialog.Title>
                <div className="flex justify-between items-center mb-4 ">
                  <h1 className="inline-flex text-3xl items-center">
                    🎉 🙌 🥳 🔥 🚀 🥇 🧙‍♂️
                  </h1>
                  <button onClick={closeModal}>
                    <XIcon className="h-6 text-gray-500" />
                  </button>
                </div>
              </Dialog.Title>

              {/* Whose content to show */}
              {showElisaContent ? <ElisaContent /> : <AlexContent />}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
