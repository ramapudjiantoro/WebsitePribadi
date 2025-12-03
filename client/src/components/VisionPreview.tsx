import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Home, Car, Briefcase, Plane, Heart, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import dubaiImage from "@assets/generated_images/dubai_skyline_vision_image.png";

const goals = [
  { icon: Briefcase, title: "Finansial Stabil", description: "Bisnis yang menghasilkan income stabil" },
  { icon: Heart, title: "Pernikahan", description: "Menikah dengan kondisi siap lahir-batin" },
  { icon: Home, title: "Properti", description: "Rumah dan tanah sebagai fondasi" },
  { icon: Car, title: "Civic Type R", description: "Simbol kerja keras dan pencapaian" },
  { icon: Plane, title: "Liburan Rutin", description: "Setiap 6 bulan bersama keluarga" },
  { icon: Building2, title: "Dubai", description: "Tinggal di Dubai bersama keluarga" },
];

export function VisionPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5"
        style={{ backgroundImage: `url(${dubaiImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Visi Hidup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-vision-title">
            Blueprint 5 Tahun Ke Depan
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Sebuah peta perjalanan menuju kehidupan yang seimbang antara spiritual, 
            keluarga, pekerjaan, dan pengembangan diri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 hover-elevate" data-testid={`card-goal-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <goal.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{goal.title}</h3>
                    <p className="text-muted-foreground text-sm">{goal.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/vision">
            <Button variant="outline" className="gap-2" data-testid="button-full-vision">
              Lihat Blueprint Lengkap <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
