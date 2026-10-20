# Apophis Evidence Desk 0.4.8 — lokaler Prüflauf und Retest

**Stand:** 20. Oktober 2026  
**Paket:** `0.4.8-public-patterns-preview`  
**Laufzeit:** Node.js v24.22.0 auf Linux  
**Prüfumfang:** frische, lokale Kopie des Preview-Pakets; ausschließlich synthetische und lokale Daten.

## Ergebnis

`npm test` wurde mit Exitcode 0 abgeschlossen. Alle 20 Paket-Schritte bestanden: Syntaxprüfung, SBOM und Abhängigkeitsbaum, Evidence-Bundle/Signatur, neue Approval-Verifier-Regressionen, Interop, Tenant-/HTTP-Isolation, Governance, Warnquellen-Sicherheit, Notfall-/Backup-Prototyp, Release-Evidence, lokale append-only Evidenzspeicherung und Smoke-Test.

Die EU-Control-Selbsteinschätzung meldete 3 Kontrollen bestanden, 3 bedingt und 0 fehlgeschlagen. Ihr Umfang ist `local-loopback-synthetic-prototype`; sie weist ausdrücklich `not_a_certification: true` aus. Bedingte Kontrollen gelten nicht als Freigabe.

## Behobener Befund und Retest

Im vorherigen Preview meldete der Offline-Verifier eine erfolgreiche Approval-Prüfung, obwohl ein ausdrücklich angegebener Approval-Dateipfad fehlte. Version 0.4.8 korrigiert das fail-closed: fehlende, unlesbare, fehlerhafte oder strukturell ungültige Dateien führen nun zu `approvals_ok: false`, `valid: false` und einem Exitcode ungleich null.

`npm run test:verify` deckt fünf Fälle ab: Bundle-only-Modus, gültiges Approval-Protokoll, fehlender expliziter Pfad, fehlerhaftes JSON und ungültige Log-Struktur. Alle bestanden.

## Versions- und Paketidentität

`package.json` und CycloneDX-SBOM wurden konsistent auf `0.4.8-public-patterns-preview` gesetzt. Das ausgelieferte ZIP hat 119 Dateien und bestand die ZIP-CRC-Prüfung. SHA-256: `bdcc683c1d3776c9cf2eff55a06864307fd9447683b03a391c1274f93c7e093a`.

## Grenzen

Dieser Lauf ist kein unabhängiger Penetrationstest, kein Produktions-/OT-Test, keine Zertifizierung und kein externer Restore-Test. Identitätsanbieter, institutionelle Rollen, HSM/Key-Store, Behördenadapter und externer Sicherungstransport wurden nicht eingerichtet. Wettbewerbsprodukte wurden anhand öffentlicher Unterlagen verglichen, nicht in deren Testumgebungen geprüft. Die lokale append-only Speicherung weist keine physische WORM-Garantie nach.
