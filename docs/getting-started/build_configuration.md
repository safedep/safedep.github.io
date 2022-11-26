---
sidebar_position: 5
id: build-configuration
---

# Build Configuration

## Pacman

`Pacman` is a cli tool for configuring package managers in the build
environment to use `Gateway` for fetching 3rd party dependencies instead of
directly from open source project repositories.

### Using Pacman

> The example below configures your local environment for `gradle` package manager to use the gateway as the central repository

Clone `pacman`, which is the *package manager* manager. Simply put, it configure supported package managers like `maven`, `gradle`, `pip` etc. to use the gateway as the repository instead of using public repositories directly.

```bash
git clone https://github.com/safedep/pacman.git
```

Configure `pacman`

```bash
cd pacman && ./pacman.sh configure
```

Enter values for local environment

```
Gateway URL: http://localhost:10000
Gateway Username: local-demo
Gateway Password: <anything>
```

Configure `gradle` to use the security gateway

```bash
./pacman.sh setup-gradle
```

> To clean up and remove any configuration installed by `pacman`, run `./pacman.sh clean` after completing the Quick Start


