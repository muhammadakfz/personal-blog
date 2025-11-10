---
title: "Wave and Vibration #2: Gelombang pada Saluran Transmisi"
date: 2025-11-09
toc: true
categories: [Fisika, Gelombang dan Getaran]
tags: [gelombang, saluran transmisi, fisika, getaran]
excerpt: "Ringkasan materi kuliah Getaran dan Gelombang tentang propagasi gelombang elektromagnetik pada saluran transmisi."
---

Aliran listrik pada suatu kabel tidak terjadi secara langsung dari ujung ke ujung. Listrik merambat sebagai gelombang elektromagnetik, serupa dengan gelombang mekanik pada tali. Muatan listrik atau elektron bergetar di posisi masing-masing tanpa berpindah secara permanen sepanjang medium. Pola getaran inilah yang bergerak maju, membawa energi dari sumber menuju tujuan.

<p align="center">
    <img src="{{ '/assets/images/transmissionWave/1.png' | relative_url }}" width="680" alt="Propagasi gelombang pada saluran transmisi">
    <br>
</p>
<div class="figure-caption" style="text-align:left; font-size:0.9em;">

Daya dari generator merambat sepanjang saluran transmisi yang dianggap sangat panjang (mendekati tak hingga). (a) Terminal generator bermuatan positif di titik A; distribusi muatan di konduktor menghasilkan medan listrik dan gelombang tegangan maju. (b) Setengah periode kemudian polaritas sumber terbalik dan terminal generator sekarang positif di titik B; pola gelombang tegangan telah bergeser maju sejauh setengah panjang gelombang. (c) Demonstrasi laboratorium (kawat Lecher): tegangan maksimum (antinode) muncul periodik sepanjang kawat; lampu neon menyala bila didekatkan ke posisi tegangan maksimum (|V| paling besar) karena medan listrik lokal cukup kuat untuk mengionisasi gas dalam lampu.
</div>

### Ideal or Lossless Transmission Line

<p align="center">
    <img src="{{ '/assets/images/transmissionWave/2.png' | relative_url }}" width="680" alt="Propagasi gelombang pada saluran transmisi">
    <br>
</p>

Misal sebuah elemen pendek saluran transmisi dengan panjang $dx \ll \lambda$ (jauh lebih kecil dari panjang gelombang). Untuk saluran ideal tanpa resistansi, induktansi diri elemen adalah $L_0\,dx$ dan kapasitansinya $C_0\,dx$.

Jika laju perubahan tegangan per satuan panjang pada waktu konstan adalah $\partial V/\partial x$, maka beda tegangan ujung-ujung elemen adalah $\left(\partial V/\partial x\right)dx$. Beda tegangan ini sama dengan jatuh tegangan pada induktansi seri, $-(L_0 dx)\,\partial I/\partial t$. Jadi

$$
\frac{\partial V}{\partial x}\,dx = - (L_0 dx)\,\frac{\partial I}{\partial t}
\quad\Rightarrow\quad
\boxed{\; \frac{\partial V}{\partial x} = - L_0\,\frac{\partial I}{\partial t} \;}
$$

Jika laju perubahan arus per satuan panjang pada waktu konstan adalah $\partial I/\partial x$, maka ada “kehilangan” arus sepanjang $dx$ sebesar $-\left(\partial I/\partial x\right)dx$ karena sebagian arus mengisi kapasitor $C_0 dx$ hingga tegangannya $V$.

Jumlah muatan pada kapasitor: $q = (C_0 dx) V$, sehingga arus yang mengisinya

$$
dI = \frac{dq}{dt} = \frac{\partial}{\partial t} (C_0 dx\, V)
$$

Maka

$$
 -\frac{\partial I}{\partial x}\,dx = \frac{\partial}{\partial t}(C_0 dx\, V)
 \quad\Rightarrow\quad
 \boxed{\; \frac{\partial I}{\partial x} = - C_0\,\frac{\partial V}{\partial t} \;}
$$

Kedua hubungan diferensial ini adalah bentuk lossless dari persamaan telegraf. Dari sini langsung diperoleh persamaan gelombang

$$
\frac{\partial^2 V}{\partial x^2} = L_0 C_0\,\frac{\partial^2 V}{\partial t^2},
\qquad
\frac{\partial^2 I}{\partial x^2} = L_0 C_0\,\frac{\partial^2 I}{\partial t^2},
$$

dengan kecepatan rambat $v = 1/\sqrt{L_0 C_0}$ dan impedansi karakteristik $Z_0 = \sqrt{L_0/C_0}$.

### Characteristic Impedance of a Transmission Line

Karakteristik impedansi $Z_0$ adalah rasio tegangan terhadap arus pada gelombang yang merambat sepanjang saluran transmisi.

