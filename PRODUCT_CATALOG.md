# Apophis Evidence Desk — öffentlicher Produktkatalog

**Öffentlicher Produktstand:** Preview 0.5.0-offline-only · Stand 20. Oktober 2026

**Download:** [Preview-Paket 0.5.0](releases/Apophis-Evidence-Desk-v0.5.0-offline-only-preview.zip) · [SHA-256-Prüfsumme](releases/Apophis-Evidence-Desk-v0.5.0-offline-only-preview.zip.sha256) · [Offline-Policy](OFFLINE_ONLY.md) · [Prüfbericht](VALIDATION_REPORT.md) · [Systemvergleich](SYSTEM_COMPARISON.md)
**Zweck:** verständliche Produktbeschreibung und Statusübersicht ohne interne Betriebs-, Schlüssel-, Konfigurations- oder Sicherheitsdetails.

## Kurzbeschreibung

Apophis Evidence Desk ist ein Arbeitskonzept für nachvollziehbare Evidenz- und Resilienzarbeit. Teams sollen Aussagen, Belege, Unsicherheiten, Prüfschritte, Zuständigkeiten und Entscheidungen geordnet zusammen betrachten können. Ergänzende Module werden so geplant, dass ihr Nutzen klar abgegrenzt und ihr Reifegrad sichtbar bleibt.

Apophis ist derzeit ein Prototyp mit lokalen Vorschaukomponenten und einer statischen, synthetischen Demo. Es ist kein Schutz-, Überwachungs- oder Einsatzsystem, keine Sicherheitszertifizierung und keine Aussage zur Erfüllung gesetzlicher Pflichten.

## Produktkatalog und Reifegrad

| Bereich | Wofür er gedacht ist | Öffentlicher Status |
|---|---|---|
| Evidence Desk | Aussagen, Quellen, Belege, Gegenbefunde, Unsicherheiten und menschliche Prüfungen gemeinsam ordnen. | Lokaler Prototyp; keine automatische fachliche Bestätigung. |
| Resilienzregister | Themen, Verantwortlichkeiten, Prüfzeitpunkte und Nachweisreferenzen übersichtlich erfassen. | Arbeitsmodell mit PDCA-Arbeitsphase, offenen/überfälligen Korrekturmaßnahmen und synthetischem Startbestand; keine Vollständigkeits- oder Konformitätsaussage. |
| Übungs- und Wiederanlaufprotokoll | Beobachtungen, Wiederherstellungsziele und Folgeaufgaben aus begrenzten Übungen festhalten. | Vorlage/Arbeitsmodell; kein Live-Krisenmanagement. |
| Research Radar | Bibliografische Metadaten als Eingang für eine fachliche Sichtung sammeln. | In v0.5.0 offline-only deaktiviert; kein externer Abruf. |
| Zweistufige Warnmeldungen | Einzelmeldungen zunächst als Vormeldung und bei mehreren unabhängigen Quellen als quellenbestätigt darstellen. | Separater lokaler Prototyp; Quellenbestätigung ist keine Wahrheits- oder Gefahrenbewertung. |
| Strom-/Datenverkehr-Anomalie-Demo | Ausgewählte Zeitreihen lokal auf statistische Abweichungen prüfen und Prüfhilfen ausgeben. | Passives CSV-Demo; kein Live-Monitoring und kein trainierter Cyberangriffsklassifikator. |
| KI über API | Begrenzte, freigegebene Textaufgaben als nachvollziehbare Vorschläge unterstützen. | Leitplanken-Entwurf; kein produktiver Anbieteradapter. |
| Lokale KI und quantisierte Modelle | Lokale Modellinferenz anhand Hardware, Aufgabe und Qualitätsanforderungen evaluieren. | Bauplan; kein integriertes Modell und keine pauschale Quantisierungsfreigabe. |
| Verschlüsselte Sicherung | Anwendungsdaten als verschlüsseltes Backup für eine getrennte Wiederherstellung sichern. | Manuelles CLI-Preview; lokale Ziele im Offline-only-Betrieb; kein vollständiges Serverabbild und kein Remote-Transferdienst. |
| Notfallmodus | Apophis-Anwendungsrouten sperren, ein begrenztes verschlüsseltes Beweispaket erstellen und eine kontrollierte Wiederfreigabe verlangen. | Preview mit Zwei-Personen-Autorisierungshaken und empfängerbezogener Schlüsselkonfiguration; keine Host- oder Anlagenabschaltung. |

