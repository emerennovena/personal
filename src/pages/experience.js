import React from "react";
import "../styles/stepper.css";
import work from "../data/Work";
import grad from "../data/Edu";
import skills from "../data/Language";
import hobby from "../data/Interests";
import {
	ExperienceWrapper,
	WorkWrapper,
	EdWrapper,
	EdContent,
	Stepper,
	StepperHead,
	LogoLink,
	StepperDesc,
} from "../styles/workStyle.js";
import Layout from "../components/layout";

const Experience = () => (
	<Layout>
		<ExperienceWrapper>
			<WorkWrapper>
				<h1>Work Experience</h1>
				<div className="experience-stepper">
					{work.map((item) => (
						<div key={item.id} className="step">
							<div>
								<div className="circle" />
								<div className="line" />
							</div>
							<Stepper>
								<StepperHead>
									<div>
										<h3>{item.designation}</h3>
										<a
											href={item.companyLink}
											target="_blank"
											rel="noreferrer"
										>
											{item.name}
										</a>
										<p>{item.dated}</p>
									</div>
									<LogoLink href={item.companyLink}>
									</LogoLink>
								</StepperHead>
								<StepperDesc
									dangerouslySetInnerHTML={{
										__html: item.description,
									}}
								/>
							</Stepper>
						</div>
					))}
				</div>
			</WorkWrapper>

			<EdWrapper>
				<h1>Education</h1>
				<EdContent>
					{grad.map((item) => (
						<div key={item.id}>
							<p>
								{item.name}
								<p>{item.degree} in {item.major}</p >
								{item.dated}
							</p>

						</div>
					))}
				</EdContent>
				<h1>Skills</h1>
				<EdContent>
					<p><b>Business:</b></p>
					<ul>
						<li>Market Research</li>
						<li>Competitor Analysis</li>
						<li>Cross-Cultural Collaboration</li>
					</ul>

					<p>Tools:</p>
					<ul>
						<li>HubSpot</li>
						<li>Adobe Photoshop</li>
						<li>MS Office Suite</li>
						<li>Git</li>
						<li>Figma</li>
						<li>Axure RP</li>
					</ul>

					<p><b>Programming Languages:</b></p>
					<ul>
						<li>Python</li>
						<li>Java</li>
						<li>HTML</li>
						<li>JavaScript</li>
					</ul>


				</EdContent>
			</EdWrapper>
		</ExperienceWrapper>
	</Layout>
);

export default Experience;
