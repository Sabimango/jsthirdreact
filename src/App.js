import "./App.css";
import "./index.css";

import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Header />

      <Main setShowModal={setShowModal} />

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
