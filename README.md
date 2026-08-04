# CV

My personal website — deployed from `src/` to GitHub Pages (see `.github/workflows/workflow.yml`).

## Structure

- `src/index.html` — home: the interactive interest graph (hero)
- `src/now/` — /now page
- `src/projects/` — categorized products, hackathons, research projects, and papers
- `src/blog/` — blog (tutorials and whatever I feel like writing)
- `src/contact/` — contact page
- `src/archive/` — previous formal CV site (kept available by direct URL)
- `src/tutorials/` — long-form tutorials (linked from the blog)

## Updating content

Everything is data-driven — look for the `✏️ EDIT HERE` comment in each file:

- **New blog post** → add an object to `POSTS` in `src/blog/index.html`
- **New project** → add an object to the relevant section in `PROJECT_SECTIONS` in `src/projects/index.html`
- **Now page** → edit the blocks in `src/now/index.html`

### Updating the homepage graph

The graph in `src/index.html` is driven by two arrays at the top of the `<script>` block:

**`NODES`** — every node in the graph is one object:

```js
{ id: 'my_node',     // unique string key, used in CROSS_LINKS
  label: 'My Node',  // text shown below the circle
  icon:  '🏆',       // emoji inside the circle
  type:  'hackathon',// root | hub | interest | app | paper | hackathon | hobby
  parent:'hackathons',// id of the parent node
  meta:  'Event · 2026', // optional short context line
  links: [           // optional actions shown in focus mode
    { label: 'Repository', url: 'https://…' }
  ],
  desc:  'What it is…' }  // optional — shown in the detail card on click
```

Top-level hubs connected to Alessio: `research`, `apps`, `agents`, `hackathons`, and `freetime`. The `papers` hub is nested under `research`. AI-agent projects keep their normal project or hackathon parent and connect to `agents` through `CROSS_LINKS`.

**`CROSS_LINKS`** — optional extra edges between any two node IDs:

```js
['nodeA', 'nodeB'],
```

Node types and their ring colours:

| type | colour |
|------|--------|
| `interest` | sky blue |
| `app` | green |
| `paper` | violet |
| `hackathon` | amber |
| `hobby` | pink |
| `hub` | orange (semi) |
| `root` | orange |

Any mistake (duplicate `id`, unknown `parent`, broken cross-link) is logged
as a `console.warn` in the browser dev tools — no silent failures.
