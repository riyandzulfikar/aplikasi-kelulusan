// Database siswa dan link PDF

const siswaValid = [
    {
        nisn: "12345",
        pdfUrl: "https://drive.google.com/file/d/1GrzH6wg16CIv3z-KSumWMoMQFJ7BLKqe/view"
    },
    {
        nisn: "12346",
        pdfUrl: "https://drive.google.com/file/d/1nprYvi2gJGrn6V-2qW6pf0FLbm-cDtOB/view"
    }
];

document.getElementById('formKelulusan').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nisn = document.getElementById('nisn').value.trim();
    
    // Cari siswa yang sesuai
    const siswa = siswaValid.find(s => s.nisn === nisn);
    
    if (siswa) {
        // Redirect ke PDF yang sesuai
        window.location.href = siswa.pdfUrl;
    } else {
        alert("Data tidak ditemukan! Periksa kembali Nama dan NISN.");
    }
});
