import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { FaEnvelope, FaFacebookSquare, FaGithubSquare, FaGitlab, FaLinkedinIn } from "react-icons/fa";
import BottomBar from "../layouts/BottomBar";
import Content from "../layouts/Content";
import TopBar from "../layouts/TopBar";
import "./index.scss";

export default function Main() {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "doggo_.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 100, quality: 100) {
						...GatsbyImageSharpFluid
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
		}
	`);
	return (
		<>
			<TopBar />
			<Content>
				<div className="index-page">
					<div className="index-page__jumbo">
						<div className="index-page__doggo">
							<Img fluid={data.placeholderImage.childImageSharp.fluid} />
						</div>
						<div className="index-page__headline">
							<h1>Hello.</h1>
						</div>
						<div className="index-page__headline">
							<h2>My name is Minh Le.</h2>
						</div>
						<div className="index-page__headline">
							<h4>
								I'm a software developer, I have experience working in web development, specially with javascript(ReactJS) and other languages such as C# and go, but I'm always open to
								learn anything else. I like creating assistant-tool web app like{" "}
								<span>
									<a href="https://rowl.club" target="_blank">
										rowl{" "}
									</a>{" "}
								</span>
								.
							</h4>
						</div>
						<div className="index-page__intro">
							{/* <p>
								I'm making a blog at{" "}
								<span>
									<a href="/blog" target="_blank">
										/blog{" "}
									</a>{" "}
								</span>
								, the content will be focused on web-development in general. Any help would be appreciated!
							</p> */}
						</div>
						<div className="index-page__hobby">
							<p>Outside of programming, I enjoy football, guitar and video games.</p>
						</div>

						<div className="index-page__contacts">
							<a href="https://gitlab.com/laminh711" target="_blank">
								<FaGitlab />
							</a>
							<a href="https://github.com/laminh711" target="_blank">
								<FaGithubSquare />
							</a>
							<a href="mailto:laminh711@gmail.com" target="_blank">
								<FaEnvelope />
							</a>
							<a href="https://linkedin.com/in/laminh711" target="_blank">
								<FaLinkedinIn />
							</a>
							<a href="https://facebook.com/thelittlemozart7" target="_blank">
								<FaFacebookSquare />
							</a>
						</div>
					</div>
				</div>
			</Content>
			<BottomBar />
		</>
	);
}
