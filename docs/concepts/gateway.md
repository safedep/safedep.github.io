---
sidebar_position: 1
---

# Gateway

The supply chain security gateway, or simply a gateway, acts as the proxy
between package managers like `gradle`, `maven`, `npm`, `pip` etc. and the open
source package repositories. By default, it acts as an HTTP request pass-thru.

The gateway also implements a general purpose policy engine using which an
organization can *codify* their policies for acceptable use of 3rd party (OSS)
dependencies.

## Terminologies

| Term           | Description                                                |
|----------------|------------------------------------------------------------|
| Gateway        | HTTP request / response router                             |
| Route          | An URI path such as `/maven2/org/example/...`              |
| Repository     | An origin server that actually serves an artifact          |
| Upstream       | A logical construct that connects a route to a Repository  |
| Authentication | Verify identity of the requester                           |
| Policy Control | Ability to control artifact ingress through policy as code |


## How Gateway Works

* Accept HTTP request
* Authenticate request (if configured)
* Resolve request to a configured route based on URI path
* Resolve request to an artifact base on route's upstream repository configuration
* Apply policies on request, artifact context
* Allow or deny based on policy decision

## Why use a Gateway?

Conventional [Software Composition Analysis](#) tools extensively rely on
scanning package manifests such as `build.gradle`, `pom.xml`,
`requirements.txt` etc. While current generation tools are able to resolve
transitvie dependencies (most of the time), enforcement of controls are
primarily a CI/CD configuration.

Our opinion is modern day CI/CDs are bloated and ends up violating separation
of concern. Every team attempts to secure their fair share of CI/CD workflow to
tap into release gating capabilities. We expect significant progress in
software supply chain security maturity which would eventually need its own
security and quality controls.

Using a gateway approach for solving supply chain security allows us building
capabilities required by different teams at the gateway itself. While we do
expect the build environment to have additional configuration to enforce the
gateway, supply chain security can be managed as an independent concern outside
the CI/CD ecosystem using its own tooling.
