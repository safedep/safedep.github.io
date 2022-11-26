---
sidebar_position: 2
id: policy-control-overview
---

# Policy Control

Most organizations have or will eventually have an OSS software usage policy.
The policy decides acceptable usageof OSS or other 3rd party software
components based on a variety of factors such as licensing, security
vulnerabilities, maintainability, support etc. Policy control in gateway allows
*codifying* organizational software supply chain policies.

## What is Policy as Code?

The idea of treating policy as code / config / rules that can be evaluated by
tools to make runtime decisions. Generally, policy as code approach reduces
*cost of compliance* by automating grunt work required to audit for policy
violations.

## Why use Policy as Code?

Manual verification and approval of new software components is, to put it
simply, tedious, contentious, error prone and incomplete. It is not possible
to manually analyse a 3rd party dependency and its [transitive
dependencies](#). We believe organizational software supply chain policies
should be codified so that tools can be build to automatically evaluate every
3rd party artifact for compliance against policies.

Examples of software supply chain policy may include:

* Dependencies must not have known critical vulnerabiliteis
* Dependencies must be maintained
* Dependencies must not be new / must have an extensive user base
* Publishers must follow security standards e.g. [SLSA](https://slsa.dev/)

These policies can be codified using a general purpose policy language such as,
in our case, [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/)
and evaluated at runtime by the [Gateway](docs/concepts/gateway)
