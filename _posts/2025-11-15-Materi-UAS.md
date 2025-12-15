---
title: "Wave and Vibration #3: Latihan Soal Materi UAS"
date: 2025-12-15
toc: true
categories: [Fisika, Gelombang dan Getaran]
tags: [electromagnetic waves, gelombang elektromagnetik, fisika, getaran]
excerpt: "Latihan soal Getaran dan Gelombang tentang materi UAS."
---

## Soal 1

1.  Gelombang bunyi dibangkitkan di udara pada suhu $20^\circ\text{C}$, berapakah kecepatan bunyi di udara jika diketahui satu mol udara memiliki massa $29\text{ gram}$? (Petunjuk: gunakan nilai $\gamma$ untuk udara)
2.  Sebuah pipa organa tertutup digunakan untuk menghasilkan gelombang bunyi dengan frekuensi dasar $40\text{ Hz}$. Berapakah panjang pipa yang akan digunakan untuk pipa organa tertutup dengan frekuensi dasar tersebut? (Petunjuk: gunakan jawaban pada poin 1.1)
3.  Berapakah frekuensi selanjutnya dari kasus pada poin b?
4.  Berapakah fraksi energi yang direfleksikan gelombang bunyi jika gelombang bunyi jatuh normal di permukaan air?

## Soal 2
Diketahui kabel koaksial dengan jari-jari $r_1 = 1 \text{ mm}$ dan $r_2 = 2 \text{ mm}$ dipisahkan dengan bahan dielektrik dengan konstanta dielektrik 4, tentukan:
1.  Induktansi diri
2.  Kapasitansi
3.  Impedansi
4.  Kecepatan rambat gelombang
5.  Jika kabel koaksial pada poin b disambungkan dengan kabel lain yang bahan dielektriknya berbeda dengan konstanta dielektrik 8, tentukan:
    *   i. Koefisien refleksi amplitudo tegangan
    *   ii. Koefisien refleksi amplitudo arus
    *   iii. Koefisien transmisi amplitudo tegangan
    *   iv. Koefisien transmisi amplitudo arus

## Soal 3

A medium has a conductivity $\sigma = 10^{-1} \text{ Sm}^{-1}$ and a relative permittivity $\epsilon_r = 50$, which is constant with frequency. If the relative permeability $\mu_r = 1$, is the medium a conductor or a dielectric at a frequency of:

1. $50 \text{ kHz}$
2. $10000 \text{ MHz}$

## Soal 4

Suatu gelombang elektromagnetik yang merambat ke arah sumbu $z$ positif dengan vektor medan listrik searah sumbu $x$ dapat dinyatakan dengan persamaan gelombang:

$$ \mathbf{E}(z,t) = E_{\text{max}} \mathbf{\hat{x}} \sin(kz - \omega t) $$

1.  Nyatakan persamaan bagi gelombang vektor medan magnetnya ($\mathbf{H}(z,t)$).
2.  Hitung vektor Poynting-nya.
3.  Buktikan bahwa intensitas yang dibawa oleh gelombang tersebut sebesar $\frac{1}{2} c \epsilon_0 E_{\text{max}}^2$.

## Soal 5

Anggap model klasik Drude berlaku bagi material tembaga. Diketahui konsentrasi elektron pada tembaga sebesar $8.49 \times 10^{28} \text{ elektron/m}^3$.

1. Tentukan besar frekuensi plasma ($\omega_p$) dari sistem elektron pada tembaga tersebut.
2. Jika suatu cahaya tampak dengan panjang gelombang $600 \text{ nm}$ dijatuhkan ke permukaan material tembaga ini, hitung kedalaman penetrasinya.
3. Jika sinar UV dengan panjang gelombang $100 \text{ nm}$ dijatuhkan pada tembaga tersebut, jelaskan apakah sinar UV tersebut dapat berpropagasi di dalam tembaga tersebut.

---

## Pembahasan

### Jawaban Soal 1

**1. Kecepatan Bunyi di Udara**

Untuk mencari kecepatan bunyi di udara pada suhu $20^\circ\text{C}$, kita gunakan persamaan kecepatan bunyi pada gas ideal:
$$ v = \sqrt{\frac{\gamma R T}{M}} $$

Kita konversi suhu ke Kelvin, $T = 20 + 273 = 293\text{ K}$. Massa molar udara $M = 29\text{ g/mol} = 0.029\text{ kg/mol}$. Dengan $\gamma = 1.4$ dan $R = 8.314\text{ J/(mol K)}$, perhitungannya adalah:

