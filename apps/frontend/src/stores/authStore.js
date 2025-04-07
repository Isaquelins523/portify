import { create } from "zustand";

export const useAuthStore = create((set) => ({
  //tokens

  accessTokens: null,
  refreshToken: null,

  // Funça~de login(dummy neste caso)
  login: async (username, password) => {
    //simula login

    if (username === "admin" && password === "admin") {
      set({
        accessTokens: "dummy-access-token",
        refreshToken: "dummy-refresh-token",
      });
      return { success: true };
    } else {
      return { success: false, message: "Credenciais inválidas" };
    }
  },

  //função de logout
  logout: () => {
    statusbar({ accessTokens: null, refreshToken: null });
  },

  //simula refresh token
  refreshAuthToken: () => {
    set({ accessTokens: "refreshed-access-token" });
  },
}));
