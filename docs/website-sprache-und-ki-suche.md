# Sprache für KMU und Auffindbarkeit in KI-Suchen

Stand: 13. Oktober 2026. Die Änderungen liegen im lokalen Projekt; die öffentliche Website übernimmt sie mit dem nächsten Deployment.

## Überarbeitete Sprache

Ob ein Text von KI stammt, lässt sich an seiner Formulierung nicht sicher feststellen. Auf der Website wirkten vor allem allgemeine Versprechen, kurze Werbeslogans und wiederholte Wendungen austauschbar. Die Überarbeitung benennt stattdessen Leistungen, Aufgaben und die Zusammenarbeit.

| Bisher | Jetzt |
|---|---|
| „Was möchten Sie weiterbringen?“ | „Software, Apps und Beratung.“ |
| „Ein klarer nächster Schritt. In jeder Phase.“ | „Vom ersten Gespräch bis zum Betrieb.“ |
| „Lars, Lennart und Ludwig.“ | „Das Team hinter Cubeon Solutions.“ |
| „Ihr Vorhaben beginnt mit einem Gespräch.“ | „Was soll Ihre Software oder App können?“ |
| „Der schnellste Weg, Ihr HomeKit-Zuhause zu steuern.“ | „Steuert HomeKit-Geräte über eine Übersicht Ihrer Räume und Geräte.“ |

Die Angebotsseiten richten sich an kleine und mittlere Unternehmen. Beispiele sind interne Abläufe, Kundenportale, Apps für Mitarbeiter oder Kunden und Geräteanbindung. Technische Leistungen werden in verständlicher Sprache erklärt. Fragen zu Aufwand, vorhandener Software und Betreuung werden direkt beantwortet.

Das allgemeine App-Angebot umfasst Android, iOS und Desktop. Das wird in den Angebotskarten, der App-Leistungsseite, der Beratung, den Unternehmensdaten und den Seitenvorschauen benannt. Produkt- und projektspezifische Plattformangaben bleiben auf die tatsächlich unterstützten Plattformen bezogen. Die Website-Texte verwenden statt „Backend“ Erklärungen zu Datenhaltung, Zugriffsrechten und Datenaustausch; der Einstieg nennt „Server-Software“ als ergänzenden Entwicklungsbereich.

Das Leistungsmenü hat einen eigenen, beim Öffnen drehenden Pfeil. Es schließt bei einem Klick oder Fokuswechsel außerhalb, per Escape und beim Auswählen eines Menülinks. Die Referenzen werden als „Beispielprojekte“ eingeführt; der wiederholende Einleitungstext und dekorative senkrechte Balken neben den Kundenlogos sind entfernt. Der Ablaufabschnitt trägt die Einstiegszeile „Der Projektablauf“ beziehungsweise „Der Beratungsablauf“. Die eigenen Produkte werden mit „Profitieren Sie von unserer Erfahrung.“ vorgestellt und von der Vision bis zum laufenden Betrieb mit der Erfahrung für Kundenprojekte verbunden. AwakeSync nennt die vom Produktinhaber ergänzte Schlafanalyse mithilfe von KI-Modellen. Bei Sociogramly greift der untere freie Bildbereich den oberen unscharfen Hintergrund gespiegelt auf.

Die drei Leistungen haben feste, sanfte Hintergrundfarben: individuelle Softwareentwicklung Mintgrün (`#eff8f3`), App-Entwicklung Hellblau (`#eef4ff`) und Beratung Lavendel (`#f6f1fb`). Die Zuordnung steht zentral in `src/app/globals.css` und wird über die Leistungs-ID sowohl auf den Startseitenkarten als auch auf den Unterseiten verwendet. Einstieg, Ablauf und Kontaktabschluss greifen den jeweiligen Hintergrund auf; Linien und ausgewählte Textakzente verwenden passende dunklere Töne.

Der Einstieg nennt Kassel als Firmensitz und die deutschlandweite Zusammenarbeit. KMU werden damit auch außerhalb Nordhessens angesprochen. Fußzeile, Suchmaschinen-Texte und Seitenvorschauen verwenden dieselbe räumliche Einordnung. Drei kurze Angebote benennen Systemverbindungen, die Entwicklung individueller Software und Apps für Smartphone und Computer. Die Plattformen erscheinen in der Reihenfolge Web, Desktop, Android, iOS und Server-Software. Bestehende Seitenadressen wurden beibehalten, damit Links auf die Leistungsseiten weiterhin funktionieren.

