import './index.css'

export default function Modal() {

    

    return (
        
        <div id="modal-content" class="modal-content">
        <span class="close">&times;</span>
        <h2>Book me for your project!</h2>
        <form class="contact--form" action="">
          <label for="name">Full Name:</label>
          <input id="name" type="text" />
          <label for="email">Email:</label>
          <input id="email" type="text" />
          <label for="textarea">Input your inquiry here</label>
          <textarea name="" id="textarea" cols="30" rows="10"></textarea>
          <button class="modal-submit-btn" type="submit">Send</button>
        </form>
      </div>
    )
}