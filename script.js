// File utama (script.js)
document.getElementById('formKelulusan').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nisn = document.getElementById('nisn').value.trim();
    
    // Mengambil data dari file JSON eksternal
    fetch('data-siswa.json')
        .then(response => response.json())
        .then(siswaValid => {
            const siswa = siswaValid.find(s => s.nisn === nisn);
            
            if (siswa) {
                window.location.href = siswa.pdfUrl;
            } else {
                alert("NISN tidak ditemukan!");
            }
        })
        .catch(error => {
            console.error('Error loading data:', error);
            alert("Terjadi kesalahan saat memuat data.");
        });
});
