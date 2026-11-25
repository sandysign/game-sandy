# Game Sandy

Koleksi game HTML5 buat dimainin di HP. Tiap game ada di foldernya sendiri dan bisa di-install sebagai PWA (jalan offline).

| Game | Folder |
|---|---|
| Blok Ledak — arena bom ala Bomberman, landscape, 4 mode + perk + toko | `blok-ledak/` |
| Sudoku — 4 tingkat, tantangan harian, catatan, petunjuk | `sudoku/` |
| Catur — lawan komputer 5 level atau 2 pemain, jam catur | `catur/` |
| Jaga Benteng — tower defense, 3 peta, 4 menara, 20 gelombang | `jaga-benteng/` |

Main online: aktifkan GitHub Pages (Settings → Pages → branch `main`, folder `/root`).

## Lisensi pihak ketiga (Catur)

- Mesin komputer: [Stockfish](https://stockfishchess.org) 19 versi lite (build WebAssembly dari paket npm `stockfish`), lisensi GPL-3.0 — lihat `catur/engine/COPYING.txt`.
- Aturan langkah: [chess.js](https://github.com/jhlywa/chess.js), lisensi BSD-2-Clause — lihat `catur/lib/LICENSE-chess.js.txt`.
- Gambar bidak: set "cburnett" karya Colin M.L. Burnett (diambil dari paket chessground), lisensi GPL / CC BY-SA.
