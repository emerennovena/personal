import React from "react";
import PropTypes from "prop-types";
import github from "../../assets/images/github-icon.svg"
import linkedin from "../../assets/images/linkedin-icon.svg"
import kaggle from "../../assets/images/kaggle-icon.svg"
import gmail from "../../assets/images/mail.svg"



const Footer = ({ footerClass }) => (
	<div className={`defaultFooter ${footerClass}`}>
		<p>
			<a
				href="mailto:cheryllgunawan@gmail.com"
				target="_blank"
				rel="noreferrer"
			><img src={gmail}/></a>
			&emsp;<a
				href="https://github.com/cheryllg"
				target="_blank"
				rel="noreferrer"
			><img src={github}/></a>
			&emsp;
			<a
				href="https://www.linkedin.com/in/cheryll-g-811854125"
				target="_blank"
				rel="noreferrer"
			><img src={linkedin}/></a>
			&emsp;
			<a
				href="https://www.kaggle.com/CheryllGunawan"
				target="_blank"
				rel="noreferrer"
			><img src={kaggle}/></a>
		</p>
	</div>
);
Footer.propTypes = {
	footerClass: PropTypes.string,
};
export default Footer;
