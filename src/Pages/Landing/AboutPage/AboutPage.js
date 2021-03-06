import React from "react";
import { Flex } from "grid-styled";

import { Background } from "Pages/Landing/AboutPage/AboutPageStyles";
import TopContent from "Pages/Landing/AboutPage/TopContent/TopContent";
import BottomContent from "Pages/Landing/AboutPage/BottomContent/BottomContent";

class AboutPage extends React.Component {
  render () {
    const { isWebView } = this.props;
    console.log("cache test");

    return (
      <Background>
        <Flex
          flexDirection='column'
          justifyContent={isWebView ? "initial" : "center"}
          css={{
            width: isWebView ? "100vw" : "80vw",
            height: "100%",
            minHeight: "100vh",
            overflow: "hidden",
            margin: "auto"
          }}
        >
          <TopContent {...{ isWebView }} />
          <BottomContent {...{ isWebView }} />
        </Flex>
      </Background>
    );
  }
}

export default AboutPage;
