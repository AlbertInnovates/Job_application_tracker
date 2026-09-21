import {ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {}
        <section className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">

        <h1 className="text-black mb-6 text-6xl font-bold">
          Welcome to my Next.js App!
        </h1>
        <p className="text-gray-600 mb-10 text-xl">
          This is a simple Next.js application with a clean and modern design. You can customize it to fit your needs and start building your own web applications with ease.
        </p>
        <div>
          <Button size="lg" className="h-12 px-8 text-lg font-medium">
            start for free <ArrowRight className="ml-2" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          free forever, no costs
        </p>
        </div>
        </section>
      </main>
    </div>
  );
}
