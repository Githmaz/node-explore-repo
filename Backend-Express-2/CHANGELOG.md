# Changelog 
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Source code bundling using [Parcel][parcel]
- Test script `test:ci` to be invoked in validation pipeline (Azure)
- GET /base-products
### Changed
- Renamed type `status` to `ChangeOrderStatus`
- Using Yarn package manager
### Fixed
- Resolved issue with importing of `AppInsights`
- Linting errors releated to Base Product

## [0.2.0][dev]: 2023-11-01
### Added
- Dev feature: Automatic server restart using `nodemon`
### Changed
- Improved route configurations and utilization of resources provided by the `Context` object
- Simplified model imports
- Improved server initialization
### Fixed
- Quality: Linting of all source files


[//]: <> (page refs)

[Unreleased]: https://volvocargroup.visualstudio.com/Vehicle%20Software%20and%20Installation/_git/product-number-translator/commits?itemVersion=GBdevelop

[dev]: https://volvocargroup.visualstudio.com/Vehicle%20Software%20and%20Installation/_git/product-number-translator/commits?itemVersion=GBdevelop

[main]: https://volvocargroup.visualstudio.com/Vehicle%20Software%20and%20Installation/_git/product-number-translator/commits?itemVersion=GBmain

[parcel]: https://parceljs.org/

[//]: <> (https://keepachangelog.com/en/1.0.0/)
[//]: <> (Added, Changed, Deprecated, Removed, Fixed, Security)

