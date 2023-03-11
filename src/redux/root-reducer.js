import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice";
import filterReducer from "./filter/filter-slice";
import contactsReducer from "./contacts/contacts-slice";

const rootReducer = combineReducers({
    auth:authReducer,
    contacts: contactsReducer,
    filter:filterReducer,
})

export default rootReducer