---
title: "Wave and Vibration #1: Longitudinal Waves"
date: 2025-11-02
categories: Physics Waves
tags: [Waves, Longitudinal Waves, Sound Waves, Physics]
toc: true
toc_sticky: true
excerpt: "Ringkasan rangkumanku mata kuliah Getaran dan Gelombang, tentang Gelombang Longitudinal."
---

Gelombang longitudinal adalah gelombang arah rambatnya sama dengan arah propagasinya, contohnya suara dan pegas. 

# Sound Waves in Gases

#### Tekanan

$$ \boxed{P = P_0 + p} $$
{: .text-center}

#### Volume

$$ \boxed{V = V_0 + v} $$
{: .text-center}

#### Massa jenis/Density

$$ \boxed{\rho = \rho_0 + \rho_d} $$
{: .text-center}


#### Dilatasi (Fractional Change in Volume)

Secara definisi untuk elemen kecil:

$$ \delta = \frac{\Delta V}{V_0} = \frac{v}{V_0} $$
{: .text-center}

Untuk gelombang longitudinal 1D dengan medan perpindahan $u(x,t)$ (sering juga ditulis $\eta$), sebuah elemen panjang awal $\Delta x$ berubah menjadi $\Delta x + \frac{\partial u}{\partial x}\,\Delta x$. Maka pertambahan relatif panjang (dan untuk 1D, volume) adalah:

$$ \delta = \frac{(\Delta x + \frac{\partial u}{\partial x}\,\Delta x) - \Delta x}{\Delta x} = \frac{\partial u}{\partial x} = \frac{\partial \eta}{\partial x}. $$
{: .text-center}

Kondensasi (compression) didefinisikan $s = -\delta$, sehingga hubungan lengkapnya:

$$ \boxed{\delta = \frac{v}{V_0} = \frac{\partial \eta}{\partial x} = -s.} $$
{: .text-center}

Note: Bentuk $\Delta \eta / \Delta x$ menjadi turunan $\partial \eta / \partial x$ dalam limit elemen yang sangat kecil.

#### Kondensasi (Fractional Change in Density)

Definisi (positif untuk kompresi):

$$ \boxed{s = \frac{\Delta \rho}{\rho_0} = \frac{\rho - \rho_0}{\rho_0} = \frac{\rho_d}{\rho_0}} $$
{: .text-center}


### Fixed Mass (Konservasi Massa)

Konservasi massa untuk elemen fluida kecil menyatakan bahwa massa tetap:

$$ m = \rho V = \rho_0 V_0. $$
{: .text-center}

Ketika ada gangguan kecil, tulis perubahan sebagai fraksi kecil:

$$ \rho = \rho_0(1 + s), \qquad V = V_0(1 + \delta). $$
{: .text-center}

Masukkan ke syarat massa tetap:

$$ \rho V = \rho_0 V_0 (1 + s)(1 + \delta) = \rho_0 V_0. $$
{: .text-center}

Membagi kedua sisi dengan $\rho_0 V_0$ memberi:

$$ (1 + s)(1 + \delta) = 1. $$
{: .text-center}

Ekspansi aljabar:

$$ 1 + s + \delta + s\,\delta = 1 \;\;\Rightarrow\;\; s + \delta + s\,\delta = 0. $$
{: .text-center}

Karena $s$ dan $\delta$ sangat kecil, hasil kali $s\,\delta$ jauh lebih kecil, jadi kita abaikan pada pendekatan linear:

$$ s + \delta \approx 0 \;\;\Rightarrow\;\; s \approx -\delta. $$
{: .text-center}

Dengan definisi $s = \dfrac{\Delta \rho}{\rho_0} = \dfrac{\rho_d}{\rho_0}$ dan $\delta = \dfrac{\Delta V}{V_0} = \dfrac{v}{V_0}$, maka hubungan lengkap (orde pertama):

$$ \boxed{\; s = -\delta = -\frac{v}{V_0} = \frac{\rho_d}{\rho_0} \;} $$
{: .text-center}

### Sifat Elastis Gas: Modulus Kompresi (Bulk Modulus)

Sifat elastis (kemampuan dikompresi) gas dinyatakan oleh modulus kompresi (bulk modulus) $B$.

Definisi umum:

$$ B \equiv -\,V\,\frac{\partial P}{\partial V}\Big|_{\text{proses}} $$
{: .text-center}

Untuk gangguan kecil (linear), definisi ini menjadi:

$$ B \approx -\,V_0\,\frac{\Delta P}{\Delta V} = -\,\frac{\Delta P}{\Delta V/V_0} = -\,\frac{p}{\delta}. $$
{: .text-center}

Dengan $\delta = -s$, hubungan konstitutif akustik (orde pertama) adalah:

$$ p = -B\,\delta = B\,s $$
{: .text-center}

Kasus penting untuk gas ideal:

- Isotermal (perubahan lambat): $\;B = P_0$.
- Adiabatik (gelombang suara, perubahan cepat): $\;B = \gamma P_0$, dengan $\gamma$ rasio kalor spesifik.

