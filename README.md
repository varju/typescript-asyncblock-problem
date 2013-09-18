Experimenting with enabling asyncblock support under TypeScript.

Current status:
- have to create override .d.ts file containing modified signatures for each function that sync() will be called on
- for methods in api I control, make callback an optional parameter and state that function will return an AsyncFunction
- currently there's no type safety here; it's possible the real callback and the AsyncFunction signatures will not match
