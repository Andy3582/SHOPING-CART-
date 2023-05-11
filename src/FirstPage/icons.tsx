/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface IconsProps {
  message: string;
}

export default function Icons({ message }: IconsProps) {
  return (
    <div>
      <p
        style={{
          position: "fixed",
          left: "10rem",
          padding: "3rem",
          letterSpacing: "2rem",
        }}>
        <a href='https://www.youtube.com' className='a.youtube'>
          {" "}
          {message}
          <FontAwesomeIcon icon={faYoutube} size='2x' color='red' />
        </a>
        <a href='https://www.facebook.com' className='a.facebook'>
          {" "}
          {message}
          <FontAwesomeIcon icon={faFacebook} size='2x' color='blue' />
        </a>
        <a href='http://www.instagram.com'>
          {" "}
          {message}
          <FontAwesomeIcon icon={faInstagram} size='2x' color='darkorange' />
        </a>
        <a href='https://wwww.twitter.com'>
          <FontAwesomeIcon icon={faTwitter} size='2x' color='lightblue' />
          {message}
        </a>
      </p>
    </div>
  );
}
