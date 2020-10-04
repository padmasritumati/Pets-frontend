const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SERVICES":
      return { ...state, ...action.payload };

    case "PETS":
      return { ...state, ...action.payload };
    case "ALLPETS":
      return { ...state, pets: [...state.pets, action.payload] };
    case "UPDATEPET":
      return { ...state, pets: [...action.payload.pets] };

    case "DELECTPETS":
      return { ...state, pets: [...action.payload] };
    default:
      return state;
  }
};
