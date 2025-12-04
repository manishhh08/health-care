import { BookOpen, CheckCircle, Clock, Shield } from "lucide-react";
import { Card } from "react-bootstrap";

const features = [
  {
    icon: Shield,
    title: "Verified Information",
    description:
      "All health information is sourced from peer-reviewed medical journals and certified healthcare professionals",
  },
  {
    icon: BookOpen,
    title: "Easy to Understand",
    description:
      "Complex medical information translated into clear, accessible language without losing accuracy",
  },
  {
    icon: Clock,
    title: "Instant Results",
    description:
      "Get comprehensive answers to your health questions in seconds, not hours of searching",
  },
  {
    icon: CheckCircle,
    title: "Always Updated",
    description:
      "Our database is continuously updated with the latest medical research and clinical guidelines",
  },
];
const Feature = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Trust Our Search Engine?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with medical expertise to deliver
            reliable health information
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-medium transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card.Body className="pt-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
