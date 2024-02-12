import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Row } from 'react-bootstrap';

const YourComponent = () => {
    return (
        <Row style={{ textAlign: 'center' }}>
            <a target='_blank' href="https://www.linkedin.com/in/abigael-wanjala-96a7b5265/" rel="noreferrer">
            Doting coder
                <div>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </div>
            </a>
            <a target='_blank' href="https://github.com/Abigael-Wasabi" rel="noreferrer">My game plan
                <div>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </div>
            </a>
            <a target='_blank' href="tel:+254111583196" rel="noreferrer">Drop me a line
                <div>
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                </div>
            </a>
            <a target='_blank' href="mailto:abiwasabi03@gmail.com" rel="noreferrer">Let's connect
                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </div>
            </a>
        </Row>
    );
}

export default YourComponent;
