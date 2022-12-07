---
sidebar_position: 1
---

# Overview

SafeDep provides a set of open source software components for visibility and policy control of 3rd party software dependencies. At its core, a [Supply Chain Security Gateway](concepts/gateway.md) can be setup to monitor and control consumption of 3rd party dependencies during an application build.

## Showcase

[![asciicast](https://asciinema.org/a/fnAHzwrKr1rs80n3eTDgZ0BAu.svg)](https://asciinema.org/a/fnAHzwrKr1rs80n3eTDgZ0BAu)

## Example

> The example below is for Java application builds using `gradle` package manager

* Setup [gateway](https://github.com/safedep/gateway) by following [Quickstart](getting-started/quickstart.md)
* Clone [demo clients](https://github.com/safedep/demo-clients)

```bash
git clone https://github.com/safedep/demo-client-java
```

Run Java app build

```bash
cd demo-client-java && ./gradlew assemble --refresh-dependencies
```

Observe that the build failed with an error such as

```
> Could not resolve all files for configuration ':app:compileClasspath'.
> Could not resolve org.apache.logging.log4j:log4j:2.16.0.
  Required by:
      project :app
  > Could not resolve org.apache.logging.log4j:log4j:2.16.0.
      > Could not get resource 'http://localhost:10000/maven2/org/apache/logging/log4j/log4j/2.16.0/log4j-2.16.0.pom'.
        > Could not GET 'http://localhost:10000/maven2/org/apache/logging/log4j/log4j/2.16.0/log4j-2.16.0.pom'. Received status code 403 from server: Forbidden
```

### What happened?

Access to `org.apache.log4j:log4j:2.16.0` was blocked by a security policy written in [Rego language](https://www.openpolicyagent.org/docs/latest/policy-language/)

```rego
violations[{"message": msg, "code": code}] {
  input.target.artefact.group = "org.apache.logging.log4j"
  input.target.artefact.name = "log4j"
  semver.compare(input.target.artefact.version, "2.17.0") = -1

  msg := "Old and vulnerable version of log4j2 is not allowed"
  code := "old_and_vulnerable_software"
}
```

## Architecture

![](../static/img/supply-chain-gateway-hld.png)