Die Produktreihe und die vollständige Produktübersicht verwenden die gemeinsame Reihenfolge Drivey, AwakeSync, SBF See Prüfungscoach, ND Filter, Sociogramly und HomeSpot. Sie wird in `src/lib/data/apps.ts` gepflegt. Das Namensfeld im Kontaktformular verwendet den Hinweis „Vor- und Nachname…“ statt eines Musternamens. Der direkte Austausch mit den Entwicklern wird ausdrücklich als Zusammenarbeit ohne Agentur-Overhead beschrieben.

Texte werden in den jeweiligen Seiten und Komponenten gepflegt. Wiederverwendete App-, Leistungs-, Referenz- und Teamdaten stehen in `src/lib/data/`.

Das Angebot heißt durchgehend „Beratung“ und umfasst die Planung von Vorhaben sowie Entscheidungen zu Funktionen, Bedienung und Technologie. Drei konkrete Einstiege sind neue Projekte klären, bestehende Software prüfen und Entwicklungsansätze vergleichen. Die jeweils vereinbarten Ergebnisse werden benannt; Beratung bleibt ohne anschließenden Entwicklungsauftrag buchbar und kann auch die Umsetzung begleiten. Der bestehende Pfad `/app-beratung` bleibt erhalten. Der Beratungsablauf trägt die Überschrift „Von Ihrer Frage zur dokumentierten Empfehlung.“ Der Einstieg verwendet den gewählten Slogan „Wir denken mit und entwickeln weiter.“. Referenzen erscheinen in der Reihenfolge EiMSIG, NVV, Rohloff, Tanzverzeichnis.de; das Team in der Reihenfolge Ludwig, Dr. Lars, Lennart. Die Teamtexte sprechen von einem kleinen Team; die Karten nennen Ludwig als Geschäftsführer & Gründer sowie Lars und Lennart als Gründer. Persönliche Technik-Schwerpunkte, der Scroll-Hinweis und die Download-Zahlen wurden entfernt.

Die Referenzen beruhen auf den ergänzten Projektangaben: Die EiMSIG-App wird für Android und iOS neu entwickelt und modernisiert. Die Beschreibung erklärt die Anbindung an das Alarmsystem, ohne das Kommunikationsprotokoll zu erläutern. Beim NVV begleitet Cubeon die neue App beratend zu Funktionsumfang, Nutzererfahrung und Technologie. Für Rohloff entsteht ein Plugin für das interne Mailsystem, das bisher manuelle Abläufe automatisieren soll. Die Leistungsseiten zeigen ergänzende Projektbeschreibungen in den drei Schritten „1. Ausgangslage“, „2. Lösung“, „3. Ergebnis“. Bei laufenden Projekten bleiben geplante Ergebnisse als solche erkennbar; Einsparungen werden nicht behauptet. Alle drei Teamkarten nennen unter dem Namen die Berufsbezeichnung „Informatiker“.

Tanzverzeichnis.de ergänzt die Referenzen zur individuellen Softwareentwicklung: Ein nach Kundenanforderungen entwickeltes WordPress-Plugin verbindet die Website mit dem Zahlungsdienstleister. Original-Logo und Kartenhintergrund stammen von der Kundenwebsite; die Quellen stehen in `public/images/clients/SOURCES.md`. Die Startseite zeigt vier Referenzen in zwei Spalten. Alle Referenzkarten und Projektbeschreibungen verlinken die jeweilige Kundenwebsite. Leistungsseiten zeigen alle aktiven Referenzen, die dem jeweiligen Angebot zugeordnet sind, einschließlich Rohloff und Tanzverzeichnis.de auf der Seite zur individuellen Softwareentwicklung.

Der Abschnitt „Von der Entwicklung bis zum Betrieb und zur Wartung.“ bleibt auf der Startseite. Auf den Leistungsseiten zur individuellen Softwareentwicklung und App-Entwicklung wurde dieser zusätzliche Abschnitt entfernt.

Der Kontaktbereich lädt auch zur Schilderung einer Idee oder eines Softwareproblems ohne fertiges Konzept ein. Er erklärt das erste Gespräch und die Abstimmung von Umfang und Kosten vor einer Beauftragung. Das Formular bietet ein optionales Unternehmensfeld und kurze Hilfsfragen zur Nachricht. Die Unternehmensangabe wird geprüft und in die Anfrage-E-Mail übernommen; die Datenschutzerklärung benennt das zusätzliche optionale Feld. Kostenfreiheit oder feste Antwortzeiten werden nicht zugesagt.

