import "./App.css";
import profile from "./profile__img.svg";
import slack from "./slack.png";
import github from "./github.svg";
import desktop from "./avatar__share__button.svg";
import mobile from "./dots__horizontal.svg";
import zuri from "./Zuri__Internship__Logo.svg";
import ingressive from "./I4G.svg";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={profile} id="profile__img" alt="avatar" />
          <img src={desktop} id="avatar__share__button__desktop" alt="share" />
          <img src={mobile} id="avatar__share__button__mobile" alt="more" />
        </header>
        <div>
          <p id="twitter">Malach Salama</p>
          <p id="slack" className="Hidden">
            Salama
          </p>
        </div>

        <div className="Links">
          <div className="Link">
            <a href="https://twitter.com/malachsalama">Twitter Link</a>
          </div>
          <div className="Link">
            <a href="https://training.zuri.team/" id="btn__zuri">
              Zuri Team
            </a>
          </div>
          <div className="Link">
            <a
              href="http://books.zuri.team"
              id="books"
              title="Follow to find a great collection of books about design and coding"
            >
              Zuri Books
            </a>
          </div>
          <div className="Link">
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=Salama"
              id="book__python"
            >
              Python Books
            </a>
          </div>
          <div className="Link">
            <a
              href="https://background.zuri.team"
              id="pitch"
              title="Looking to recruit the best talent on board? Here are resources to help you identify the best talent through thorough backgoround checks"
            >
              Background Check for Coders
            </a>
          </div>
          <div className="Link">
            <a
              href="https://books.zuri.team/design-rules "
              id="book__design"
              title="Free design book offered by Zuri to help you advance your design skills"
            >
              Design Books
            </a>
          </div>
        </div>
      </div>
      <div className="socials">
        <img src={slack} id="slack" alt="slack" />
        <img src={github} id="github" alt="github" />
      </div>
      <div className="footer">
        <img src={zuri} id="zuri__logo" alt="zuri logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={ingressive} id="ingressive__logo" alt="ingressive logo" />
      </div>
    </>
  );
}

export default App;
