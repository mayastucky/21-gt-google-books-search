import React from "react";

const NoMatch = () => {
  const styles = {
    badpage: {
      textAlign: "center",
    },
  };
  return (
    <div>
      <h1 style={styles.badpage}>Page not found! Get outta here! <span role="img" aria-label="Mind Blown Emoji"> 🤯</span> </h1>
    </div>
  );
};

export default NoMatch;
