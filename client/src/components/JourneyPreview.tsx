import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sun, BookOpen, Dumbbell, Brain, Bitcoin, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import journalImage from "@assets/generated_images/journal_workspace_lifestyle_image.png";

const dailyRoutine = [
  { time: "04:00", icon: Sun, activity: "Sholat Subuh & Refleksi", description: "Memulai hari dengan ibadah dan ketenangan" },
  { time: "05:00", icon: BookOpen, activity: "Journaling", description: "Merapikan pikiran dan menyusun prioritas hari" },
  { time: "06:00", icon: Dumbbell, activity: "Gym & Boxing", description: "Melatih fisik dan mental di gym" },
  { time: "09:00", icon: Brain, activity: "Belajar AI & Blockchain", description: "Mengembangkan skill di bidang teknologi" },
  { time: "14:00", icon: Bitcoin, activity: "Manage Portfolio", description: "Review dan strategi crypto portfolio" },
  { time: "16:00", icon: Coffee, activity: "Networking", description: "Nongkrong dan percakapan mendalam dengan teman" },
];

export function JourneyPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Perjalanan Harian
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-journey-title">
              Konsistensi adalah Kunci
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Setiap hari adalah kesempatan untuk menjadi lebih baik. Rutinitas yang 
              terstruktur membantu membangun disiplin dan mencapai tujuan.
            </p>

            <div className="space-y-4 mb-8">
              {dailyRoutine.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                  data-testid={`routine-item-${index}`}
                >
                  <span className="text-sm font-mono text-muted-foreground w-12">{item.time}</span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{item.activity}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/journey">
              <Button variant="outline" className="gap-2" data-testid="button-full-journey">
                Lihat Rutinitas Lengkap <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={journalImage}
                alt="Daily routine workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg border">
              <p className="text-2xl font-bold text-primary">7</p>
              <p className="text-sm text-muted-foreground">Hari/Minggu</p>
              <p className="text-xs text-muted-foreground">di Gym</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
