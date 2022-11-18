---
id: quickstart
sidebar_position: 1
---

# Quick Start

:::info
This approach for installation is suitable for a quick evaluation of security
gateway capability. For production deployment options, refer to
[installation](installation.md)
:::

## Prerequisite

* Docker and Docker Compose
* OpenSSL (for generating keys and certificate for mTLS)

## Setup Repository

Clone deployment repository

```bash
git clone https://github.com/safedep/gateway-deployment.git
```

## Setup Gateway

> At least 2GB of RAM and preferably 2 CPU cores must be available to Docker daemon for running containers

Switch to local setup configuration and scripts

```bash
cd gateway-deployment/local
```

Run bootstrap script to generate environment configuration and mTLS secrets

```bash
./bootstrap.sh
```

> **Note:** `bootstrap.sh` creates `.env` with auto-generated secrets and mTLS key, certs in `pki/`. It needs `openssl` to be installed.

Bring up gateway and associated tools

```bash
docker compose --profile dashboard up -d
```

> The `dashboard` profile activates OpenSearch and OpenSearch dashboard containers for visibility of Gateway events.

Verify that all the services are up and running

```bash
docker compose --profile dashboard ps
```

## Configure Build Environment

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

## Run a Build

> This example requires Java 11+ to be installed in your system.

Running a `gradle` build now will use the security gateway as the upstream repository instead of [maven central](https://repo.maven.apache.org/maven2/) and [gradle plugins](https://plugins.gradle.org/m2/) directly.

```bash
git clone https://github.com/safedep/demo-client-java
```

Build the app

```bash
cd demo-client-java && ./gradlew assemble --refresh-dependencies
```

## View Dashboard

:::caution
OpenSearch and OpenSearch Dashboard is used *without* security plugin as a stop gap solution for visibility of gateway events. This is not intended for production use and should be setup independently.
:::

Navigate to `http://localhost:5601` to view the [OpenSearch](#) dashboard for visibility of 3rd party dependencies flowing through the gateway.


## Tear Down

Stop all services

```bash
docker compose --profile dashboard down
```

## Next Steps

The gateway is now running in your local environment. While you can test and verify its capability, additional information is required to deploy and operate the gateway in a production environment.

* [Learn about Concepts](/docs/category/concepts)
* [Setting up gateway authentication](#)
* [Deploying gateway to higher environments](#)
