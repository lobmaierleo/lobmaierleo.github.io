function showLiveries(category) {
    // Verstecke alle Liveries
    document.getElementById('iracingLiveries').style.display = 'none';
    document.getElementById('assettoLiveries').style.display = 'none';

    // Zeige die Liveries der ausgewählten Kategorie
    document.getElementById(category + 'Liveries').style.display = 'flex';
}
