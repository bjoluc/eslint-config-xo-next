# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.0](https://github.com/bjoluc/eslint-config-xo-next/compare/v1.1.0...v2.0.0) (2023-10-28)


### ⚠ BREAKING CHANGES

* importsort is no longer included and there is no `importsort.config.js` file anymore
* XO is no longer included as a dependency of this package and Prettier is no longer run by XO
* **dependencies:** Node.js >=18 is now required and new rules have been added

### Miscellaneous Chores

* **dependencies:** Update dependencies ([8244f6a](https://github.com/bjoluc/eslint-config-xo-next/commit/8244f6a225b3dde4140d7580306dc24461fac6d1))
* Replace prettier-plugin-importsort with prettier-plugin-organize-imports ([1c62b5b](https://github.com/bjoluc/eslint-config-xo-next/commit/1c62b5bf42366aeafc8b47fbdec8d579fb1b656d))
* Use ESLint directly instead of XO ([6d48e53](https://github.com/bjoluc/eslint-config-xo-next/commit/6d48e53344104e862d6b53cfd9967d6874dc3cb6))

## [1.1.0](https://github.com/bjoluc/eslint-config-xo-next/compare/v1.0.0...v1.1.0) (2022-07-03)


### Features

* Disable `import/no-unassigned-import` rule ([6b5067b](https://github.com/bjoluc/eslint-config-xo-next/commit/6b5067b93d1b12ca404e2ef73b5a20cccbe993fa))

## 1.0.0 (2022-07-02)


### Features

* Initial release ([b953c1b](https://github.com/bjoluc/eslint-config-xo-next/commit/b953c1b0ac18673e30aa1c0c1854434fd003a2eb))
