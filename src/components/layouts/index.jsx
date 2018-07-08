import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet"
import config from "../../data/SiteConfig"
import "./index.css"
import TopInfo from "../components/Layout/TopInfo/index"
import Footer from "../components/Layout/Footer/Footer"
import TopNavigation from "../components/Layout/Navigation/Navigation"

export default class LayoutComponent extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.indexOf("posts")) {
      title = "Article";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {/* <TopInfo/> */}
        <TopNavigation
          siteLogo={this.props.data.siteLogo.edges[0].node.acf.logo_image.source_url}
          siteLogoCaption={this.props.data.siteLogo.edges[0].node.title}
          pages={this.props.data.allWordpressPage} />

        <ContentContainer className="content_container">
            {children}
        </ContentContainer>
        <Footer config={config}/>
      </div>
    );
  }
}


export const pageQuery = graphql`
  query IndexLayoutQuery {
    siteLogo:
      allWordpressPost(filter: {title: {eq: "Site Logo"}}) {
        edges {
          node {
            title
            acf {
              logo_image {
                id
                source_url
              }
            }
          }
        }
      }
    
    allWordpressPost {
      edges {
        node {
          date
          slug
          title
          modified
          excerpt
          id
          categories {
            name
          }
          content
          acf {
            kit_type
          }
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          slug
          title
          id
        }
      }
    }
  }
`

const ContentContainer = styled.div`

`