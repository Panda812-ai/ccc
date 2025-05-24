// دالة رسم شارت أعمدة بشكل عرضي (bar chart أفقي)
function drawCameraChart(netavisWorking, netavisNotWorking, ivsWorking, ivsNotWorking) {
    const ctx = document.getElementById('cameraChart').getContext('2d');
    if (window.cameraChartInstance) window.cameraChartInstance.destroy();
    window.cameraChartInstance = new Chart(ctx, {
        type: 'bar', // نفس النوع
        data: {
            labels: ['Netavis Working', 'Netavis Not working', 'IVS Working', 'IVS Not working'],
            datasets: [{
                label: 'Camera Count',
                data: [netavisWorking, netavisNotWorking, ivsWorking, ivsNotWorking],
                backgroundColor: [
                    '#1b6ca8', '#e63946', '#43aa8b', '#f9c74f'
                ],
                borderRadius: 8,
                barThickness: 60,
            }]
        },
        options: {
            indexAxis: 'y', // هذا يجعل الرسم أفقي (عرضي)
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Camera Status Chart',
                    color: '#e0e6ed',
                    font: { size: 30 }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: { color: '#e0e6ed', font: { size: 17 } },
                    grid: { color: '#415a77' }
                },
                y: {
                    ticks: { color: '#e0e6ed', font: { size: 16 } },
                    grid: { color: '#415a77' }
                }
            }
        }
    });
}

// الربط التلقائي مع جدول الكاميرات
document.addEventListener('DOMContentLoaded', function() {
    function countCameras() {
        const tbody = document.querySelector('#cameraStatsTable tbody');
        let netavisWorking = 0, netavisNotWorking = 0, ivsWorking = 0, ivsNotWorking = 0;
        if (!tbody) return;
        Array.from(tbody.rows).forEach(row => {
            const type = row.cells[2]?.querySelector('select')?.value;
            const status = row.cells[5]?.querySelector('select')?.value;
            if (type === "Netavis") {
                if (status === "Working") netavisWorking++;
                else if (status === "Not working") netavisNotWorking++;
            }
            if (type === "IVS") {
                if (status === "Working") ivsWorking++;
                else if (status === "Not working") ivsNotWorking++;
            }
        });
        drawCameraChart(netavisWorking, netavisNotWorking, ivsWorking, ivsNotWorking);
    }

    // حدث الرسم البياني عند أي تغيير في الجدول
    const tbody = document.querySelector('#cameraStatsTable tbody');
    if (tbody) {
        tbody.addEventListener('change', countCameras);
    }
    countCameras(); // رسم أولي عند التحميل
});