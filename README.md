# AI Comic Studio

Turn a story idea into a short-form AI video: script, visual prompts, voiceover, synced timeline, and Remotion render.

[![Sponsor](https://img.shields.io/badge/Sponsor-GitHub%20Sponsors-ea4aaa?logo=github)](https://github.com/sponsors/232896899-hash)

Built for creators who publish vertical videos to TikTok, Instagram Reels, YouTube Shorts, and Chinese short-video platforms.

## What works today

- Remotion preview and rendering
- CLI-driven story generation
- Timeline-based synchronization of text, images, and audio
- Demo content included under `public/content/history-of-venus`
- Custom episode composition in `src/CanjuanEpisode.tsx`

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

Open the Remotion Studio, select the composition, and preview the demo. To render:

```bash
npx remotion render
```

To generate a new story with the CLI:

```bash
npm run gen
```

The generator can use OpenAI-compatible text/image APIs and ElevenLabs for voiceover. Never commit API keys; keep them in `.env`.

## Product model

The free repository is the reproducible engine and a working demo. Paid add-ons are intentionally separate:

- **Creator Pro Pack** — ready-made story structures, Chinese vertical-video templates, prompt packs, and publishing checklists.
- **Batch Workflow Pack** — episode batching, character consistency, preset voices, and rendering recipes.
- **Customization** — paid integration and private deployment for teams.

The repository does not promise any platform income. Results depend on content quality, distribution, and platform rules.

## Roadmap

- [ ] One-command vertical-video render preset
- [ ] Provider-agnostic API adapter
- [ ] Example Chinese-language episode
- [ ] Batch generation command
- [ ] Pro Pack landing page and license

The first Pro Pack draft and a static sales page are in [`pro-pack/`](pro-pack/)
and [`sales/`](sales/). Buyers can contact the maintainer through the WeChat ID shown on the sales page.

For China-based buyers, the first sales channel is an honest digital-product listing
on Xianyu; the listing copy is prepared in [`sales/闲鱼上架文案.md`](sales/闲鱼上架文案.md).
The repository also includes a GitHub Sponsors configuration in `.github/FUNDING.yml`.

The standalone sales page is deployed from `sales/` by [GitHub Pages](.github/workflows/deploy-pages.yml).

## Development

```bash
npm run lint
npm run build
```

## License

MIT for this project code. Third-party libraries and assets retain their own licenses. Review Remotion's commercial licensing terms before using this project in a commercial production service.

## Support the project

If this saves you time, star the repository and share what you built. Paid packs and support links will be added after the first public release.

## Support the project

Sponsor development on [GitHub Sponsors](https://github.com/sponsors/232896899-hash), or contact the maintainer for the Creator Pro Pack.
