import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faChevronRight,
  faGlobe,
  faArrowLeft,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

// Add all icons to the library
library.add(
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faChevronRight,
  faGlobe,
  faArrowLeft,
  faSpinner,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faFacebook,
  faLinkedin
);