Die Funktionen und Reifegrade beziehen sich auf das zugehörige v0.5.0-Preview-Paket. Öffentliche Muster anderer Produkte wurden als Orientierung geprüft; ausgewählte Prinzipien wurden in begrenzte Vorschau-Arbeitsmodelle oder Anforderungen übersetzt, weitere Ideen sind ausdrücklich nicht implementiert. Details, Quellen und jeweiliger Status stehen in `PUBLIC_PATTERN_ADAPTATIONS.md` im Preview-Paket. Die Offline-only-Policy der Preview sperrt eingebaute externe Netzwerkzugriffe und nicht-lokale Listener. Drei systemd-Filtervorlagen sind enthalten, aber nicht automatisch aktiviert; hostweite Isolation muss separat eingerichtet und geprüft werden. Die GitHub-Pages-Demo in diesem Repository ist eine eigenständige, statische Darstellung und führt keine dieser Betriebsfunktionen aus. Sie bleibt bewusst eine begrenzte Anschauung und wird nicht zu einer funktionsgleichen Produktkopie ausgebaut.

## Entstehung, nachträgliche Ähnlichkeiten und Umgebungen

Nach Aussage des Projektinitiators entstand Apophis aus eigenen praktischen Zielsetzungen. Die einschlägigen DIN-/ISO-Normen und vergleichbaren Regelwerke waren ihm bei der ursprünglichen Entwicklungsidee nicht bekannt. Erst eine spätere Recherche machte teilweise ähnliche Zielrichtungen sichtbar, zum Beispiel nachvollziehbare Evidenz, definierte Zuständigkeiten und Resilienzarbeit.

Diese Einordnung beschreibt eine rückblickend erkannte **Ähnlichkeit von Zielen**. Sie ist weder eine Behauptung, dass bestimmte Normen bewusst umgesetzt wurden, noch ein Nachweis für Vollständigkeit, Konformität, Zertifizierbarkeit, Neuheit oder Alleinstellung. Für Apophis liegt keine systematische DIN-/ISO-Kontrollmatrix und keine externe Normenbewertung vor. Der dokumentierte Systemvergleich ist quellenbezogen und weist aus, wo nur öffentliche Hersteller- oder Standardunterlagen betrachtet wurden.

| Umgebung | Vorhandener Stand | Geprüft / nicht geprüft |
|---|---|---|
| GitHub Pages, `index.html` | Statischer öffentlicher Katalog. | Seiteninhalt, keine Produkt-API oder Echtdatenverarbeitung. |
| GitHub Pages, `demo/index.html` | Kleine interaktive Mock-Demo mit erfundenen Beispielen. | Keine Live-Quellen, keine persistente Eingabe, keine Verbindung zum lokalen Produktpaket. Bewusst nicht weiter ausgebaut. |
| Lokales Preview-Paket 0.5.0 | Loopback-gebundene Node.js-Dienste und getrennte Vorschau-Module. | Paket-Selbsttests mit synthetischen Daten; kein Produktionsbetrieb und keine externen Identitäts-, Behörden- oder Betreiberadapter. |
| Lokale Prüfumgebung | Frisch entpackte temporäre Kopie unter Linux, Node.js 24.22.0, npm 11.19.1. | `npm test`, EU-Kontroll-Selbstlauf, Audit-Pack-Export, SBOM- und Archivprüfung bestanden. EU-Auswertung: 3 bestanden, 3 bedingt; keine Zertifizierung. |
| Fremde Produkt- und Betreiberumgebungen | HiScout, verinice, ServiceNow, Sentinel, Veeam und reale OT-/KRITIS-Umgebungen. | Kein gleichartiger Labortest oder Pilot dokumentiert; Vergleiche beruhen auf öffentlich verfügbaren Unterlagen. |

