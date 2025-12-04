import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "react-bootstrap";

const Join = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Start Your Health Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust our platform for accurate, reliable
            health information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-medium text-lg px-8 h-14"
            >
              Get Started Free
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 h-14"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
