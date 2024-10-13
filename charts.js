//CHART-1

// Grafik oluşturulacak context'i alıyoruz
const ctx = document.getElementById('myLineChart').getContext('2d');
// Line Chart verisi ve ayarları
const myLineChart = new Chart(ctx, {
    type: 'line', // Grafik türü
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X ekseni için etiketler
        datasets: [{
            label: 'Sales', // Grafiğin adı
            data: [30, 50, 40, 60, 70, 50, 80], // Veriler
            borderColor: 'rgba(75, 192, 192, 1)', // Çizgi rengi
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Alanın dolgu rengi
            fill: true, // Dolguyu aktifleştirir
            tension: 0.4 // Çizginin eğimi (düz yerine kıvrımlı hale getirir)
        }]
    },
    options: {
        responsive: true, // Grafik duyarlı olur (boyutlara göre yeniden şekillenir)
        plugins: {
            legend: {
                display: true // Legend (açıklama) gösterilsin mi
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Months' // X ekseni başlığı
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Sales (in $)' // Y ekseni başlığı
                },
                beginAtZero: true // Y ekseni 0'dan başlasın
            }
        }
    }
});




//CHART-2

// Grafik oluşturulacak context'i alıyoruz
const ctx2 = document.getElementById('myMultiAxisChart').getContext('2d');

// Multi-axis Line Chart verisi ve ayarları
const myMultiAxisChart = new Chart(ctx2, {
    type: 'line', // Grafik türü
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X ekseni için etiketler
        datasets: [{
            label: 'Temperature', // 1. veri seti: Sıcaklık
            data: [3, 4, 6, 9, 14, 18, 22],
            borderColor: 'rgba(255, 99, 132, 1)', // Çizgi rengi
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Dolgu rengi
            yAxisID: 'y1', // Y ekseni ID'si (ilk eksen)
            tension: 0.4
        },
        {
            label: 'Rainfall', // 2. veri seti: Yağış miktarı
            data: [30, 50, 40, 60, 70, 50, 80],
            borderColor: 'rgba(54, 162, 235, 1)', // Çizgi rengi
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Dolgu rengi
            yAxisID: 'y2', // Y ekseni ID'si (ikinci eksen)
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y1: { // Birinci Y ekseni (sol)
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                },
                beginAtZero: true
            },
            y2: { // İkinci Y ekseni (sağ)
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                    display: true,
                    text: 'Rainfall (mm)'
                },
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false // Y2 ekseni için grid çizgilerini kapat
                }
            }
        }
    }
});