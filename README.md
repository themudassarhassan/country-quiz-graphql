This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## GraphQL API

This project uses [countries GraphQL API](https://countries.trevorblades.com) to fetch countries data either client side or on build time.

## Getting Started

First, run the development server:

```bash
yarn dev
```

To run the test cases:

```bash
yarn test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data fetching techniques

As Next.js supports 3 kinds of data fetching techniques, I have used two of those(client-side and static generation) to make the same quiz application `/client-side` path will fetch data on the client side using
Appolo GraphQL and home page is statically generated page which fetches data on the build time and passes data as props.




