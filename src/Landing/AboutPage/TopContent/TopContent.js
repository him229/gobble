import React from "react";
import { Flex } from "grid-styled";
import { AboutTitle, AboutSubtitle, AboutParagraph } from "../AboutPageStyles.js";

class TopContent extends React.Component {
  render () {
    const { isWebView } = this.props;
    return (
      <Flex
        flexDirection='row'
        justifyContent='space-evenly'
        flexWrap='wrap'
        css={{
          paddingTop: "80px",
          paddingBottom: "80px",
          overflow: "hidden"
        }}
      >
        <div style={{ maxWidth: "400px" }}>
          <AboutTitle {...{ isWebView }} >About</AboutTitle>
          <AboutSubtitle {...{ isWebView }} >"Hack" in hackathon is used to describe how technology can be used in a new and innovative way.</AboutSubtitle>
          <AboutParagraph {...{ isWebView }} >At TAMUhack, teams spend the weekend working on innovative software and hardware solutions to real-world problems in a community full of mentorship.</AboutParagraph>
          <AboutParagraph {...{ isWebView }} >We'll provide you with all the resources and mentors you need to work on something cool. You'll have the freedom to create a product, learn the new skills or just have fun working on a project with friends. We'll  also provide all the free food and free swag&#8212;just be sure to bring plenty of resumes!</AboutParagraph>
        </div>
        <img
          alt=''
          src={require("../../../assets/reveille-about-01.svg")}
          style={{ width: "350px", "height": "350px", maxWidth: "350px" }}
        />
      </Flex>
    );
  }
}

export default TopContent;
