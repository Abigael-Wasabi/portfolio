import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Col } from 'react-bootstrap';

const YourComponent = () => {
    return (
        <Col style={{ textAlign: 'center' }}>
            <a href="https://www.linkedin.com/in/abigael-wanjala-96a7b5265/">
                software developer
                <div>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </div>
            </a>
            <a href="https://github.com/Abigael-Wasabi">my game plan
                <div>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </div>
            </a>
            <a href="tel:+254111583196">reach out to me
                <div>
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                </div>
            </a>
            <a href="mailto:abiwasabi03@gmail.com">let's connect
                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </div>
            </a>
        </Col>
    );
}

export default YourComponent;
