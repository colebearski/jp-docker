import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import FontAwesome from "react-fontawesome";
// import "./js/main.js";

// COMPONENTS
// import Header from "./header";
// import Menu from "./menu";
import Navi from "./navi";
import Hero from "./hero";
import Icon from "./icon";

// STYLES
import "./styles/style.css";
import "./styles/layout.css";
// import "./bootstrap/dist/css/bootstrap.css";
// import "./bootstrap/dist/js/bootstrap.js";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: "Utah Premier Dock and Door Service"
            },
            { name: "keywords", content: "sample, something" }
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} />
        <Menu /> */}
        <Navi />
        <Hero />
        <Icon />
        <div
          style={{
            margin: "0 auto",
            marginTop: "-250px",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
