import heroImage from "../assets/bg-image.webp";
import SearchBar from "./SearchBar";
import Services from "./Services";
const IntroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="Healthcare professionals"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Your Trusted Health{" "}
            <span className="text-primary">Search Engine</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get accurate, evidence-based health information from verified
            medical sources in seconds
          </p>

          <SearchBar />

          <div
            className="flex flex-wrap gap-4 justify-center items-center text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Verified Sources</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Medical Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Latest Research</span>
            </div>
          </div>

          <Services />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
