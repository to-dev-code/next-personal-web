import { SessionKeys } from "../enums";

export const getSession = (key: SessionKeys) => {
  return sessionStorage.getItem(key);
};

export const setSession = (key: SessionKeys, value: string) => {
  sessionStorage.setItem(key, value);
};

export const removeSession = (key: SessionKeys) => {
  sessionStorage.removeItem(key);
};

export const clearSession = (key: SessionKeys) => {
  sessionStorage.clear();
};
