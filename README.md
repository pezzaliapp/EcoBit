# 🌱 EcoBit – Misura il tuo impatto digitale

**EcoBit** è una PWA (Progressive Web App) open source, pensata per aiutarti a comprendere quanto **consumo energetico** e **costo invisibile** si nasconde dietro ogni megabyte che navighi o invii.

Non utilizza database cloud, non traccia nulla, non richiede registrazione.  
Tutti i dati sono **salvati in locale** in formato `.CSV`, accessibili, leggibili, modificabili.

---

## 🎯 Perché esiste EcoBit?

Viviamo immersi nella connessione continua: browser, video, app, notifiche, AI.  
Tutto sembra "immateriale", ma consuma risorse enormi. E noi le **paghiamo, ogni giorno**, spesso **senza saperlo**.

EcoBit nasce per **rendere visibile ciò che normalmente è invisibile**.  
Perché **capire** è il primo passo verso il **cambiare**.

---

## ⚡ Esempio: 8 ore al giorno online, quanto costa?

Un utente medio in ufficio o smart working consuma:
- 🌐 ~3 GB al giorno (tra browsing, e-mail, Zoom, video)
- ⚡ Energia stimata: **24.000 Joule** al giorno solo per i dati trasmessi (Wi-Fi)
- 💸 Costo in bolletta: **~€7 all’anno a persona**, solo per traffico di rete

Ora moltiplicalo per una famiglia, una classe, un’azienda, un data center…  
→ Questi “microconsumi” si sommano e **ricadono su tutti**: bollette più alte, più carico sulla rete elettrica, più emissioni da server cloud.

E poi ci lamentiamo del costo della luce. Ma **ogni clic è corrente elettrica.**

---

## 🐍 Come usare `EcoBit.py` e generare il file CSV

### ✅ Requisiti
- Python 3 installato (già presente su macOS, scaricabile su Windows)
- Modulo `psutil` installato (una sola volta)

### 1️⃣ Installa il modulo `psutil`

Apri il **Terminale (macOS/Linux)** o il **Prompt dei comandi (Windows)** e digita:

pip3 install psutil

Oppure, se `pip3` non funziona:

python3 -m pip install psutil

---

### 2️⃣ Avvia lo script

Spostati nella cartella dove hai salvato `EcoBit.py`.  
Esempio su macOS:

cd ~/Desktop/EcoBit
python3 EcoBit.py

⚠️ **Importante:** Lascia il Terminale aperto, lo script misura ogni 10 secondi il traffico di rete.

---

### 3️⃣ Visualizza i dati in `ecobit_log.csv`

Il file `ecobit_log.csv` viene creato nella stessa cartella dove si trova lo script.  
Contiene righe come:

timestamp,bytes_sent,bytes_recv,total_MB
2025-06-29T12:01:00,2345,6742,0.01
…

---

### 4️⃣ Carica il CSV nella dashboard EcoBit

- Apri `dashboard.html` nel browser
- Tocca **"Scegli file"**
- Seleziona il file `ecobit_log.csv`
- Visualizza il grafico dei MB trasferiti con:
  - ⚡ Energia stimata
  - 💰 Costo invisibile

---

### ✅ Ferma lo script quando vuoi con:

CTRL + C

---

### 🧠 Perché CSV?

Per lasciare tutto semplice, trasparente e modificabile.  
Nessun cloud. Nessuna registrazione. Solo **consapevolezza reale**.

---

## 📜 Licenza

Questo progetto è distribuito sotto licenza **MIT**.  
Libero di essere usato, modificato, condiviso.  
Ma soprattutto: libero di far pensare.
