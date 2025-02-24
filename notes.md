# How to Run the Project

## Prerequisites
Sebelum menjalankan proyek ini, pastikan Anda memiliki:
- **Node.js** terinstal di sistem Anda ([Download Node.js](https://nodejs.org/))
- **NPM (Node Package Manager)** (biasanya sudah termasuk dalam instalasi Node.js)

## Setup dan Instalasi
Ikuti langkah-langkah berikut untuk mengatur dan menjalankan proyek ini secara lokal:

### 1. Clone Repository (Jika Diperlukan)
Jika proyek ini berada dalam repositori Git, clone terlebih dahulu:
```sh
git clone https://github.com/username/lovejar.git
cd lovejar
```

### 2. Inisialisasi Proyek Node.js
Jika belum ada `package.json`, jalankan perintah berikut untuk menginisialisasi proyek:
```sh
npm init -y
```

### 3. Install Dependencies
Pastikan **Express.js** sudah terinstal dengan menjalankan perintah berikut:
```sh
npm install express
```

### 4. Jalankan Server
Setelah instalasi selesai, jalankan server menggunakan:
```sh
node index.js
```
Jika ingin menjalankan dengan mode pengembangan agar restart otomatis saat ada perubahan, gunakan **nodemon** (jika belum ada, install dengan `npm install -g nodemon`):
```sh
nodemon index.js
```

### 5. Akses Aplikasi di Browser
Setelah server berjalan, buka browser dan akses:
```
http://localhost:3000
```
Pastikan tidak ada error di console saat menjalankan server.

## Troubleshooting
Jika mengalami masalah saat menjalankan proyek, coba langkah berikut:
- **Error: Cannot find module 'express'**
  - Pastikan sudah menjalankan `npm install express`
- **Port 3000 sudah digunakan**
  - Coba jalankan di port lain dengan mengganti kode di `index.js`:
    ```js
    app.listen(4000, '0.0.0.0', () => {
      console.log('Server running at http://0.0.0.0:4000');
    });
    ```
  - Atau jalankan dengan perintah:
    ```sh
    PORT=4000 node index.js
    ```
- **File `messages.json` tidak ditemukan (404 Not Found)**
  - Pastikan file `messages.json` ada di direktori yang benar.
  - Coba akses langsung di browser: `http://localhost:3000/messages.json`.

## How to Stop the Server
Untuk menghentikan server, tekan **Ctrl + C** di terminal tempat server berjalan.
Jika menggunakan **nodemon**, tekan **Ctrl + C** dua kali.


