This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Setup

This project requires several environment variables to be set up. Create a `.env.local` file in the root directory and add the following variables:

### Google Analytics Setup

This project includes Google Analytics 4 (GA4) integration. To set it up:

1. Add your Google Analytics Measurement ID:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
2. Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID from Google Analytics

The analytics component will automatically load when the environment variable is set.

### Resend Email Setup

This project uses Resend for sending email notifications when users join the waitlist. To set it up:

1. Sign up for a Resend account at https://resend.com
2. Get your API key from the Resend dashboard
3. Add your Resend API key:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
4. Replace `your_resend_api_key_here` with your actual Resend API key

The email notifications will be sent to `hello@dataporto.com` whenever someone joins the waitlist.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
