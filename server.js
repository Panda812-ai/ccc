const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// حفظ بيانات waste
app.post('/save-waste', (req, res) => {
    const data = req.body;
    const filePath = path.join(__dirname, 'public', 'waste-data.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.json({ message: 'Data saved successfully!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

// أضف هذا الزر بجانب أزرار Add Row و Export to CSV
<button class="button" onclick="saveWasteData()">Save Data</button>