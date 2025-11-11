# planTUM

Ein Webtool zur Verwaltung und Planung von Master-Modulen für Informatik Studenten der TUM (Technische Universität München).

## Features

- ✅ Semester übersicht
- ✅ Semester als Skill-Tree organisieren
- ✅ Fortschrittsübersicht mit Kreditpunkten
- ✅ Automatische Spezialisierungserkennung
- ✅ **Automatisches Speichern im lokalen Speicher des Browsers**
- ✅ Export/Import von Daten als JSON

## Lokale Verwendung

### Starten der Anwendung

```bash
npm run dev
```

Dann öffnen Sie: http://localhost:3000

## Datenspeicherung

Die Anwendung speichert Daten automatisch im Browser-LocalStorage:

- **Automatisches Speichern**: Alle Änderungen werden sofort lokal gespeichert
- **Export/Import**: Über die Buttons im Header können Sie Ihre Daten als JSON-Datei exportieren oder importieren

## Build

```bash
npm run build
```

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

Dieses Projekt ist so konfiguriert, dass ein Push auf `master` direkt auf den Github-Pages deployt.

**Setup Steps:**

1. Gehe zu den Einstellung des Repositories
2. Gehe zu "Pages" in der linken Sidebar
3. Unter "Build and deployment":
   - Source: "GitHub Actions"
4. Nun sollte dank der `.github/workflows/deploy.yaml` ein Push auf `master` die Seite deployn!

Siehe: `https://postulatum.github.io/plantum/` für das Ergebnis.

### Manual Deployment

Alternativ kann auch manuell deployed werden. Dabei kann es notwendig sein `node_modules/.cache/gh-pages` zu löschen.

```bash
npm install gh-pages --save-dev
npm run deploy
```

Dies baut den aktuellen Branch und auf den `gh-pages` branch.

## Technologie-Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Datenspeicherung**: Browser LocalStorage
- **Deployment**: GitHub Pages + GitHub Actions
