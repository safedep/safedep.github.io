---
sidebar_position: 3
id: raya-data-platform-overview
---

# Insights

:::info
The data platform API is currently in development and is available only for
internal developers and beta testers
:::

Supply chain security use-cases require metadata to be associated with OSS artefacts.
For example, during build time, a package manager such as `gradle` will resolve
and fetch all dependencies as described in the manifest `build.gradle` file.
However, very limited information is available during this phase of build.

It is not possible to answer any of these questions just by processing an
application's dependency manifest

1. Are there any dependencies with critical vulnerabilities?
2. Are all dependencies maintained?
3. Is there any malicious dependency?
4. Are all dependencies from trusted sources?
5. Is any of the dependency tampered since release by a trusted source?

We can *codify* these policies only when appropriate metadata is available to
make a decision. In SafeDep ecosystem, we plan to build tools that can analyse
OSS packages to extract these metadata for policy decision.


