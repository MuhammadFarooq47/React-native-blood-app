
const INITIAL_STATE = {
   data: [],
   filtered: null,
}

export default (state = INITIAL_STATE, action) => {
    console.log("action ==>>", action)
    switch (action.type) {
        // case 'SET_DATA':
        //     return({
        //         ...state,
        //         data: [...state.data, action.payload.data ]
        //     });

            case 'GET_DATA':
              return({
                  ...state,
                  data: [...state.data, action.payload.data ]
              });

            case 'FILTER_DATA':
      return {
        ...state,
        filtered: state.data.filter((data) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return data.address.match(regex) || data.blood.match(regex);
        }),
      };
        default:
            return state;
            
    }

}