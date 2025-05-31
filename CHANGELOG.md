# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.1.5] - 2025-05-31

### Added
- Comprehensive test coverage for hex color parsing, performance, security, and HTML cleaning
- Modern ESLint configuration with enhanced type safety and optional chaining
- New test scripts for coverage, watch, performance, security, and comprehensive testing

### Changed
- Major refactor of HTML string generation and formatting logic with secure tag cleaning
- Enhanced type checking and consistency across JSON parsing functions
- Streamlined text handling in textToHTML and parser functions
- Standardized code style: enforced double quotes, updated ESLint rules, improved Jest configuration
- Updated package.json: replaced `format` script with `lint` script, added ESLint dependencies
- Improved variable management using `const` instead of `let` where appropriate
- Enhanced README structure and clarity, removed hex color support example
- Merge pull request #21 from AlexTMjugador/alex/upstream-hex-color-parser-fix

### Fixed
- Parser behavior now precisely matches Minecraft game behavior
- Hex color value validation in text components
- Code consistency issues with standardized formatting



## [1.1.4] - 2025-04-04

### Changed
- chore: update version to 1.1.4 and tsup to 8.4.0
- Merge pull request #20 from modrinth/pr-fix

### Fixed
- Fix SnowFireWolf/minecraft-motd-parser#19

### Added
- use github registry (fix)
- use github registry
- bump version, modrinth namespace
- Switch to pnpm
- Add prepare



## [1.1.3] - 2024-07-13

### Changed
- modify render process

### Added
- feat => add more clean utils: JSON to cleaned text, auto check to json
- test add auto cleaned text
- update packages



## [1.1.2-1] - 2023-08-02

### Changed
- update readme and rename function clean tags to clean codes

## [1.1.2] - 2023-08-02

### Fixed
- fix: motd rest tag doesn't work
- fix: text reset code not work

### Changed
- update: trying fix something
- update readme



## [1.1.1] - 2023-03-13

### Changed
- rename npm package name and add simple use
- update readme

### Added
- feat: jest test, and fix parser order bug



## [1.1.0] - 2023-03-13

### Changed
- update
- update md



## [1.0.11] - 2023-03-13

### Changed
- optimize own key check
- Update README.md



## [1.0.10] - 2023-03-13

### Changed
- update

### Removed
- Delete main.yml

### Added
- Update main.yml
- Create main.yml



## [1.0.9-10] / [1.0.9-7] / [1.0.9-1] - 2023-03-13

### Added
- new build system
- multi import methods
- esbuild
- prettier and prepare esbuild

### Changed
- update build configs
- remove no need codes

### Fixed
- update fix
- test fix
- remove console.log
- fix plain text can't convert bug
- fix some types and build
- fix nuderline bug and type number content



## [1.0.9] - 2023-03-13

### Changed
- Update README.md
- update
- released 1.0.9

### Fixed
- fix underline
- fix styles process bug



## [1.0.8] - 2023-03-13

### Added
- readme wrong example
- html xss formatting

### Changed
- html string process
- update for npm
- Update README.md



## [1.0.7] - 2023-03-13

### Fixed
- hot fix dist type

### Changed
- version test
- released
- change some type
- type object



## [1.0.5] - 2023-03-13

### Added
- Create LICENSE

### Changed
- Update README.md
- update version tag
- prepare 1.0.5 release
- update
- update readme
- update md
- Update package.json (multiple updates)
- Update README.md (multiple updates)

### Fixed
- index.d.ts

### Removed
- Revert "for deno"

### Added (Deno Support)
- for deno (later reverted)



## [1.0.4] - 2023-03-13

### Added
- update README.md (deno branch)
- deno x test
- for deno

### Changed
- preapare release
- Update README.md (multiple updates)



## [1.0.4-deno-main] - 2023-03-13

### Added
- Deno support experimental branch



## [1.0.0] - 2023-03-13

### Added
- Initial release
- Basic MOTD parsing functionality
- Text to HTML conversion
- JSON to HTML conversion
- Color code support
- Formatting support (bold, italic, underline, strikethrough)
- TypeScript support
- Build system with tsc
- Basic documentation

### Changed
- Update README.md (multiple updates)
- keywords
- description
- remove async
- DONE (initial completion)



---



## About This Changelog

This changelog was generated based on the commit history of the Minecraft MOTD Parser project. The project has evolved from a simple MOTD parser to a comprehensive library supporting multiple input/output formats, hex color validation, and robust testing.

### Key Milestones:
- **v1.0.0**: Initial release with basic parsing functionality
- **v1.0.8**: Added XSS protection for HTML output
- **v1.1.0**: Major feature updates and stability improvements
- **v1.1.4**: Enhanced hex color validation and game-accurate behavior
- **v1.1.5**: Major HTML formatting improvements with enhanced type safety and comprehensive testing

### Contributors:
- **Kevin Zheng (SnowFireWolf)** - Main developer and project maintainer
  - Core MOTD parsing functionality
  - HTML/JSON conversion system
  - Test suite implementation
  - Documentation and project setup
- **Alejandro González (AlexTMjugador)** - Hex color parser improvements
  - Enhanced hex color validation
  - Game-accurate behavior implementation
- **Jai Agrawal (Geometrically)** - Mixed components support
  - Allows mixed components in MOTD parsing


