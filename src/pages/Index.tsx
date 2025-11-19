import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, ExternalLink } from "lucide-react";

// Import project images
import powerBiImage from "@/assets/power-bi-dashboard.png";
import pokeLahImage from "@/assets/poke-lah-website.png";
import pythonBmiImage from "@/assets/python-bmi-calculator.png";
import excelRevenueImage from "@/assets/excel-revenue-analysis.png";
import singaporeVisitorImage from "@/assets/singapore-visitor-analytics.png";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "HTML/CSS",
    "Excel Analytics",
    "Machine Learning",
  ];

  const projects = [
    {
      title: "Power BI Healthcare BMI & Demographics Dashboard",
      description:
        "Analysed healthcare data including BMI, Age, Race, and Waist Circumference. Cleaned and transformed datasets using Power Query, then built interactive visuals like Average BMI by Age and Patient Count by Race.",
      techUsed:
        "Data cleaning & ETL in Power Query · Data modelling · Dashboard design · Power BI visuals and filters",
      image: powerBiImage,
      alt: "Power BI healthcare BMI dashboard with demographics analysis",
    },
    {
      title: '"Poké Lah!" HTML/CSS E-Commerce Mock Website',
      description:
        "Built a multi-page mock e-commerce website using HTML and CSS. Designed navigation, hero banner, product tiers, and layout for a fun Pokémon card store concept.",
      techUsed:
        "HTML structure · CSS layout and styling · Basic UI/UX · Responsive web design concepts",
      image: pokeLahImage,
      alt: "Poké Lah e-commerce website with Pokémon theme",
    },
    {
      title: "Python BMI Calculator with Risk Analysis",
      description:
        "Created a Python BMI calculator that collects user input (name, age, height, weight), computes BMI with a function, classifies the BMI category, and evaluates heart disease risk based on BMI and age.",
      techUsed:
        "Python functions · Loops and lists · Conditional logic · User input handling",
      image: pythonBmiImage,
      alt: "Python BMI calculator showing code and console output",
    },
    {
      title: "Excel Net Revenue Analysis (2005–2011)",
      description:
        "Used Excel PivotTables to analyse net revenue between 2005 and 2011. Summarised revenue by year and product category and visualised trends using charts and labels.",
      techUsed:
        "PivotTables · Data summarisation · Chart creation · Excel analytics workflow",
      image: excelRevenueImage,
      alt: "Excel revenue analysis with PivotTable and bar chart",
    },
    {
      title: "Singapore Visitor Statistics – Python Data Analytics",
      description:
        "Analysed Singapore visitor arrival data using Python, Pandas, and NumPy. Implemented functions to find top visitor countries, generate summary statistics, and provide an interactive menu for custom queries.",
      techUsed:
        "Pandas data wrangling · Descriptive statistics · Interactive CLI tools · Working with real-world datasets",
      image: singaporeVisitorImage,
      alt: "Singapore visitor analytics Python project with data tables",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-foreground">
              Brendan Cheong
            </a>
            <div className="hidden md:flex gap-8">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4"
      >
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Hi, I'm <span className="text-primary">Brendan Cheong</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Aspiring Data Analyst
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I build data-driven insights with Python, SQL, Power BI, and clean
            visualisations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
            About Me
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an aspiring Data Analyst with a strong foundation in Python,
              SQL, Power BI, Excel analytics, and web technologies. I enjoy
              turning messy data into clear stories through dashboards,
              visualisations, and simple tools that people can actually use.
              With experience in IT support, teaching coding to kids, and
              leadership in National Service, I bring both technical skills and
              strong communication to every project.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <Card className="p-6 card-shadow hover:card-shadow-hover transition-shadow">
                <h3 className="font-semibold mb-2 text-foreground">
                  Data Analytics & Dashboarding
                </h3>
                <p className="text-sm text-muted-foreground">
                  Python, SQL, and Power BI expertise
                </p>
              </Card>
              <Card className="p-6 card-shadow hover:card-shadow-hover transition-shadow">
                <h3 className="font-semibold mb-2 text-foreground">
                  IT Support & Education
                </h3>
                <p className="text-sm text-muted-foreground">
                  Experience in IT support and coding education
                </p>
              </Card>
              <Card className="p-6 card-shadow hover:card-shadow-hover transition-shadow">
                <h3 className="font-semibold mb-2 text-foreground">
                  Leadership & Teamwork
                </h3>
                <p className="text-sm text-muted-foreground">
                  Strong collaboration from National Service
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-base px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            I'm comfortable moving from raw data to clean insights — from
            preprocessing and analysis all the way to dashboards and simple web
            apps.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      What I Learned / Tech:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.techUsed}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
            Contact
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in working together or learning more about my projects?
            Feel free to reach out.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <a
                href="mailto:brendan_cheong_wang_cheng1@connect.ite.edu.sg"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                brendan_cheong_wang_cheng1@connect.ite.edu.sg
              </a>
            </Card>

            <Card className="p-6 card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground">
                Toa Payoh Lorong 8 Blk 233 #11-252
                <br />
                Singapore 310233
              </p>
            </Card>
          </div>

          <Card className="p-8 card-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder="Your message..."
                  rows={6}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            © 2024 Brendan Cheong Wang Cheng. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
