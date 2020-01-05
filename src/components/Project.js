import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styles from "../scss/modules/project.module.scss";

const Project = ({ data }) => {
	const query = graphql`
		query {
			allFile {
				edges {
					node {
						name
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid_noBase64
							}
						}
					}
				}
			}
		}
	`;

	const queryData = useStaticQuery(query);

	let projectNode;

	queryData.allFile.edges.map((item) => {
		if (data.id === item.node.name) {
			projectNode = item;
		}
		return null;
	});

	return (
		<section className={styles.project}>
			<Img fluid={projectNode.node.childImageSharp.fluid} />
			<h3 className={styles.title}>{data.title}</h3>
			<div className={styles.container}>
				<a href={data.liveUrl} target="_blank" rel="noreferrer noopener" className={styles.link}>
					Live
				</a>
				<a href={data.gitUrl} target="_blank" rel="noreferrer noopener" className={styles.link}>
					GitHub
				</a>
			</div>
		</section>
	);
};

Project.propTypes = {
	data: PropTypes.object.isRequired
};

export default Project;
