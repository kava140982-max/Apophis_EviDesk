# Apophis Evidence Desk — ausführlicher Produktkatalog

**Öffentlicher Stand:** Preview 0.5.0-offline-only  
**Katalogstand:** 20. Oktober 2026  
**Einordnung:** Entwicklungs- und Review-Prototyp; keine Produktivplattform, Zertifizierung oder Angriffserkennung.

> **Kurzurteil:** Vorhanden ist ein ungewöhnlich breit gedachtes, lokal prüfbares Arbeitsmodell für Evidenz- und Resilienzarbeit mit abgegrenzten Vorschauideen für Warnungen, Anomaliehinweise, Backups und einen Notfallmodus. Der belastbare Kern heute ist die nachvollziehbare Dokumentation, die statische/offlinefähige Vorschau und die lokal wiederholbaren Selbsttests. Für einen Betrieb bei Organisationen fehlen noch produktive Identitäten, Mandanten- und Rollenmodelle, echte Datenquellen, unabhängige Sicherheits- und Wiederherstellungsprüfungen sowie ein fachlich validierter Betrieb.

**Weiterführende Dateien:** [Kurz-Katalog](PRODUCT_CATALOG.md) · [Systemvergleich](SYSTEM_COMPARISON.md) · [Prüfbericht](VALIDATION_REPORT.md) · [Offline-Policy](OFFLINE_ONLY.md) · [README](README.md) · [Preview-Paket](releases/Apophis-Evidence-Desk-v0.5.0-offline-only-preview.zip) · [SHA-256](releases/Apophis-Evidence-Desk-v0.5.0-offline-only-preview.zip.sha256)

## 1. Was Apophis heute ist

Apophis Evidence Desk ist ein eigenständiges Projekt für geordnete Evidenz- und Resilienzarbeit. Es soll Aussagen, Quellen, Belege, Gegenbefunde, Unsicherheit, Prüfschritte, Zuständigkeiten und Entscheidungen nebeneinander nachvollziehbar machen. Der Ansatz richtet sich an Teams, die Nachweise und offene Punkte strukturiert besprechen müssen.

Die aktuelle Software ist ein **Preview-Prototyp** mit lokalen Diensten und klar als Vorschau bezeichneten Nebenmodulen. Die GitHub-Pages-Seite ist davon getrennt: Sie enthält einen öffentlichen Katalog und eine kleine statische Demonstration mit erfundenen Beispielen. Sie ist kein Onlinebetrieb des Produktpakets.

Apophis ist derzeit weder ein SIEM/SOC noch ein GRC-Komplettsystem, kein automatisierter Compliance-Nachweis, kein OT-Schutzprodukt und kein produktiver KRITIS-Dienst. Hinweise aus Warn- und Anomalie-Demos sind Prüfanlässe, keine Feststellungen über Wahrheit, Gefahr oder Angriff.

## 2. Produktbestand nach Modul

