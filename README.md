# Apophis Evidence Desk

**GitHub Pages / Produktkatalog:** [öffentliche Seite öffnen](https://kava140982-max.github.io/Apophis_EviDesk/)

**Statische Konzeptdemo:** [Anschauung öffnen](https://kava140982-max.github.io/Apophis_EviDesk/demo/)

**Detaillierter Katalog:** [PRODUCT_CATALOG.md](PRODUCT_CATALOG.md)
**Systemvergleich:** [SYSTEM_COMPARISON.md](SYSTEM_COMPARISON.md)

**Preview 0.5.0 (offline-only):** [Quellpaket herunterladen](releases/Apophis-Evidence-Desk-v0.5.0-offline-only-preview.zip) · [SHA-256](releases/Apophis-Evidence-Desk-v0.5.0-offline-only-preview.zip.sha256) · [Offline-Policy](OFFLINE_ONLY.md) · [Prüfbericht](VALIDATION_REPORT.md)

Apophis Evidence Desk ist ein frühes Arbeitsmodell für nachvollziehbare Evidenz- und Resilienzarbeit. Es soll Aussagen, Belege, Unsicherheiten, Prüfschritte und menschliche Zuständigkeiten zusammenführen. Das aktuelle Softwarepaket ist ein lokaler Review-Prototyp; die GitHub-Pages-Seite ist ein eigenständiger, statischer Katalog.

## Entstehung und nachträgliche Einordnung

Nach Aussage des Projektinitiators entstand die Idee aus eigenen praktischen Zielsetzungen. Die einschlägigen DIN-/ISO-Normen und vergleichbaren Regelwerke waren ihm bei der ursprünglichen Entwicklungsidee nicht bekannt. Bei einer späteren Recherche wurden teilweise ähnliche Zielrichtungen sichtbar, etwa nachvollziehbare Nachweise, klare Zuständigkeiten und Resilienzarbeit.

Das ist eine **rückblickende Ähnlichkeit der Ziele**. Sie belegt weder eine bewusste Umsetzung bestimmter Normen noch Vollständigkeit, Konformität, Zertifizierbarkeit, Neuheit oder Alleinstellung. Eine systematische DIN-/ISO-Kontrollmatrix oder externe Normenbewertung liegt für Apophis nicht vor. Die dokumentierten Vergleiche sind in [SYSTEM_COMPARISON.md](SYSTEM_COMPARISON.md) nach Quelle und Prüfgrenze eingeordnet.

## Was liegt in welcher Umgebung?

| Umgebung | Was dort vorhanden ist | Aussagegrenze |
|---|---|---|
| **GitHub Pages** (`index.html`) | Öffentlicher Produktkatalog und Projektinformationen. | Statische Website; keine Produkt-API und kein Zugriff auf Betreiber- oder Projektdaten. |
| **GitHub Pages Demo** (`demo/index.html`) | Kleine, interaktive Anschauung mit frei erfundenen Beispielen. | Bewusst begrenzt und nicht als funktionsgleiche Kopie des Softwarepakets ausgebaut. Sie speichert keine Eingaben und spricht keine Live-Quelle an. |
| **Lokales Preview-Paket 0.5.0** | Node.js-Anwendung mit lokalen Loopback-Diensten für Evidenz-/Resilienz-Arbeitsmodelle sowie getrennten Warn-, Anomalie-, Backup- und Notfall-Previews. | Review-Prototyp, kein Produktivdienst. Externe Identitäts-, Quellen- und Autorisierungsadapter sowie ein produktiver Ferntransfer sind nicht enthalten. |
| **Lokale Prüfumgebung** | Tests der Paket-Selbstprüfungen auf Linux mit Node.js 24.22.0 und npm 11.19.1 in einer frisch entpackten temporären Kopie. | Synthetische lokale Prüfungen; keine externe Sicherheitsprüfung oder Tests an Fremd-, Behörden-, KRITIS-, OT- oder Produktivsystemen. |

## Aktueller Reifegrad

- Das Produktpaket enthält lokale Evidenz- und Resilienz-Arbeitsmodelle.
- Das Warnmeldungs-Preview und die passive CSV-Zeitreihenanalyse sind getrennte lokale Vorschauen.
- Das Anomalie-Demo verwendet einen statistischen Median/MAD-Detektor. Es erkennt und bestätigt keine Angriffe.
- Backup und Notfallmodus beziehen sich auf Apophis-Anwendungsdaten bzw. Apophis selbst, nicht auf ein vollständiges Betriebssystemabbild oder fremde Anlagen.
- KI-Leitplanken und ein Plan zur lokalen Quantisierung sind dokumentiert; ein produktiver KI-Adapter und ein integriertes quantisiertes Modell fehlen.
- Rollen, Schwellenwerte, Datenquellen, Aufbewahrung, Modelle und Betriebsabläufe müssen für jede Organisation und Umgebung individuell angepasst und geprüft werden.

Apophis ist **kein** Schutz- oder Live-Überwachungssystem, keine Angriffserkennung, kein fertiger KRITIS-Produktivdienst und kein Nachweis gesetzlicher Konformität. Ein Alleinstellungs- oder Sicherheitsüberlegenheitsanspruch wird nicht erhoben.

## Lokale Prüfergebnisse

Für das v0.5.0-Paket bestanden `npm test`, `npm run test:eu-controls:run`, `npm run export:pack` und die SBOM-Prüfung in der oben beschriebenen lokalen Umgebung. Die EU-Kontrollauswertung ergab drei bestandene und drei bedingte Kontrollen; sie weist ausdrücklich keine Zertifizierung aus. Die Prüfumgebung, Schritte und Einschränkungen stehen in [VALIDATION_REPORT.md](VALIDATION_REPORT.md).

## Lizenz und Kontakt

Projektdateien stehen, soweit nicht anders angegeben, unter Apache License 2.0. Die Lizenz gibt Produktname und Zeichen nicht automatisch als Marke frei. Siehe [LICENSE](LICENSE).

Kai Valenta · [kava140982@gmail.com](mailto:kava140982@gmail.com)

Eine künftige Trägerschaft ist offen. Kai Valenta ist bereit, die Arbeit bei geklärtem Auftrag, passenden fachlichen und organisatorischen Freigaben und tragfähigen Ressourcen fortzuführen.

#KRITIS #Resilienz #DigitaleResilienz #Evidenzmanagement #Krisenvorsorge #Governance #Risikomanagement #KIGovernance #OpenSource
