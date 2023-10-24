import { configureStore } from "@reduxjs/toolkit";

import result from "../slice/result";
export const store = configureStore({
    reducer: {
        analysisResult: result,

    }
})