---
title: "Wave and Vibration #1: Longitudinal Waves"
date: 2025-11-02
categories: Physics Waves
tags: [Waves, Longitudinal Waves, Sound Waves, Physics]
toc: true
toc_sticky: false
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


#### Fixed Mass

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

#### Sifat Elastis Gas: Modulus Kompresi (Bulk Modulus)

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

Kompresibilitas $\kappa$ adalah kebalikan dari modulus kompresi, $\kappa = 1/B$.

Semua perubahan adiabatik dalam gas mengikuti hubungan: $$ P V^\gamma = \text{konstanta} $$.

Sehingga persamaan differensial untuk tekanan dan volume adalah:

$$ dP \cdot V^\gamma + P \cdot \gamma V^{\gamma - 1} dV = 0 $$
{: .text-center}

atau

$$ -V \frac{dP}{dV} = \gamma P = B_a$$
{: .text-center}

#### Persamaan Gerak

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

#### Energi Gelombang Suara

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

### Sound Waves in Solids
Gelombang longitudinal lebih mudah merambat di padatan karena sifat elastisnya yang lebih kuat dibanding fluida. Padatan dapat menahan tegangan geser (shear stress) selain tegangan normal (normal stress) yang relevan untuk gelombang longitudinal.

$$\boxed{\; \frac{\partial^2 \eta}{\partial x^2} = \frac{1}{c^2} \, \frac{\partial^2 \eta}{\partial t^2}, \; c^2 = \frac{Y}{\rho} \;} $$
{: .text-center}

dimana $Y$ adalah Young's modulus (modulus elastisitas) padatan.

#### Poisson Ratio dan Konstanta Elastik Isotropik
Pada padatan isotropik, jika batang/elemen diregangkan atau dikompresi sepanjang sumbu $x$ (strain longitudinal $\partial \eta/\partial x$), ia akan mengalami perubahan dimensi lateral di arah $y$ (strain lateral $\partial \beta/\partial y$) dengan tanda berlawanan. Rasio efek lateral terhadap longitudinal didefinisikan sebagai Poisson ratio. Dalam buku dipakai simbol $\sigma$ (banyak literatur memakai $\nu$):

$$ \sigma \equiv -\,\frac{\partial \beta/\partial y}{\partial \eta/\partial x}. $$
{: .text-center}

Makna fisik: $\sigma$ besar ($\to 0.5$) berarti material "hampir inkompresibel" (karet: mendekati $0.49$) — sulit mengubah volume, tetapi mudah berubah bentuk. Material dengan $\sigma$ kecil (misal, gabus $\approx 0$) menunjukkan perubahan lateral sangat kecil saat diregangkan. Batas kestabilan termodinamik untuk medium elastik isotropik linear: $-1 < \sigma < 1/2$.

Parameter elastik dapat dinyatakan dalam berbagai set: $(Y, \sigma)$, $(\lambda, \mu)$, atau $(B, \mu)$. Hubungan isotropik linear (semua ekuivalen) adalah:

$$ \boxed{\; \sigma = \frac{\lambda}{2(\lambda + \mu)} \;} \qquad
\boxed{\; \lambda = \frac{\sigma Y}{(1+\sigma)(1-2\sigma)} \;} \qquad
\boxed{\; \mu = \frac{Y}{2(1+\sigma)} \;} $$
{: .text-center}

Ekspresi Young's modulus dalam $\lambda,\mu,\sigma$ yang dipakai di buku:

$$ \boxed{\; Y = \lambda + 2\mu - 2\lambda\sigma = \mu\,\frac{3\lambda + 2\mu}{\lambda + \mu} \;} $$
{: .text-center}

Bulk modulus padatan isotropik:

$$ \boxed{\; B = \lambda + \tfrac{2}{3}\mu = \frac{Y}{3(1-2\sigma)} \;} $$
{: .text-center}

baja ($\sigma \approx 0.30$), aluminium ($\approx 0.33$), kaca ($\approx 0.22$), karet alam ($\approx 0.49$).

