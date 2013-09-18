Experimenting with enabling asyncblock support under TypeScript.

Current status:
- have to create override .d.ts file containing modified signatures for each function that sync() will be called on
- haven't figured out a graceful way to inject the sync() signatures for modules we define ourselves