Die zusätzliche Einstiegszeile und der FAQ-Block der Startseite sind entfernt. Die wesentlichen Informationen stehen bereits im Haupttext und auf den Leistungsseiten. FAQ-Markup ist keine Voraussetzung für Google-Suche oder deren KI-Funktionen; der entfernte Block bleibt auch nicht als unsichtbares Schema zurück.

Auch die FAQ-Blöcke der Softwareentwicklungs-, App-Entwicklungs- und Beratungsseite wurden auf Wunsch entfernt, einschließlich der zugehörigen strukturierten Daten und der Frage zu „Backend und Frontend“.

Das Copyright-Jahr wird im Browser aus dem aktuellen Datum ermittelt. Es aktualisiert sich auch bei einem Datumswechsel und beim erneuten Öffnen des Tabs, ohne einen neuen Website-Build zu benötigen.

## Umgesetzte Grundlagen für die Suche

- Öffentliche Seiten sind für Suchmaschinen zugänglich. `OAI-SearchBot` und `PerplexityBot` erhalten ausdrücklich Zugriff; `/api/` ist in allen Gruppen ausgenommen. Die vorherigen Einstellungen für Trainings-Crawler werden dadurch nicht eingeschränkt oder erweitert.
- Die Startseite und Leistungsseiten nennen Zielgruppe und Angebot in ihren Überschriften und Einleitungstexten. Ihre Titel und Beschreibungen beziehen sich auf KMU und Unternehmen.
- Unternehmensdaten enthalten Marke, rechtlichen Namen, Adresse, deutschlandweites Tätigkeitsgebiet und einen Katalog der drei Leistungen. Jede Leistung verweist auf dieselbe Unternehmensidentität.
- Wichtige Inhalte und Antworten stehen bereits im ausgelieferten HTML. Die Verlinkung zwischen Leistungen, Referenzen und Produkten und die Sitemap bleiben erhalten.

Diese Maßnahmen schaffen nachvollziehbare Inhalte und erlauben Suchdiensten, sie abzurufen. Sie garantieren keine Aufnahme oder Empfehlung in ChatGPT, Perplexity oder Google. FAQ-Markup ist kein spezieller Rankingfaktor für KI-Suchen und verspricht keine hervorgehobene Google-Darstellung.

## Nach der Veröffentlichung prüfen

1. Die öffentliche Startseite, Leistungsseiten, `robots.txt` und `sitemap.xml` auf erfolgreiche Auslieferung prüfen. Falls das Hosting eigene Bot-Sperren verwendet, Zugriff anhand der aktuellen offiziellen Bot-Adressen und tatsächlichen Serverantworten prüfen.
2. Die Sitemap in der bereits eingerichteten Google Search Console und gegebenenfalls in Bing Webmaster Tools aktualisieren. Eine noch nicht eingerichtete oder nicht zugängliche Konsole benötigt den Website-Inhaber.
3. Tatsächliche Suchzugriffe und Anfragen beobachten. ChatGPT versieht weiterführende Links laut OpenAI mit `utm_source=chatgpt.com`; das lässt sich in der vorhandenen Auswertung berücksichtigen.
4. Referenzen bei neuen Projekten um belegbare Aufgaben und Ergebnisse ergänzen. Zahlen, Kundenaussagen und öffentliche Profil-Links nur aufnehmen, wenn sie nachweisbar sind.

## Offizielle Quellen

- [OpenAI: Übersicht der Crawler](https://developers.openai.com/api/docs/bots): `OAI-SearchBot` steuert den Zugang zur ChatGPT-Suche; die Einstellung für `GPTBot` und Training ist davon unabhängig.
- [OpenAI: Publisher FAQ](https://help.openai.com/en/articles/12627856): Empfehlungen zur Auffindbarkeit und Angaben zur Kennzeichnung von weiterführenden Links.
- [Perplexity: Crawler](https://docs.perplexity.ai/docs/resources/perplexity-crawlers): `PerplexityBot` dient dem Auffinden und Verlinken von Websites in Suchergebnissen.
- [Google: KI-Funktionen und Websites](https://developers.google.com/search/docs/appearance/ai-features?hl=en): Crawling, Indexierung, hilfreiche Inhalte und übereinstimmende strukturierte Daten bleiben die Grundlage; besondere KI-Dateien oder ein spezielles Schema sind dafür nicht erforderlich.