| Modul / Baustein | Zweck | Stand im Paket | Was es heute nicht leistet |
|---|---|---|---|
| Evidence Desk | Aussagen, Belege, Quellen, Unsicherheiten, Gegenbefunde und menschliche Prüfungen gemeinsam ordnen. | Lokales Review-Arbeitsmodell. | Keine automatische Wahrheitsprüfung, keine verbindliche Freigabe und kein fachlich validierter Auditnachweis. |
| Resilienzregister | Verantwortlichkeiten, Themen, Prüfzeitpunkte und Korrekturmaßnahmen überblicken. | Arbeitsmodell mit PDCA-Arbeitsphase und synthetischem Startbestand. | Keine Vollständigkeits- oder Konformitätsaussage; keine geprüfte Abdeckung eines realen Betriebs. |
| Übungs-/Wiederanlaufprotokoll | Beobachtungen und Folgeaufgaben aus Übungen oder Wiederanlaufbesprechungen sammeln. | Vorlage bzw. Arbeitsmodell. | Kein Krisenmanagementsystem und kein gemessener Wiederanlauf eines realen Dienstes. |
| Research Radar | Quellenhinweise bibliografisch erfassen und für menschliche Sichtung vorbereiten. | In der offline-only Preview deaktiviert. | Kein Live-Webabruf und keine automatische Bewertung aktueller Lageinformationen. |
| Zweistufige Warnmeldungen | Meldungen als Vormeldung und bei mehreren konfigurierten Quellfamilien als quellenbestätigt anzeigen. | Separater lokaler Prototyp. | Keine echten Behörden-/Warnquellen; Quellanzahl beweist weder Unabhängigkeit noch Richtigkeit, amtliche Bestätigung oder Gefahrenlage. |
| Anomalie-Demo | Ausgewählte Zeitreihe auf statistische Abweichungen prüfen und auf einen menschlichen Prüfbedarf hinweisen. | Passiver CSV-Prototyp mit Median/MAD und konfigurierbaren Schwellen. | Kein Live-Monitoring, keine Sensorintegration, kein gelerntes Modell, keine Angriffserkennung oder Angriffsattribution. |
| KI-Leitplanken für API-Dienste | Externe KI auf eng beschränkte, nachvollziehbare Vorschläge begrenzen. | Governance-Entwurf. | Kein API-Anbieteradapter, keine produktive Datenübermittlung, keine getestete Prompt-/Datenisolation. |
| Lokales Modell / Quantisierung | Modellgröße und Laufzeit auf konkreter Hardware und Aufgabe abstimmen. | Evaluationsbauplan. | Kein integriertes Modell, keine benchmarkte Genauigkeit, keine pauschale Freigabe einer Quantisierungsstufe. |
| Verschlüsselte Sicherung | Apophis-Anwendungsdaten als Wiederherstellungskopie sichern. | Manuell angestoßenes CLI-Preview; getrenntes Ziel lokal auswählbar. | Kein vollständiges Betriebssystem-/Serverabbild, kein automatischer externer Transfer und keine nachgewiesene Wiederherstellung in einer Zielumgebung. |
| Notfallmodus | Apophis selbst begrenzt sperren, ein vorgesehenes Beweispaket erzeugen und Wiederfreigabe verlangen. | Applikationsbezogenes Preview mit Zwei-Personen-Autorisierungshaken. | Keine Abschaltung von Host, Netzwerk, Stromversorgung, Leitstelle, OT/SCADA oder Drittprodukten. Der Haken allein ersetzt keine unabhängige Identitätsprüfung. |
| Lieferketten-/Paketprüfung | Paketbestand und lokale Prüfergebnisse nachvollziehbar machen. | Manifest/SBOM und lokale Verifikationsskripte vorhanden. | Keine unabhängige Build-Provenance, kein öffentlicher Transparenzlog und keine vollständige Absicherung der Build- und Releasekette. |
| Separates Schulungs-Preview | Freiwillige Module zu Evidenz, Offline-Grenzen, Mandanten, Freigaben und Prüfgrenzen. | Eigenständige lokale Windows-x64-Preview mit 365 Tagen Schreibzeit und anschließendem permanentem Lesemodus; Fortschrittsexport bleibt verfügbar. | Nicht in den Core integriert; lokale Profile ohne Anmeldung oder Mitarbeitendentrennung; kein Kompetenznachweis, Produktivsystem oder manipulationssicheres Lizenzsystem. Keine echten Beschäftigtendaten verwenden. |

### 2.1 Zentrale technische Grenzen

- **Kernschutz:** Die Trennung von KI, Warnung, Anomalie, Backup und Notfallablauf ist ein Architekturprinzip und Entwurfsziel. Eine unabhängige Prüfung, dass Nebenmodule technisch niemals den Kern verändern oder lesen können, ist nicht dokumentiert.
- **Offline-only:** Die Preview sperrt eingebaute externe Netzwerkzugriffe und nicht-lokale Listener. Enthaltene systemd-Beispiele werden nicht automatisch installiert. Hostweite Isolation hängt zusätzlich von Betriebssystem, Firewall, Deployment und Betreiberkonfiguration ab.
- **WORM:** Ein lokaler append-only/content-addressed Nachweisspeicher ist nicht dasselbe wie ein physisch unveränderbarer WORM-Speicher. Die Preview behauptet keine physische WORM-Garantie.
- **Zwei-Personen-Prinzip:** Im Preview gibt es einen Integrations-/Autorisierungshaken. Zwei unterschiedliche Zeichenketten oder Kennungen sind für sich kein Nachweis zweier realer, authentisierter Personen und kein ausgerolltes organisatorisches Vier-Augen-Verfahren.
- **Sicherung:** Verschlüsselung schützt eine Kopie im vorgesehenen Ablauf. Ob Schlüsselmanagement, Aufbewahrung, Offline-/Externe Ablage, Integrität und Wiederherstellungszeit den Anforderungen einer Organisation genügen, muss separat geplant und praktisch getestet werden.
- **Anomaliehinweise:** Ein Anstieg im Datenverkehr kann viele harmlose Gründe haben. Eine Abweichung ist kein Angriffsnachweis; ein unauffälliger Wert schließt einen Angriff nicht aus.

