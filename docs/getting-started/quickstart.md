---
id: quickstart
sidebar_position: 1
---

# Quick Start

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

Bring up gateway and associated tools

```bash
docker-compose up -d
```

Verify that all the services are up and running

```bash
docker-compose ps
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

Navigate to `http://localhost:5601` to view the [OpenSearch](#) dashboard for visibility of 3rd party dependencies flowing through the gateway.

## Next Steps

The gateway is now running in your local environment. While you can test and verify its capability, additional information is required to deploy and operate the gateway in a production environment.

* [Learn about Concepts](/docs/category/concepts)
* [Setting up gateway authentication](#)
* [Deploying gateway to higher environments](#)
