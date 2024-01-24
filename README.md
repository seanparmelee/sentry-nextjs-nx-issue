# Reproduction for `Can't resolve '@sentry/utils'` when using Nx + NextJS (app router) + pnpm 

1. Run `pnpm install`
2. Run `nx build nextjs-app`

You should see
```
Failed to compile.

./app/api/hello/route.ts
Module not found: Can't resolve '@sentry/utils'
https://nextjs.org/docs/messages/module-not-found
./app/layout.tsx
Module not found: Can't resolve '@sentry/utils'
https://nextjs.org/docs/messages/module-not-found
./app/page.tsx
Module not found: Can't resolve '@sentry/utils'
https://nextjs.org/docs/messages/module-not-found
> Build failed because of webpack errors
```