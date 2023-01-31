// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Chandrashekhar Satav" />
    
            <div className='header__content'>
                <h1>Hi, I am 
                Chandrashekhar Satav</h1>
                <p>Blockchain Developer</p>
                <button className='button'>
                <a href="https://www.linkedin.com/in/chandrashekhar-satav/" className="button">Get In Touch </a>
                </button>
            </div>
        </section>
    );
}

export default Header;