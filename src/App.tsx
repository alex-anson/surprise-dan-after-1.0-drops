// Libs
import { CakeIcon } from "@heroicons/react/outline";

// Local
import moose from "./img/moose.jpg";
import thanks from "./img/thanks.jpg";
import rocket from "./img/rocket.jpg";
import InitialDialog from "./components/InitialModal";
import CardOneButton from "./components/CardOneButton";
import CardTwoButtons from "./components/CardTwoButtons";
import { useState } from "react";
import ThankYouDialog from "./components/ThankYouDialog";

// LINKS
const linkSQL = "https://mystery.knightlab.com/";
const practiceCSS = "https://flukeout.github.io/";
const mooseVideo = "https://www.youtube.com/watch?v=683YLpinsi8";

function App() {
  const [isThankYouDialogOpen, setIsThankYouDialogOpen] = useState(false);
  const [showElisaContent, setShowElisaContent] = useState(false);

  function openDialogElisa() {
    setShowElisaContent(true);
    setIsThankYouDialogOpen(true);
  }
  function openDialogAlex() {
    setShowElisaContent(false);
    setIsThankYouDialogOpen(true);
  }

  function closeModal() {
    setIsThankYouDialogOpen(false);
  }

  return (
    <div className="min-h-full min-w-full bg-gradient-to-br from-gradient-customPurple via-gradient-customRed to-gradient-customOrange pt-5">
      <InitialDialog />
      <div className="grid grid-cols-3 gap-5 mx-5">
        <CardOneButton
          imgSrc={moose}
          textTitle="👀"
          buttonHref={mooseVideo}
          textParagraph="I wonder what this could possibly be..."
          buttonText="✨ MAJESTIC ✨"
        />
        <CardTwoButtons
          imgSrc={thanks}
          textTitle="Thank you!"
          textParagraph="One from each of us."
          buttonOneText="From Elisa"
          onClickButtonOne={openDialogElisa}
          buttonTwoText="From Alex"
          onClickButtonTwo={openDialogAlex}
        />
        <CardTwoButtons
          imgSrc={rocket}
          textTitle="😎 🎉"
          textParagraph="Celebrate with relaxing activities... but which one?"
          buttonOneText="Passion Options 1"
          buttonOneHref={linkSQL}
          buttonTwoText="Passion Options 2"
          buttonTwoHref={practiceCSS}
        />
      </div>
      {/* CERTIFICATE */}
      <div className="flex flex-col justify-center items-center mt-5">
        <CakeIcon className="h-32 text-gray-50 hover:text-gray-300" />
        <p className="text-gray-50 text-2xl font-light">
          Achievement Unlocked.
        </p>
      </div>
      <ThankYouDialog
        open={isThankYouDialogOpen}
        closeModal={closeModal}
        showElisaContent={showElisaContent}
      />
    </div>
  );
}

export default App;
