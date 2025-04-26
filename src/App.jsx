import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import reactImage from "./assets/react-core-concepts.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"></section>

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
      </main>
    </div>
  );
}

export default App;
