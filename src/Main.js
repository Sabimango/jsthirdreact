import "./index.css";

export default function Main({ setShowModal }) {
  return (
    <main>
      <div className="main-container">
        <div className="center">
          <h1 className="main-head">SABI MANGO</h1>

          <p className="sabi-subhead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <p>
            <button onClick={() => setShowModal(true)} id="modal-btn-id">
              CONTACT NOW
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
