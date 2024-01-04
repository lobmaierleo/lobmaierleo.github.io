(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('MXTdimR8FtEsKoEhH');
})();

function onSubmit(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Submit-Buttons (Formular wird nicht sofort abgeschickt)

    // Regex für E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex für Telefonnummer (einfache Prüfung, anpassen nach Bedarf)
    const phoneRegex = /^\+?[0-9]*$/;

    // Formulardaten abrufen
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const irating = document.getElementById('irating').value;
    const elo = document.getElementById('elo').value;
    const comment = document.getElementById('comment').value;

    // Validierung von E-Mail und Telefonnummer
    if (!emailRegex.test(email)) {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return;
    }

    if (phone && !phoneRegex.test(phone)) {
        alert('Bitte geben Sie eine gültige Telefonnummer ein.');
        return;
    }

    if (!firstName || !lastName || !email) {
        alert('Bitte füllen Sie alle erforderlichen Felder aus.');
        return;
    }


    // Daten für EmailJS vorbereiten
    const templateParams = {
        email: email,
        firstname: firstName,
        lastname: lastName,
        phone: phone,
        country: country,
        Irating: irating,
        lfmelo: elo,
        message: comment,
    };

    // EmailJS verwenden, um die Daten zu senden
    emailjs.send('service_1vy20jf', 'template_871lpdh', templateParams)
        .then(function(response) {
            console.log('Erfolgreich gesendet:', response);
            document.getElementById('contact-form').reset();
            showSuccessPage();
            // Hier könntest du den Benutzer zu einer "Danke"-Seite weiterleiten oder eine andere Aktion durchführen
        }, function(error) {
            console.log('Fehler beim Senden:', error);
            // Hier könntest du dem Benutzer mitteilen, dass etwas schief gelaufen ist
        });


}

function showSuccessPage() {
    // Fenster für Erfolgsseite öffnen
    const successPage = window.open('success.html', '_blank');
    if (successPage) {
        // Schließe das aktuelle Fenster (optional)
       // window.close();
    } else {
       // alert('Ihr Popup-Blocker verhindert das Öffnen der Erfolgsseite. Bitte deaktivieren Sie ihn.');
    }
}