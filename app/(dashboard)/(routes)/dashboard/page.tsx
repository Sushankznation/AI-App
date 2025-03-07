"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music2Icon,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    color: "text-orange-300",
    bgColor: "bg-orange-300/10",
    href: "/video-generator",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-violet-pink-700/10",
    href: "/image-generator",
  },
  {
    label: "Music",
    icon: Music2Icon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Code Generator",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-500/10",
    href: "/code-generator",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          {" "}
          Explore the power of Gyani Baba
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशलाकया। चक्षुरुन्मीलितं येन तस्मै
          श्रीगुरवे नमः॥
        </p>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
