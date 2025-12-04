import { Database, FileCheck, Search } from "lucide-react";
import React from "react";

const steps = [
  {
    icon: Search,
    title: "Enter Your Query",
    description: "Type your health question or symptom in plain language",
  },
  {
    icon: Database,
    title: "AI-Powered Search",
    description:
      "Our system searches through millions of verified medical sources",
  },
  {
    icon: FileCheck,
    title: "Get Reliable Answers",
    description:
      "Receive clear, evidence-based information with source citations",
  },
];
const Works = () => {
  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to get the health information you need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <step.icon className="text-primary-foreground" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-soft">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
