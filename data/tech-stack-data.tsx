"use client";
import Image from "next/image";
import React from "react";

export const techStackData = [
  {
    title: "AI Ecosystem",
    description:
      "Working with the latest AI models and platforms to build the future.",
    logos: [
      <img
        key="copilot"
        src="https://img.icons8.com/fluency/96/github-copilot.png"
        alt="Copilot Logo"
        className="h-6 w-6 dark:text-white"
      />,
      <img
        key="claude"
        src="https://img.icons8.com/fluency/96/claude-ai.png"
        alt="Claude Logo"
        className="h-6 w-6"
      />,

      <img
        key="openai"
        src="https://img.icons8.com/fluency/96/chatgpt.png"
        alt="ChatGPT Logo"
        className="h-8 w-8 dark:text-white"
      />,
      <img
        key="meta"
        src="https://img.icons8.com/fluency/96/meta.png"
        alt="Meta Logo"
        className="h-6 w-6"
      />,
      <img
        key="gemini"
        src="https://img.icons8.com/fluency/96/gemini-ai.png"
        alt="Gemini Logo"
        className="h-4 w-4"
      />,
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Utilizing cloud platforms and DevOps tools to build scalable and reliable applications.",
    logos: [
      // Azure
      <img
        key="azure"
        src="https://img.icons8.com/fluency/96/azure-1.png"
        alt="Azure Logo"
        className="h-4 w-4"
      />,
      // GCP
      <img
        key="gcp"
        src="https://img.icons8.com/fluency/96/google-cloud.png"
        alt="GCP Logo"
        className="h-6 w-6"
      />,
      // Firebase
      <img
        key="firebase"
        src="https://img.icons8.com/color/96/firebase.png"
        alt="Firebase Logo"
        className="h-10 w-10 dark:text-white"
      />,

      <img
        key="aws"
        src="https://img.icons8.com/nolan/96/amazon-web-services.png"
        alt="AWS Logo"
        className="h-6 w-6"
      />,
      <img
        key="docker"
        src="https://img.icons8.com/fluency/96/docker.png"
        alt="Docker Logo"
        className="h-4 w-4"
      />,
    ],
  },
  {
    title: "Frontend & Design",
    description:
      "Experienced in building user-friendly interfaces and designs.",
    logos: [
      <img
        key="react"
        src="https://img.icons8.com/color/96/react-native.png"
        alt="React Logo"
        className="h-4 w-4"
      />,

      <img
        key="tailwind"
        src="https://img.icons8.com/fluency/96/tailwind_css.png"
        alt="Tailwind Logo"
        className="h-6 w-6 "
      />,
      <img
        key="next"
        src="https://img.icons8.com/fluency/96/nextjs.png"
        alt="Next Logo"
        className="h-10 w-10 dark:text-white"
      />,
      <img
        key="figma"
        src="https://img.icons8.com/fluency/96/figma.png"
        alt="Figma Logo"
        className="h-6 w-6"
      />,
      <img
        key="adobe"
        src="https://img.icons8.com/color/96/adobe-illustrator.png"
        alt="Adobe Logo"
        className="h-4 w-4"
      />,
    ],
  },
  {
    title: "Backend",
    description: "Experienced in building scalable and secure backends.",
    logos: [
      <img
        key="express"
        src="https://img.icons8.com/fluency/96/express-js.png"
        alt="Express Logo"
        className="h-4 w-4 "
      />,
      <img
        key="node"
        src="https://img.icons8.com/color/96/nodejs.png"
        alt="Node Logo"
        className="h-8 w-8"
      />,
      <img
        key="mongodb"
        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
        alt="MongoDB Logo"
        className="h-8 w-8 dark:text-white"
      />,
      <img
        key="postgresql"
        src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-shadow-tal-revivo.png"
        alt="PostgreSQL Logo"
        className="h-6 w-6"
      />,
      <img
        key="mysql"
        src="https://img.icons8.com/color/96/my-sql.png"
        alt="MySQL Logo"
        className="h-4 w-4"
      />,
    ],
  },
  // App Development, Cross platform Flutter & React Native, Android, iOS
  {
    title: "Mobile & Web",
    description:
      "Experienced in building cross-platform applications. Mobile + Web.",
    logos: [
      <img
        key="reactnative"
        src="https://img.icons8.com/color/96/react-native.png"
        alt="React Native Logo"
        className="h-4 w-4 dark:text-white"
      />,
      <img
        key="android"
        src="https://img.icons8.com/color/96/android-os.png"
        alt="Android Logo"
        className="h-8 w-8 dark:text-white"
      />,
      <img
        key="flutter"
        src="https://img.icons8.com/color/96/flutter.png"
        alt="Flutter Logo"
        className="h-8 w-8 dark:text-white"
      />,
      <img
        key="ios"
        src="https://img.icons8.com/color/96/ios-logo.png"
        alt="iOS Logo"
        className="h-8 w-8"
      />,
      <img
        key="swift"
        src="https://img.icons8.com/color/96/swift.png"
        alt="Swift Logo"
        className="h-4 w-4"
      />,
    ],
  },
];
