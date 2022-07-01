import "../Assets/Styles/Footer.css";

function Footer({ date }) {
  return (
    <div className="footer__container">
      <div> Last updated: {date}</div>
      <div>
        <ul className="links">
          <li>Terms of use</li>
          <li>Privacy Statement</li>
          <li>Linking Disclaimer</li>
          <li>Takedown Policy</li>
          <li>Rate This Site</li>
          <li>Report Vulnerability</li>
        </ul>
      </div>
      <div>Copyright © 2022 15mins Library. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