### 2.2 Separates Schulungs-Preview

Das Schulungs-Preview ist ein eigenständiges Paket und kein Core-Modul. Es bietet neun freiwillige Lernmodule und speichert Lernprofile lokal. Der Zeitraum beginnt beim ersten Start auf dem Gerät. Nach 365 Tagen bleiben Lerninhalte, vorhandene Profile und Fortschritte dauerhaft lesbar und exportierbar; neue Profile und Änderungen werden abgewiesen. Ein Systemwechsel oder fehlerhafter lokaler Status führt in den Lesemodus.

Die Gerätekennung wird ausschließlich lokal als Hash verarbeitet; es gibt keinen Lizenzserver. Die Offline-Bindung ist absichtlich als Preview-Nutzungsregel eingeordnet und nicht gegen lokale Administratoren manipulationssicher. Da es keine Anmeldung oder getrennte Berechtigungen gibt, können lokale Nutzende Profile gegenseitig einsehen. Daher keine echten Beschäftigtendaten eingeben. Die Lernmarkierung bestätigt ausschließlich die Ansicht eines Moduls, nicht Wissen, Befähigung, Prüfung oder Zertifizierung. Siehe [Umsetzungsplan](training-app/IMPLEMENTATION_PLAN.md) und [Nutzungshinweise](training-app/README.md).

## 3. Wo liegt was?

| Umgebung | Bestand | Aussagegrenze |
|---|---|---|
| GitHub Pages (`index.html`) | Öffentliche Produktseite mit Katalog, Einordnung und Besucherzähler eines externen Dienstes. | Statische Webseite; der externe Zähler ist eine Drittanbieteranfrage und kein Produktbestandteil. Keine Betreiber-Echtdaten. |
| GitHub Pages (`demo/index.html`) | Kleine Anschauung mit synthetischen Beispielinhalten. | Absichtlich begrenzt; weder Produkt-API noch Live-Daten, persistente Eingabe oder funktionsgleiche Produktkopie. |
| Preview 0.5.0 | Lokales Node.js-Paket, Loopback-Dienste, Vorschau-Arbeitsmodelle, Dokumentation und Prüfscripte. | Keine Produktivfreigabe, keine eingebauten Behörden-/Betreiberquellen und keine externe Identitäts- oder KI-Integration. |
| Lokale Prüfumgebung | Wiederholbarer Selbsttest in frisch entpackter Linux-Kopie mit Node.js 24.22.0 und npm 11.19.1. | Aussage gilt für genau diese lokale Umgebung und den dokumentierten Paketumfang, nicht für fremde Netze, Hardware oder Produktionskonfigurationen. |
| Wettbewerbs-/Referenzumfeld | Öffentliche Hersteller- und Standarddokumente wurden als Vergleichsgrundlage herangezogen. | Kein Zugang zu Vergleichsmandanten, keine Gegeninstallation und kein gleiches Laborszenario. |

## 4. Reifegrad und was die lokalen Prüfungen aussagen

Für die Preview-Kopie wurden `npm test`, `npm run test:eu-controls:run`, `npm run export:pack` sowie eine SBOM-Prüfung ausgeführt. Der dokumentierte Selbstlauf war erfolgreich. Die EU-Kontroll-Selbstauswertung meldete drei bestandene und drei bedingte Kontrollen und kennzeichnet sich ausdrücklich nicht als Zertifizierung.

