# Änderungen

## 0.5.0-offline-only-preview — 2026-10-20

- Eingebaute ausgehende Netzwerkpfade deaktiviert; Research-/News-Refresh und Referenzprüfung schlagen geschlossen fehl.
- Hauptdienst, Warnradar und Anomalie-Demo binden ausschließlich an Loopback.
- Lokale UI zeigt Quellen als passive Metadaten; aktive externe Links wurden entfernt.
- Offline-Netzwerktests und drei optionale systemd-Filtervorlagen ergänzt. Die Vorlagen werden nicht automatisch installiert oder aktiviert.
- Lokaler Prüflauf `npm test` bestanden; keine hostweite Netzisolation oder externe Sicherheitsprüfung behauptet.
- Release-ZIP und SHA-256 in `releases/` ergänzt; Produktkatalog und statische Vorschau aktualisiert.

## 0.4.8-public-patterns-preview — 2026-10-20

- Offline-Verifier schließt fehlende oder ungültige, ausdrücklich angegebene Approval-Dateien jetzt fail-closed aus.
- Fünf Regressionfälle ergänzen `npm test`.
- Paketmanifest und SBOM auf Version 0.4.8 synchronisiert.
- Produktkatalog und statische Demo aktualisiert; Download und Prüfsumme verlinkt.
- Vergleichsübersicht um aktuelle öffentliche Herstellerunterlagen sowie Sigstore/SLSA als Supply-Chain-Referenzen ergänzt.
- Kontaktadresse auf `kava140982@gmail.com` aktualisiert.
- Trägerschaftsoptionen (Stiftung/eG) und Bereitschaft zur Weiterarbeit vorsichtig und vorbehaltlich geklärtem Auftrag/Freigaben beschrieben.
