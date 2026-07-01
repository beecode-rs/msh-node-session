## [4.0.4](https://github.com/beecode-rs/msh-node-session/compare/v4.0.3...v4.0.4) (2026-07-01)


### Bug Fixes

* update msh-config and dependencies ([b46a26e](https://github.com/beecode-rs/msh-node-session/commit/b46a26ef4267ae9e3a6dd24798b8356461eea694))

## [4.0.3](https://github.com/beecode-rs/msh-node-session/compare/v4.0.2...v4.0.3) (2026-06-10)


### Bug Fixes

* update dependency lock file ([36da3e0](https://github.com/beecode-rs/msh-node-session/commit/36da3e0d43aba605ff09437b6833c6374a0951ee))
* update msh-config to 1.2.0 ([d2b7499](https://github.com/beecode-rs/msh-node-session/commit/d2b749923dd6e997cea939634c7ebb04054628c8))

## [4.0.2](https://github.com/beecode-rs/msh-node-session/compare/v4.0.1...v4.0.2) (2026-06-10)


### Bug Fixes

* update typescript dependency ([7902275](https://github.com/beecode-rs/msh-node-session/commit/7902275a809cb2336e57d0f3764a5705c4199877))

## [4.0.1](https://github.com/beecode-rs/msh-node-session/compare/v4.0.0...v4.0.1) (2026-06-10)


### Bug Fixes

* bump @beecode/msh-config to 1.1.11 ([73b72ea](https://github.com/beecode-rs/msh-node-session/commit/73b72ea9132e5d8ed66cc579b141d30d8bd914ef))
* update @beecode/msh-config to 1.1.12 ([01be772](https://github.com/beecode-rs/msh-node-session/commit/01be772e5084676c09914a4c4d369fade2678558))
* update dependencies ([e7fb5fd](https://github.com/beecode-rs/msh-node-session/commit/e7fb5fd6a1afa95a957728397786b0326e699fb8))

# [4.0.0](https://github.com/beecode-rs/msh-node-session/compare/v3.0.14...v4.0.0) (2026-06-09)


* refactor!: restructure session strategies and modernize build pipeline ([#71](https://github.com/beecode-rs/msh-node-session/issues/71)) ([d8e3e2e](https://github.com/beecode-rs/msh-node-session/commit/d8e3e2ed977039a92461f3e4006bb4e8b1deba9b))


### BREAKING CHANGES

* Remove CommonJS /lib output and babel from build pipeline.

Packages now ship ESM-only (dist/). Consumers using `require()` or importing from `lib/` must migrate to ESM `import` from `dist/`.
Minimum Node.js version is now v22.22.1.

- Move session strategies under business/service/
- Add express and fastify helper classes
- Export node-session-util from package entry point
- Drop babel.config.cjs and related dependencies
- Remove /lib output directory references
- Upgrade Node.js to v22.22.1, update CI to ubuntu2404
- Add nvm loading to husky hooks
- Remove vite-tsconfig-paths plugin
- Remove IDE-generated iml file
- Add contract tests and vitest config

## [3.0.14](https://github.com/beecode-rs/msh-node-session/compare/v3.0.13...v3.0.14) (2026-02-16)


### Bug Fixes

* update gitignore and clean build outputs ([fedd4fd](https://github.com/beecode-rs/msh-node-session/commit/fedd4fd7c37c2fd7a2a933a985fd293309b6ea40))

## [3.0.13](https://github.com/beecode-rs/msh-node-session/compare/v3.0.12...v3.0.13) (2025-03-27)


### Bug Fixes

* update package dependencies to latest versions ([8d8575f](https://github.com/beecode-rs/msh-node-session/commit/8d8575fa7a3c271048f4aeb84580a6f15ca81da3))

## [3.0.12](https://github.com/beecode-rs/msh-node-session/compare/v3.0.11...v3.0.12) (2025-03-23)


### Bug Fixes

* refactor ESLint configuration and update dependencies ([e2e1e68](https://github.com/beecode-rs/msh-node-session/commit/e2e1e68cc451204811607ffbd9eaf9eb98cb544c))
* refactor ESLint configuration and update dependencies ([100e5d6](https://github.com/beecode-rs/msh-node-session/commit/100e5d616a89bf59d89fc538d0b0996417d67d18))

## [3.0.11](https://github.com/beecode-rs/msh-node-session/compare/v3.0.10...v3.0.11) (2025-03-20)


### Bug Fixes

* update @beecode/msh-config to version 1.1.3 ([05bc722](https://github.com/beecode-rs/msh-node-session/commit/05bc722e11dea2e262c352babcb8d6f0382e43f6))

## [3.0.10](https://github.com/beecode-rs/msh-node-session/compare/v3.0.9...v3.0.10) (2025-03-20)


### Bug Fixes

* update @beecode/msh-config to 1.1.2 and typedoc to 0.28.1 ([5febed3](https://github.com/beecode-rs/msh-node-session/commit/5febed3f843fec2314275bb4247b002842ab0864))

## [3.0.9](https://github.com/beecode-rs/msh-node-session/compare/v3.0.8...v3.0.9) (2025-03-19)


### Bug Fixes

* update @beecode/msh-config to version 1.1.1 ([150f193](https://github.com/beecode-rs/msh-node-session/commit/150f19330f313d9dc5544f34d3f7f16b623c4093))
* update import path for shared semantic release config ([9260e71](https://github.com/beecode-rs/msh-node-session/commit/9260e71edde29898f5beb3e1184a29193ff30f67))
* update lint-json-fix command to use -p option for jsonsort ([5953bb9](https://github.com/beecode-rs/msh-node-session/commit/5953bb9f98e3c76d6f8c0f47b38c83bcd8c543e0))

## [3.0.8](https://github.com/beecode-rs/msh-node-session/compare/v3.0.7...v3.0.8) (2024-05-08)


### Bug Fixes

* add shared semantic release config ([af3677f](https://github.com/beecode-rs/msh-node-session/commit/af3677f7f597407aed522fb44fd1bcd4a7f142ca))

## [3.0.7](https://github.com/beecode-rs/msh-node-session/compare/v3.0.6...v3.0.7) (2024-05-04)


### Bug Fixes

* update package.json, use shared config for eslint and prettier ([9dd7f81](https://github.com/beecode-rs/msh-node-session/commit/9dd7f810aa232c9b00a7ae133f4b1842fe3b1bc1))

## [3.0.6](https://github.com/beecode-rs/msh-node-session/compare/v3.0.5...v3.0.6) (2024-05-03)


### Bug Fixes

* update package.json, esmodule remove alias, use vitest instead of jest ([#17](https://github.com/beecode-rs/msh-node-session/issues/17)) ([dba7307](https://github.com/beecode-rs/msh-node-session/commit/dba7307b113d1d05aac3d65dbf5e7212b80a46f5))

## [3.0.5](https://github.com/beecode-rs/msh-node-session/compare/v3.0.4...v3.0.5) (2024-04-30)


### Bug Fixes

* tsconfig output dir location and update node version 20.12.2 ([a626363](https://github.com/beecode-rs/msh-node-session/commit/a626363e8cc2c39411f525c6ad8875658b314780))

## [3.0.4](https://github.com/beecode-rs/msh-node-session/compare/v3.0.3...v3.0.4) (2024-04-15)


### Bug Fixes

* bump semantic-release from 23.0.7 to 23.0.8 ([58a7cd9](https://github.com/beecode-rs/msh-node-session/commit/58a7cd97dce13c8e9fb72112266a6d02195a3a27))
* update package.json ([c970e75](https://github.com/beecode-rs/msh-node-session/commit/c970e756e8fe36ab807209e1bddc63b709b42400))

## [3.0.3](https://github.com/beecode-rs/msh-node-session/compare/v3.0.2...v3.0.3) (2024-04-09)


### Bug Fixes

* update packages.json ([768157a](https://github.com/beecode-rs/msh-node-session/commit/768157a71894176b72570888163a581a45460107))

## [3.0.2](https://github.com/beecode-rs/msh-node-session/compare/v3.0.1...v3.0.2) (2024-04-09)


### Bug Fixes

* update packages.json ([85292c7](https://github.com/beecode-rs/msh-node-session/commit/85292c7e00b3b9805de329b74c7fd311f0298604))

## [3.0.1](https://github.com/beecode-rs/msh-node-session/compare/v3.0.0...v3.0.1) (2024-04-07)


### Bug Fixes

* esmodule build output alias path to relative ([2684d55](https://github.com/beecode-rs/msh-node-session/commit/2684d550f9192c1ba1ba952f6a34a52d7e851563))

# [3.0.0](https://github.com/beecode-rs/msh-node-session/compare/v2.2.6...v3.0.0) (2024-04-07)


* refactor!: es modules and commonjs build (#3) ([537af00](https://github.com/beecode-rs/msh-node-session/commit/537af00af49053c10d66491a7bfca689c084e2ce)), closes [#3](https://github.com/beecode-rs/msh-node-session/issues/3)


### BREAKING CHANGES

* changed file structure

## [2.2.6](https://github.com/beecode-rs/msh-node-session/compare/v2.2.5...v2.2.6) (2023-05-22)


### Bug Fixes

* update project/packages ([b019dec](https://github.com/beecode-rs/msh-node-session/commit/b019dec2e57ce8b1e44774f023fd02eb0829e165))

## [2.2.5](https://github.com/beecode-rs/msh-node-session/compare/v2.2.4...v2.2.5) (2023-04-23)


### Bug Fixes

* build script ([9342ef2](https://github.com/beecode-rs/msh-node-session/commit/9342ef2166c01df01313082e8014b367292bc959))
* update project, update package.json ([8f4746a](https://github.com/beecode-rs/msh-node-session/commit/8f4746a23cd1f874890443eacebb675dc618689a))

## [2.2.4](https://github.com/beecode-rs/msh-node-session/compare/v2.2.3...v2.2.4) (2022-10-16)


### Bug Fixes

* add src to release ([597db6d](https://github.com/beecode-rs/msh-node-session/commit/597db6db0519e8f18375f13311b607cce5b0f63d))

## [2.2.3](https://github.com/beecode-rs/msh-node-session/compare/v2.2.2...v2.2.3) (2022-02-27)


### Bug Fixes

* update package.json ([112f8db](https://github.com/beecode-rs/msh-node-session/commit/112f8dbc11d61aec210e991978f2edd66e948b88))

## [2.2.2](https://github.com/beecode-rs/msh-node-session/compare/v2.2.1...v2.2.2) (2021-12-19)


### Bug Fixes

* bump version of fastify plugin to v3 ([646e304](https://github.com/beecode-rs/msh-node-session/commit/646e3041d1e4e461381850113668cf11be2852bc))

## [2.2.1](https://github.com/beecode-rs/msh-node-session/compare/v2.2.0...v2.2.1) (2021-12-19)


### Bug Fixes

* add express fastAls helper, fix typo ([39cd6bc](https://github.com/beecode-rs/msh-node-session/commit/39cd6bc735b3605322d355d788507d1f18a198ee))

# [2.2.0](https://github.com/beecode-rs/msh-node-session/compare/v2.1.1...v2.2.0) (2021-12-19)


### Bug Fixes

* disable tests ([00a2111](https://github.com/beecode-rs/msh-node-session/commit/00a2111bc050b3a06184c86da91f441984430fae))


### Features

* add fastAls strategy ([f3ee23b](https://github.com/beecode-rs/msh-node-session/commit/f3ee23bf1103d43ae74449157946f65ccb30a35f))

## [2.1.1](https://github.com/beecode-rs/msh-node-session/compare/v2.1.0...v2.1.1) (2021-11-21)


### Bug Fixes

* update packages ([ba20792](https://github.com/beecode-rs/msh-node-session/commit/ba207929c6e5c348d8c38f8458ae22db04e3e1c0))

# [2.1.0](https://github.com/beecode-rs/msh-node-session/compare/v2.0.0...v2.1.0) (2021-11-15)


### Features

* move createAsync session to util ([2932d9f](https://github.com/beecode-rs/msh-node-session/commit/2932d9f7c535eda2b039d5b6e189d8be6c372f4f))

# [2.0.0](https://github.com/beecode-rs/msh-node-session/compare/v1.1.1...v2.0.0) (2021-11-14)


* refactor!: use classes instead of objects for dao ([b4e75cc](https://github.com/beecode-rs/msh-node-session/commit/b4e75cc6e5537380ed666ff569b41c9601c3983c))


### BREAKING CHANGES

* using classes

## [1.1.1](https://github.com/beecode-rs/msh-node-session/compare/v1.1.0...v1.1.1) (2021-04-16)


### Bug Fixes

* update package.json ([745c77f](https://github.com/beecode-rs/msh-node-session/commit/745c77fe8b9a4afb13d77a7f726f746786d4a753))

# [1.1.0](https://github.com/beecode-rs/msh-node-session/compare/v1.0.3...v1.1.0) (2021-04-16)


### Features

* add bindEmitter ([67ec9f9](https://github.com/beecode-rs/msh-node-session/commit/67ec9f944d2bfa16fc8d53bff4807df8e35895f3))

## [1.0.3](https://github.com/beecode-rs/msh-node-session/compare/v1.0.2...v1.0.3) (2021-03-26)


### Bug Fixes

* session async call ([820641a](https://github.com/beecode-rs/msh-node-session/commit/820641a9e5ae24a4c132c16b0470280fe16d3fe5))

## [1.0.2](https://github.com/beecode-rs/msh-node-session/compare/v1.0.1...v1.0.2) (2021-03-17)


### Bug Fixes

* remove npm-force-resolutions ([27acbce](https://github.com/beecode-rs/msh-node-session/commit/27acbce9d2ac4bb403236afb12ef62590baaf328))

## [1.0.1](https://github.com/beecode-rs/msh-node-session/compare/v1.0.0...v1.0.1) (2021-02-26)


### Bug Fixes

* npm-force-resolutions problem ([e85e541](https://github.com/beecode-rs/msh-node-session/commit/e85e54192ded6ec71bfcf98841886ac5fcf76614))

# 1.0.0 (2021-02-23)


### Features

* build, bump version ([#1](https://github.com/beecode-rs/msh-node-session/issues/1)) ([4cac465](https://github.com/beecode-rs/msh-node-session/commit/4cac465556e8ce7fdccf21c240045bcf9d36a3d5))

# 1.0.0 (2021-02-23)


### Bug Fixes

* init project, bump version ([#1](https://github.com/beecode-rs/msh-node-session/issues/1)) ([171468e](https://github.com/beecode-rs/msh-node-session/commit/171468e87ebdde8b687af435b40b34ef0cb003f2))
