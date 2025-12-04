import { Building2, Heart, Home, Hospital } from "lucide-react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Hospital,
    title: "Hospitals",
    description: "Find hospitals and medical centers near you",
    path: "/hospitals",
    color: "bg-blue-50 dark:bg-blue-950/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Home,
    title: "Aged Care",
    description: "Explore aged care facilities and services",
    path: "/aged-care",
    color: "bg-green-50 dark:bg-green-950/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: Heart,
    title: "Disability Care",
    description: "Discover disability support services",
    path: "/disability-care",
    color: "bg-purple-50 dark:bg-purple-950/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Building2,
    title: "Care Housing",
    description: "Browse specialized care housing options",
    path: "/housing",
    color: "bg-orange-50 dark:bg-orange-950/30",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
];
const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border shadow-sm rounded-3xl cursor-pointer mb-4"
              style={{
                animationDelay: `${index * 0.1}s`,
                transition: "transform 0.3s",
              }}
              onClick={() => navigate(service.path)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Card.Body className="pt-3">
                <div
                  className={`d-flex align-items-center justify-content-center mb-3 rounded-3`}
                  style={{
                    width: "4rem",
                    height: "4rem",
                  }}
                >
                  <service.icon className={service.iconColor} size={32} />
                </div>
                <h5 className="fw-semibold mb-2">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
