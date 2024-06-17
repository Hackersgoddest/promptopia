# Promptopia

> Discover & Share AI-Powered Prompts

## About
Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [Contributing](#Contributing)
- [Images](#images)


## Getting Started

1. 1. Make sure you have [NodeJS](https://nodejs.org/) and [MongoDB Atlas account](https://www.mongodb.com/atlas) installed.

2. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/Hackersgoddest/promptopia.git
   ```

3. Install your dependencies

    ```
    cd feathers-chat
    yarn
    ```

4. Configure the environment variables:

    - Create a `.env` file in the `root` directory and set your google, next and database connection details:
         ```sh
        GOOGLE_CLIENT_ID=google-client-id
        GOOGLE_CLIENT_SECRET=google-client-secret
        MONGODB_URI=mongodb-uri
        NEXTAUTH_URL=http://localhost:3000
        NEXTAUTH_URL_INTERNAL=http://localhost:3000
        NEXTAUTH_SECRET=next-secret

5. Start your app

    ```bash
    npm run dev

    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing
- Contributions to this project are welcome! If you have ideas for improvements or bug fixes, please submit an issue or a pull request.

## Images
![Sign In/Up Page](/public/assets//images/login.png)
![Google Account Page](/public/assets/images/google-accounts.png.png)
![Home Page](/public/assets/images/homepage.png)
![Profile Page](/public/assets/images/profile.png)
