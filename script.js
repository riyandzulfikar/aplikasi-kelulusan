// Database siswa dan link PDF
const siswaValid = [
                    {
                        nama: "Alifah Najla",
                        nisn: "12345",
                        pdfUrl: "https://drive.google.com/file/d/1_BGjYqceQ0dRy-VLqPj9mj8fwHY3yi8r/view?usp=sharing"
                    },
                    {
                        nama: "Nur Afifah",
                        nisn: "12346",
                        pdfUrl: "https://drive.google.com/file/d/1nprYvi2gJGrn6V-2qW6pf0FLbm-cDtOB/view"
                    }    
                    ];

document.getElementById('formKelulusan').addEventListener('submit', function(e) {
e.preventDefault();

```
// Hanya ambil NISN (input nama dihapus)
const nisn = document.getElementById('nisn').value.trim();

// Cari siswa berdasarkan NISN saja
const siswa = siswaValid.find(s => s.nisn === nisn);

if (siswa) {
    window.location.href = siswa.pdfUrl; // Redirect ke PDF
} else {
    alert("NISN tidak ditemukan!");
}

```

});
