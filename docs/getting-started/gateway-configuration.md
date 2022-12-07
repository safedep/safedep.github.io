---
sidebar_position: 3
id: gateway-configuration
---

# Gateway Configuration

The gateway configuration is maintained as a JSON document. This serves as the
source of truth for configuring any other component used by gateway such as Envoy proxy.
[Quickstart](quickstart) based setup will find the configuration files in
`config/local`.

:::info
Gateway has multiple components. Learn more about gateway in [gateway
concepts](/docs/concepts/gateway)
:::

## Configuration Spec

The configuration JSON conforms to the [configuration specification](https://github.com/safedep/gateway/blob/main/services/spec/proto/config.proto). This means, configuration can be generated and derived. For example, the configuration
for Envoy proxy is generated from `gateway.json`.

## Generating Configuration

The internal `confli` tool can be used to generate and validate configuration
files. To generate a new gateway configuration

```bash
docker run ghcr.io/safedep/gateway:latest \
    confli -command generate-sample
```

> When in doubt, always do `docker pull ghcr.io/safedep/gateway:latest`

## Validate Existing Configuration

To validate an existing configuration file

```bash
docker run -v `pwd`/config/local:/config \
    ghcr.io/safedep/gateway:latest \
    confli -command validate -file ./config/local/gateway.json
```

## Generating Envoy Proxy Configuration

To generate envoy proxy configuration from gateway configuration

```bash
docker run -v `pwd`/config/local:/config \
    ghcr.io/safedep/gateway:latest \
    confli -command generate-envoy -file ./config/local/gateway.json
```

> Envoy proxy configuration must be re-generated if there is a change in
> gateway upstreams

## Configuration Reload

The gateway services reload configuration if a change is detected in
`gateway.json` file. This can be confirmed through debug logs

```
gateway-pdp-1  | 2022-12-07T11:01:15.768Z	DEBUG	config/repository_file.go:99	Detected changes in configuration file	{"service": "pdp"}
gateway-pdp-1  | 2022-12-07T11:01:15.769Z	DEBUG	config/repository_file.go:105	Successfully reloaded gateway config	{"service": "pdp"}
```