Dari sini kecepatan rambat bunyi (1D) menjadi:

$$ c^2 = \frac{B}{\rho_0} \;\Rightarrow\; c = \sqrt{\frac{B}{\rho_0}}. $$
{: .text-center}

Untuk gas ideal adiabatik:

$$ c = \sqrt{\frac{\gamma P_0}{\rho_0}}. $$
{: .text-center}

Catatan: Kompresibilitas $\kappa$ adalah kebalikan dari modulus kompresi, $\kappa = 1/B$.

Semua perubahan adiabatik dalam gas mengikuti hubungan: $$ P V^\gamma = \text{konstanta} $$.

Sehingga persamaan differensial untuk tekanan dan volume adalah:

$$ dP \cdot V^\gamma + P \cdot \gamma V^{\gamma - 1} dV = 0 $$
{: .text-center}

atau

$$ -V \frac{dP}{dV} = \gamma P = B_a$$
{: .text-center}

### Persamaan Gerak

<p align="center">
	<img src="{{ '/assets/images/longitudinalWave/1.png' | relative_url }}" width="680">
	<br>
</p>

Kita ambil elemen silinder kecil fluida panjang $\Delta x$ dan luas penampang $A$ di sepanjang sumbu $x$. Tekanan di ujung kiri dan kanan berbeda sedikit karena adanya gradien tekanan. Gaya netto akibat tekanan (arah menuju tekanan yang lebih rendah) pada elemen adalah:

$$ F_{\text{net}} = -A\,\frac{\partial p}{\partial x}\,\Delta x. $$

Massa elemen: $m = \rho_0 A \Delta x$ (orde pertama cukup pakai $\rho_0$). Hukum Newton $F = m a$ dengan percepatan $a = \partial^2 \eta/\partial t^2$ (karena $\eta$ adalah perpindahan longitudinal) memberi:

$$ -A\,\frac{\partial p}{\partial x}\,\Delta x = \rho_0 A \Delta x \frac{\partial^2 \eta}{\partial t^2}. $$

Membagi $A\Delta x$ menghasilkan:

$$ -\frac{\partial p}{\partial x} = \rho_0 \frac{\partial^2 \eta}{\partial t^2}. $$

Dari hubungan konstitutif linear $p = -B\,\frac{\partial \eta}{\partial x}$ (ingat $p = B s$ dan $s = -\partial \eta/\partial x$):

$$ B \frac{\partial^2 \eta}{\partial x^2} = \rho_0 \frac{\partial^2 \eta}{\partial t^2}. $$

Atur ulang:

$$ \frac{\partial^2 \eta}{\partial x^2} = \frac{\rho_0}{B} \frac{\partial^2 \eta}{\partial t^2}. $$

Dengan $c^2 = B/\rho_0$ kita peroleh bentuk standar persamaan gelombang 1D:

$$ \boxed{\; \frac{\partial^2 \eta}{\partial x^2} = \frac{1}{c^2} \frac{\partial^2 \eta}{\partial t^2} \;} $$

Solusi umum (superposisi) untuk gelombang berjalan: $\eta(x,t) = f(x - c t) + g(x + c t)$. Untuk gelombang harmonik tunggal:

$$ \eta(x,t) = A \cos(kx - \omega t + \phi), \qquad \text{dengan } \omega = c k. $$

Hubungan ke tekanan kecil:

$$ p(x,t) = -B \frac{\partial \eta}{\partial x} = B k A \sin(kx - \omega t + \phi). $$

Amplitude tekanan $p_{\text{max}} = B k A$ menghubungkan displacements ke fluktuasi tekanan.


Untuk mempermudah aljabar, sering dipakai notasi kompleks/fasor. Misalkan amplitudo perpindahan maksimum $\eta_m$ (sama dengan $A$ di atas), maka untuk gelombang yang merambat ke arah $+x$:

$$ \eta(x,t) = \eta_m\, e^{\,i(\omega t - kx)}, \qquad (\,\omega = c k\,) $$
{: .text-center}

Turunan waktu dan ruangnya:

$$ \dot{\eta} = \frac{\partial \eta}{\partial t} = i\omega\,\eta, \qquad \delta = \frac{\partial \eta}{\partial x} = -ik\,\eta. $$
{: .text-center}

Karena $s = -\delta$, maka $s = ik\,\eta$. Dengan modulus adiabatik $B_a = \gamma P_0$ (relevan untuk bunyi), didapat relasi tekanan kecil:

$$ p = B_a\,s = i\,B_a\,k\,\eta. $$
{: .text-center}

### Energi Gelombang Suara

Untuk gelombang longitudinal kecil di gas, energi tersimpan sebagai:

1. Energi kinetik partikel (gerak osilasi fluida)
2. Energi potensial elastik (kompresi/rarefaksi)

#### Energi Kinetik Per Unit Volume
Kecepatan partikel (bukan kecepatan rambat gelombang) adalah $u(x,t) = \dot{\eta} = \partial \eta/\partial t$. Energi kinetik densitas (per volume) untuk elemen kecil:

