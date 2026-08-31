# Repository rules for coding agents

Rules an agent should read before changing this repository.

<!-- BEGIN:learned-testing-and-linting -->
# Test and lint commands

• Run tests with `npm test`
• Run linting with `npm run lint`

HUMAN NOTE: keep this line exactly as written, it was added by a person.
<!-- END:learned-testing-and-linting -->

<!-- BEGIN:learned-package-json-missing -->
# package.json is not in repository root

Attempted to read `package.json` from the root directory but the file does not exist. The repository may not have a package.json file, or it may be located in a subdirectory. Do not assume standard Node.js project structure exists.
<!-- END:learned-package-json-missing -->
<!-- BEGIN:learned-readme-structure -->
# README.md has a 'Local development' section

The README.md contains a 'Local development' section. When adding new sections, consider placement relative to this existing section for logical flow.
<!-- END:learned-readme-structure -->
