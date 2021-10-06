import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  const textSlyle = { color: "red", fontWeight: "bold" };
  const { fullName, bio, profession, handleName, children } = props;
  return (
    <div>
      <p style={textSlyle}>
        Hello my name is {fullName} I'm in high spirits{bio}I'm a {profession}
      </p>
      {children} <br />
      <button onClick={() => handleName(fullName)}>Click Me</button>
    </div>
  );
}
Profile.defaultProps = {
  fullName: "ahmed belhaj",
  bio: "technicien",
  profesion: "rien a signalern",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
