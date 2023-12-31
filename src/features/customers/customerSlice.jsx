const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};

export const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
};
export const updateName = (fullName) => {
  return { type: "account/updateName", payload: fullName };
};
// store.dispatch(createCustomer("Benedict", "ENG1708899"));
// console.log(store.getState());
export default customerReducer;
