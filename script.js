const reserveList = document.getElementById('list');

function addReserve() {
    const volume = document.getElementById('volume').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const price = document.getElementById('price').value;

    // Validasi input
    if (!volume || !location || !date || !price) {
        alert('Harap lengkapi semua data!');
        return;
    }

    const totalCost = (volume * price).toFixed(2);

    const listItem = document.createElement('li');
    listItem.textContent = `Volume: ${volume} liter, Lokasi: ${location}, Tanggal: ${date}, Harga Total: Rp ${totalCost}`;
    reserveList.appendChild(listItem);

    // Reset form setelah data ditambahkan
    document.getElementById('reserve-form').reset();
}