$$ v = \sqrt{\frac{1.4 \cdot 8.314 \cdot 293}{0.029}} \approx 342.93\text{ m/s} $$

**2. Panjang Pipa Organa Tertutup**

Pada pipa organa tertutup, frekuensi dasar ($f_1$) berhubungan dengan panjang pipa ($L$) melalui rumus $f_1 = \frac{v}{4L}$.
Dengan $f_1 = 40\text{ Hz}$ dan $v \approx 342.93\text{ m/s}$, panjang pipa yang dibutuhkan adalah:

$$ L = \frac{v}{4f_1} = \frac{342.93}{160} \approx 2.14\text{ m} $$

**3. Frekuensi Selanjutnya**

Pipa organa tertutup hanya memiliki harmonik ganjil ($n = 1, 3, 5, \dots$). Jadi, frekuensi resonansi berikutnya setelah frekuensi dasar ($f_1$) adalah harmonik ketiga ($f_3$):

$$ f_3 = 3 \cdot f_1 = 3 \cdot 40 = 120\text{ Hz} $$

**4. Refleksi Energi**

Ketika gelombang bunyi merambat dari udara ke air, sebagian energi akan dipantulkan. Koefisien refleksi ($R$) dihitung berdasarkan perbedaan impedansi akustik ($Z = \rho v$) kedua medium.

*   Udara: $Z_1 \approx 1.2 \cdot 343 \approx 411.6\text{ Pa s/m}$
*   Air: $Z_2 \approx 1000 \cdot 1480 \approx 1.48 \times 10^6\text{ Pa s/m}$

$$ R = \left( \frac{Z_2 - Z_1}{Z_2 + Z_1} \right)^2 = \left( \frac{1.48 \times 10^6 - 411.6}{1.48 \times 10^6 + 411.6} \right)^2 \approx 0.999 $$

Jadi, sekitar **99.9%** energi bunyi dipantulkan kembali ke udara.

### Jawaban Soal 2

Diketahui kabel koaksial dengan $r_1 = 1 \text{ mm}$, $r_2 = 2 \text{ mm}$, dan konstanta dielektrik $\epsilon_r = 4$.

**1. Induktansi Diri ($L$)**

Induktansi per satuan panjang dihitung dengan:
$$ L = \frac{\mu_0}{2\pi} \ln\left(\frac{r_2}{r_1}\right) $$
$$ L = \frac{4\pi \times 10^{-7}}{2\pi} \ln(2) = 2 \times 10^{-7} \cdot 0.693 \approx 138.6 \text{ nH/m} $$

**2. Kapasitansi ($C$)**

Kapasitansi per satuan panjang menggunakan $\epsilon = \epsilon_r \epsilon_0$:

$$ C = \frac{2\pi\epsilon}{\ln(r_2/r_1)} = \frac{2\pi (4 \cdot 8.854 \times 10^{-12})}{0.693} \approx 321.1 \text{ pF/m} $$

**3. Impedansi Karakteristik ($Z_0$)**

$$ Z_0 = \sqrt{\frac{L}{C}} = \sqrt{\frac{1.386 \times 10^{-7}}{321.1 \times 10^{-12}}} \approx 20.78 \Omega $$

**4. Kecepatan Rambat ($v$)**

$$ v = \frac{c}{\sqrt{\epsilon_r \mu_r}} = \frac{3 \times 10^8}{\sqrt{4}} = 1.5 \times 10^8 \text{ m/s} $$

**5. Sambungan Kabel ($\epsilon_{r2} = 8$)**

Impedansi kabel kedua adalah $Z_{02} = \frac{Z_{01}}{\sqrt{8/4}} = \frac{20.78}{\sqrt{2}} \approx 14.7 \Omega$.

*   **Refleksi Tegangan:** $\Gamma_V = \frac{Z_{02} - Z_{01}}{Z_{02} + Z_{01}} = \frac{14.7 - 20.78}{14.7 + 20.78} \approx -0.171$
*   **Refleksi Arus:** $\Gamma_I = -\Gamma_V \approx 0.171$
*   **Transmisi Tegangan:** $T_V = 1 + \Gamma_V \approx 0.829$
*   **Transmisi Arus:** $T_I = 1 + \Gamma_I \approx 1.171$

### Jawaban Soal 3

