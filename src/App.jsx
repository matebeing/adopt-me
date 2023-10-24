import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt me!</h1>
    <Pet name="Luna" animal="dog" breed="Havanese" />
    <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    <Pet name="Doink" animal="Cat" breed="Mixed" />

  </div>
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
