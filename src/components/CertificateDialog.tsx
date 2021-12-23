import { Dialog, Transition } from "@headlessui/react";
import { DownloadIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const png2021 = "/surprise-dan-after-1.0-drops/WizardDan2021.png";
const pdf2021 = "/surprise-dan-after-1.0-drops/WizardDan2021.pdf";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export default function CertificateDialog({ isOpen, closeModal }: Props) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed bg-black bg-opacity-30 inset-0 backdrop-filter backdrop-blur-sm" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-light text-gray-600 text-center uppercase tracking-wide"
                >
                  🧙‍♂️ &nbsp; Certificate of Wizardry &nbsp; 🧙‍♂️
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-base text-gray-700 mb-2">
                    In recognition of your{" "}
                    <span className="font-bold">excellent</span>{" "}
                    let-us-struggle-so-we-learn teaching style, hilarious jokes,
                    and for continuing to put up with our{" "}
                    <span className="font-bold">silly</span> questions. 🧡
                  </p>
                  <p className="text-base text-gray-700 mb-4">You earned it.</p>
                  <img
                    src={png2021}
                    alt="Certificate"
                    className="mx-auto object-contain"
                  ></img>
                </div>

                <div className="mt-4 text-center">
                  <a
                    href={pdf2021}
                    download="DanIsWizard"
                    className="inline-flex justify-center items-center px-4 py-2 text-base font-medium text-gray-50 hover:text-orange-light bg-orange-dark border-2 border-transparent rounded-md hover:border-orange-normal border-opacity-70 focus:outline-none"
                  >
                    PDF &nbsp; <DownloadIcon className="h-6 text-current" />
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
