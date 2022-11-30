---
sidebar_position: 4
---

# Gateway Authentication

The Gateway supports authenticating clients (package managers) using
a pluggable authentication model. This means, multiple authentication providers
will eventually be supported.

However, [HTTP Basic Authentication](#) is considered as the only supported
transport of credentials since most package managers support it. The Gateway
processes basic authentication credentials and authenticates the client using one of the
configured authentication providers.

## Basic Authentication Provider

The basic authentication provider uses a `htaccess` style password file. It
can be configured in `gateway.json` for example

```json
"authenticators": {
  "default-basic-auth": {
    "type": "Basic",
    "basic_auth": {
      "path": "/auth/basic-auth-credentials.txt"
    }
  }
},
```

* `default-basic-auth` is a name for the authentication provider
* `/auth/basic-auth-credentials.txt` is the data source file for credentials

New credentials can be created using the [htpasswd](https://httpd.apache.org/docs/2.4/programs/htpasswd.html) tool.

```bash
htpasswd -nbB <user> <password> >> ./config/gateway-auth-basic.txt
```

An username following the convention `<projectId>/<user>@<organization>` can be
used to add additoinal context identifiers in gateway generated events. This is
useful for traceability of artifacts to specific build projects.

## Protecting an Upstream Route

The `authenticator` can then be associated to upstreams to enable
authentication for specific routes (e.g. `/maven2`) in the gateway. Different
routes can be associated with different authentication providers. This allows
flexible access control for different use-cases.

```json
"upstreams": [
  {
    "type": "Maven",
    "management_type": "GatewayAdmin",
    "name": "maven-central",
    "authentication": {
      "type": "Basic",
      "provider": "default-basic-auth"
    },
    "route": {
      "path_prefix": "/maven2",
      "host_rewrite_value": "repo.maven.apache.org",
      "path_prefix_rewrite_value": "/maven2"
    },
    "repository": {
      "host": "repo.maven.apache.org",
      "port": "443",
      "tls": true,
      "sni": "repo.maven.apache.org",
    }
  },
]
```

:::info
To configure authentication for upstream repositories, look at [gateway
configuration](gateway-configuration)
:::
