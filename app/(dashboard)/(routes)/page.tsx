import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="container mx-auto">
      <UserButton></UserButton>
      <Button variant="outline">Button</Button>
    </div>
  );
}
