import Heading from "@/components/Heading";
import { MessageSquare } from "lucide-react";

export default function conversation() {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Let me fix your Queries"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      Hey Sushank Here
    </div>
  );
}
