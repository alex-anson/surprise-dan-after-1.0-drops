// Local
import moose from "./img/moose.jpg";
import thanks from "./img/thanks.jpg";
import fireworks from "./img/fireworks.jpeg";
import InitialDialog from "./components/InitialModal";
import { useState } from "react";
import ThankYouDialog from "./components/ThankYouDialog";
import Card from "./components/Card";
import OneButton from "./components/OneButton";
import TwoButtons from "./components/TwoButtons";
import CertificateDialog from "./components/CertificateDialog";

// LINKS
const linkSQL = "https://mystery.knightlab.com/";
const practiceCSS = "https://flukeout.github.io/";
const mooseVideo = "https://youtu.be/683YLpinsi8?t=131";

function App() {
  const [isThankYouDialogOpen, setIsThankYouDialogOpen] = useState(false);
  const [showElisaContent, setShowElisaContent] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  function openDialogElisa() {
    setShowElisaContent(true);
    setIsThankYouDialogOpen(true);
  }
  function openDialogAlex() {
    setShowElisaContent(false);
    setIsThankYouDialogOpen(true);
  }

  function closeThankYouModal() {
    setIsThankYouDialogOpen(false);
  }

  function openCertificateModal() {
    setIsCertificateOpen(true);
  }
  function closeCertificateModal() {
    setIsCertificateOpen(false);
  }

  return (
    <div className="min-h-full min-w-full bg-gradient-to-br from-gradient-customPurple via-gradient-customRed to-gradient-customOrange pt-5">
      <InitialDialog />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5">
        <Card
          imgSrc={moose}
          textTitle="🦌🦌🦌 &nbsp; &nbsp; 👀"
          textParagraph="I wonder what this could possibly be..."
        >
          <OneButton
            buttonText="✨ MAJESTIC ✨"
            buttonHref={mooseVideo}
            target="_blank"
          />
        </Card>
        <Card
          imgSrc={thanks}
          textTitle="🙏"
          textParagraph="A note from each of us."
        >
          <TwoButtons
            buttonOneText="Elisa"
            onClickButtonOne={openDialogElisa}
            buttonTwoText="Alex"
            onClickButtonTwo={openDialogAlex}
          />
        </Card>
        <Card
          imgSrc={fireworks}
          textTitle="😎"
          textParagraph="Celebrate with relaxing activities... but which one?"
        >
          <TwoButtons
            buttonOneText="Passion Options 1"
            buttonOneHref={linkSQL}
            buttonTwoText="Passion Options 2"
            buttonTwoHref={practiceCSS}
            target="_blank"
          />
        </Card>
      </div>
      {/* CERTIFICATE */}
      <div className="flex flex-col justify-center items-center pb-8 mt-8 md:mt-16 lg:mb-1 lg:mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={openCertificateModal}
          width="128"
          height="128"
          viewBox="0 0 24 24"
          fill="#f5f5f5"
          cursor="pointer"
          id="gem"
        >
          <path d="M21 1c-.438 1.438-1.563 2.562-3 3 1.437.438 2.562 1.563 3 3 .438-1.437 1.563-2.561 3-3-1.437-.438-2.562-1.562-3-3zm-19.001 2c-.292.957-1.042 1.708-1.999 2 .959.293 1.707 1.042 2.001 2 .292-.958 1.042-1.708 1.999-2-.957-.292-1.707-1.042-2.001-2zm18.5 16c-.365 1.196-1.303 2.134-2.499 2.5 1.199.366 2.134 1.303 2.501 2.5.365-1.197 1.303-2.134 2.499-2.5-1.196-.364-2.134-1.303-2.501-2.5zm-9.499-19c-.292.958-1.042 1.708-2 2 .959.293 1.708 1.042 2.002 2 .292-.958 1.042-1.708 1.998-2-.956-.292-1.706-1.042-2-2zm-8.001 18c-.435 1.436-1.563 2.561-2.999 3 1.439.439 2.564 1.564 3 3 .439-1.436 1.564-2.561 2.999-3-1.435-.437-2.56-1.564-3-3zm14.063-12h-10.054l-5.008 5.625 10 12.375 10-12.305-4.938-5.695zm-9.394 6l3.039 7.218-5.832-7.218h2.793zm7.579 0l-3.247 7.711-3.247-7.711h6.494zm-6.04-1l2.793-2.793 2.793 2.793h-5.586zm7.125 1h2.843l-5.899 7.259 3.056-7.259zm2.418-1h-2.543l-3-3h2.942l2.601 3zm-10.846-3h2.889l-3 3h-2.559l2.67-3z" />
        </svg>
        <p className="text-gray-50 text-2xl font-light mt-1">
          Achievement Unlocked.
        </p>
      </div>
      <ThankYouDialog
        open={isThankYouDialogOpen}
        closeModal={closeThankYouModal}
        showElisaContent={showElisaContent}
      />
      <CertificateDialog
        isOpen={isCertificateOpen}
        closeModal={closeCertificateModal}
      />
    </div>
  );
}

export default App;
