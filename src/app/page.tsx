import FeaturesSection from "@/components/pages/FeaturesSection";
import Herosection from "@/components/pages/Herosection";
import Image from "next/image";
import Link from "next/link";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kSnqYdpi0ai
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 ">
        <Herosection />
        <FeaturesSection />
      </main>
    </div>
  );
}
