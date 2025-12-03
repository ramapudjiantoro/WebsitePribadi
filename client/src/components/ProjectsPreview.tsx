import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Bitcoin, Cpu, Wallet, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const projects = [
  {
    icon: Cpu,
    title: "AI Automation Services",
    description: "Mengembangkan dan mengintegrasikan solusi AI automation untuk berbagai bisnis. Fokus pada efisiensi operasional dan peningkatan produktivitas.",
    tags: ["AI", "Automation", "Business"],
    status: "Active",
  },
  {
    icon: Bitcoin,
    title: "Bitcoin DCA Strategy",
    description: "Strategi konsisten Dollar Cost Averaging Bitcoin dengan disiplin tinggi. Membangun portofolio crypto jangka panjang dengan pendekatan yang terukur.",
    tags: ["Bitcoin", "Crypto", "Investment"],
    status: "Ongoing",
  },
  {
    icon: Wallet,
    title: "Personal Asset Management",
    description: "Sistem manajemen aset pribadi menggunakan Tangem Wallet. Tracking portfolio, strategi alokasi, dan dokumentasi perjalanan finansial.",
    tags: ["Tangem", "Portfolio", "Finance"],
    status: "Active",
  },
];

export function ProjectsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-projects-title">
            Proyek & Inisiatif Aktif
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Berbagai proyek yang sedang dikerjakan untuk membangun masa depan yang lebih baik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover-elevate" data-testid={`card-project-${index}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant={project.status === "Active" ? "default" : "secondary"} className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button variant="outline" className="gap-2" data-testid="button-all-projects">
              Lihat Semua Proyek <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
