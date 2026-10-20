'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { spawnSync } = require('node:child_process');

const APP_NAME = 'ApophisTraining365';
const PORT = Number(process.env.APOPHIS_TRAINING_PORT || 3174);
const HOST = '127.0.0.1';
const DAYS = 365;
const DAY_MS = 24 * 60 * 60 * 1000;
const ROOT = __dirname;
const PUBLIC = path.join(ROOT, 'public');
function dataRoot() {
  if (process.env.APOPHIS_TRAINING_DATA) return path.resolve(process.env.APOPHIS_TRAINING_DATA);
  if (process.platform === 'win32') return path.join(process.env.LOCALAPPDATA || os.homedir(), 'Apophis', APP_NAME);
  return path.join(process.env.XDG_DATA_HOME || path.join(os.homedir(), '.local', 'share'), 'apophis', APP_NAME);
}
const DATA = dataRoot();
const STATE_FILE = path.join(DATA, 'trial-state.json');
const PROGRESS_FILE = path.join(DATA, 'progress.json');
const CONTACT = { name: 'Kai Valenta', email: 'kava140982@gmail.com' };
const MODULES = [
  { id:'1.1', stage:1, title:'Offline-Betrieb und Systemgrenzen', audience:'Alle Teilnehmenden', goal:'Einordnen, was die Preview lokal macht und wo ihre Netzwerkgrenzen liegen.', lessons:['Die Trainings-Preview stellt keine Verbindung zu externen APIs her.','Loopback bedeutet Zugriff vom lokalen Gerät; es ist keine Authentisierung der lokalen Benutzer.','Eine Anwendungssperre ist nicht dasselbe wie eine vom Betriebssystem installierte Firewall.','Die Offline-Aussage gilt für den dokumentierten Programmumfang und muss für die jeweilige Installation geprüft werden.'], activity:'Ordnen Sie die Begriffe „Loopback“, „Offline-Anwendung“ und „Host-Firewall“ im Gespräch mit der zuständigen IT-Rolle ein.' },
  { id:'1.2', stage:1, title:'Evidenz, Hashes und Integrität', audience:'Alle Teilnehmenden', goal:'Hash-Prüfsummen als Integritätshinweise verstehen, ohne sie mit Wahrheit oder Unveränderbarkeit gleichzusetzen.', lessons:['Ein Hash kann anzeigen, dass sich ein geprüftes Objekt seit einer bekannten Prüfsumme geändert hat.','Ein Hash allein beweist weder Urheber noch Erstellungszeit oder Vollständigkeit.','Eine lokale append-only Struktur ist nicht automatisch physisch unveränderbarer WORM-Speicher.','Fachliche Aussagen benötigen nachvollziehbare Quellen und menschliche Prüfung.'], activity:'Diskutieren Sie, welche zusätzlichen Belege für Herkunft, Zeitpunkt und Vollständigkeit einer Datei nötig wären.' },
  { id:'1.3', stage:1, title:'Synthetische und reale Daten', audience:'Alle Teilnehmenden', goal:'Die Risiken echter Betriebs- und Personendaten erkennen.', lessons:['Die mitgelieferten Beispieldatensätze sind synthetisch.','In dieser Preview sollen keine Produktivdaten, Geheimnisse, Zugangsdaten oder identifizierbaren Beschäftigtendaten gespeichert werden.','Auch pseudonymisierte Daten können personenbezogen bleiben.','Vor einem Pilotbetrieb sind Datenklassen, Rechtsgrundlage, Aufbewahrung und Zugriff festzulegen.'], activity:'Klassifizieren Sie gemeinsam drei Beispiele als synthetisch, personenbezogen oder betriebssensibel.' },
  { id:'2.1', stage:2, title:'Zwei-Personen-Freigaben', audience:'Operatoren, Compliance, Review', goal:'Das Vier-Augen-Prinzip als organisatorischen und technischen Prozess einordnen.', lessons:['Eine Demo mit zwei unterschiedlichen Namen beweist keine getrennten Identitäten.','Eine echte Freigabe braucht authentisierte Personen, Rollen, Zweckbindung, Ablaufzeit und nachvollziehbare Protokollierung.','Die vorliegende Preview enthält keinen produktiven Identitätsanbieter oder vollständigen Freigabedienst.','Freigaben müssen sich auf eine konkrete Operation und Ressource beziehen.'], activity:'Skizzieren Sie, wie zwei getrennte Personen eine konkrete Änderung unabhängig prüfen würden.' },
  { id:'2.2', stage:2, title:'Mandanten- und Rollenabgrenzung', audience:'Operatoren, Compliance, Review', goal:'Mandantenkontext und Berechtigungen nicht mit einem frei gesetzten Client-Feld verwechseln.', lessons:['Ein vom Client frei gesetzter Mandantenname ist keine vertrauenswürdige Identität.','Produktive Mandantentrennung benötigt serverseitig geprüfte Identitäten und konsequente Zugriffskontrollen.','Die Demo- und Selbsttests belegen nur den lokal getesteten Umfang.','Reale Rollen- und Berechtigungskonzepte müssen je Organisation entworfen und geprüft werden.'], activity:'Prüfen Sie, an welcher Stelle Ihrer Organisation die Identität und der Mandant tatsächlich festgestellt werden müssten.' },
  { id:'2.3', stage:2, title:'Notfallmodus und Wiederfreigabe', audience:'Operatoren, Compliance, Review', goal:'Den engen Umfang der Apophis-Anwendungssperre von einem Anlagen- oder Systemnotstopp unterscheiden.', lessons:['Der dokumentierte Notfallmodus betrifft die Apophis-Anwendung.','Er schaltet weder Betriebssystem, Stromversorgung, Netzwerk noch OT/SCADA-Anlagen ab.','Ein Snapshot oder Hash ist kein Ersatz für ein getestetes Backup und einen Restore.','Wiederfreigabe und Eskalation brauchen eine geprüfte Zuständigkeit und geeignete Identitätskontrollen.'], activity:'Benennen Sie, welche getrennten betrieblichen Notfallpläne für Host, Netzwerk und Anlage zuständig wären.' },
  { id:'3.1', stage:3, title:'Selbstprüfung und Ergebnisgrenzen', audience:'Administration, interne Revision, Security', goal:'Testergebnisse nach Umfang und Aussagegrenze lesen.', lessons:['Ein erfolgreiches Selbsttestergebnis gilt nur für die geprüfte Version, Umgebung und Eingabe.','Synthetische Tests sind keine externen Penetrations- oder Feldtests.','Ein bestandener Test eines Programmteils belegt nicht die Sicherheit des Gesamtsystems.','Fehlende Prüfungsergebnisse dürfen nicht als bestanden dargestellt werden.'], activity:'Formulieren Sie zu einem Testresultat jeweils Prüfgegenstand, Umgebung, Ergebnis und offene Grenzen.' },
  { id:'3.2', stage:3, title:'Resilienzregister und Regelwerke', audience:'Administration, interne Revision, Security', goal:'Arbeitsregister von Konformitäts- oder Zertifizierungsnachweis unterscheiden.', lessons:['Ein Register kann Zuständigkeiten, Termine und Nachweisreferenzen ordnen.','Ein vorhandener Dateihash bestätigt nicht die fachliche Richtigkeit des Nachweises.','Die Apophis-Arbeitsmodelle sind keine vollständige Kontrollmatrix und keine Rechtsauslegung.','Anwendbarkeit hängt von Organisation, Sektor, Land, Größe und geltendem Recht ab.'], activity:'Wählen Sie einen synthetischen Registereintrag und markieren Sie, welche unabhängigen Belege für eine echte Bewertung fehlen.' },
  { id:'3.3', stage:3, title:'Signaturen und Beweisketten', audience:'Administration, interne Revision, Security', goal:'Kryptografische Signaturprüfung und Aussagekraft eines lokalen Receipts abgrenzen.', lessons:['Eine Signaturprüfung kann zeigen, dass Daten zu einem öffentlichen Schlüssel passen und seit Signierung unverändert sind.','Sie identifiziert eine verantwortliche Person nur, wenn der Schlüssel vertrauenswürdig einer Identität zugeordnet und geschützt ist.','Ein lokal erzeugter Schlüssel oder eine Demo-Signatur ist keine externe Vertrauensstelle.','Für belastbare Nachweise sind Schlüsselverwaltung, Zeitbezug, Widerruf und unabhängige Verifikation festzulegen.'], activity:'Prüfen Sie, welche Vertrauensanker ein externer Prüfer für eine Signatur benötigen würde.' }
];
function machineFingerprint() {
  let raw = '';
  if (process.platform === 'win32') {
    const q = spawnSync('reg.exe', ['query', 'HKLM\\SOFTWARE\\Microsoft\\Cryptography', '/v', 'MachineGuid'], { encoding:'utf8', windowsHide:true, timeout:3000 });
    const match = `${q.stdout || ''}\n${q.stderr || ''}`.match(/MachineGuid\s+REG_SZ\s+([^\r\n]+)/i);
    if (q.status === 0 && match) raw = match[1].trim();
  } else {
    for (const candidate of ['/etc/machine-id', '/var/lib/dbus/machine-id']) {
      try { raw = fs.readFileSync(candidate, 'utf8').trim(); if (raw) break; } catch (_) {}
    }
  }
  if (!raw) raw = `${os.platform()}|${os.hostname()}|${os.userInfo().username}`;
  return crypto.createHash('sha256').update(`apophis-training-device-v1\0${raw}`).digest('hex');
}
const DEVICE = machineFingerprint();
function atomicJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive:true, mode:0o700 });
  const temp = `${file}.tmp-${process.pid}-${crypto.randomBytes(4).toString('hex')}`;
  fs.writeFileSync(temp, `${JSON.stringify(value, null, 2)}\n`, { flag:'wx', mode:0o600 });
  fs.renameSync(temp, file);
}
function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { if (e.code === 'ENOENT') return fallback; throw new Error('local_state_unreadable'); }
}
function loadLicense() {
  const now = Date.now();
  let state;
  try { state = readJson(STATE_FILE, null); }
  catch (_) { return { mode:'read_only', reason:'state_unreadable', device_id:DEVICE.slice(0,16), contact:CONTACT }; }
  if (!state) {
    state = { schema:'apophis/training-trial/v1', device_fingerprint:DEVICE, started_at:new Date(now).toISOString(), last_seen_at:new Date(now).toISOString(), expires_at:new Date(now + DAYS * DAY_MS).toISOString(), contact:CONTACT.email };
    atomicJson(STATE_FILE, state);
  }
  if (state.device_fingerprint !== DEVICE) return { mode:'read_only', reason:'device_binding_mismatch', device_id:DEVICE.slice(0,16), expires_at:state.expires_at, contact:CONTACT };
  if (state.locked_read_only_at) return { mode:'read_only', reason:'trial_ended', device_id:DEVICE.slice(0,16), started_at:state.started_at, expires_at:state.expires_at, contact:CONTACT };
  const last = Date.parse(state.last_seen_at); const expires = Date.parse(state.expires_at);
  if (!Number.isFinite(last) || !Number.isFinite(expires)) return { mode:'read_only', reason:'state_invalid', device_id:DEVICE.slice(0,16), contact:CONTACT };
  if (now < last - 5 * 60 * 1000) return { mode:'read_only', reason:'clock_moved_backwards', device_id:DEVICE.slice(0,16), expires_at:state.expires_at, contact:CONTACT };
  if (now >= expires) {
    atomicJson(STATE_FILE, { ...state, last_seen_at:new Date(now).toISOString(), locked_read_only_at:new Date(now).toISOString() });
    return { mode:'read_only', reason:'trial_ended', device_id:DEVICE.slice(0,16), started_at:state.started_at, expires_at:state.expires_at, contact:CONTACT };
  }
  if (now - last > 6 * 60 * 60 * 1000) {
    const updated = { ...state, last_seen_at:new Date(now).toISOString() };
    atomicJson(STATE_FILE, updated);
  }
  return { mode:'write_enabled', reason:'trial_active', device_id:DEVICE.slice(0,16), started_at:state.started_at, expires_at:state.expires_at, days_remaining:Math.max(1, Math.ceil((expires-now)/DAY_MS)), contact:CONTACT };
}
function progressStore() { return readJson(PROGRESS_FILE, { schema:'apophis/training-progress/v1', profiles:[] }); }
function send(res, code, body, type='application/json; charset=utf-8') {
  res.writeHead(code, { 'Content-Type':type, 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff', 'Referrer-Policy':'no-referrer', 'Content-Security-Policy':"default-src 'self'; style-src 'self'; script-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'self'" });
  res.end(type.startsWith('application/json') ? JSON.stringify(body) : body);
}
function bodyJson(req) { return new Promise((resolve,reject)=>{ const chunks=[]; let size=0; req.on('data',c=>{size+=c.length;if(size>10000){reject(new Error('request_too_large'));req.destroy();}});req.on('end',()=>{try{resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));}catch(_){reject(new Error('invalid_json'));}});req.on('error',reject); }); }
function readOnly(res, lic) { if (lic.mode !== 'write_enabled') { send(res, 403, { error:'read_only', reason:lic.reason, message:'Der Testzeitraum ist beendet oder die lokale Bindung konnte nicht bestätigt werden. Vorhandene Lerninhalte und Fortschritte bleiben lesbar und exportierbar.', contact:lic.contact }); return true; } return false; }
async function route(req,res) {
  const u = new URL(req.url || '/', `http://${HOST}:${PORT}`); const pathname=u.pathname;
  const lic=loadLicense();
  if (req.method==='GET' && pathname==='/api/status') return send(res,200,{...lic,product:'Apophis Qualifizierungs- und Schulungsframework',version:'0.1.0-training-preview',trial_days:DAYS,read_only_after_expiry:true});
  if (req.method==='GET' && pathname==='/api/modules') return send(res,200,{modules:MODULES});
  if (req.method==='GET' && pathname==='/api/progress') return send(res,200,progressStore());
  if (req.method==='GET' && pathname==='/api/export') return send(res,200,progressStore());
  if (req.method==='POST' && pathname==='/api/profiles') {
    if(readOnly(res,lic)) return;
    const body=await bodyJson(req); const alias=typeof body.alias==='string'?body.alias.trim():'';
    if(!alias||alias.length>60) return send(res,400,{error:'alias_required_max_60'});
    const store=progressStore(); const id=`learner-${crypto.randomUUID()}`;
    store.profiles.push({id,alias,created_at:new Date().toISOString(),modules:{}}); atomicJson(PROGRESS_FILE,store);
    return send(res,201,{profile:store.profiles.at(-1)});
  }
  if (req.method==='POST' && pathname==='/api/progress') {
    if(readOnly(res,lic)) return;
    const body=await bodyJson(req); const module=MODULES.find(m=>m.id===body.module_id); const state=['in_progress','completed'].includes(body.state)?body.state:null;
    if(!module||!state||typeof body.profile_id!=='string') return send(res,400,{error:'invalid_progress'});
    const store=progressStore(); const profile=store.profiles.find(p=>p.id===body.profile_id); if(!profile) return send(res,404,{error:'profile_not_found'});
    const old=profile.modules[module.id]||{}; profile.modules[module.id]={state:state==='completed'?'completed':(old.state==='completed'?'completed':'in_progress'),updated_at:new Date().toISOString()};
    atomicJson(PROGRESS_FILE,store); return send(res,200,{profile});
  }
  if (req.method==='GET' && (pathname==='/'||pathname.startsWith('/'))) {
    const rel=pathname==='/'?'index.html':decodeURIComponent(pathname.slice(1));
    if(rel.includes('..')||rel.includes('\\')) return send(res,400,'bad path','text/plain; charset=utf-8');
    const file=path.join(PUBLIC,rel); if(!file.startsWith(PUBLIC+path.sep)) return send(res,400,'bad path','text/plain; charset=utf-8');
    try { const content=fs.readFileSync(file); const ext=path.extname(file); const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'}[ext]||'application/octet-stream'; return send(res,200,content,mime); } catch (_) { return send(res,404,'not found','text/plain; charset=utf-8'); }
  }
  return send(res,405,{error:'method_not_allowed'});
}
fs.mkdirSync(DATA,{recursive:true,mode:0o700});
loadLicense();
const server=http.createServer((req,res)=>{route(req,res).catch(e=>{if(!res.headersSent)send(res,400,{error:e.message||'request_failed'});});});
server.on('error',e=>{console.error(`Start fehlgeschlagen: ${e.message}`);process.exitCode=1;});
server.listen(PORT,HOST,()=>{
  const url=`http://${HOST}:${PORT}/`;
  console.log(`Apophis Training Preview läuft lokal: ${url}`);
  console.log(`Lokale Daten: ${DATA}`);
  console.log('Keine externe Verbindung. Fenster zum Beenden offen lassen; Ctrl+C beendet den Dienst.');
  if(process.platform==='win32') spawnSync('cmd.exe',['/c','start','',url],{stdio:'ignore',windowsHide:true});
});
