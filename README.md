# Shine Cosmetics – Custom WordPress Theme

Individuelles WordPress-Theme für Shine Cosmetics.

## WordPress-Zugangsdaten

|                  |                                                           |
| ---------------- | --------------------------------------------------------- |
| **URL**          | https://shine-cosmetics.umuviwak.myhostpoint.ch/wp-admin/ |
| **Benutzername** | shine-cosmetics                                           |
| **Passwort**     | cosmetics-2025                                            |

## Aufbau

```
header.php    → <head>, Hero-Bild, Logo, Navigation
footer.php    → Footer mit Kontaktangaben, </body>
functions.php → Hooks, Enqueues, Theme-Setup
style.css     → einziges Stylesheet
```

`functions.php` lädt `style.css` und alle JS-Dateien über `enqueue_assets()` (Hook: `wp_enqueue_scripts`):

| Datei                 | Aufgabe                                                   |
| --------------------- | --------------------------------------------------------- |
| `navigation.js`       | Mobile-Menü-Toggle, Smooth Scroll zu Anker-Links          |
| `btn-toggle.js`       | Verknüpft Buttons mit Angebots-Blöcken                    |
| `angebot-position.js` | Wertet H1-Zahlen aus, steuert Links/Rechts-Positionierung |
| `scroll-animation.js` | Zeichnet die SVG-Linie beim Scrollen                      |
| `slider.js`           | Bildergalerie-Slider (Impressionen)                       |
|                       |

## Wichtig beim Hinzufügen von Inhalten

- **Angebots-Seite:** Jeder Block beginnt mit einer `H1`, die nur eine Zahl enthält (wird nicht angezeigt). Gerade Zahl → Block rechts, ungerade → links. Reihenfolge der Blöcke = Reihenfolge der Zahlen.
- **Toggle-Buttons:** Button-Text muss exakt (Gross-/Kleinschreibung egal) mit `data-title` des zugehörigen Angebots-Blocks übereinstimmen, sonst bleibt der Block funktionslos.
- **SVG-Scroll-Animation:** erwartet Pfade mit festen IDs sowie Sections mit `data-svg-section="..."`. Bei Umsortierung der Sections die Scroll-Trigger neu prüfen.
- **Galerie-Slider:** braucht mindestens 3 Bilder in `#impressionen .wp-block-gallery`, sonst funktioniert die Slide-Logik nicht zuverlässig.
