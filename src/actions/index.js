export const signIn = () => {
  console.log("🚀 ~ signIn ~ signIn");
  return {
    type: "SIGN_IN",
  };
};

export const signOut = () => {
  console.log("🚀 ~ signOut ~ signOut");
  return {
    type: "SIGN_OUT",
  };
};
