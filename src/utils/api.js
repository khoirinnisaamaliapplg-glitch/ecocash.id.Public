// src/utils/api.js
import i18n from "./i18n";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.ecocash.id/api/v1";

export async function apiRequest(endpoint, options = {}) {
  // Ambil bahasa aktif dari i18next (default: 'id')
  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  // Sisipkan parameter lang ke URL query string secara otomatis
  const separator = endpoint.includes("?") ? "&" : "?";
  const urlWithLang = endpoint.includes("lang=")
    ? `${BASE_URL}${endpoint}`
    : `${BASE_URL}${endpoint}${separator}lang=${currentLang}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
    "Accept-Language": currentLang,
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(urlWithLang, config);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `HTTP Error ${response.status}`);
    }

    return result;
  } catch (error) {
    console.error(`[API ERROR] ${options.method || "GET"} ${endpoint}:`, error);
    throw error;
  }
}