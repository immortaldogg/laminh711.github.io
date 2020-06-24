import React from "react";
import "./content.scss";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default function Content(props) {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "main-background.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div className="content">
            <Img className="content__bg-img" fluid={data.placeholderImage.childImageSharp.fluid} />
            <div className="content__mask"/>
            <div className="content__content">{props.children}</div>
        </div>
    );
}

/*
<a href='https://www.freepik.com/free-photos-vectors/background'>Background photo created by freepik - www.freepik.com</a>
*/
