import SreenshotPlants from '../assets/ScreenshotPlants.png';
import ScreenshotBayan from '../assets/ScreenshotBayan.png';
import ScreenshotPresentation from '../assets/ScreenshotPresentation.png';

export default function Portfolio() {
  return (
    <section>
      <h2 className="subheading rose py-8">
        Here you can look at some of my works:
      </h2>
      <div className="project">
        <h3 className="title cyan p-2">Gardening Service</h3>
        <p className="description py-4">
          This website is pretty simple one. It was buid using HTML, CSS and
          Javascript. Its responsive and have filtering functionality.
        </p>
        <a
          href="https://rolling-scopes-school.github.io/irinatsoi312-JSFEPRESCHOOL2022Q4/plants/"
          className="screenshot"
        >
          <img src={SreenshotPlants} alt="website screenshot" />
        </a>
      </div>
      <div className="project">
        <h3 className="title cyan p-2">CSS Bayan</h3>
        <p className="description py-4">
          This one was actually pretty interesting work I did as one of the
          first works for Front-end/Javascript course when I just started to
          learn front-end. The main point was to create an functional accordion
          of memes with only pure HTML and CSS. No JS no external libraries, no
          anything. Just HTML and CSS.
        </p>
        <a
          href="https://irinatsoi312.github.io/cssBayan/cssBayan/index.html"
          className="screenshot"
        >
          <img src={ScreenshotBayan} alt="screenshot" />
        </a>
      </div>
      <div className="project">
        <h3 className="title cyan p-2">Open Source Presentation</h3>
        <p className="description py-4">
          Another interesting project tha allow me to further learn about
          implementation of the various Javascript frameworks and how to use
          them. In this case it is Reveal.js. This work is another project I
          made during my studies on the Front-end/Javascript course.
        </p>
        <a
          href="https://rolling-scopes-school.github.io/irinatsoi312-JSFE2023Q1/presentation/#/1"
          className="screenshot"
        >
          <img src={ScreenshotPresentation} alt="screenshot" />
        </a>
      </div>
    </section>
  );
}
