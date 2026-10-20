# Apophis Evidence Desk — Prüfübersicht

## Aktueller Prüfstand 0.5.0-offline-only · 20. Oktober 2026

Der Preview-Stand 0.5.0 wurde in einer frisch entpackten temporären Kopie unter Linux mit Node.js v24.22.0 und npm 11.19.1 geprüft. Der Lauf umfasste das vollständige `npm test`, zusätzlich `npm run test:eu-controls:run`, `npm run export:pack` und `node scripts/verify-sbom.js`. Diese Paket-Selbstprüfungen bestanden. Die EU-Kontrollauswertung meldete 3 bestanden, 3 bedingt, 0 fehlgeschlagen und setzt `not_a_certification: true`.

Das GitHub-Pages-Produktverzeichnis (`index.html`) und die Demo (`demo/index.html`) sind statische Inhalte; sie führen diese Paketprüfungen nicht aus. Die Demo ist bewusst begrenzt, rein synthetisch und nicht als funktionsgleiche Web-Version des lokalen Preview gedacht. Die lokalen Checks prüfen keine externen Anbieter, Betreiber-, OT-, Behörden- oder Produktivumgebungen. Sie belegen weder Konformität mit DIN/ISO-Regelwerken noch einen unabhängigen Sicherheitsnachweis.

Für das kuratierte Archiv `Apophis_Hardcore.zip` wurde zusätzlich die ZIP-Integrität, der einzelne Projektwurzelpfad, die SHA-256-Prüfsumme, unzulässige Archivpfade sowie das Fehlen privater Schlüsseldateien geprüft. Die Archivprüfung ersetzt keine fachliche oder externe Prüfung.

---

## Offline-only-Änderung 0.5.0

Die v0.5.0-Änderung sperrt Anwendungs-verwaltete externe Verbindungen und erlaubt Listener nur auf Loopback. `test:offline-network` prüft fail-closed News-/Research-Refresh, HTTP 403 für Referenzprüfung, nicht-lokale Bind-Ablehnung, fehlende aktive externe HTML-Links und die systemd-Filtervorgaben. Der Test beweist nicht die Netzisolation des Betriebssystems; die beiliegende systemd-Vorlage muss vom Betreiber installiert und separat verifiziert werden.

Am 20.10.2026 lief `npm test` mit Node.js v24.22.0 erfolgreich durch (Exitcode 0). Die Offline-Netzwerksuite bestand. Die EU-Kontroll-Selbstbewertung ergab 3 bestanden, 3 bedingt, 0 fehlgeschlagen; sie kennzeichnet sich als `not_a_certification: true`. Dies ist kein externer Penetrationstest und belegt keine hostweite Netzsperre.

## Aktualisierung vom 20. Oktober 2026

Der vollständige lokale `npm test`-Lauf wurde für die Dokumentationsversion 0.4.9 mit Exitcode 0 abgeschlossen. Alle enthaltenen Prüfschritte endeten erfolgreich, einschließlich Paket-/SBOM-Identität, Signaturverifikation, negativer Approval-Fälle, Interop-, Resilienz-, Recovery-, Tenant-, Governance-, Quellen- und Smoke-Tests. Die EU-Selbsteinschätzung meldet 3 bestanden und 3 bedingt; sie ist ausdrücklich keine Zertifizierung.

Der Produktcode wurde gegenüber 0.4.8 nicht geändert. Neu ist der nachvollziehbare Nachweis zum historischen Apophis-Core-Test mit 2.000 synthetischen, abgeschnittenen CBOR-Eingaben. Der Lauf wurde separat erneut ausgeführt und ergab `rejected=2000/2000` mit Python 3.12.3. Testaufbau, Herkunft, Hashes und Grenzen stehen in `APOPHIS_2000_INPUT_TEST.md`. Das sind weder 2.000 reale Angriffe noch ein Penetrations-, DoS- oder Angriffserkennungstest. Dieser historische Test ist nicht als Abdeckung des aktuellen Preview-Codes zu verstehen.

---

