# Use Prisma Client Type If Possible

When creating DTO and entities, also use `implements` keyword with corresponding prisma client object.

```ts
export class FeedEntity implements Feed {
  // ...
}
```

# Partial / Pick Update From Create

```ts
```
