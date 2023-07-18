async function fetchCSVFile(filePath) {
    try {
        const response = await fetch(filePath);
        const data = await response.json()
        // const csvData = await response.text();
        // const data = parseCSV(csvData);

        return data;
    } catch (error) {
        console.error('Error fetching or parsing CSV file:', error);
    }
}

function parseCSV(text) {
    const csv = text;
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        if (values.length === headers.length) {
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = values[j];
            }
            data.push(obj);
        }
    }
    return data;
}

export { fetchCSVFile }