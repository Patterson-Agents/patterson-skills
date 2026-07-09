# patterson-skills

Enterprise skills for Patterson Companies, published as a plugin marketplace.

## patterson-design

The Patterson Companies design system as a skill: brand tokens, the component
library, brand voice, and logos for producing on-brand interfaces, prototypes, and
slides. It bundles the essentials and points to
[`Patterson-Agents/design-system`](https://github.com/Patterson-Agents/design-system)
for the full source (UI kits, page and deck templates, specimen galleries, imagery).

The plugin lives in [`plugins/patterson-design/`](plugins/patterson-design/).

## Install

### Claude Code

```
claude plugin marketplace add patterson-agents/patterson-skills
claude plugin install patterson-design@patterson-skills
```

### GitHub Copilot CLI

```
copilot plugin marketplace add https://github.com/Patterson-Agents/patterson-skills
copilot plugin install patterson-design@patterson-skills
```

The plugin declares no version, so each install resolves to the latest commit on the
default branch. Once installed, ask for on-brand Patterson work and the skill loads.

## Layout

```
.claude-plugin/marketplace.json   plugin catalog
plugins/patterson-design/         the plugin
  .claude-plugin/plugin.json
  agents/                         design agent
  skills/patterson-design/        SKILL.md, references/, assets/, scripts/
.github/skills/, .github/agents/  design skill and agent for use within this repo
```

## Agentic workflows

`.github/skills/agentic-workflows` and `.github/skills/agentic-workflow-designer` route
GitHub Agentic Workflows (gh-aw) requests.
