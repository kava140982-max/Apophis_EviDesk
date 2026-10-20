# Umsetzungsplan — Apophis Qualifizierungs- & Schulungsframework

**Stand:** Preview 0.1.0 · 20. Oktober 2026  
**Zielartefakt:** eigenständige Windows-x64-EXE, getrennt vom Apophis Evidence Core.

## Zielverhalten

1. Beim ersten Start wird lokal ein 365-Tage-Zeitraum eröffnet.
2. Während dieses Zeitraums kann die nutzende Person ein lokales Lernprofil anlegen und Module freiwillig als begonnen oder angesehen markieren.
3. Ab Ablauf bleiben Lerntexte, Profile und gespeicherte Fortschritte dauerhaft lesbar. Der JSON-Export bleibt verfügbar; alle Änderungen und neuen Profile werden blockiert.
4. Gerätewechsel, beschädigter Lizenzstatus oder auffällige Systemzeit-Rückstellung führen in einen erklärten Lesemodus. Es werden keine Inhalte gelöscht.
5. Die Anwendung bindet ausschließlich an Loopback und enthält weder Telemetrie noch externe API-Aufrufe.

## Umgesetzt in der Preview

- Neun Lernmodule aus den drei Stufen des vorgelegten Schulungsentwurfs, mit fachlichen Korrekturen an unbelegten Behauptungen.
- Freiwillige Modulansicht und positive Statusführung (`not_started`, `in_progress`, `completed`); keine Fehlversuchs- oder Negativbewertung.
- Lokale JSON-Speicherung von Anzeigename und Modulstatus; JSON-Export im Lese- und Schreibmodus.
- Gerätereferenz aus gehashter Windows-MachineGuid; unter Linux wird eine vorhandene Systemkennung genutzt.
- First-run-Timer, Prüfung auf Uhr-Rückstellung, Geräteabweichung und ungültigen Status.
- Serverseitige Sperre sämtlicher schreibender API-Endpunkte nach Fristende; GET-Routen bleiben zugänglich.
- Windows-EXE mit eingebetteter Node-Laufzeit und statischen Oberflächenressourcen.
- Name und E-Mail des Projektkontakts in Oberfläche und Dokumentation.

## Datenfluss und Grenzen

```text
Windows-EXE
  ├─ bindet an 127.0.0.1
  ├─ liest statische Lernmodule aus dem Paket
  ├─ liest/schreibt lokale Zustandsdateien unter %LOCALAPPDATA%\Apophis\ApophisTraining365
  └─ baut keine externe Netzwerkverbindung auf
```

Die Gerätekennung wird gehasht und lokal gespeichert. Sie wird nicht an Kai Valenta oder einen Server übertragen. Die Kennung ist eine technische Systemreferenz, keine anonyme Information und keine belastbare Hardware-Vertrauenskette. Ein lokales Programm mit offline verfügbarer Systemzeit kann durch eine lokale Administratorperson verändert, kopiert oder zurückgesetzt werden. Der 365-Tage-Schreibschutz ist in dieser Preview daher ein transparenter Nutzungsmechanismus, kein DRM oder manipulationssicheres Lizenzsystem.

Die App bietet nur Profile auf einem lokalen Benutzerkonto und keine Anmeldung, Passwortsperre, Rechteverwaltung oder Beschäftigtentrennung. Der Anzeigename kann personenbezogen sein. Deshalb enthält die UI den Hinweis, keine realen Beschäftigtendaten zu speichern. Für einen realen Einsatz wären mindestens unabhängige Benutzeridentitäten, Datenschutz- und Aufbewahrungskonzept, Rollenmodell, Zugriffsschutz, sichere Verschlüsselung mit OS-Schlüsselspeicher, getestete Backups/Restore und eine abgestimmte Beschäftigtenbeteiligung erforderlich.

## Nicht Bestandteil

- Keine Zertifikate oder Kompetenz-/Leistungsbewertung.
- Keine Verbindung zum Core, zu einer Organisation, einem Identitätsdienst oder HR-System.
- Keine Produktivdaten, echten Personaldaten oder vertraulichen Inhalte.
- Keine Fernverwaltung, keine Lizenzserver, keine Telemetrie und keine automatische Verlängerung.
- Keine sichere Umgehungsresistenz gegen Administratorzugriff oder absichtliche Codeänderung.
- Keine Aussage zu DSGVO-Konformität oder Erfüllung einer Beschäftigten-Auskunftspflicht.

## Weitere Schritte vor einem echten Rollout

1. Anforderungen und Rollen mit Datenschutz, Informationssicherheit, Personalvertretung/Betriebsrat und fachlicher Verantwortung klären.
2. Authentisierte Identitäten und Profiltrennung auf Ebene des Betriebssystems oder eines freigegebenen Identitätsdienstes entwerfen.
3. Minimierung, Rechtsgrundlage, Speicherfristen, Löschprozess, Exportformat und Vorfallbehandlung bewerten.
4. Lizenzierungsmodell mit möglichst wenig Gerätebezug und geprüftem Signatur-/Schlüsselverfahren entwerfen; für Offline-Geräte bewusstes Verfahren bei Gerätewechsel vorsehen.
5. Windows-Installer, Code-Signing, Update-/Widerrufsprozess, SBOM, Malwareprüfung und unabhängige Sicherheitsprüfung ergänzen.
6. Module mit Fachexperten prüfen und sicherstellen, dass Lernmarkierungen nicht als Kompetenz- oder Zertifizierungsnachweis missverstanden werden.