$$ E_k = \frac{1}{2} \rho_0 u^2 = \frac{1}{2} \rho_0 \left(\frac{\partial \eta}{\partial t}\right)^2. $$
{: .text-center}

Ambil bentuk harmonik real: $\eta(x,t) = \eta_m \cos(kx - \omega t)$. Maka:

$$ u = \dot{\eta} = \omega \eta_m \sin(kx - \omega t). $$
{: .text-center}

Sehingga:

$$ E_k = \frac{1}{2} \rho_0 \omega^2 \eta_m^2 \sin^2(kx - \omega t). $$
{: .text-center}

Rata-rata waktu (gunakan $\langle \sin^2 \rangle = 1/2$):

$$ \boxed{\; \langle E_k \rangle = \frac{1}{4} \rho_0 \omega^2 \eta_m^2 \;} $$
{: .text-center}

#### Energi Potensial (Kompresi) Per Unit Volume
Energi elastik densitas untuk kompresi kecil diberikan oleh:

$$ E_p = \frac{1}{2} B s^2 = \frac{1}{2} B \left(-\frac{\partial \eta}{\partial x}\right)^2 = \frac{1}{2} B \left(\frac{\partial \eta}{\partial x}\right)^2. $$
{: .text-center}

Dengan $\eta(x,t) = \eta_m \cos(kx - \omega t)$ diperoleh $\partial \eta/\partial x = -k \eta_m \sin(kx - \omega t)$ sehingga:

$$ E_p = \frac{1}{2} B k^2 \eta_m^2 \sin^2(kx - \omega t). $$
{: .text-center}

Karena $B = \rho_0 c^2$ dan $\omega = c k$, maka $B k^2 = \rho_0 c^2 k^2 = \rho_0 \omega^2$ sehingga rata-ratanya sama dengan kinetik:

$$ \boxed{\; \langle E_p \rangle = \frac{1}{4} \rho_0 \omega^2 \eta_m^2 \;} $$
{: .text-center}

#### Energi Total dan Hubungan dengan Tekanan
Total densitas energi rata-rata:

$$ \boxed{\; \langle E_{total} \rangle = \langle E_k \rangle + \langle E_p \rangle = \frac{1}{2} \rho_0 \omega^2 \eta_m^2 \;} $$
{: .text-center}

Tekanan osilasi: $p(x,t) = B s = -B \partial \eta/\partial x = B k \eta_m \sin(kx - \omega t)$ sehingga amplitudo tekanan $p_m = B k \eta_m = \rho_0 c \omega \eta_m$. Gunakan ini untuk bentuk lain:

$$ \langle E \rangle = \frac{p_m^2}{2 B} = \frac{p_m^2}{2 \rho_0 c^2}. $$
{: .text-center}

#### Intensitas Gelombang
Intensitas (daya per luas) untuk gelombang 1D maju adalah energi rata-rata dikali kecepatan rambat:

$$ \boxed{\; I = \langle E_{total} \rangle c = \frac{1}{2} \rho_0 c \omega^2 \eta_m^2 = \frac{p_m^2}{2 \rho_0 c} \;} $$
{: .text-center}

### Sound Waves in Solids (Ringkas)

Gelombang elastik dalam padatan ada dua mode utama: longitudinal (P) dan geser/transversal (S). Untuk padatan homogen isotropik (bulk solid):

$$ c_L = \sqrt{\frac{\lambda + 2\mu}{\rho}}, \qquad c_S = \sqrt{\frac{\mu}{\rho}}. $$
{: .text-center}

Untuk batang/rod tipis (uniaxial stress, limit 1D), kecepatan gelombang longitudinal sederhana mendekati $c \approx \sqrt{Y/\rho}$. Perbedaan ini berasal dari kondisi tegangan 3D vs 1D.

### Intermezzo: Media Padat — Poisson Ratio dan Konstanta Lamé
Pada padatan, kompresi longitudinal di sumbu $x$ (strain $\partial \eta/\partial x$) menimbulkan distorsi lateral di $y$ (strain $\partial \beta/\partial y$) dengan tanda berlawanan. Rasio keduanya disebut Poisson ratio. Notasi di buku menggunakan $\sigma$ untuk Poisson ratio (umumnya ditulis $\nu$):

$$ \sigma \equiv -\,\frac{\partial \beta/\partial y}{\partial \eta/\partial x}. $$
{: .text-center}

di mana $Y$ adalah modulus Young (Young's modulus) dari material padatan tersebut.

Dua konstanta elastik Lamé untuk padatan adalah $\lambda$ (Lamé first parameter) dan $\mu$ (shear modulus, "transverse coefficient of rigidity").

$$ \boxed{\; \sigma = \frac{\lambda}{2(\lambda + \mu)} \;} \qquad
\boxed{\; \lambda = \frac{\sigma Y}{(1+\sigma)(1-2\sigma)} \;} \qquad
\boxed{\; Y = \lambda + 2\mu - 2\lambda\sigma \;} $$
{: .text-center}




