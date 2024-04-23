# Hacks for Humanity website's frontend codebase

[hacksforhumanity.io](https://hacksforhumanity.io) is using [Next.js](https://nextjs.org/) as the project's frontend framework.

technologies used:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PNPM](https://pnpm.io/)
- [Shadcn/UI](https://ui.shadcn.com/)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PNPM](https://pnpm.io/)

## Getting Started

if you're new to the project, you can clone the project and install the dependencies:

```bash
git clone https://github.com/project-humanities/hacksforhumanity.io.git

cd hacksforhumanity.io

pnpm install
```

Then you can run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

If you need to learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Commit message convention

We're using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Linting

This project is setup to auto format and lint your code on save and before committing your changes. You can also run the following command to manually lint your code:

```bash
pnpm lint
```
