import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, Target, Users, Dumbbell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const values = [
  {
    icon: BookOpen,
    title: "Kejujuran",
    description: "Memegang teguh nilai kejujuran dalam setiap aspek kehidupan",
  },
  {
    icon: Users,
    title: "Loyal Brotherhood",
    description: "Persahabatan yang tulus dan setia dengan nilai-nilai yang selaras",
  },
  {
    icon: Target,
    title: "Kontinuitas",
    description: "Konsisten dalam perjalanan mencapai setiap tujuan hidup",
  },
  {
    icon: Dumbbell,
    title: "Pertumbuhan",
    description: "Selalu berusaha menjadi versi yang lebih baik setiap harinya",
  },
];

export function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about-preview" className="section-padding bg-card" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Tentang Saya
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-title">
            21 Tahun, Satu Tujuan: Menjadi Lebih Baik
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Seorang mahasiswa Telkom University yang passionate dalam pengembangan diri, 
            konsistensi, dan membangun masa depan melalui teknologi dan disiplin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover-elevate" data-testid={`card-value-${index}`}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
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
          <Link href="/about">
            <Button variant="outline" className="gap-2" data-testid="button-read-more-about">
              Baca Selengkapnya <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
