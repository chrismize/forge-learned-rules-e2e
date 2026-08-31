# forge-learned-rules-e2e

A tiny Node project used as a target repository for Aine Forge end-to-end runs.

Run `npm test` to execute the node:test suite in `test/`. Run `npm run lint` before committing.
Source lives in `src/`; every module is re-exported from `src/index.js`.

## Local development

- **Running the test suite**: `npm test`
- **Linting**: `npm run lint`

## Checks

Before committing, ensure that both of the following commands pass:

- `npm test` - Runs the test suite
- `npm run lint` - Checks code style and quality

Both checks must pass before committing changes to the repository.
