import streams from "../apis/streams";

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

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post("/streams", formValues);
  dispatch({ type: "CREATE_STREAM", payload: response.data });
};
