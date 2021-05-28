import "./index.css";

export default function Modal({ setShowModal }) {
  return (
    <div id="modal-content" className="modal-content">
      <span className="close" onClick={() => setShowModal(false)}>
        &times;
      </span>
      <h2>Book me for your project!</h2>

      <form className="contact--form" action="">
        <label for="name">Full Name:</label>
        <input id="name" type="text" />

        <label for="email">Email:</label>
        <input id="email" type="text" />

        <label for="textarea">Input your inquiry here</label>
        <textarea name="" id="textarea" cols="30" rows="10"></textarea>

        <button className="modal-submit-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
