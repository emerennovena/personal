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
					<p><b>Programming Languages:</b><ul><li>Python</li> <li>SQL</li> <li>R</li> <li>C/C++</li> <li>Java</li> <li>HTML</li> <li>JavaScript</li> <li>Typescript</li></ul>
						<br/>
						Tools: <ul><li>Tableau</li> <li>React Native</li> <li>Angular</li> <li>Ionic</li> <li>MS Office Suite</li> <li>Git</li> <li>Figma</li> <li>Adobe XD</li></ul></p>
				</EdContent>
			</EdWrapper>
		</ExperienceWrapper>
	</Layout>
);

export default Experience;
