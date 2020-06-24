import React from "react";
import TopBar from "../layouts/TopBar";
import BottomBar from "../layouts/BottomBar";
import Content from "../layouts/Content";
import "./main.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
export default function Main() {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "doggo_.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<>
			<TopBar />
			<Content>
				<div className="main-page">
					<div className="main-page__jumbo">
						<div className="main-page__doggo">
							<Img fluid={data.placeholderImage.childImageSharp.fluid} />
						</div>
						<div className="main-page__headline">
							<h1>Hello.</h1>
						</div>
						<div className="main-page__headline">
							<h2>My name is Minh Le.</h2>
						</div>
						<div className="main-page__headline">
							<h4>
								I'm a software developer, I have 1 year working experience in web development, have coded in ruby, C#, javascript and go, but I'm always open to
								learn anything else. I like creating assistant-tool web app like{" "}
								<span>
									<a href="https://rowl.club" target="_blank">
										rowl{" "}
									</a>{" "}
								</span>
								.
							</h4>
						</div>
						<div className="main-page__intro">
							<p>
								I'm making a blog at{" "}
								<span>
									<a href="/blog" target="_blank">
										/blog{" "}
									</a>{" "}
								</span>
								, the content will be focused on web-development in general. Any help would be appreciated!
							</p>
						</div>
						<div className="main-page__hobby">
							<p>Outside of programming, I enjoy football, guitar and video games.</p>
						</div>

						<div className="main-page__contacts">
							<a href="https://gitlab.com/laminh711" target="_blank">
								<i class="fa fa-gitlab" aria-hidden="true"></i>
							</a>
							<a href="https://github.com/laminh711" target="_blank">
								<i class="fa fa-github-square" aria-hidden="true"></i>
							</a>
							<a href="mailto:laminh711@gmail.com" target="_blank">
								<i class="fa fa-envelope" aria-hidden="true"></i>
							</a>
							<a href="https://linkedin.com/laminh711" target="_blank">
								<i class="fa fa-linkedin-square" aria-hidden="true"></i>
							</a>
							<a href="https://facebook.com/thelittlemozart7" target="_blank">
								<i class="fa fa-facebook-square" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
			</Content>
			<BottomBar />
		</>
	);
}