Kecepatan gelombang longitudinal dan geser dapat ditulis dalam beberapa bentuk ekuivalen:

$$ \boxed{\; c_L^2 = \frac{\lambda + 2\mu}{\rho} = \frac{B + \tfrac{4}{3}\mu}{\rho} = \frac{Y(1-\sigma)}{\rho(1+\sigma)(1-2\sigma)} \;} \qquad
\boxed{\; c_T^2 = \frac{\mu}{\rho} = \frac{Y}{2\rho(1+\sigma)} \;} $$
{: .text-center}

Notasi $c_T$ (transverse) sering juga ditulis $c_S$ (shear). Bentuk $c_L^2 = (\lambda + 2\mu)/\rho$ langsung menunjukkan bahwa kenaikan $\mu$ (rigiditas geser) meningkatkan kecepatan longitudinal karena medium lebih resisten terhadap perubahan bentuk simultan yang menyertai kompresi volumetrik.


#### Gelombang Geser (Transverse / Shear) di Padatan Bulk

<p align="center">
	<img src="{{ '/assets/images/longitudinalWave/2.png' | relative_url }}" width="680">
	<br>
</p>

Ambil medan perpindahan transversal $\beta(x,t)$ (arah tegak lurus $x$). Shear strain lokal: $\partial \beta/\partial x$. Tegangan geser (shear stress) linear isotropik:

$$ T(x) = \mu \, \frac{\partial \beta}{\partial x}. $$
{: .text-center}

Keseimbangan gaya pada elemen tipis panjang $dx$ (luas penampang $A$):

$$ [T(x+dx) - T(x)]\,A \approx \frac{\partial T}{\partial x} A\,dx = \rho \, A \, dx \, \ddot{\beta}. $$
{: .text-center}

Dalam limit $dx \to 0$ (persis):

$$ \frac{\partial}{\partial x}\!\left( \mu \, \frac{\partial \beta}{\partial x} \right) = \rho \, \ddot{\beta}. $$
{: .text-center}

Untuk material homogen ($\mu$ konstan) persamaan menyederhana menjadi:

$$ \mu \, \frac{\partial^2 \beta}{\partial x^2} = \rho \, \frac{\partial^2 \beta}{\partial t^2} \;\; \Rightarrow \;\; \boxed{\; \frac{\partial^2 \beta}{\partial x^2} = \frac{1}{c_S^2} \, \frac{\partial^2 \beta}{\partial t^2}, \quad c_S^2 = \frac{\mu}{\rho} \;} $$
{: .text-center}

Rigiditas geser $\mu$ meningkatkan kedua kecepatan karena bentuk longitudinal di padatan melibatkan sedikit deformasi shear di samping kompresi volumetrik; hasilnya:

$$ \boxed{\; c_L^2 = \frac{\lambda + 2\mu}{\rho} \;} $$
{: .text-center}

Pada batang tipis (uniaxial) sering dipakai pendekatan $c \approx \sqrt{Y/\rho}$. Karena
$$ c_L^2 = \frac{Y(1-\sigma)}{\rho(1+\sigma)(1-2\sigma)}, $$
dan $\frac{(1-\sigma)}{(1+\sigma)(1-2\sigma)} > 1$ untuk $0 < \sigma < 1/2$, maka kecepatan bulk 3D lebih besar daripada $\sqrt{Y/\rho}$ (rod approximation). Untuk $\sigma \to 1/2$ (limit inkompresibel) $c_L$ tumbuh besar karena $B \to \infty$.

Bulk modulus dalam konstanta Lamé atau Young–Poisson bisa ditulis:

$$ \boxed{\; B = \lambda + \tfrac{2}{3}\mu = \frac{Y}{3(1-2\sigma)} \;} $$
{: .text-center}

Kecepatan dalam bentuk campuran bulk–shear:

$$ \boxed{\; c_L = \sqrt{\frac{B + \tfrac{4}{3}\mu}{\rho}} \;} \qquad
\boxed{\; c_T = \sqrt{\frac{\mu}{\rho}} \;} $$
{: .text-center}

