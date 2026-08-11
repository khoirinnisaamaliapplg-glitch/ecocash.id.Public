# Dokumentasi Tailwind CSS (Metode Instalasi & Konfigurasi Terbaru)

## Pendahuluan

Dokumentasi ini menjelaskan cara terbaru menginstal dan mengonfigurasi Tailwind CSS pada proyek Vite, termasuk langkah-langkah yang benar untuk menggunakan plugin `@tailwindcss/vite`.

## 1. Persiapan Paket

Untuk instalasi terbaru dengan Vite, gunakan paket berikut:

```bash
npm install tailwindcss @tailwindcss/vite --save-dev
```

- `tailwindcss`: paket utama Tailwind CSS.
- `@tailwindcss/vite`: plugin resmi Tailwind untuk Vite.

> Catatan: Jika Anda sudah memasang `@tailwindcss/postcss` atau konfigurasi PostCSS lama, cukup hapus/abaikan plugin tersebut saat beralih ke metode Vite ini.

## 2. Konfigurasi Vite

Buka `vite.config.js` dan daftarkan plugin Tailwind:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

Ini adalah konfigurasi terbaru yang direkomendasikan ketika menggunakan Tailwind dengan Vite.

## 3. Konfigurasi CSS Entry

Buat atau gunakan file CSS entry di `src/styles/index.css` dan tambahkan:

```css
@import "tailwindcss";
```

Pada metode ini, `@import "tailwindcss";` sudah cukup untuk mengaktifkan semua utilitas Tailwind pada Vite. Jika ingin menambahkan variabel global atau kustomisasi lain, letakkan setelah direktif ini.

## 4. Impor CSS di `src/main.jsx`

Pastikan entry CSS Tailwind diimpor sekali pada titik masuk aplikasi React:

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Hindari impor `./index.css` dua kali atau menimpa entry Tailwind utama.

## 5. `postcss.config.js` dan Vite

Dalam metode terbaru ini, `postcss.config.js` tidak perlu lagi mengonfigurasi Tailwind sebagai plugin PostCSS. Jika file tetap ada, cukup tulis:

```js
export default {
  plugins: {
    autoprefixer: {},
  },
}
```

Tailwind diproses langsung oleh plugin `@tailwindcss/vite`, sehingga konfigurasi PostCSS tidak harus memuat `tailwindcss` lagi.

## 6. Verifikasi dan Jalankan

Setelah konfigurasi selesai, jalankan:

```bash
npm run dev
```

Jika setup benar, Vite akan membangun aplikasi dan Tailwind CSS akan bekerja tanpa error konfigurasi.

## 7. Contoh Struktur Berkas

Rekomendasi struktur minimal:

```text
project-root/
  package.json
  vite.config.js
  src/
    main.jsx
    App.jsx
    styles/
      index.css
```

## 8. Hal yang Harus Dihindari

- Jangan gunakan `@tailwindcss/postcss` bersamaan dengan `@tailwindcss/vite` untuk Vite modern.
- Jangan impor file CSS Tailwind lebih dari sekali di `src/main.jsx`.
- Jangan biarkan `src/index.css` memuat direktif Tailwind jika Anda sudah menggunakan `src/styles/index.css`.

## 9. Kasus yang Sering Terjadi

### 9.1. Tailwind tidak muncul

Penyebab umum:
- `src/styles/index.css` tidak diimpor.
- `vite.config.js` tidak memanggil `tailwindcss()`.
- `postcss.config.js` masih mengandung plugin lama yang konflik.

### 9.2. Error import `@tailwindcss/postcss`

Jika Anda menggunakan plugin Vite, cukup pindahkan konfigurasi Tailwind dari PostCSS ke `vite.config.js` dan hapus entri `@tailwindcss/postcss`.

## 10. Kesimpulan

Metode terbaru Tailwind + Vite adalah:

- install `tailwindcss` dan `@tailwindcss/vite`
- konfigurasikan `vite.config.js` dengan `tailwindcss()`
- gunakan `@import "tailwindcss";` di CSS entry
- impor CSS entry tersebut di `src/main.jsx`

Dengan mengikuti alur ini, konfigurasi Tailwind menjadi lebih sederhana dan lebih cocok dengan ekosistem Vite modern.
