# Apophis Evidence Desk — öffentlicher Systemvergleich

**Stand:** 20. Oktober 2026 · **Apophis-Vorschau:** 0.4.8-public-patterns-preview

Dieser Vergleich stellt den Funktionsumfang und die Reifestufe des lokalen Apophis-Prototyps den öffentlich beschriebenen Funktionen ausgewählter Systeme und Standards gegenüber. Herstellerunterlagen sind Selbstauskünfte. Die Wettbewerbsprodukte wurden nicht in eigenen Testmandanten oder Laboren getestet. Diese Übersicht ist weder vollständige Marktstudie noch Sicherheitsgutachten.

## Vergleich auf einen Blick

| Produkt / Standard | Öffentliche Beschreibung | Apophis 0.4.8 | Faire Einordnung |
|---|---|---|---|
| **HiScout GRC / BCM** | Anbieter dokumentiert eine GRC-Suite mit ISM, Grundschutz, Datenschutz und BCM sowie gemeinsame Datenpflege über mehrere Module. | Lokales Evidenz- und Resilienz-Arbeitsmodell; kein ausgereiftes organisationsweites GRC-/BCM-System. | HiScout ist ein reiferer, spezialisierter Produktvergleich für ISMS und BCM. Öffentliche Unterlagen sagen nichts darüber aus, ob es eine mit Apophis identische „Core-Trennung“ gibt. |
| **verinice / verinice.veo** | Anbieter beschreibt GRC, ISMS, Datenschutz und Notfall-/Business-Continuity-Management mit Unterstützung für mehrere etablierte Standards; Teile sind quelloffen. | Synthetische Register, Evidenz- und Review-Abläufe; keine umfassende Normen-/Kontrollbibliothek oder produktive Rollout-Plattform. | verinice deckt ISMS/GRC/BCM deutlich vollständiger ab. Das Preview ist kein Ersatz. |
| **ServiceNow Now Assist** | Dokumentation beschreibt KI-Agenten mit ACLs, Rollen, Identitäten, Least-Privilege-Konfiguration und Domain Separation; weitere Laufzeit- und Governance-Kontrollen sind beschrieben. | KI-Leitplanken als Dokumentation; kein produktiver KI-Anbieteradapter und keine integrierte Modellentscheidung. Der lokale Verifier und Freigabeablauf sind getrennte Prototypfunktionen. | Dies ist ein konkretes öffentliches Gegenbeispiel zu einer breiten Behauptung, andere Systeme hätten keine KI-Zugriffs- und Governance-Kontrollen. Die konkrete technische Isolation ist nicht direkt vergleichbar. |
| **Microsoft Sentinel UEBA / Anomalien** | Microsoft dokumentiert UEBA, ML-basierte Anomalien und dynamische Verhaltens-Baselines für angebundene Sicherheitsdaten. | Passives lokales CSV-Demo mit begrenzter robuster Baseline; keine Sensor-, SIEM- oder Anlagenanbindung und keine bestätigte Angriffserkennung. | Sentinel ist die wesentlich umfassendere Referenz für operative SIEM-/UEBA-Erkennung. Apophis’ Demo ist derzeit nur ein Prüfhinweis. |
| **Veeam Backup & Replication** | Dokumentation beschreibt Backup-Verschlüsselung sowie zeitweise unveränderbare Repository-Optionen, abhängig von Produkt- und Speicher-Konfiguration. | Manuell auslösbares verschlüsseltes Anwendungsdaten-Backup-Preview mit synthetischen lokalen Tests; kein vollständiges Systemabbild, kein externer produktiver Speicher und keine bewiesene physische WORM-Eigenschaft. | Veeam und ähnliche Backup-Produkte bieten den reiferen operativen Backup-/Restore-Umfang. Apophis sollte dafür keine Ersatzbehauptung machen. |
| **Sigstore / Cosign** | Dokumentation beschreibt identitätsbasierte Signaturen, verifizierbare Signatur-Bundles und Transparenzlog-Nachweise. | Lokaler Ed25519-Offline-Verifier und Paketprüfungen; keine OIDC-gebundene Veröffentlichungsidentität und kein Transparenzlog-Nachweis im Preview-Release. | Sigstore bietet ein etabliertes Muster für verteilbare, identitätsbezogene Software-Signaturen. Das ist eine konkrete Anschlussmöglichkeit für spätere Release-Härtung. |
| **SLSA 1.2** | Branchenübergreifende Spezifikation mit Stufen und empfohlenen Attestierungsformaten für Supply-Chain-Sicherheit und Provenance. | SBOM-Prüfung, CI-Workflow-Selbsttest und feste lokale Evidenzmanifest-Prüfung; keine behauptete SLSA-Stufe und keine verifizierte Build-Provenance. | SLSA ist ein sinnvoller Zielrahmen, den Apophis erst anhand der tatsächlichen CI- und Signaturkette abbilden müsste. Ein lokaler Workflow-Test vergibt keine SLSA-Stufe. |

