"use client";
import {ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("hired")
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
          <Link href="/sign-up">
            <Button size="lg" className="h-12 px-8 text-lg font-medium">
              start for free <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          free forever, no costs
        </p>
        </div>
        </section>
        {/*hero images section*/}
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/*tabs*/}
              <div className="flex gap-2 justify-center mb-8">
                <button>Organize applications</button>
                <button>Get hired</button>
                <button>manage boards</button>
              </div>
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg">
                {activeTab === "organize" && (
                  <img
                    src="/hero-images/hero1.png"
                    alt="organize applications"
                    width={1200}
                    height={800}
                  />
                )}
                {activeTab === "hired" && (
                  <img
                    src="/hero-images/hero2.png"
                    alt="get hired"
                    width={1200}
                    height={800}
                  />
                )}
                {activeTab === "boards" && (
                  <img
                    src="/hero-images/hero3.png"
                    alt="manage boards" 
                    width={1200}
                    height={800}
                  />
                )}
              </div>
            </div>
            </div>
        </section>
         </main>
    </div>
  );
}
