import reactImage from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

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
