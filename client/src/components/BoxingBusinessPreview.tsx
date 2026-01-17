import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Swords, Cpu, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import boxingImage from "@assets/generated_images/boxing_gym_training_image.png";
import techImage from "@assets/generated_images/tech_blockchain_ai_background.png";

export function BoxingBusinessPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Passion & Business
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-boxing-business-title">
            Boxing Membangun Karakter, Bisnis Membangun Masa Depan
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden h-full hover-elevate" data-testid="card-boxing">
              <div className="aspect-video relative">
                <img
                  src={boxingImage}
                  alt="Boxing training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2">Boxing</Badge>
                  <h3 className="text-xl font-bold text-white">Disiplin dari Ring</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Swords className="h-5 w-5 text-primary" />
                  <span className="font-medium">Passion Boxing</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Boxing mengajarkan disiplin, fokus, dan ketahanan mental. Terinspirasi 
                  oleh Dmitry Bivol dan Andrew Tate - mereka membuktikan bahwa kerja keras 
                  dan mindset yang kuat adalah kunci kesuksesan.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Dmitry Bivol</Badge>
                  <Badge variant="secondary">Andrew Tate</Badge>
                  <Badge variant="secondary">Mental Strength</Badge>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="overflow-hidden h-full hover-elevate" data-testid="card-business">
              <div className="aspect-video relative">
                <img
                  src={techImage}
                  alt="AI and Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2">AI Automation</Badge>
                  <h3 className="text-xl font-bold text-white">Bisnis Masa Depan</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="h-5 w-5 text-primary" />
                  <span className="font-medium">AI Automation Business</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Menjalankan strategi AI Automation untuk mengintegrasikan solusi AI ke 
                  bisnis-bisnis. Target: menghasilkan 1 milyar rupiah dari proyek-proyek 
                  AI automation dan digital assets.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Target: Rp 1M</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/boxing-business">
            <Button variant="outline" className="gap-2" data-testid="button-boxing-business">
              Explore Boxing & Business <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
