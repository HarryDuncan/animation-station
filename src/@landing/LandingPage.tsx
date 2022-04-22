import React from "react";
import { connect } from "react-redux";

interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = ({}) => {
  return (
    <div className="home-container">
      <h1>Get Started</h1>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
