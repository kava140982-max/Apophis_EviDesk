# Apophis Qualifizierungs- & Schulungsframework — Preview 0.1.0

## Zweck und Status

Eigenständige lokale Trainings-Preview mit neun freiwilligen Lernmodulen, synthetischen Inhalten, lokalen Lernprofilen und Fortschrittsexport. Sie ist nicht in den Apophis Evidence Core integriert. Die Anwendung ist kein Kompetenztest, Personalbewertungssystem, Zertifikat, Konformitätsnachweis oder Produktivsystem.

**Datenhinweis:** Die Preview hat keine Anmeldung und keine Trennung der Profile zwischen lokalen Nutzenden. Auf einem gemeinsam genutzten Gerät können andere lokale Benutzer die gespeicherten Lernprofile einsehen. Keine echten Personal-, Betriebs-, vertraulichen oder geheimhaltungsbedürftigen Daten eingeben.

## 365-Tage-Modell

- Der Schreibzeitraum startet beim ersten Programmstart auf dem Gerät.
- Die Bindung wird lokal aus der Windows-MachineGuid gebildet und nur als SHA-256-Kennung gespeichert/angezeigt. Sie wird nicht übertragen.
- Während des Schreibzeitraums können lokale Anzeigenamen und Modulzustände gespeichert werden.
- Nach Ablauf bleiben alle Module, Profile, Fortschritte und der JSON-Export lesbar. Profile und Fortschritte können nicht mehr neu angelegt oder geändert werden.
- Bei Gerätewechsel, unlesbarem Status oder erkannter Systemzeit-Rückstellung fällt die Preview in den Lesemodus; eine manuelle Klärung erfolgt über den Kontakt in der Anwendung.
- Es gibt keine Löschung oder Datenvernichtung beim Ablauf.

Dies ist eine nachvollziehbare **Preview-Sperre**, keine manipulationssichere kommerzielle Lizenztechnik. Ein lokales Programm ohne vertrauenswürdigen externen Zeitgeber oder geschützte Hardware kann durch lokale Administratoren verändert oder zurückgesetzt werden. Die Systemkennung ist eine technische Reibung, kein Diebstahlschutz. Ein Produktiveinsatz benötigt eine geprüfte Lizenz-/Aktivierungsarchitektur, Datenschutzkonzept, echte Benutzer- und Rollenverwaltung sowie geklärte Beschäftigtenbeteiligung.

## Start

Für die Windows-Preview `Apophis-Training-365.exe` starten. Die Anwendung bindet ausschließlich an `127.0.0.1`, öffnet die Benutzeroberfläche im Standardbrowser und benötigt keine externe Netzwerkverbindung. Zum Beenden das Konsolenfenster schließen oder `Ctrl+C` drücken.

Für Entwicklung mit Node.js 20 oder neuer:

```bash
node server.js
```

Windows-Daten liegen in `%LOCALAPPDATA%\Apophis\ApophisTraining365`. Unter Linux werden XDG-Datenpfade verwendet. `APOPHIS_TRAINING_DATA` kann für Entwicklung und isolierte Demonstrationen einen expliziten lokalen Pfad setzen.

## Kontakt

Kai Valenta · [kava140982@gmail.com](mailto:kava140982@gmail.com)
