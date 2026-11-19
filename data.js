// ✏️ HIER trägst du alles ein. Neues Modpack = neuen Block { ... }, kopieren und anpassen.
// Reihenfolge = Reihenfolge auf der Seite. Zwischen Blöcken immer ein Komma.

const SITE = {
  name: "Mein Modpack",
  tagline: "Handverlesene Minecraft-Modpacks. Kostenlos herunterladen.",
  github: "https://github.com/DEIN-NAME"
};

const MODPACKS = [
  {
    name: "Mein Modpack",
    description: "Mehr Performance, neue Welten und alles aufeinander abgestimmt.",
    icon: "M",                       // ein Buchstabe/Emoji ODER ein Bildlink (https://...png)
    minecraft: "1.20.1",
    loader: "Forge",                 // Forge, Fabric, NeoForge, Quilt ...
    tags: ["Abenteuer", "Performance"],
    version: "1.0.0",
    size: "120 MB",
    // Variante A: fester Link zur Datei
    download: "https://github.com/DEIN-NAME/DEIN-REPO/releases/latest/download/modpack.zip",
    // Variante B (optional): Repo angeben, dann wird automatisch die neueste
    // .zip/.mrpack aus den GitHub-Releases genommen (inkl. Version, Größe, Downloads)
    // repo: "DEIN-NAME/DEIN-REPO",
    changelog: ""                    // optional: Link, z. B. zur Release-Seite
  },
  {
    name: "Zweites Modpack",
    description: "Ein kleineres Pack für Vanilla-Fans.",
    icon: "Z",
    minecraft: "1.21.1",
    loader: "Fabric",
    tags: ["Vanilla+"],
    version: "0.5.0",
    size: "40 MB",
    download: "https://github.com/DEIN-NAME/DEIN-REPO2/releases/latest/download/modpack.zip"
  }
];
