
function rilevaBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg")) return "Edge";
  return "Altro";
}

document.getElementById("browser").textContent = rilevaBrowser();

const consumoEnergia = {
  WiFi: 1e-6,       // 1 µJ/bit
  Ethernet: 0.3e-6, // 0.3 µJ/bit
  "5G": 2e-6        // 2 µJ/bit
};

const euroPerJoule = 0.000000083;

function calcola() {
  const mb = parseFloat(document.getElementById("mb").value);
  const rete = document.getElementById("rete").value;
  const bit = mb * 8 * 1e6;
  const energia = bit * consumoEnergia[rete];
  const costo = energia * euroPerJoule;

  document.getElementById("output").innerHTML = `
    <p>Energia stimata: ${energia.toFixed(4)} J</p>
    <p>Costo stimato: €${costo.toFixed(6)}</p>
  `;
}
