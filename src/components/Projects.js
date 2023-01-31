// Import Assets
import ckryptonft from '../assets/ckryptonft.png';
import noBroker_2 from '../assets/noBroker_2.png';
import chatapp_2 from '../assets/blockchain-chatapp_2.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>blockchain-chatapp</h3>
                    <img src={chatapp_2} alt="blockchain-chatapp netlify Page" />
                    <p>Chat Buddy is a web 3.0 blockchain application that allows users to create an account, add friends, send messages, and read messages.
                    </p>

                    <a href="https://blockchain-chatapp.netlify.app/" target="_blank" className="button" rel="noreferrer">Site</a>
                    <a href="https://github.com/shekhus/blockchain-chatApp" target="_blank" className="button" rel="noreferrer">Code</a>
                </div>

                {/* <div className="projects__card">
                    <h3>noBroker_Clone</h3>
                    <img src={noBroker_2 } alt="Compound Landing Page" />
                    <p>noBroker Clone is a Web 3.0 Real Estate App like noBroker (Solidity, Ethereum, Hardhat, React) 
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div> */}

                <div className="projects__card">
                    <h3>ckryptonft</h3>
                    <img src={ckryptonft} alt="ckryptonft Landing Page" />
                    <p>A Web 3.0 app to Send Crypto across the world Connect a regular React.js application to the blockchain and pair it to your Ethereum wallet using MetaMask 
                    </p>

                    <a href="https://ckryptonft.com/" target="_blank" className="button" rel="noreferrer">Site</a>
                    <a href="https://github.com/shekhus/ckryptonft" target="_blank" className="button" rel="noreferrer">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;