### Longitudinal Waves in a Periodic Structure

Gelombang longitudinal juga dapat merambat dalam struktur periodik, seperti rantai massa-pegas. Model sederhana ini memberikan informasi mengenai perilaku gelombang dalam media diskrit. 


#### Kekakuan Antar-Atom dan Young’s Modulus

<p align="center">
	<img src="{{ '/assets/images/longitudinalWave/3.png' | relative_url }}" width="680">
	<br>
</p>

Anggap kisi 1D dengan jarak antarneighbor $a$. Dua atom yang berdekatan dihubungkan oleh “pegas” efektif dengan kekakuan $s$ (gaya per perpindahan). Untuk gelombang longitudinal, perpindahan antar-atom $\eta$ menghasilkan strain $\varepsilon = \eta/a$. Gaya pemulih normal yang bekerja pada muka sel luas $a^2$ sebanding dengan $s\eta/a^2 = (s/a)\,\varepsilon$ sehingga rasio tegangan–regangan (Young’s modulus) pada skala makro adalah

$$ \boxed{\; Y = \frac{s}{a} \;} \qquad \text{atau setara} \qquad \boxed{\; s = Y a \;} $$
{: .text-center}

Dengan massa atom efektif per sel $m \approx \rho a^3$, frekuensi osilasi longitudinal atom yang dihubungkan oleh $s$ diperkirakan

$$ \boxed{\; \nu = \frac{\omega}{2\pi} \approx \frac{1}{2\pi} \sqrt{\frac{s}{m}} \approx \frac{1}{2\pi a}\sqrt{\frac{Y}{\rho}} \approx \frac{c_0}{2\pi a} \;} $$
{: .text-center}

di mana $c_0$ adalah kecepatan bunyi di padatan (orde $\sim 5\times10^3\,\text{m s}^{-1}$). Dengan $a \approx 2\times10^{-10}\,\text{m}$, didapat $\nu \approx 3\times10^{12}\,\text{Hz}$ (wilayah inframerah).

#### Model Diskret dan Dispersi

Untuk deskripsi lebih presisi, rantai diskret 1D memenuhi persamaan gerak partikel ke-$r$:

$$ m\,\ddot{\eta}_r = s\,(\eta_{r+1} + \eta_{r-1} - 2\eta_r), \qquad s = \frac{T}{a}. $$
{: .text-center}

Dengan ansatz gelombang $\eta_r = \eta_{\max} e^{\,i(\omega t - k r a)}$ diperoleh relasi dispersi

$$ \boxed{\; \omega^2 = \frac{4s}{m}\,\sin^2\!\left(\frac{k a}{2}\right) \;} $$
{: .text-center}

### Reflection and Transmission of Sound Waves at Boundaries

<p align="center">
	<img src="{{ '/assets/images/longitudinalWave/4.png' | relative_url }}" width="680">
	<br>
</p>

Ketika gelombang suara bidang (plane wave) normal incidence datang pada batas dua medium dengan impedansi akustik spesifik berbeda $Z_1 = \rho_1 c_1$ dan $Z_2 = \rho_2 c_2$, sebagian energi dipantulkan dan sebagian diteruskan. Kondisi batas fisik: partikel di permukaan kontak tidak boleh “tercabik”, sehingga kecepatan partikel kontinu; dan tekanan (gaya per luas) juga kontinu.

Dengan indeks $i$ (incident), $r$ (reflected, arah balik), $t$ (transmitted, masuk medium 2):

$$ \dot{\eta}_i + \dot{\eta}_r = \dot{\eta}_t, \qquad p_i + p_r = p_t. $$
{: .text-center}

Untuk gelombang bidang harmonik 1D: hubungan tekanan–kecepatan partikel (dengan titik di atas menyatakan turunan waktu)

$$ p = Z \, \dot{\eta} \quad \text{(gelombang maju)}, \qquad p = - Z \, \dot{\eta} \quad \text{(gelombang mundur)}. $$
{: .text-center}