## Historischer lokaler Prüflauf 0.4.7


**Stand:** 20. Oktober 2026
**Laufzeit:** Node.js v24.22.0 auf Linux Mint 22.3
**Umfang:** lokale synthetische Demo und Repository-Selbsttests; kein Produktionsbetrieb.

## Ergebnis

`npm test` wurde nach Synchronisierung der SBOM mit der Paketversion erfolgreich mit Exitcode 0 abgeschlossen. Enthalten waren Syntaxprüfung, SBOM-/Abhängigkeitsprüfung, Signatur-/Bundle-Verifikation, Interoperabilität, Tenant- und HTTP-Isolation, Governance, sichere Quellenabrufe, CI-Workflow-Prüfung, Manifest-/Release-Evidenz, WORM-ähnlicher lokaler Store, Register- und Recovery-Ende-zu-Ende-Tests sowie Smoke-Test.

Zusätzlich wurde `test:kritis-resilience` in die Testsuite integriert. Er prüft den gültigen synthetischen Registerstart, PDCA-Phase, Zählung offener und überfälliger Aufgaben, Ausschluss abgeschlossener Aufgaben aus Überfälligkeitszahlen sowie Ablehnung ungültiger Phasen, Aufgabenstatus, Verantwortlicher, Fälligkeiten und doppelter IDs. Alle Fälle bestanden.

`test:recovery` führt die Backup- und Notfall-CLI in einer temporären Kopie mit synthetischen Dateien und einem zur Laufzeit generierten Test-RSA-Schlüsselpaar aus. 38 Assertions bestanden, darunter erfolgreiche Verifikation/Wiederherstellung, Ablehnung einzelner Freigaben, falscher Schlüssel, Symlink und manipuliertes Backup sowie Zwei-Personen-Auslösung und -Freigabe. Es wird kein echter Empfänger oder Identitätsdienst angesprochen.

Die EU-Control-Selbstbewertung meldete **3 bestanden, 3 bedingt, 0 fehlgeschlagen** im Umfang `local-loopback-synthetic-prototype`; sie kennzeichnet sich selbst als `not_a_certification: true`. Bedingte Ergebnisse sind keine Freigaben.

## Fehler gefunden und behoben

Der erste Paketlauf stoppte bei `sbom_identity_mismatch`: Die SBOM verwies noch auf `0.4.5-anomaly-demo-preview`, während `package.json` bereits `0.4.7-public-patterns-preview` auswies. Component-Version, Package URL und dependency reference in `SANDBOX-SBOM.json` wurden auf 0.4.7 aktualisiert. Der anschließende komplette Lauf bestand.

## Grenzen

- Nur Node.js v24.22.0 wurde lokal verwendet; die GitHub-Actions-Konfiguration fordert Node.js 20.x, aber diese Laufzeit wurde nicht separat ausgeführt.
- Die Selbsttests nutzen lokale/synthetische Daten. Sie beweisen keine Produktionssicherheit, regulatorische Konformität, physische WORM-Eigenschaft, Core-Isolation, Echtzeit-Angriffserkennung oder Wiederherstellbarkeit in echter Infrastruktur.
- HiScout, verinice, ServiceNow, Microsoft Sentinel und Veeam wurden anhand ihrer öffentlich verfügbaren Produktunterlagen verglichen, nicht in deren Test-/SaaS-Umgebungen ausgeführt. Dafür wären freigegebene Testmandanten/Lizenzen, gleichwertige Testdaten und vorab definierte Messverfahren nötig.
- Ein reproduzierbares Vergleichsprotokoll mit sechs synthetischen Szenarien liegt in `COMPARATIVE_TEST_PROTOCOL.md`; das Apophis-Ergebnis steht in `comparative-eval/results/apophis-local-0.4.7.json`. Die fünf externen Produkte bleiben im Maschinenstatus explizit `NOT_RUN`.
- Kein unabhängiger Penetrationstest, Red-Team-Test, externer Restore-Test oder produktiver OT-/SIEM-Test wurde ausgeführt.
