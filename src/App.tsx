// Libs
import { CakeIcon } from "@heroicons/react/outline";

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
        <CakeIcon
          className="h-32 text-gray-50 hover:text-orange-pink btnHoverTransition"
          onClick={openCertificateModal}
        />
        <p className="text-gray-50 text-2xl font-light">
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