Das bedeutet: Die beschriebenen Tests liefen im angegebenen lokalen Umfang durch. Es bedeutet **nicht**, dass Apophis sicher, gesetzeskonform, gegen Angriffe wirksam, ausfallsicher, vollständig isoliert, WORM-konform oder in einer KRITIS-Umgebung einsatzbereit ist. Die GitHub-Demo wurde als statische Oberfläche betrachtet; sie ist kein Feldtest.

Für die Aussage „Angriffserkennung“ fehlen insbesondere echte, repräsentative Telemetrie, dokumentierte Angriffs- und Normalfall-Datensätze, definierte Alarmmetriken, Fehlalarm-/Übersehensraten, Driftmessung, adversariale Prüfung, Sensor- und Datenquellenintegration sowie unabhängige Evaluation. Der jetzige Median/MAD-Prototyp ist daher ausdrücklich ein **Anomaliehinweis-Demo**.

## 5. Vergleich mit befreundeten bzw. etablierten Vergleichssystemen

Der Vergleich ist sachlich und aufgabenspezifisch: Jedes Produkt wird in seiner vorgesehenen Domäne betrachtet. Die nachfolgende Übersicht vergleicht öffentlich beschriebene Produktklassen und Funktionsschwerpunkte, nicht Quellcode, Wirksamkeit oder Sicherheit im direkten Test. „Befreundet“ ist keine formale Beziehung oder Empfehlung.

| System / Klasse | Öffentlich beschriebener Schwerpunkt | Abstand zum heutigen Apophis-Stand | Möglicher Lernpunkt für Apophis |
|---|---|---|---|
| **HiScout GRC / BCM** | Integrierte Managementprozesse für Informationssicherheit, Datenschutz und BCM; BIA, Fortführungsplanung, Übungen, Notfallmanagement und vorbereitete Auditunterlagen. | Deutlich ausgereifteres Fachprodukt mit etablierten Organisationsabläufen und modularer Plattform. Apophis hat hierfür derzeit Arbeitsmodelle und Vorlagen, keine gleichartige Gesamtplattform. | Prozess-/Rollenmodell, Übungszyklus, Verknüpfung von Prozessen, Ressourcen und Maßnahmen; klarer Nachweis, welche Funktionen tatsächlich umgesetzt und gepflegt werden. |
| **verinice** | GRC-/ISMS-/Datenschutz-/BCM-Produktlinie mit Ausrichtung unter anderem auf BSI IT-Grundschutz, ISO 27001, TISAX und NIS 2; Open-Source-Komponenten und selbstbetriebene Angebote werden beschrieben. | Etabliertes und deutlich breiteres GRC-/ISMS-Angebot. Apophis weist keine Normenabdeckung oder Produktreife auf vergleichbarem Niveau nach. | Nachvollziehbare Kontrollzuordnung, offene Schnittstellen und anpassbare Bereitstellung; Standards erst nach konkreter Abbildung und fachlicher Prüfung nennen. |
| **ServiceNow GRC/IRM und Now Assist** | Governance-, Risk- und Compliance-Workflows auf Plattformebene; offizielle Unterlagen beschreiben Rollen-/Zugriffskontrollen und KI-gestützte Vorschläge, die von Nutzenden geprüft werden. | Breite Plattform, Integrationen und Produktrollen sind weiterentwickelt. Apophis hat derzeit KI-Leitplanken als Entwurf, keinen KI-Betrieb und keine unabhängige Prozessisolation. | Berechtigungen, nachvollziehbare Vorschläge, explizite Annahme/Änderung durch Menschen sowie protokollierte Aktionsgrenzen. |
| **Microsoft Sentinel / UEBA** | SIEM- und Verhaltensanalytik mit verbundenen Datenquellen, Baselines, Anomalie- und Analysefunktionen; Nutzung setzt passende Datenquellen und Konfiguration voraus. | Für Sicherheitsereignisse und Anomalien eine andere und weit fortgeschrittenere Produktklasse. Apophis besitzt nur eine lokale synthetische Zeitreihendemo und keine Sensor-/Logpipeline. | Für echte Erkennung Datenqualität, Kontext, Baselines, Tuning, Konfidenz, Fehlalarme und Investigationsworkflow gemeinsam behandeln. Keine Gleichsetzung mit dem Apophis-Demo. |
| **Veeam Backup & Replication** | Backup-/Recovery-Plattform mit dokumentierten Mechanismen für Backup-Unveränderbarkeit und Konfigurationssicherung. | Spezialisierte operative Backupplattform mit deutlich breiterem Funktions- und Betriebsumfang. Apophis hat einen manuellen, appbezogenen Verschlüsselungsablauf, keine entsprechende Recoveryplattform. | Restore zuerst als messbaren Erfolg definieren; Ablage, Schlüssel, Aufbewahrung, Unveränderbarkeit und Wiederherstellungsübung als zusammenhängenden Prozess testen. |
| **NIST Zero Trust / Sigstore / SLSA (Referenzen, keine direkten Mitbewerber)** | Öffentliche Modelle bzw. technische Standards zu Zugriffskontrolle, Signaturen/Verifikation und Build-Provenance. | Keine Vergleichsprodukte und keine von Apophis erfüllten Zertifikate. Die Preview bietet nur Teile eines lokalen Verifikationsansatzes; keine gleichartige externe Vertrauensinfrastruktur. | Grenzen, Identitäten und Lieferkettenbelege konkret spezifizieren; keine standardbasierte Konformität behaupten, bevor konkrete Anforderungen und Nachweise vorliegen. |

