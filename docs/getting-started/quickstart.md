---
id: quickstart
sidebar_position: 1
---

# Quick Start

## Setup Configuration

Create a directory for gateway configuration

```bash
mkdir -p gateway-setup/config && cd gateway-setup
```

Download sample configuration

```bash
curl -L -o config/gateway.json https://github.com/safedep/gateway/tree/main/sample/gateway.json
```

```bash
curl -L -o config/envoy.json https://github.com/safedep/gateway/tree/main/sample/envoy.json
```

## Setup Gateway

> At least 2GB of RAM and preferably 2 CPU cores must be available to Docker daemon for running containers

Download `docker-compose` for running gateway and associated tools

```bash
curl -L -o docker-compose.yml https://github.com/safedep/gateway/tree/main/sample/docker-compose-full-stack.yml
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

## Dashboard

Navigate to `http://localhost:5601` to view the [Kibana](#) dashboard for visibility of 3rd party dependencies flowing through the gateway.