Die statische Demo ist bewusst ein kleines Kommunikations- und Anschauungsartefakt. Ihr Umfang ist kein Maß für den Umfang des lokalen Preview-Pakets und sie soll nicht als Online-Betriebsoberfläche missverstanden werden.

## Leitlinien

### Nachvollziehbare Evidenz statt automatischer Wahrheit

Eine Quelle, ein Datei-Hash oder eine KI-Zusammenfassung kann Herkunft und Veränderung nachvollziehbarer machen. Das belegt für sich weder Richtigkeit noch Wirksamkeit. Fachliche Entscheidungen bleiben bei benannten Menschen und zuständigen Organisationen.

### Getrennte Verantwortlichkeiten

Der Core soll Evidenz, Status und menschliche Freigaben verwalten. KI, Warnmeldungen, Anomaliehinweise und Sicherungsprozesse sind abgegrenzte Hilfsbereiche mit eigenen Datenwegen und klar beschränkten Aufgaben. Diese Leitlinie ist ein Architekturziel und muss je Ausbaustufe technisch und unabhängig verifiziert werden; eine Produktseite ist kein Sicherheitsnachweis.

### KI liefert Vorschläge

Ein KI-Modul darf nach dem Entwurf Zusammenfassungen, mögliche Aussagen, Gegenbefunde und offene Prüffragen liefern. Es soll keine Evidenz freigeben, keine sicherheitskritische Entscheidung treffen und keine Datenbank oder Anlagensteuerung eigenständig ändern. Externe API-Nutzung setzt eine konkrete Daten- und Anbieterfreigabe voraus. Im aktuellen Preview ist keine KI produktiv integriert.

### Warnungen und Anomalien sind Prüfanlässe

Eine Meldung oder statistische Abweichung soll zu einer Überprüfung anregen. `quellenbestätigt` bedeutet im Warn-Demo, dass unterschiedliche konfigurierte Quellenfamilien dieselbe Meldung stützen; es ist kein amtliches Bestätigungsprädikat. Ein Zeitreihen-Treffer ist kein bestätigter Angriff. Kein Treffer bedeutet nicht, dass ein System sicher ist.

### Notfallmodus bleibt auf die Applikation begrenzt

Das Preview kann Apophis selbst sperren und eine Zwei-Personen-Freigabe für die Wiederfreigabe verlangen. Es schaltet keine Energieversorgung, OT-/SCADA-Systeme, Leitstellen, Warnsysteme oder physischen Sicherheitsfunktionen ab. Solche Maßnahmen müssen durch eigenständige, standortspezifische und fachlich freigegebene Verfahren geregelt werden.

Ein Empfängerschlüssel ist einem benannten Behörden-/Zuständigkeitsbereich zugeordnet. Es gibt keinen universellen oder in Apophis eingebetteten Behörden-Masterkey. Eine echte Behörde, ein Schlüssel, ein Identitätsadapter oder ein gesicherter Ferntransport werden durch diesen öffentlichen Katalog nicht bereitgestellt.

## Architekturposition und Vergleichsaussage

Wir können derzeit **nicht belastbar behaupten, dass Apophis das einzige System mit einer solchen Schutzidee ist**. Der direkte Gegencheck fand bereits öffentlich dokumentierte, verwandte Produktkontrollen: ServiceNow beschreibt für Now Assist rollenbasierte Berechtigungen, dieselben Plattform-ACLs und Domain Separation sowie eine begrenzte Rollenvererbung/Rollenmaskierung für KI-Agenten. In GRC-Arbeitsabläufen kann Now Assist Aktionspläne und Abhilfemaßnahmen vorschlagen; Nutzende können diese annehmen, bearbeiten oder verwerfen. Das ist ein konkretes Gegenbeispiel zur breiten Aussage, nur Apophis verbinde KI-Grenzen und menschliche Kontrolle.