### 5.1 Vergleichsurteil

Apophis hat gegenüber diesen Systemen heute keinen belegten Funktions- oder Sicherheitsvorsprung. Sein möglicher Produktgedanke ist die **kombinierte Arbeitsoberfläche für Evidenz, menschliche Prüfung und Resilienzaufgaben** sowie die bewusste Trennung geplanter Hilfsdienste. Diese Kombination ist bislang eine Projektpositionierung, keine nachgewiesene Alleinstellung. Wir können nicht belegen, dass nur Apophis den Kern derart trennt; wir können ebenso wenig anhand öffentlicher Beschreibungen die genaue interne Architektur der anderen Anbieter abschließend bewerten.

Die genannten Anbieter sind keine Gegenspieler. Sie sind sinnvolle Bezugspunkte für Funktionen, Reifegrad und Integrationsfragen. Ein späterer Vergleich sollte gemeinsame, vorab veröffentlichte Szenarien und gleiche Eingaben verwenden und die Grenzen jedes Systems offen dokumentieren.

### 5.2 Quellen der Vergleichsaussagen

- [HiScout BCM – BIA, Geschäftsfortführungsplanung, Übungen und Notfallmanagement](https://www.hiscout.com/module/bcm/)
- [HiScout – GRC, Informationssicherheit, Datenschutz und BCM](https://www.hiscout.com/en/)
- [verinice – offizieller Produktüberblick](https://verinice.com/en/)
- [ServiceNow – KI-Funktionen und Sicherheitsmodell](https://www.servicenow.com/docs/r/platform-security/now-assist-security.html)
- [ServiceNow – Sicherheitskontrollen für KI-Agenten](https://www.servicenow.com/docs/r/intelligent-experiences/define-sec-controls-aia.html)
- [Microsoft Learn – Sentinel-Anomalien und UEBA](https://learn.microsoft.com/en-us/azure/sentinel/anomalies-reference)
- [Microsoft Learn – UEBA mit verbundenen Datenquellen konfigurieren](https://learn.microsoft.com/en-us/azure/sentinel/enable-entity-behavior-analytics)
- [Veeam – Unveränderbarkeit von Backup-Dateien](https://helpcenter.veeam.com/docs/vbr/userguide/immutability_hv.html)
- [NIST SP 800-207A – Zero Trust für cloudnative Anwendungen](https://csrc.nist.gov/pubs/sp/800/207/a/final)
- [Sigstore Cosign – Signaturprüfung](https://docs.sigstore.dev/cosign/verifying/verify/) · [SLSA v1.2](https://slsa.dev/spec/v1.2/)

## 6. Wohin kann das Projekt gehen?

### Stufe A — belastbares Entwicklungsartefakt

- Release, Prüfumfang, SBOM, Prüfsummen und bekannte Grenzen reproduzierbar pflegen.
- Für Kernschutz und Modulgrenzen ein threat model und konkrete, maschinenprüfbare Sicherheitsanforderungen formulieren.
- Lokale Identität, Rollen, Mandantentrennung und Zwei-Personen-Autorisierung nicht simulieren, sondern mit echten getrennten Identitäten und unabhängigen Kontrollen entwerfen.
- Wiederherstellung in frischer Umgebung einschließlich Schlüsselverlust-/Schlüsselwechselablauf praktisch dokumentieren.

### Stufe B — institutionelle Anpassung und kontrollierter Pilot

- Eine konkrete Zielorganisation und Systemgrenze auswählen; Anforderungen und Datenklassen mit deren Sicherheitsverantwortlichen festlegen.
- Rollen, Datenquellen, Aufbewahrung, Schwellenwerte, Sprach-/Modellwahl, KI-Anbieterfreigabe und Eskalationsweg individuell konfigurieren.
- In einer isolierten Testumgebung mit synthetischen und freigegebenen Beispieldaten beginnen; keine automatische Steuerwirkung.
- Abnahmekriterien, Ausschlussfälle, Betreiberverantwortung, Support, Updates und Incident-Prozess vorab vereinbaren.

### Stufe C — unabhängige Evaluation und möglicher Betrieb

- Externe Architektur- und Penetrationstests mit klarer Scope- und Versionangabe durchführen.
- Je Modul Nutzenmetriken und Fehlermodi erheben; für Anomalieerkennung Precision/Recall, Fehlalarmrate, Erkennungsverzug und Drift auf repräsentativen, freigegebenen Daten messen.
- Backup/Restore und Zwei-Personen-Freigabe im Zielbetrieb als Ende-zu-Ende-Prozesse prüfen.
- Erst nach unabhängiger Prüfung und organisatorischer Freigabe über produktiven Einsatz, Konformität oder belastbare Sicherheitsbehauptungen sprechen.

### Trägerschaft und Zusammenarbeit

Das Projekt kann als offene Entwicklungsarbeit, Kooperation mit einem bestehenden Anbieter, Genossenschafts-/Stiftungsprojekt oder als beauftragter Pilot weitergehen. Welche Form passt, hängt von IP-Rechten, Finanzierung, Haftung, Betrieb, Governance, Datenschutz und tatsächlichem Interesse geeigneter Partner ab. Der heutige Stand allein belegt weder Marktreife noch einen Unternehmenswert oder eine tragfähige Finanzierung. Eine Zusammenarbeit als Core-Entwickler kann als persönliches Interesse benannt werden, wenn Auftrag, Rolle, Ressourcen und organisatorische Freigaben geklärt sind.

## 7. Hypothetisches Positivszenario für noch fehlende externe Tests

> **Gedankenexperiment, ausdrücklich kein Testergebnis:** Die nachfolgenden Aussagen setzen voraus, dass unabhängige Labortests und ein begrenzter, autorisierter Feldpilot mit vorab definierten Kriterien tatsächlich positiv ausfallen. Im heutigen Stand sind diese Ergebnisse nicht vorhanden; die Hypothese darf nicht als „bestanden“, „validiert“ oder „einsatzbereit“ ausgegeben werden.

Falls ein Labor für eine konkret benannte Version, Konfiguration und Bedrohungsannahme nachweist, dass bestimmte unzulässige Zugriffe zwischen Nebenmodulen und Kern abgewiesen werden, könnte man genau diese geprüften Zugriffspfade als **im getesteten Scope erfolgreich geprüft** bezeichnen. Das bewiese nicht absolute Isolation, Fehlerfreiheit oder Schutz vor unbekannten Angriffen.

Falls ein autorisierter Pilot mit repräsentativen Daten definierte Anomalien innerhalb eines festgelegten Zeitraums erkennt und Fehlalarme unter einem vereinbarten Grenzwert hält, könnte man eine **gemessene Leistung für diese Daten, Quellen und Konfiguration** berichten. Das wäre kein allgemeiner Nachweis einer Angriffserkennung für alle KRITIS-Umgebungen.

Falls ein Wiederherstellungstest ein verschlüsseltes App-Backup auf einer frisch bereitgestellten Zielumgebung erfolgreich zurückspielt, könnte man den **getesteten Backup-/Restore-Ablauf** als erfolgreich bezeichnen. Das bewiese weder vollständige Systemabbildsicherung noch Notfallwiederherstellung einer kompletten Betreiberumgebung.

Falls echte, getrennt authentisierte Personen eine Wiederfreigabe nach den vereinbarten Vier-Augen-Regeln korrekt ausführen, könnte man die **konkret implementierte Autorisierungsstrecke** als getestet beschreiben. Eine statische Demo oder ein Test mit bloß unterschiedlichen Namensstrings reicht dafür nicht.

Auch bei ausschließlich positiven Ergebnissen wären öffentliche Aussagen auf Version, Umgebung, Prüfverfahren, Stichprobe, Messwerte, Prüfer und Einschränkungen zu begrenzen. Ein positiver Test ersetzt weder Zertifizierung noch rechtliche Bewertung, dauerhafte Betriebssicherheit oder eine organisationsspezifische Freigabe.

## 8. Individuelle Anpassung ist zwingend

Apophis kann nicht pauschal ausgerollt werden. Für jede Organisation müssen mindestens Datenarten, Rollen und Identitäten, Mandantentrennung, Quellenqualität, Zeitreihen und Schwellenwerte, Aufbewahrungsfristen, Sicherungsziel und Schlüsselverwahrung, Wiederherstellungsziele, Notfallverantwortung, zulässige KI-Nutzung sowie Bedien- und Eskalationsabläufe festgelegt werden.

Ein Strom- oder Datenverkehrsschwellwert ist standort- und anlagenspezifisch. Ein lokales Modell braucht Hardware-, Latenz-, Qualitäts- und Datenfreigaben. Eine API-KI braucht Anbieter-, Datenfluss- und Löschregeln. Eine externe Sicherheitsstelle oder Behörde wird nicht automatisch zur Auftraggeberin oder Datenempfängerin. Anpassung, Freigabe und fortlaufende Überprüfung gehören in die jeweilige Organisation.

## 9. Entstehung und rückblickende Ähnlichkeit

Nach Aussage des Projektinitiators entstand die Idee aus eigenen praktischen Zielsetzungen. Die einschlägigen DIN-/ISO-Normen waren ihm bei der ursprünglichen Entwicklungsidee nicht bekannt. Erst später erkannte er, dass einzelne Ziele ähnlichen Bereichen zugeordnet werden können, etwa nachvollziehbare Nachweise, Zuständigkeiten oder Resilienzarbeit.

Das ist eine rückblickende Ähnlichkeit von Zielen. Sie ist weder ein Beleg bewusster Normumsetzung noch Normkonformität, Zertifizierbarkeit, Vollständigkeit, Neuheit oder Alleinstellung. Eine systematische Normenmatrix und externe Normenbewertung liegen nicht vor.

## 10. Öffentliche Formulierung

**Sachlich vertretbar:** „Apophis Evidence Desk ist ein lokaler Entwicklungsprototyp für nachvollziehbare Evidenz- und Resilienzarbeit. Das Preview enthält getrennte Vorschau-Arbeitsmodelle für Warnhinweise, statistische Anomaliehinweise, appbezogene Sicherung und Notfallfreigaben. Die Konzepte müssen je Organisation angepasst und unabhängig geprüft werden. Die statische Demo ist bewusst synthetisch und begrenzt.“

**Nicht belegt:** „KRITIS-zertifiziert“, „NIS-2-konform“, „WORM-garantiert“, „Angriffe werden erkannt“, „im Feld bestanden“, „absolut offline auf jedem Host“, „vollständig vom Core isoliert“, „der einzige seiner Art“ oder „anderen Systemen voraus“.

---

**Kontakt:** Kai Valenta · [kava140982@gmail.com](mailto:kava140982@gmail.com)  
**Lizenz:** siehe [LICENSE](LICENSE). Produkt- und Markenname sind davon getrennt zu betrachten.
