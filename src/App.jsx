import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import reactImage from "./assets/react-core-concepts.png";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("dynamic text goes here");
  const handleClick = (topic) => {
    setContent(topic);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              img={reactImage}
              title="first title"
              description="first conmponot decscription"
            />

            <CoreConcept
              img={reactImage}
              title="second title"
              description="second conmponot decscription"
            />

            <CoreConcept
              img={reactImage}
              title="third title"
              description="third conmponot decscription"
            />

            <CoreConcept
              img={reactImage}
              title="fourth title"
              description="forth conmponot decscription"
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>Jsx</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          <section>
            <h2>{content}</h2>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
