# Authority Continuity Primitive

Authority Continuity Primitive is governance infrastructure for evaluating whether execution authority remains legitimately continuous under evolving runtime conditions.

The project focuses on one operational question:

> Does the authority permitting execution still legitimately exist right now under current operational conditions?

---

## Core Principle

```text
Authority is not static.

Execution legitimacy depends on whether authority continuity survives under live operational conditions.
```

---

## Focus Areas

- Authority continuity validation
- Runtime legitimacy recomputation
- Delegation survivability
- Revocation propagation
- Scope validation
- Operational admissibility
- Cross-boundary authority integrity
- Continuity-preserving governance

---

## Repository Scope

This repository contains:
- public-facing architecture
- governance concepts
- sanitized examples
- integration references
- documentation
- demo evaluation flows

This repository intentionally excludes:
- private operational infrastructure
- authenticated execution pipelines
- customer provisioning systems
- billing infrastructure
- private telemetry
- secrets or production credentials

---

## Public Boundary

```text
Request → Authority continuity evaluation → allow / constrain / escalate / deny
```

---

## Development

```bash
npm install
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Deployment

Deploy as a standard serverless or Next.js application.

Compatible with:
- Vercel
- self-hosted Node.js infrastructure
- containerized environments

---

## Security

Please report vulnerabilities privately.

See `SECURITY.md`.

---

## Contributing

Public contributions are welcome for:
- documentation
- SDK examples
- governance research
- developer tooling
- integration references

See `CONTRIBUTING.md`.

---

## License

Licensed under the Apache License, Version 2.0.

See `LICENSE`.
