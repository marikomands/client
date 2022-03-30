export const signIn = (userId) => {
  console.log("🚀 ~ signIn ~ signIn");
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  console.log("🚀 ~ signOut ~ signOut");
  return {
    type: "SIGN_OUT",
  };
};
