import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bitcoin, Cpu, Wallet, ExternalLink, Github, 
  TrendingUp, Shield, Zap, Database
} from "lucide-react";
import techImage from "@assets/generated_images/tech_blockchain_ai_background.png";

const projects = [
  {
    icon: Cpu,
    title: "AI Automation Services",
    description: "Mengembangkan dan mengintegrasikan solusi AI automation untuk berbagai bisnis. Fokus pada efisiensi operasional, customer service automation, dan proses bisnis yang dapat dioptimasi dengan AI.",
    longDescription: "Proyek ini bertujuan untuk membantu bisnis-bisnis di Indonesia mengadopsi teknologi AI dalam operasional mereka. Mulai dari chatbot, analisis data, hingga automasi proses repetitif.",
    tags: ["AI", "Automation", "Business", "Python", "APIs"],
    status: "Active",
    progress: 35,
    highlights: [
      "Chatbot automation untuk customer service",
      "Data analysis dan reporting automation",
      "Integrasi dengan existing business tools",
    ],
  },
  {
    icon: Bitcoin,
    title: "Bitcoin DCA Strategy",
    description: "Strategi konsisten Dollar Cost Averaging Bitcoin dengan disiplin tinggi. Membangun portofolio crypto jangka panjang dengan pendekatan yang terukur dan tidak emosional.",
    longDescription: "Menggunakan strategi DCA (Dollar Cost Averaging) untuk akumulasi Bitcoin secara konsisten. Fokus pada long-term holding tanpa terpengaruh volatilitas jangka pendek.",
    tags: ["Bitcoin", "Crypto", "Investment", "DCA", "Long Term"],
    status: "Ongoing",
    progress: 100,
    highlights: [
      "Weekly DCA execution",
      "Cold storage dengan Tangem Wallet",
      "Portfolio tracking dan analysis",
    ],
  },
  {
    icon: Wallet,
    title: "Personal Asset Management System",
    description: "Sistem manajemen aset pribadi menggunakan Tangem Wallet. Tracking portfolio, strategi alokasi, dan dokumentasi perjalanan finansial secara terstruktur.",
    longDescription: "Membangun sistem yang komprehensif untuk mengelola seluruh aset digital dan tradisional. Termasuk tracking, reporting, dan planning untuk masa depan.",
    tags: ["Tangem", "Portfolio", "Finance", "Security", "Planning"],
    status: "Active",
    progress: 60,
    highlights: [
      "Secure storage dengan hardware wallet",
      "Portfolio rebalancing strategy",
      "Tax documentation dan reporting",
    ],
  },
  {
    icon: Database,
    title: "Knowledge Base & Documentation",
    description: "Membangun sistem dokumentasi personal untuk menyimpan pembelajaran dari AI, blockchain, boxing, dan pengembangan diri. Second brain untuk growth.",
    longDescription: "Menggunakan metode Zettelkasten dan building a second brain untuk menyimpan dan menghubungkan pengetahuan dari berbagai sumber.",
    tags: ["Documentation", "Learning", "Productivity", "Notes"],
    status: "Ongoing",
    progress: 45,
    highlights: [
      "Structured note-taking system",
      "Cross-referencing ideas dan concepts",
      "Weekly review dan synthesis",
    ],
  },
];

const techStack = [
  { name: "Python", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "AI/ML APIs", category: "Technology" },
  { name: "Blockchain", category: "Technology" },
  { name: "Tangem Wallet", category: "Hardware" },
  { name: "Automation Tools", category: "Tools" },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5"
          style={{ backgroundImage: `url(${techImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Projects
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-projects-page-title">
              Proyek & Inisiatif
            </h1>
            <p className="text-xl text-muted-foreground">
              Berbagai proyek yang sedang dikerjakan untuk membangun masa depan yang lebih baik 
              melalui teknologi, investasi, dan pengembangan diri.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 lg:p-8 hover-elevate" data-testid={`card-project-detail-${index}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4 flex-wrap">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <project.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-xl">{project.title}</h3>
                            <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{project.longDescription}</p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-sm">Highlights:</h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Zap className="h-3 w-3 text-primary flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-muted-foreground">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <Card className="p-4 bg-muted/50">
                        <p className="text-sm text-muted-foreground text-center">
                          {project.progress === 100 
                            ? "Ongoing - konsisten berjalan" 
                            : `${100 - project.progress}% remaining`}
                        </p>
                      </Card>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Tech Stack & Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Teknologi dan tools yang digunakan dalam berbagai proyek.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech, index) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="text-base px-4 py-2"
                data-testid={`badge-tech-${index}`}
              >
                {tech.name}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Security First</h3>
              <p className="text-muted-foreground">
                Semua proyek yang berhubungan dengan aset digital mengutamakan keamanan. 
                Menggunakan hardware wallet (Tangem) dan best practices dalam pengelolaan 
                private keys dan sensitive data.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
