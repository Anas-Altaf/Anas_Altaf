import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";

export const SliderImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div className="flex items-center flex-col justify-center p-10 rounded-full bg-neutral-800 dark:bg-neutral-900/80 border  dark:border-neutral-700 dark:text-white">
      <img src={src} alt={src + " logo"} className={`h-16 w-16 ${className}`} />
      {/* <h6 className="text-sm font-semibold">Logo</h6> */}
    </div>
  );
};
const logos = [
  // AI Ecosystem
  //   "https://img.icons8.com/fluency/96/github-copilot.png",
  "https://img.icons8.com/fluency/96/claude-ai.png",
  "https://img.icons8.com/fluency/96/chatgpt.png",
  //   "https://img.icons8.com/fluency/96/meta.png",
  //   "https://img.icons8.com/fluency/96/gemini-ai.png",

  // Cloud & DevOps
  //   "https://img.icons8.com/fluency/96/azure-1.png",
  "https://img.icons8.com/fluency/96/google-cloud.png",
  "https://img.icons8.com/color/96/firebase.png",
  "https://img.icons8.com/nolan/96/amazon-web-services.png",
  //   "https://img.icons8.com/fluency/96/docker.png",

  // Frontend & Design
  "https://img.icons8.com/color/96/react-native.png",
  //   "https://img.icons8.com/fluency/96/tailwind_css.png",
  "https://img.icons8.com/fluency/96/nextjs.png",
  "https://img.icons8.com/fluency/96/figma.png",
  //   "https://img.icons8.com/color/96/adobe-illustrator.png",

  // Backend
  //   "https://img.icons8.com/fluency/96/express-js.png",
  "https://img.icons8.com/color/96/nodejs.png",
  "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
  //   "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-shadow-tal-revivo.png",
  //   "https://img.icons8.com/color/96/my-sql.png",

  // Mobile & Web
  //   "https://img.icons8.com/color/96/react-native.png",
  "https://img.icons8.com/color/96/android-os.png",
  "https://img.icons8.com/color/96/flutter.png",
  "https://img.icons8.com/color/96/ios-logo.png",
  //   "https://img.icons8.com/color/96/swift.png",
];

const InfiniteSliderPreview = () => {
  return (
    <InfiniteSlider reverse>
      {logos.map((logo) => (
        <SliderImage src={logo} key={logo} />
      ))}
    </InfiniteSlider>
  );
};

export default InfiniteSliderPreview;
