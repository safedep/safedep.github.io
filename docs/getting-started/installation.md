---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Installation

The security gateway can be deployed using any container orchestrator. However,
for a production setup, following deployment configuration is recommended

1. Mininum 3 instances of each gateway microservice ideally spread across
   3 availability zone or equivalent
2. Loadbalancer with TLS termination (e.g. AWS ALB or Kubernetes Ingress)
3. OpenSearch cluster with optimum sharding configuration

## Hosting in AWS

:::info
This section of the document is work in progress
:::

## Hosting in Kubernetes

:::info
This section of the document is work in progress
:::
