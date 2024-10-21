import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { footerApi } from "./services/footerApi";
import { navbarApi } from "./services/navbarApi";
import { formApi } from "./services/formApi";
import { faqApi } from "./services/faqApi";
import { contadorApi } from "./services/contadorApi";
import { serviciosApi } from "./services/serviciosApi";
import { ServiciosFormApi } from "./services/serviciosRequeridos";

export const store = configureStore({
  reducer: {
    // Agrega el reducer de footerApi
    [footerApi.reducerPath]: footerApi.reducer,
    [navbarApi.reducerPath]: navbarApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
    [contadorApi.reducerPath]: contadorApi.reducer,
    [serviciosApi.reducerPath]: serviciosApi.reducer,
    [ServiciosFormApi.reducerPath]: ServiciosFormApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      footerApi.middleware,
      navbarApi.middleware,
      formApi.middleware,
      faqApi.middleware,
      contadorApi.middleware,
      serviciosApi.middleware,
      ServiciosFormApi.middleware,
    ]),
});

// Configura listeners para RTK Query
setupListeners(store.dispatch);

// Tipos para el estado y despachador de la aplicación
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
