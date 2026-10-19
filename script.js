// Modal Custom Alert
function showAlert(message) {
    document.getElementById('modalMessage').innerText = message;
    document.getElementById('customModal').classList.add('active');
}

function closeModal() {
    document.getElementById('customModal').classList.remove('active');
}

// Navigasi Filter Kategori
function filterCategory(category, btnElement) {
    const cards = document.querySelectorAll('.card');
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== 1. HITUNG ENERGI KINETIK =====
function hitungEk() {
    const massa = parseFloat(document.getElementById('massa').value);
    const kecepatan = parseFloat(document.getElementById('kecepatan').value);
    const resultBox = document.getElementById('resultEk');
    const valEk = document.getElementById('valEk');
    const formulaEk = document.getElementById('formulaEk');

    if (isNaN(massa) || isNaN(kecepatan)) {
        resultBox.classList.add('hidden');
        return;
    }

    if (massa < 0 || kecepatan < 0) {
        showAlert("Massa dan kecepatan tidak boleh bernilai negatif!");
        resultBox.classList.add('hidden');
        return;
    }

    // Ek = 0.5 * m * v^2
    const ek = 0.5 * massa * Math.pow(kecepatan, 2);
    const formattedResult = ek.toLocaleString('id-ID', { maximumFractionDigits: 3 });

    valEk.innerText = `${formattedResult} Joule`;
    formulaEk.innerText = `Rumus: ½ × ${massa} kg × (${kecepatan} m/s)²`;
    resultBox.classList.remove('hidden');
}

// ===== 2. KINEMATIKA (JARAK, KECEPATAN, WAKTU) =====
function updateFormKinematika() {
    const opsi = document.getElementById('pilihanKinematika').value;
    const label1 = document.getElementById('labelInput1');
    const label2 = document.getElementById('labelInput2');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');

    input1.value = '';
    input2.value = '';
    document.getElementById('resultKinematika').classList.add('hidden');

    if (opsi === 'v') {
        label1.innerText = "JARAK (S) DALAM METER";
        label2.innerText = "WAKTU (T) DALAM DETIK";
        input1.placeholder = "Masukkan jarak (m)...";
        input2.placeholder = "Masukkan waktu (s)...";
    } else if (opsi === 's') {
        label1.innerText = "KECEPATAN (V) DALAM M/S";
        label2.innerText = "WAKTU (T) DALAM DETIK";
        input1.placeholder = "Masukkan kecepatan (m/s)...";
        input2.placeholder = "Masukkan waktu (s)...";
    } else if (opsi === 't') {
        label1.innerText = "JARAK (S) DALAM METER";
        label2.innerText = "KECEPATAN (V) DALAM M/S";
        input1.placeholder = "Masukkan jarak (m)...";
        input2.placeholder = "Masukkan kecepatan (m/s)...";
    }
}

function hitungKinematika() {
    const opsi = document.getElementById('pilihanKinematika').value;
    const val1 = parseFloat(document.getElementById('input1').value);
    const val2 = parseFloat(document.getElementById('input2').value);
    const resultBox = document.getElementById('resultKinematika');
    const valResult = document.getElementById('valKinematika');
    const formulaResult = document.getElementById('formulaKinematika');

    if (isNaN(val1) || isNaN(val2)) {
        resultBox.classList.add('hidden');
        return;
    }

    let hasil = 0;
    let satuan = "";
    let rumusStr = "";

    if (opsi === 'v') {
        if (val2 === 0) {
            showAlert("Nilai waktu tidak boleh 0!");
            resultBox.classList.add('hidden');
            return;
        }
        hasil = val1 / val2;
        satuan = "m/s";
        rumusStr = `Kecepatan (v) = ${val1} m ÷ ${val2} s`;
    } else if (opsi === 's') {
        hasil = val1 * val2;
        satuan = "meter";
        rumusStr = `Jarak (s) = ${val1} m/s × ${val2} s`;
    } else if (opsi === 't') {
        if (val2 === 0) {
            showAlert("Nilai kecepatan tidak boleh 0!");
            resultBox.classList.add('hidden');
            return;
        }
        hasil = val1 / val2;
        satuan = "detik";
        rumusStr = `Waktu (t) = ${val1} m ÷ ${val2} m/s`;
    }

    valResult.innerText = `${hasil.toLocaleString('id-ID', { maximumFractionDigits: 3 })} ${satuan}`;
    formulaResult.innerText = `Rumus: ${rumusStr}`;
    resultBox.classList.remove('hidden');
}

// ===== 3. KONVERSI SUHU LENGKAP =====
function konversiSuhu() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const resultBox = document.getElementById('resultSuhu');
    const valFahrenheit = document.getElementById('valFahrenheit');
    const valKelvin = document.getElementById('valKelvin');
    const valReamur = document.getElementById('valReamur');

    if (isNaN(celsius)) {
        resultBox.classList.add('hidden');
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    const reamur = celsius * 4/5;

    valFahrenheit.innerText = `${fahrenheit.toFixed(2)} °F`;
    valKelvin.innerText = `${kelvin.toFixed(2)} K`;
    valReamur.innerText = `${reamur.toFixed(2)} °R`;

    resultBox.classList.remove('hidden');
}