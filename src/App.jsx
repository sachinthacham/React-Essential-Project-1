import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import reactImage from "./assets/react-core-concepts.png";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { CORE_CONCEPTS } from "./data";

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
              image={reactImage}
              title="first title"
              description="first conmponot decscription"
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
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
