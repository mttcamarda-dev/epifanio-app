# CLAUDE.md — epifanio-app

## Project Overview

This is the `epifanio-app` repository. The project is in its initial setup phase — no application code has been committed yet.

## Repository Structure

```
epifanio-app/
├── CLAUDE.md          # This file — guidance for AI assistants
└── .git/              # Git repository
```

> **Note:** Update this section as the project grows with directories, configuration files, and source code.

## Development Setup

### Prerequisites

_To be defined as the project takes shape (e.g., Node.js, Python, Docker, etc.)._

### Getting Started

```bash
git clone <repo-url>
cd epifanio-app
# Install dependencies (TBD)
# Start development server (TBD)
```

## Commands

_No build, test, or lint commands are configured yet. Update this section when tooling is added._

<!-- Example format to follow:
| Command         | Description               |
|-----------------|---------------------------|
| `npm run dev`   | Start development server  |
| `npm run build` | Production build          |
| `npm test`      | Run test suite            |
| `npm run lint`  | Lint and format check     |
-->

## Code Conventions

### General

- Keep code simple and focused — avoid over-engineering
- Write clear commit messages that explain _why_, not just _what_
- Do not commit secrets, credentials, or `.env` files

### Git Workflow

- Use feature branches for development
- Branch naming: `feature/<description>`, `fix/<description>`, `chore/<description>`
- Write descriptive PR titles and summaries
- Keep commits atomic — one logical change per commit

### Code Style

_To be defined once the tech stack and linting tools are chosen._

## Testing

_No test framework is configured yet. Update this section when tests are added._

<!-- Example format:
- Framework: Jest / pytest / etc.
- Run all tests: `npm test`
- Run single test: `npm test -- path/to/test`
- Tests live alongside source files as `*.test.ts` or in a `__tests__/` directory
-->

## Architecture

_To be documented as the application architecture is defined._

<!-- Example sections to add:
### Frontend
### Backend / API
### Database
### Deployment
-->

## AI Assistant Guidelines

When working in this repository:

1. **Read before writing** — always read existing files before modifying them
2. **Respect existing patterns** — follow conventions already established in the codebase
3. **Minimal changes** — only change what is necessary to complete the task
4. **No phantom features** — do not add features, abstractions, or "improvements" that weren't requested
5. **Security first** — never commit secrets; validate user input at system boundaries
6. **Test your changes** — run existing tests after making changes; add tests for new functionality
7. **Update this file** — when adding significant tooling, dependencies, or architectural decisions, update CLAUDE.md to reflect the current state
