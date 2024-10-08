# cara pembuatan

- npm init -y
- npm i express dotenv sequelize
- membuat file index
- membuat file .env
- membuat utils/connections.js
- membuat model
- membuat relasi one to many

# Sistem Basis Data Pet Shop
Sistem basis data ini dirancang untuk aplikasi pet shop yang mengelola pengguna (user), hewan peliharaan, transaksi, serta entitas terkait seperti pakan dan admin. Sistem ini menggunakan tabel-tabel relasional, dengan asosiasi untuk mengelola hubungan antara entitas-entitas tersebut.

#### Struktur Basis Data
#### Tabel dan Hubungannya
#### petshop_admin

Kolom:
- id: Primary Key, Auto Increment.
- name: VARCHAR(255), Nama admin.
- password: VARCHAR(255), Kata sandi untuk login admin.
- createdAt: DATETIME, Waktu pembuatan data.
- updatedAt: DATETIME, Waktu pembaruan data.
Hubungan:
- Satu admin dapat terlibat dalam banyak transaksi (Hubungan 1
dengan petshop_transaksi).
petshop_user

- Kolom:
-  id: Primary Key, Auto Increment.
-  name: VARCHAR(255), Nama pengguna.
- email: VARCHAR(255), Email pengguna.
- createdAt: DATETIME, Waktu pembuatan data.
- updatedAt: DATETIME, Waktu pembaruan data.
### Hubungan:
- Satu pengguna dapat memiliki banyak hewan peliharaan (Hubungan 1
dengan petshop_hewan).
- Satu pengguna juga bisa melakukan banyak transaksi (Hubungan 1
dengan petshop_transaksi).
petshop_hewan (Hewan Peliharaan)

Kolom:
- id: Primary Key, Auto Increment.
- name: VARCHAR(255), Nama hewan.
- jenis: VARCHAR(255), Jenis hewan.
- harga: INT, Harga hewan.
- UserId: Foreign Key, merujuk ke id dari petshop_user.
- createdAt: DATETIME, Waktu pembuatan data.
- updatedAt: DATETIME, Waktu pembaruan data.
Hubungan:
- Setiap hewan peliharaan dimiliki oleh satu pengguna (Hubungan M:1 dengan petshop_user).
- Hewan peliharaan bisa terlibat dalam transaksi (Hubungan 1:1 dengan petshop_transaksi).
petshop_pakan (Pakan)

Kolom:
- id: Primary Key, Auto Increment.
- name: VARCHAR(255), Nama pakan.
- jenisPakan: VARCHAR(255), Jenis pakan.
- harga: INT, Harga pakan.
- UserId: Foreign Key, merujuk ke id dari petshop_user.
- createdAt: DATETIME, Waktu pembuatan data.
- updatedAt: DATETIME, Waktu pembaruan data.
Hubungan:
- Pakan dapat terkait dengan transaksi (Hubungan 1:1 dengan petshop_transaksi).
- Setiap pakan dimiliki oleh satu pengguna (Hubungan M:1 dengan petshop_user).
petshop_transaksi (Transaksi)

Kolom:
- id: Primary Key, Auto Increment.
- tanggalPembelian: DATETIME, Tanggal pembelian.
- nominal: INT, Jumlah nominal transaksi.
- createdAt: DATETIME, Waktu pembuatan data.
- updatedAt: DATETIME, Waktu pembaruan data.
- AdminId: Foreign Key, merujuk ke id dari petshop_admin.
- UserId: Foreign Key, merujuk ke id dari petshop_user.
- HewanId: Foreign Key, merujuk ke id dari petshop_hewan.
- PakanId: Foreign Key, merujuk ke id dari petshop_pakan.
Hubungan:
- Satu transaksi melibatkan satu pengguna, satu admin, dan dapat melibatkan satu hewan serta satu pakan.
- Setiap transaksi unik berhubungan dengan satu hewan dan satu pakan.
Ringkasan Hubungan
- Pengguna: Dapat memiliki banyak hewan peliharaan dan bisa melakukan banyak transaksi.
- Hewan Peliharaan: Setiap hewan peliharaan dimiliki oleh satu pengguna dan bisa terlibat dalam transaksi.
- Pakan: Setiap pakan dimiliki oleh satu pengguna dan bisa terlibat dalam transaksi.
- Admin: Mengelola transaksi yang dilakukan oleh pengguna.
Transaksi: Mencatat detail pembelian, termasuk pengguna, hewan, admin, dan pakan yang terlibat.- 