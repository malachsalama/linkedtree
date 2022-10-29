import "./App.css";
import profile from "./profile__img.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} id="profile__img" alt="avatar" />
        <p id="twitter">Malach Salama</p>
        <p id="slack" className="Hidden">
          Salama
        </p>
      </header>

      <div className="Links">
        <a href="https://training.zuri.team/" id="btn__zuri">
          Twitter Link
        </a>
        <a href="http://books.zuri.team" id="books">
          Zuri Team
        </a>
        <a
          href="http://books.zuri.team"
          id="books"
          title="This is a link to where you find books about design and coding"
        >
          Zuri Books
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri">
          Python Books
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri">
          Background Check for Coders
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri">
          Design Books
        </a>
      </div>
    </div>
  );
}

export default App;