Untuk solusi sinus gelombang berjalan ke arah positif ($+x$) kita dapat menuliskan

$$ V_+(x,t) = V_0^+ \sin\!\left( \frac{2\pi}{\lambda}(v t - x) \right), \qquad I_+(x,t) = I_0^+ \sin\!\left( \frac{2\pi}{\lambda}(v t - x) \right). $$

Substitusi ke $\partial V/\partial x = - L_0 \partial I/\partial t$ menghasilkan (turunan terhadap kurung $(v t - x)$)

$$ -V_+' = - v L_0 I_+' \;\Rightarrow\; V_+ = v L_0 I_+ + \text{konst}. $$

Konstanta integrasi hanya menggeser level dc sehingga untuk bagian osilasi kita ambil

$$ \boxed{\frac{V_+}{I_+} = v L_0 = \sqrt{\frac{L_0}{C_0}} = Z_0}. $$

Gelombang ke arah negatif ($-x$) dapat ditulis

$$ V_-(x,t) = - V_{0-} \sin\!\left( \frac{2\pi}{\lambda}(v t + x) \right), \qquad I_-(x,t) = - I_{0-} \sin\!\left( \frac{2\pi}{\lambda}(v t + x) \right) $$

yang memberi rasio

$$ \frac{V_-}{I_-} = - v L_0 = - Z_0. $$

Ketika ada gelombang dari dua arah:

$$ V(x,t) = V_+(x,t) + V_-(x,t), \qquad I(x,t) = I_+(x,t) + I_-(x,t). $$

### Reflections from the End of a Transmission Line

Misalkan saluran transmisi berhingga berimpedansi karakteristik $Z_0$ diakhiri beban $Z_L$. Gelombang maju $(V_+, I_+)$ dapat dipantulkan sehingga timbul gelombang balik $(V_-, I_-)$. Kondisi batas di beban (tegangan dan arus total harus cocok dengan beban) adalah

$$V_+ + V_- = V_L, \qquad I_+ + I_- = I_L,$$

serta rasio masing-masing:

$$\frac{V_+}{I_+} = Z_0, \qquad \frac{V_-}{I_-} = -Z_0, \qquad \frac{V_L}{I_L} = Z_L.$$

Dari hubungan-hubungan ini mudah ditunjukkan bahwa

$$\frac{V_-}{V_+} = \frac{Z_L - Z_0}{Z_L + Z_0}$$

(koefisien refleksi amplitudo tegangan),

$$\frac{I_-}{I_+} = \frac{Z_0 - Z_L}{Z_L + Z_0}$$

(koefisien refleksi amplitudo arus),

$$\frac{V_L}{V_+} = \frac{2 Z_L}{Z_L + Z_0}$$

dan

$$\frac{I_L}{I_+} = \frac{2 Z_0}{Z_L + Z_0}.$$

Hasil ini bersesuaian dengan koefisien refleksi dan transmisi yang umum dipakai dalam teori gelombang.

<p align="center">
    <img src="{{ '/assets/images/transmissionWave/3.png' | relative_url }}" width="680">
    <br>
</p>

Ketika $Z_L = Z_0$ (matched), semua energi gelombang maju diserap dan tidak ada gelombang refleksi; perilakunya seolah-olah saluran tak berhingga panjang.

### Short Circuited Transmission Line ($$Z_L = 0$$)

Untuk ujung saluran yang dihubung-singkat ($Z_L = 0$) berlaku

$$V_L = V_+ + V_- = 0 \;\Rightarrow\; V_- = -V_+,$$

sehingga terjadi refleksi total dengan perubahan fasa $\pi$. Gunakan bentuk fasor (konvensi $e^{i\omega t}$):

$$V_+ = Z_0 I_+ = V_{0+} e^{i(\omega t - k x)}, \qquad V_- = -Z_0 I_- = V_{0-} e^{i(\omega t + k x)}.$$

Dengan refleksi total dan perubahan fasa $\pi$ kita ambil $V_{0+} = - V_{0-}$. Tegangan total pada posisi $x$:

$$V_x = V_+ + V_- = V_{0+}\big(e^{-i k x} - e^{+i k x}\big)e^{i\omega t} = (-i) 2 V_{0+} \sin(kx) e^{i\omega t}.$$

Arus total:

$$I_x = I_+ + I_- = \frac{V_{0+}}{Z_0}\big(e^{-i k x} + e^{+i k x}\big)e^{i\omega t} = \frac{2 V_{0+}}{Z_0} \cos(kx) e^{i\omega t}.$$

Ambil bagian real dengan memilih referensi arus berfasa $\cos(\omega t)$, maka tegangan berfasa $-\sin(\omega t)$ (atau tegangan lag $90^\circ$ terhadap arus dalam waktu).
