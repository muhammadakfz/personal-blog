---
title: "Modern Physics #1: Persamaan Schrödinger"
date: 2025-11-08 09:00:00 +0700
toc: true
toc_sticky: true
categories: [physics]
tags: [math, latex]
excerpt: "Catatan kuliah Persamaan Schrödinger waktu-independen dan waktu-dependen dalam mekanika kuantum."
---

Pada fisika klasik, gerak partikel dijelaskan oleh hukum Newton. Fisika klasik memprediksi posisi **r(t)** dan kecepatan **v(t)** partikel secara absolut dan pasti. Semua behavior berlaku pada benda makroskopik. Namun terdapat masalah ketika mencoba menjelaskan fenomena pada skala quantum (mikroskopik), fisika klasik gagal menjelaskan perilaku partikel subatomik seperti elektron yang berada dalam potensi yang kompleks. Maka dari itu, diperlukan teori baru yaitu mekanika kuantum. Mekanika kuantum memperkenalkan konsep fungsi gelombang **ψ(r, t)** yang memberikan informasi probabilistik tentang posisi dan momentum partikel. Persamaan tersebut dikenal sebagai Persamaan Schrödinger. 



## Persamaan Schrödinger Waktu-Dependen (TDSE)

Intuisi dasar (gelombang ↔ partikel):

- de Broglie: $$\lambda = \frac{h}{p}$$
- Planck: $$E = h \nu$$
- Schrödinger mengusulkan bahwa partikel dapat digambarkan sebagai gelombang dengan fungsi gelombang **ψ(r, t)**.

Persamaan Schrödinger waktu-dependen (TDSE) untuk partikel dengan massa m dalam potensial $$V(r, t)$$ adalah:

$$i \hbar \frac{\partial \psi(r, t)}{\partial t} = -\frac{\hbar^2}{2m} \nabla^2 \psi(r, t) + V(r, t) \psi(r, t)$$
{: .text-center}

Tinjau secara satu dimensi (1D) untuk partikel bergerak sepanjang sumbu $$x$$ dalam potensial $$V(x, t)$$:

$$i \hbar \frac{\partial \psi(x, t)}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \psi(x, t)}{\partial x^2} + V(x, t) \psi(x, t)$$
{: .text-center}

Separasi variabel:
$$\psi(x, t) = \phi(x) T(t)$$


Substitusi ke TDSE dan bagi dengan **φ(x)T(t)** menghasilkan:

$$i \hbar \frac{1}{T(t)} \frac{d T(t)}{d t} = -\frac{\hbar^2}{2m} \frac{1}{\phi(x)} \frac{d^2 \phi(x)}{d x^2} + V(x)$$
{: .text-center}

Karena sisi kiri hanya bergantung pada waktu t dan sisi kanan hanya bergantung pada posisi $$x$$, maka kedua sisi harus sama dengan suatu konstanta yang kita sebut energi total E:

$$i \hbar \frac{1}{T(t)} \frac{d T(t)}{d t} = E$$
{: .text-center}

Maka kita dapatkan persamaan untuk **T(t)**:
$$i \hbar \frac{d T(t)}{d t} = E T(t)$$

Integrasi kedua sisi:

$$\int \frac{d T(t)}{T(t)} = \frac{E}{i \hbar} \int dt$$
{: .text-center}    

$$\ln |T(t)| = -\frac{i E t}{\hbar} + C$$
{: .text-center}

Di mana C adalah konstanta integrasi dan bisa diasumsikan C terkait dengan nilai awal $T(0)$ ketika $t=0$, maka:

$$T(0) = e^C$$
{: .text-center}

Solusi untuk T(t) adalah:

$$T(t) = T(0) e^{-\frac{i E t}{\hbar}}$$
{: .text-center}

## Persamaan Schrödinger Waktu-Independen (TISE)
Jika potensial $$V(x)$$ tidak bergantung pada waktu, maka kita dapat menuliskan TDSE sebagai:

$$i \hbar \frac{\partial \psi(x, t)}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \psi(x, t)}{\partial x^2} + V(x) \psi(x, t)$$
{: .text-center}

Lakukan separasi variabel $\psi(x,t)=\phi(x)T(t)$ dan bagi kedua sisi dengan $\phi(x)T(t)$:

$$i\hbar\,\frac{1}{T}\,\frac{dT}{dt} 
= -\frac{\hbar^2}{2m}\,\frac{1}{\phi}\,\frac{d^2\phi}{dx^2} + V(x) = E.$$
{: .text-center}

Bagian waktu menghasilkan solusi eksponensial:

$$T(t) = T(0)\,e^{-iEt/\hbar}.$$
{: .text-center}

Bagian ruang memberi TISE (persamaan eigen energi):

$$-\frac{\hbar^2}{2m}\,\frac{d^2\phi(x)}{dx^2} + V(x)\,\phi(x) = E\,\phi(x).$$
{: .text-center}

Catatan: spektrum $E$ dan bentuk $\phi(x)$ ditentukan oleh $V(x)$ dan syarat batas (normalisasi, kontinuitas, dll.).

## Infinite Square Well
Sebagai contoh, pertimbangkan partikel dalam sumur potensial tak hingga (infinite square well) dengan lebar $$a$$:

$$V(x) = \begin{cases}
0, & 0 < x < a \\
\infty, & \text{lainnya}
\end{cases}$$
{: .text-center}

Dalam wilayah sumur ($0 < x < a$), TISE menjadi:

$$-\frac{\hbar^2}{2m}\,\frac{d^2\phi(x)}{dx^2} + 0 = E\,\phi(x).$$
{: .text-center}

Solusi umum adalah:

$$\phi(x) = A \sin(kx) + B \cos(kx),$$
{: .text-center}
di mana $$k = \sqrt{\frac{2mE}{\hbar^2}}.$$

Syarat batas $\phi(0) = 0$ dan $\phi(a) = 0$ memberikan:

- Dari $\phi(0) = 0$ diperoleh $B = 0$
- Dari $\phi(a) = 0$ diperoleh $k a = n \pi
$, dengan $n = 1, 2, 3, \ldots$
Maka, nilai energi terkuantisasi adalah:

$$E_n = \frac{n^2 \pi^2 \hbar^2}{2m a^2}, \quad n = 1, 2, 3, \ldots$$
{: .text-center}

Bentuk fungsi gelombang normalisasi adalah:

$$\phi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n \pi x}{a}\right), \quad n = 1, 2, 3, \ldots$$
{: .text-center}

## Referensi
- K. S. Krane, "Modern Physics," Wiley, 1988.