## Aussage zur Core-Trennung

Eine modulare Architektur, minimale Berechtigungen, organisatorische Zuständigkeiten und Sicherheitsgrenzen sind bekannte Muster. Die öffentlichen Dokumente von ServiceNow zeigen beispielsweise rollen- und domainbasierte KI-Zugriffe; NIST beschreibt Zero-Trust- und Least-Privilege-Grundsätze. Das genügt, um eine pauschale Alleinstellungsbehauptung über „KI mit Grenzen“ zurückzuweisen.

Es beweist **nicht**, dass ein Vergleichssystem genau dieselbe Prozessgrenze realisiert, die Apophis anstrebt. Umgekehrt beweist der Apophis-Prototyp seine eigene Core-Isolation nicht: Dafür wären definierte Bedrohungsmodelle, reproduzierbare Tests gegen Schnittstellen und unabhängige Prüfung nötig. Daher gilt: weder identische Umsetzung noch Überlegenheit ist derzeit belegt.

## Prüfergebnis des Apophis-Pakets

Für Version 0.4.8 lief `npm test` auf einer frischen lokalen Kopie erfolgreich durch. Die Suite schließt fünf gezielte Regressionen des Offline-Verifiers ein. Unter anderem wird geprüft, dass ein explizit angegebener fehlender oder fehlerhafter Approval-Pfad fehlschlägt. Die Tests verwenden synthetische Daten. Sie sind kein Penetrationstest, keine Zertifizierung, kein externer Recovery-Test und kein Produktvergleich in Anbieter-Testumgebungen.

Der Produktvergleich ist daher **dokumentenbasiert**. Eine spätere direkte Prüfung müsste vorab gleiche Szenarien, Daten, Rollen, Konfiguration, Messkriterien und zugelassene Testumgebungen vereinbaren. Ein Ergebnis dürfte nur für Version und Prüfgegenstand gelten.

## Öffentliche Primärquellen

- [HiScout GRC-Lösungen](https://www.hiscout.com/loesungen/) · [HiScout BCM](https://www.hiscout.com/module/bcm/)
- [verinice.veo: Produkt und Domänen](https://verinice.com/produkte/verinice/ueber-verinice)
- [ServiceNow: Agentic AI security and governance](https://www.servicenow.com/docs/r/platform-security/now-assist-security.html)
- [Microsoft Sentinel: Anomalies detected by the ML engine](https://learn.microsoft.com/en-us/azure/sentinel/anomalies-reference) · [UEBA reference](https://learn.microsoft.com/en-us/azure/sentinel/ueba-reference)
- [Veeam: Immutability for backup files](https://helpcenter.veeam.com/docs/vbr/userguide/immutability_hv.html) · [encrypted configuration backups](https://helpcenter.veeam.com/docs/vbr/userguide/config_backup_immutable.html?ver=13)
- [Sigstore Cosign: Verifying signatures](https://docs.sigstore.dev/cosign/verifying/verify/) · [signing overview](https://docs.sigstore.dev/cosign/signing/overview/)
- [SLSA specification v1.2](https://slsa.dev/spec/v1.2/)
- [NIST SP 800-207A](https://csrc.nist.gov/pubs/sp/800/207/a/final) · [NIST SP 800-53 Rev. 5.1](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)

---

**Schlussfolgerung:** Apophis ist ein früher, lokaler Prototyp mit einem möglichen kombinierten Ansatz für Evidenz, Review und getrennte Hilfsfunktionen. Er ist gegenüber den spezialisierten Vergleichssystemen in den jeweiligen Betriebsfunktionen deutlich weniger reif. Ein Alleinstellungs- oder Sicherheitsüberlegenheitsanspruch wird nicht erhoben.
