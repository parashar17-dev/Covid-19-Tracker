export default (state, action) => {
   switch (action.type) {
      case 'SET_COUNTRY':
         return {
            ...state,
            country: action.payload,
         };
      case 'SET_COUNTRY_INFO':
         return {
            ...state,
            countryInfo: action.payload,
         };
      case 'SET_TABLE_DATA':
         return {
            ...state,
            tableData: action.payload,
         };
      case 'SET_COUNTRIES':
         return {
            ...state,
            countries: action.payload,
         };
      case 'SET_MAP_CENTER':
         return {
            ...state,
            center: action.payload,
         };
      case 'SET_MAP_ZOOM':
         return {
            ...state,
            zoom: 4,
         };
      case 'SET_CASE_TYPES':
         return {
            ...state,
            casesType: action.payload,
         };
      default:
         return state;
   }
};
