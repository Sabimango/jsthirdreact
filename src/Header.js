import './index.css'

export default function Header() {
    return (
        <header class="top-header">
        <nav class="nav">
            <button class="nav-button" id="nav-button">
                <i class="fas fa-bars"></i>
            </button>
            <ul class="nav-links" id="nav-links">
              <li><a href="#aboutme">About Me</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
        </nav>
      </header>
    )
}