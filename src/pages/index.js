import React from "react";
import RashSelfIcon from "../assets/images/rashmi.svg";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";

import {
	UserWrapper,
	UserTitle,
	UserDescription,
	DownloadButton,
	UserTopic,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => {
	return (
		<Layout>
			<UserWrapper>
				<div className={"inlineRow"}>
				<UserTitle>
					Emerentia <span>Novena</span>
				</UserTitle>
					<UserDescription>
						<>
							<div style={{ textAlign: 'left', flex: 1 }}>
								<p>Hello there, welcome to my portfolio.</p>
								<DownloadButton
									href="https://drive.google.com/file/d/10c5TNf6Yg_wlLYCNXI8r5Rxsmz23v79i/view?usp=sharing"
									download
									title="Resume"
								>
									Download Resume
								</DownloadButton>
							</div>
							<img src={RashSelfIcon} alt="self" />
						</>
					</UserDescription>

				<UserTopic>
					{about.map((item) => (
						<AboutBox key={item.id} info={item} />
					))}
				</UserTopic>
				</div>
			</UserWrapper>
		</Layout>
	);
};

export default IndexPage;
