import "./App.css";
import moose from "./img/moose.jpg";
import thanks from "./img/thanks.jpg";
import rocket from "./img/rocket.jpg";
import Card from "./components/Card";
import InitialDialog from "./components/InitialModal";

function App() {
  const linkSQL = "https://mystery.knightlab.com/";
  const practiceCSS = "https://flukeout.github.io/";

  return (
    <>
      <InitialDialog />
      <div className="grid grid-cols-3 gap-5 m-5">
        <Card
          imgSrc={moose}
          textTitle="Moose!"
          // TODO: fill in href
          // buttonHref={}
          textParagraph="Insert paragraph text..."
          textButton="will take us to moose YT video"
        />
        <Card
          imgSrc={thanks}
          textTitle="Thank you!"
          // TODO: fill in href
          // buttonHref={}
          textParagraph="Insert paragraph text..."
          textButton="Click me!"
        />
        <Card
          imgSrc={rocket}
          textTitle="😎 🎉"
          textParagraph="Celebrate with relaxing activities... but which one?"
          textButton="Passion Options 1"
          buttonHref={linkSQL}
          optionalSecondButtonText="Passion Options 2"
          optionalSecondButtonHref={practiceCSS}
        />
      </div>
    </>
  );
}

export default App;
