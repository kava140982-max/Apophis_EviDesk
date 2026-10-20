# Apophis Evidence Desk

**Öffentlicher Produktkatalog:** [GitHub Pages öffnen](https://kava140982-max.github.io/Apophis_EviDesk/)

**Statische synthetische Demo:** [Anschauung öffnen](https://kava140982-max.github.io/Apophis_EviDesk/demo/)

**Detaillierter Katalog:** [PRODUCT_CATALOG.md](PRODUCT_CATALOG.md)

**Systemvergleich:** [SYSTEM_COMPARISON.md](SYSTEM_COMPARISON.md)

**Preview-Paket 0.4.8:** [ZIP herunterladen](releases/Apophis-Evidence-Desk-v0.4.8-public-patterns-preview.zip) · [SHA-256](releases/Apophis-Evidence-Desk-v0.4.8-public-patterns-preview.zip.sha256)

Apophis Evidence Desk ist ein Arbeitskonzept für nachvollziehbare Evidenz- und Resilienzarbeit. Es soll Aussagen, Belege, Unsicherheiten, Prüfungen und Zuständigkeiten verständlich verbinden. Das aktuelle Paket v0.4.8 ist ein lokaler Review-Prototyp mit getrennten Vorschau-Arbeitsmodellen. Der Offline-Verifier wurde nach einem reproduzierten False-PASS-Fall so korrigiert, dass eine ausdrücklich angegebene fehlende oder ungültige Approval-Datei jetzt fehlschlägt; fünf Regressionfälle decken den Pfad ab.

## Klare Einordnung

Apophis ist **kein** Schutz- oder Überwachungssystem, erkennt keine Angriffe, ersetzt keine fachliche Verantwortung und bescheinigt keine Rechtskonformität. Es ist weder ein fertiger KRITIS-Produktivdienst noch zertifiziert. Vorschau- und Demo-Daten sind synthetisch, sofern eine Funktion nicht ausdrücklich etwas anderes beschreibt.

## Öffentliche Vorschau

Die GitHub-Pages-Seite ist ein Produktkatalog. Die Demo ist statisch und unabhängig vom lokalen Software-Preview. Die lokale Vorschau beschreibt und enthält derzeit:

- Evidence-Desk- und Resilienz-Arbeitsmodelle;
- ein optionales Metadaten-Radar und ein separates zweistufiges Warnmeldungs-Preview;
- ein passives, lokales CSV-Anomalie-Demo;
- manuelle verschlüsselte Anwendungsdaten-Sicherung;
- einen Apophis-Anwendungs-Notfallmodus mit recipient-spezifischem Behörden-Public-Key und Zwei-Personen-Autorisierungshaken;
- KI-Leitplanken sowie einen Quantisierungsbauplan, aber keinen KI-Modelladapter und kein integriertes quantisiertes Modell.

Status, Grenzen, Prüfstand und die vorsichtige Einordnung von Core-Trennung stehen im [öffentlichen Produktkatalog](PRODUCT_CATALOG.md). Ein Alleinstellungs- oder Sicherheitsüberlegenheitsanspruch wird nicht erhoben. „Kein Gegenbeweis bekannt“ ist kein Test.

## Prüfumfang

Für den Preview-Stand 0.4.8 lief `npm test` auf einer frischen lokalen Kopie des synthetischen Pakets erfolgreich durch, einschließlich fünf neuen Verifier-Regressionfällen. Enthalten sind Syntax-, Integritäts-, Tenant-/Governance-, Interop-, CI-Evidence-, Nachrichtenquellen- und Smoke-Prüfungen einschließlich neuer Register-Maßnahmentests. Das ist kein Sicherheits-, Penetrations-, Betriebs- oder Konformitätstest. Eine unabhängige externe Prüfung und Tests in den SaaS-Produkten anderer Anbieter sind nicht dokumentiert.

## Lizenz und Kontakt

Projektdateien stehen, soweit nicht anders angegeben, unter Apache License 2.0. Die Lizenz gibt Produktname und Zeichen nicht automatisch als Marke frei. Siehe [LICENSE](LICENSE).

Kai Valenta · [kava140982@gmail.com](mailto:kava140982@gmail.com)

Die künftige Trägerschaft ist offen. Stiftung, Genossenschaft oder eine andere Form sollen nur bei passendem Zweck, tragfähiger Governance und entsprechenden Freigaben geprüft werden. Kai Valenta ist bereit, die Arbeit mit einem klaren Auftrag und den erforderlichen fachlichen und organisatorischen Freigaben fortzuführen.

#KRITIS #Resilienz #DigitaleResilienz #Evidenzmanagement #Krisenvorsorge #Governance #Risikomanagement #KIGovernance #OpenSource
