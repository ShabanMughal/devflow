<div align="center">
  <img src="/public/images/logo-dark.svg" alt="DevFlow Logo" width="200"/>
  
  #
  
  A modern developer community platform built with Next.js 15, featuring questions, answers, and collaborative learning.
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 About

DevFlow is a community-driven platform where developers can ask questions, share knowledge, and collaborate. Built with the latest web technologies, it provides a seamless experience for learning and growing together.

---

## ✨ Features

- 🔐 **Authentication** - Secure user authentication with NextAuth.js
- 💬 **Q&A System** - Ask questions and provide answers
- 🏷️ **Tagging System** - Organize content with tags
- 👤 **User Profiles** - Personalized user profiles and avatars
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📝 **Rich Text Editor** - Markdown support for formatting content
- 🔍 **Search & Filters** - Find content quickly and efficiently
- ⭐ **Voting System** - Upvote/downvote questions and answers
- 📊 **Metrics & Analytics** - Track engagement and activity

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with Mongoose
- **Authentication:** [NextAuth.js v5](https://next-auth.js.org/)
- **Forms:** React Hook Form + Zod validation
- **Editor:** MDXEditor for rich text editing

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShabanMughal/devflow.git
   cd devflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory (or copy from `env.example`):
   ```env
   # GitHub OAuth
   AUTH_GITHUB_ID=your_github_oauth_client_id
   AUTH_GITHUB_SECRET=your_github_oauth_client_secret
   
   # Google OAuth
   AUTH_GOOGLE_ID=your_google_oauth_client_id
   AUTH_GOOGLE_SECRET=your_google_oauth_client_secret
   
   # NextAuth
   AUTH_SECRET=your_auth_secret
   
   # Database
   MONGOODB_URL=your_mongodb_connection_string
   
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps to contribute:

### Contribution Workflow

1. **Create an Issue**
   - Before starting work, create an issue describing the bug fix or feature
   - Wait for maintainers to review and approve the issue
   - This helps avoid duplicate work and ensures alignment with project goals

2. **Fork the Repository**
   - Click the "Fork" button at the top right of the repository page

3. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
   
   Use descriptive branch names:
   - `feature/` for new features
   - `fix/` for bug fixes
   - `docs/` for documentation updates
   - `refactor/` for code refactoring

4. **Make Your Changes**
   - Write clean, maintainable code
   - Follow the existing code style and conventions
   - Add comments where necessary
   - Test your changes thoroughly

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add your descriptive commit message"
   ```
   
   Follow conventional commit messages:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `test:` for adding tests
   - `chore:` for maintenance tasks

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template with:
     - Description of changes
     - Link to the related issue
     - Screenshots (if applicable)
     - Testing steps
   - Wait for review and address any feedback

### Code Guidelines

- Write TypeScript with proper type definitions
- Follow the existing project structure
- Use meaningful variable and function names
- Keep components small and focused
- Write reusable and modular code
- Ensure responsive design for all screen sizes

### Need Help?

If you have questions or need help, feel free to:
- Open an issue for discussion
- Reach out to maintainers
- Check existing issues and PRs for similar topics

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

<div align="center">
  Made with ❤️ by the DevFlow community
  
  ⭐ Star this repository if you find it helpful!
</div>