Die öffentlichen ServiceNow-Unterlagen belegen nicht, dass deren Architektur mit einer separaten Prozess-/Dienstgrenze ohne Core-Zugriff identisch ist. Ebenso ist der Apophis-Entwurf bislang nicht extern auf eine solche Garantie geprüft. Wir können deshalb keine Gleichheit der technischen Umsetzung oder eine Überlegenheit in einem Teilbereich behaupten. Für einen belastbaren direkten Vergleich müssten zuerst „Core-Trennung“ und Testbedingungen messbar definiert werden.

Auch unabhängig davon sind Identitätsprüfung, geringste Rechte, Modulgrenzen und Mikrosegmentierung etablierte Sicherheitsprinzipien. NIST beschreibt Zero-Trust-Modelle für anwendungsbezogene Zugriffskontrolle und dokumentiert mehrere Beispielimplementierungen; Cloudanbieter beschreiben ebenfalls Sicherheits- und Isolationsgrenzen. Eine mögliche Besonderheit von Apophis bleibt die geplante Kombination aus Evidenzverwaltung, menschlichem Review, getrennten Hinweis-/Sicherungsmodulen und begrenztem Notfallablauf. Ob diese Kombination außergewöhnlich oder anderen Produkten überlegen ist, ist derzeit **nicht unabhängig nachgewiesen**. Wir veröffentlichen daher keinen Alleinstellungs-, Sicherheitsüberlegenheits- oder Wettbewerbsclaim.

Quellen für die Einordnung:

- [ServiceNow: Agentic AI security and governance — ACLs, Rollen und Domain Separation](https://www.servicenow.com/docs/r/platform-security/now-assist-security.html)
- [ServiceNow: Define security controls for AI agents](https://www.servicenow.com/docs/r/intelligent-experiences/define-sec-controls-aia.html)
- [ServiceNow: GRC issue resolution workflow — vorgeschlagene und durch Nutzende angenommene/bearbeitete/verworfene Maßnahmen](https://www.servicenow.com/docs/r/governance-risk-compliance/grc-common-functions/generate-grc-issue-resolution.html)
- [NIST SP 800-207A — Zero Trust Architecture Model for Access Control in Cloud-Native Applications](https://csrc.nist.gov/pubs/sp/800/207/a/final)
- [NIST SP 1800-35 — Implementing a Zero Trust Architecture, mit 19 Beispielimplementierungen](https://csrc.nist.gov/pubs/sp/1800/35/final)
- [NIST SP 800-53 Rev. 5.1 — Least Privilege und modulare Rechtebegrenzung](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
- [AWS Security Reference Architecture — Konten als Sicherheits- und Isolationsgrenzen](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/organizations.html)

## Prüf- und Aussageordnung

Wir unterscheiden drei Arten von Aussagen:

1. **Im Preview vorhanden:** eine lokal nachvollziehbare Funktion oder Vorschaukomponente ist im Paket enthalten.
2. **Intern geprüft:** ein benannter, wiederholbarer Test wurde mit dokumentiertem Umfang und Ergebnis ausgeführt.
3. **Extern bestätigt:** eine unabhängige Stelle hat einen definierten Prüfgegenstand nach vereinbartem Verfahren geprüft und ein Ergebnis veröffentlicht.

Für Preview 0.5.0 lief der vollständige lokale Prüflauf (`npm test`) auf einer frischen Kopie erfolgreich durch. Nach einem reproduzierten False-PASS-Fall wurde der Offline-Verifier so geändert, dass ein ausdrücklich angegebener fehlender, unlesbarer oder ungültiger Approval-Pfad fehlschlägt. Fünf Regressionfälle für optionale Prüfung, gültiges Protokoll, fehlende Datei, fehlerhaftes JSON und falsche Struktur sind Teil der Suite. Die lokalen synthetischen Recovery- und Notfall-Tests bestanden ebenfalls. Ein anbieterneutrales Vergleichsprotokoll mit gemeinsamen synthetischen Szenarien liegt dem Preview-Paket bei. Geprüft wurden nur lokale Abläufe; das belegt nicht Sicherheit, Core-Isolation, Datenabfluss, Verfügbarkeit, Wiederherstellbarkeit im Betrieb, regulatorische Eignung oder Angriffserkennung. Eine unabhängige externe Sicherheitsprüfung oder ein direkter Labortest gegen HiScout, verinice, ServiceNow, Sentinel oder Veeam ist nicht dokumentiert. Der Vergleich beruht für diese Produkte auf öffentlichen Produktunterlagen. Aussagen über einen Vorsprung dürfen daher erst nach positiven, reproduzierbaren externen Tests erscheinen — und dann nur bezogen auf den tatsächlich geprüften Prüfgegenstand.

„Bisher kein Gegenbeweis bekannt“ ist kein positiver Test und kein Nachweis für Alleinstellung oder Überlegenheit.

Der breitere Produktvergleich vom 20. Oktober 2026 bestätigt die Grenzen dieser Aussage: HiScout und verinice dokumentieren bereits umfangreiche ISMS-/GRC-/BCM-Funktionen; ServiceNow beschreibt KI-Agenten mit konfigurierbaren Identitäten, Zugriffsrechten und AI-GRC-Funktionen; Microsoft Sentinel dokumentiert UEBA- und ML-Anomalieerkennung; Veeam dokumentiert verschlüsselte und zeitweise unveränderbare Backups. Diese Produkte sind jeweils spezialisierte und deutlich reifere Vergleichspunkte. Die öffentlichen Unterlagen belegen verwandte Fähigkeiten, aber nicht dieselbe konkrete Core-Prozessgrenze. Apophis weist diese Grenze seinerseits noch nicht unabhängig nach.

Eine aktuelle Funktions- und Reifegradmatrix einschließlich Grenzen und Quellen liegt in [SYSTEM_COMPARISON.md](SYSTEM_COMPARISON.md). Sie stützt sich auf öffentliche Hersteller- und Standarddokumentation. Es fand kein gleichartiger Labortest in den Diensten anderer Anbieter statt; die Übersicht ist keine vollständige Marktstudie.

## Was eine unabhängige Prüfung sinnvoll untersuchen könnte

Ohne vertrauliche Betriebsdetails zu veröffentlichen, können Prüfungen später folgende Ergebnisarten offenlegen:

- ob Review- oder KI-Vorschläge ohne menschliche Berechtigung den Evidenzstatus ändern können;
- ob Datenwege zwischen Core und optionalen Hilfsmodulen wie vorgesehen begrenzt sind;
- ob nicht konfigurierte Anbieter, Schlüssel oder Berechtigungen standardmäßig abgewiesen werden;
- ob Zwei-Personen-Freigaben bei den konkret einbezogenen Notfall- und Sicherungsoperationen technisch erzwungen werden;
- ob verschlüsselte Beweispakete für den vorgesehenen Empfänger lesbar und für andere Parteien nicht ohne Weiteres entschlüsselbar sind;
- ob ein Wiederanlauf nach einem simulierten Fehler nachvollziehbar und vollständig gelingt;
- welche Fehlalarmraten, Datenlücken und Grenzen das Anomalie-Demo im jeweils freigegebenen Datensatz aufweist;
- wie Genauigkeit, Quellenbezug, Schema-Treue und Datenminimierung von KI-Vorschlägen in einem konkret ausgewählten Modellbetrieb ausfallen.

Prüfergebnisse müssen Prüfbedingungen, Version, Stichprobe, bekannte Einschränkungen und nicht geprüfte Bereiche nennen. Ein positives Ergebnis für einen Teilbereich darf nicht als allgemeine Sicherheitsfreigabe dargestellt werden.

## Mögliche Trägerschaft und Bereitschaft zur Weiterarbeit

Für das Projekt ist noch keine Stiftung, Genossenschaft oder sonstige Organisation gegründet. Welche Form passt, hängt zuerst vom konkret gewählten Zweck, Finanzierungsmodell, Mitwirkungsmodell und der langfristigen Governance ab.

- Eine **Stiftung** könnte passen, wenn ein dauerhaft gebundener Zweck und eine tragfähige Vermögens- oder Finanzierungsbasis im Vordergrund stehen. Das Stiftungsgeschäft und die Satzung prägen Zweck und Verfassung; eine steuerliche Gemeinnützigkeit folgt daraus nicht automatisch. [§ 80 BGB](https://www.gesetze-im-internet.de/bgb/__80.html), [§ 83 BGB](https://www.gesetze-im-internet.de/bgb/__83.html).
- Eine **Genossenschaft** könnte passen, wenn Mitglieder das Projekt gemeinschaftlich betreiben und ihr wirtschaftliches, soziales oder kulturelles Interesse fördern sollen. Das GenG verlangt mindestens drei Mitglieder und bringt Satzungs-, Organisations- und Prüfungsanforderungen mit sich; darunter Pflichtprüfungen und Mitgliedschaft in einem Prüfungsverband. [§ 1 GenG](https://www.gesetze-im-internet.de/geng/__1.html), [§ 4 GenG](https://www.gesetze-im-internet.de/geng/__4.html), [§ 53 GenG](https://www.gesetze-im-internet.de/geng/__53.html), [§ 54 GenG](https://www.gesetze-im-internet.de/geng/__54.html).

Das ist eine erste Orientierung, keine Rechts-, Steuer- oder Gründungsberatung. Kai Valenta ist bereit, die Arbeit am Projekt fortzuführen, wenn Auftrag, Zuständigkeiten, erforderliche fachliche und organisatorische Freigaben sowie Ressourcen geklärt sind. Gespräche dazu sind willkommen; eine Zusage für eine bestimmte Rechtsform oder einen bereits bestehenden Träger gibt es nicht.

## Individuelle Anpassung

Jede Einführung muss für Organisation, Prozess, Datenklasse und technische Umgebung individuell zugeschnitten werden. Das gilt insbesondere für:

- Rollen, Identitätsprüfung, Zwei-Personen-Verfahren und Zuständigkeiten;
- zulässige Daten, Aufbewahrung, Löschung, Sicherungsziele und Empfänger;
- Warnquellen, Aktualisierungsregeln, Quellenfamilien und Eskalationswege;
- Messgrößen, Zeitauflösung, Baseline-Zeiträume, Toleranzen und Fehlalarmgrenzen;
- KI-Anbieter oder lokale Modelle, Sprach-/Fachtests, Quantisierung, Laufzeit und Hardware;
- Wiederherstellungsziele, Ausfallverhalten, Abnahme und lokale OT-Sicherheitsverfahren.

Voreinstellungen und Beispieldaten sind keine Betriebsfreigabe. Vor Pilot oder Echtdatenbetrieb braucht es fachliche Verantwortung, Datenschutz- und Sicherheitsprüfung und einen abgesprochenen Testumfang.

## Grenzen der öffentlichen Darstellung

Dieser Katalog beschreibt Zweck, Funktionen und Reifegrad auf hoher Ebene. Er veröffentlicht keine Zugangsdaten, privaten Schlüssel, internen Endpunkte, vertraulichen Einsatzdaten oder detaillierten Betreiberkonfigurationen. Sicherheitsrelevante Schwachstellen sollen über einen verantwortungsvollen, vertraulichen Meldeweg behandelt werden; die öffentliche Demo bleibt synthetisch.

## Lizenz und Kontakt

Repository-Inhalte stehen unter Apache License 2.0, soweit in einer Datei nichts Abweichendes angegeben ist. Produktname und Zeichenrechte sind davon nicht automatisch umfasst. Siehe [LICENSE](LICENSE).

Kontakt für Pilot- und Review-Anfragen: [Kai Valenta](mailto:kava140982@gmail.com).

---

**Stand: Preview 0.5.0-offline-only · 20. Oktober 2026.** Dieser Katalog ersetzt keine Sicherheitsprüfung, Rechtsberatung, Produktdokumentation für einen konkreten Betrieb oder unabhängige Zertifizierung.
