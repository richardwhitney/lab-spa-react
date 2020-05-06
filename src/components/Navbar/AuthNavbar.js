import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import HomeMenuItems from "./HomeMenuItems";
import TestHubMenuItems from "./TestHubMenuItems";
import TestDetailMenuItems from "./TestDetailMenuItems";
import DefaultMenuItems from "./DefaultMenuItems";
import QuizDetailMenuItems from "./QuizDetailMenuItems";
import QuizHubMenuItems from "./QuizHubMenuItems";
import BloodProductHubMenuItems from "./BloodProductHubMenuItems";
import BloodProductDetailMenuItems from "./BloodProductDetailMenuItems";
import ContactsMenuItems from "./ContactsMenuItems";
import MarkdownMenuItems from "./MarkdownMenuItems";

class AuthNavbar extends Component {

  render() {
    let pathname = this.props.location.pathname;

    if (pathname === '/home') {
      return <HomeMenuItems/>
    }
    else if (pathname === '/testhub') {
      return <TestHubMenuItems/>
    }
    else if (pathname.includes('/tests/')) {
      return <TestDetailMenuItems/>
    }
    else if (pathname.includes('/quizhub')) {
      return <QuizHubMenuItems/>
    }
    else if (pathname.includes('/quizzes/') || pathname.includes('/quizresults')) {
      return <QuizDetailMenuItems/>
    }
    else if (pathname.includes('/bloodProductInformation')) {
      return <BloodProductHubMenuItems/>
    }
    else if (pathname.includes('/bloodProducts/')) {
      return <BloodProductDetailMenuItems/>
    }
    else if (pathname.includes('/contacts')) {
      return <ContactsMenuItems/>
    }
    else if (pathname.includes('/bloodTransfusion') || pathname.includes('/biochemistry') || pathname.includes('/haematology')) {
      return <MarkdownMenuItems/>
    }
    else {
      return <DefaultMenuItems/>
    }
  }
}

export default withRouter(AuthNavbar);