Sehingga: 
- $p_i = Z_1 \dot{\eta}_i$
- $p_r = - Z_1 \dot{\eta}_r$
- $p_t = Z_2 \dot{\eta}_t$.

Masukkan ke kontinuitas tekanan: $Z_1 \dot{\eta}_i - Z_1 \dot{\eta}_r = Z_2 \dot{\eta}_t$.
Gunakan kontinuitas kecepatan: $\dot{\eta}_t = \dot{\eta}_i + \dot{\eta}_r$.

Eliminasi $u_t$ memberi:

$$ Z_1 \dot{\eta}_i - Z_1 \dot{\eta}_r = Z_2 (\dot{\eta}_i + \dot{\eta}_r) \;\Rightarrow\; (Z_1 - Z_2) \dot{\eta}_i = (Z_1 + Z_2) \dot{\eta}_r. $$
{: .text-center}

Rasio amplitudo kecepatan partikel (\(\dot{\eta}\)) terpantul dan transmisi:

$$ \boxed{\; \frac{\dot{\eta}_r}{\dot{\eta}_i} = \frac{Z_1 - Z_2}{Z_1 + Z_2} \;} \qquad \boxed{\; \frac{\dot{\eta}_t}{\dot{\eta}_i} = \frac{2 Z_1}{Z_1 + Z_2} \;} $$
{: .text-center}

Dari hubungan 
- $p_r = -Z_1 \dot{\eta}_r$
- $p_i = Z_1 \dot{\eta}_i$
- $p_t = Z_2 \dot{\eta}_t$

diperoleh rasio amplitudo tekanan terpantul dan transmisi:

$$ \boxed{\; \frac{p_r}{p_i} = \frac{Z_2 - Z_1}{Z_1 + Z_2} = -\frac{\dot{\eta}_r}{\dot{\eta}_i} \;} \qquad \boxed{\; \frac{p_t}{p_i} = \frac{2 Z_2}{Z_1 + Z_2} = \frac{Z_2}{Z_1} \frac{\dot{\eta}_t}{\dot{\eta}_i} \;} $$
{: .text-center}

jika $Z_1 > Z_2$ maka $u_r/u_i > 0$ (kecepatan incident dan reflected sefasa) sedangkan $p_r/p_i < 0$ (tekanan berlawanan fasa). Jika $Z_1 < Z_2$ kebalikannya: tekanan sefasa, kecepatan berlawanan fasa.

### Reflection and Transmission of Sound Intensity

Bentuk setara jika ditulis eksplisit dengan nilai rms (akar-mean-kuadrat) kecepatan partikel:

$$ \boxed{\; \frac{I_r}{I_i} = \frac{Z_1\,\langle \dot{\eta}_r^2 \rangle_{\mathrm{rms}}}{Z_1\,\langle \dot{\eta}_i^2 \rangle_{\mathrm{rms}}} = \left( \frac{Z_1 - Z_2}{Z_1 + Z_2} \right)^2 \;} $$
{: .text-center}

$$ \boxed{\; \frac{I_t}{I_i} = \frac{Z_2\,\langle \dot{\eta}_t^2 \rangle_{\mathrm{rms}}}{Z_1\,\langle \dot{\eta}_i^2 \rangle_{\mathrm{rms}}} = \left( \frac{2 Z_1}{Z_1 + Z_2} \right)^2 \frac{Z_2}{Z_1} = \frac{4 Z_1 Z_2}{(Z_1 + Z_2)^2} \;} $$
{: .text-center}

Konservasi energi (tanpa rugi/absorpsi) pada insiden normal:

$$ \boxed{\; \frac{I_r}{I_i} + \frac{I_t}{I_i} = 1 \;} \qquad \text{atau} \qquad \boxed{\; I_i = I_t + I_r \;} $$
{: .text-center}

Amplitudo puncak (peak) atau rms memberikan $R$ dan $T$ yang sama karena faktor skala saling hilang dalam perbandingan.