Untuk menentukan sifat medium (konduktor atau dielektrik), kita bandingkan konduktivitas ($\sigma$) dengan $\omega \epsilon$.
Diketahui $\sigma = 0.1 \text{ S/m}$ dan $\epsilon_r = 50$.

- Jika $$\frac{\sigma}{\omega \epsilon} \gg 1$$ maka medium bersifat konduktor
- jika $$\frac{\sigma}{\omega \epsilon} \ll 1$$ maka medium bersifat dielektrik.

**1. Pada Frekuensi 50 kHz**

$$ \frac{\sigma}{\omega \epsilon} = \frac{0.1}{2\pi (5 \times 10^4) (50 \cdot 8.854 \times 10^{-12})} \approx 719 $$

Karena rasionya jauh lebih besar dari 1 ($719 \gg 1$), medium bersifat **Konduktor**.

**2. Pada Frekuensi 10000 MHz**

$$ \frac{\sigma}{\omega \epsilon} = \frac{0.1}{2\pi (10^{10}) (50 \cdot 8.854 \times 10^{-12})} \approx 0.0036 $$

Karena rasionya jauh lebih kecil dari 1 ($0.0036 \ll 1$), medium bersifat **Dielektrik**.

### Jawaban Soal 4

Gelombang merambat ke arah $+z$ dengan $\mathbf{E}$ searah $+x$.

**1. Persamaan Medan Magnet ($\mathbf{H}$)**

Arah $\mathbf{H}$ tegak lurus terhadap arah rambat dan $\mathbf{E}$, yaitu ke arah $+y$. Amplitudonya adalah $H_{\text{max}} = E_{\text{max}} / \eta_0$.

$$ \mathbf{H}(z,t) = \frac{E_{\text{max}}}{\eta_0} \mathbf{\hat{y}} \sin(kz - \omega t) $$

**2. Vektor Poynting ($\mathbf{S}$)**

$$ \mathbf{S} = \mathbf{E} \times \mathbf{H} = \left( E_{\text{max}} \mathbf{\hat{x}} \sin(kz - \omega t) \right) \times \left( \frac{E_{\text{max}}}{\eta_0} \mathbf{\hat{y}} \sin(kz - \omega t) \right) $$

$$ \mathbf{S} = \frac{E_{\text{max}}^2}{\eta_0} \sin^2(kz - \omega t) \mathbf{\hat{z}} $$

**3. Bukti Intensitas**

Intensitas adalah rata-rata waktu dari magnitudo vektor Poynting. Rata-rata dari $\sin^2$ adalah $1/2$.

$$ I = \langle S \rangle = \frac{E_{\text{max}}^2}{2\eta_0} $$

Karena $\eta_0 = \sqrt{\mu_0/\epsilon_0} = 1/(c\epsilon_0)$, maka:

$$ I = \frac{1}{2} c \epsilon_0 E_{\text{max}}^2 $$

### Jawaban Soal 5

**1. Frekuensi Plasma ($\omega_p$)**

Frekuensi plasma dihitung dari konsentrasi elektron $n = 8.49 \times 10^{28} \text{ m}^{-3}$:

$$ \omega_p = \sqrt{\frac{n e^2}{m \epsilon_0}} \approx \sqrt{\frac{8.49 \times 10^{28} \cdot (1.602 \times 10^{-19})^2}{9.109 \times 10^{-31} \cdot 8.854 \times 10^{-12}}} \approx 1.643 \times 10^{16} \text{ rad/s} $$

**2. Kedalaman Penetrasi ($\lambda = 600 \text{ nm}$)**

Frekuensi cahaya ini adalah $\omega \approx 3.14 \times 10^{15} \text{ rad/s}$.
Karena $\omega < \omega_p$, gelombang tidak dapat merambat masuk (terpantul), namun menembus sedikit sedalam *skin depth* $\delta$:

$$ \delta = \frac{c}{\sqrt{\omega_p^2 - \omega^2}} \approx \frac{3 \times 10^8}{1.613 \times 10^{16}} \approx 18.6 \text{ nm} $$

**3. Propagasi Sinar UV ($\lambda = 100 \text{ nm}$)**

Frekuensi sinar UV ini adalah $\omega \approx 1.885 \times 10^{16} \text{ rad/s}$.
Karena $\omega > \omega_p$, elektron tidak dapat merespons cukup cepat untuk memantulkan gelombang, sehingga material menjadi transparan. Sinar UV **dapat berpropagasi** di dalam tembaga.

