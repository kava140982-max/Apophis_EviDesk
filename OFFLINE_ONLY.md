# Offline-only network policy — v0.5.0

Apophis is configured as an offline application. Its supported network scope is local loopback only (`127.0.0.1` or `::1`). The application refuses other bind addresses; source refresh, research refresh, and URL reference checks fail closed. External URLs retained in evidence records are inert citation metadata. The UI does not fetch them or navigate to them.

## What this enforces

- No application-managed outbound HTTP(S), DNS lookup, or remote source refresh.
- No non-loopback listener for the main desk, warning radar, or anomaly demo.
- The local reference-check API returns HTTP 403.
- The two refresh commands fail closed when enabled rather than contacting a provider.
- These rules are regression-tested by `npm run test:offline-network` and included in `npm test`.

The restriction applies to the shipped application paths. It cannot prevent a person from editing the source, adding a new dependency, or launching a different network-capable program. To enforce the boundary at the operating-system service level, install and adapt all three units: `deploy/apophis-offline.service`, `deploy/apophis-warning-offline.service`, and `deploy/apophis-anomaly-offline.service`. They use systemd IP filtering to allow loopback and deny other IP traffic for each service; kernel/systemd support must be checked on the deployment. These units are templates and are **not installed or active just because they are in this package**. Do not describe the host as network-isolated until the policies have been installed and independently verified.

The application must not be exposed through a reverse proxy, tunnel, port forward, VPN interface, container proxy, or remote desktop gateway. Use local files for backup targets; an externally mounted NFS/SMB/SSHFS target is a network path and conflicts with offline-only operation. The package's encrypted backup is an application-data backup, not a full disk image; test it only with synthetic data until a production key-management and two-person authorization adapter has been independently reviewed.

## Deployment check

1. Install and adapt all three unit templates, set `WorkingDirectory`/`ReadWritePaths` to the unpacked application directories, and set each `ExecStart` to the approved Node.js binary and matching script.
2. Confirm the systemd version supports `IPAddressDeny` and `IPAddressAllow`; check that the service starts successfully under the filter.
3. Verify local UI access, then verify external IP access is denied from the service process and that no listener exists outside loopback.
4. Repeat the check after every upgrade. A code test alone is not host firewall evidence.

## Explicit limitation

“100%” can only describe the tested application code paths plus an active, independently verified host policy. This preview does not install a host firewall or claim that the entire computer is offline.
