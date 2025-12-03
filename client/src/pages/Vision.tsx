import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Home, Car, Briefcase, Plane, Heart, Building2, 
  Target, CheckCircle2, Circle, Clock
} from "lucide-react";
import dubaiImage from "@assets/generated_images/dubai_skyline_vision_image.png";

const fiveYearGoals = [
  { 
    icon: Briefcase, 
    title: "Finansial Stabil", 
    description: "Bisnis yang jalan dan menghasilkan pendapatan stabil. Mental yang kokoh untuk menghadapi tantangan.",
    progress: 25,
    status: "in-progress"
  },
  { 
    icon: Heart, 
    title: "Pernikahan", 
    description: "Menikah dengan kondisi siap lahir-batin dan finansial. Fondasi keluarga yang kuat.",
    progress: 15,
    status: "planned"
  },
  { 
    icon: Home, 
    title: "Rumah & Tanah", 
    description: "Memiliki properti sebagai fondasi untuk masa depan keluarga.",
    progress: 10,
    status: "planned"
  },
  { 
    icon: Car, 
    title: "Civic Turbo Hatchback Type R", 
    description: "Simbol kerja keras dan pencapaian. Reward untuk diri sendiri.",
    progress: 5,
    status: "planned"
  },
  { 
    icon: Plane, 
    title: "Liburan Rutin", 
    description: "Liburan setiap 6 bulan bersama keluarga. Work-life balance yang sehat.",
    progress: 20,
    status: "in-progress"
  },
];

const longTermGoals = [
  {
    icon: Building2,
    title: "Tinggal di Dubai",
    description: "Impian jangka panjang untuk tinggal di Dubai bersama istri dan anak-anak di masa depan.",
  },
  {
    icon: Target,
    title: "Menjadi Lebih Kuat",
    description: "Menjadi versi diri yang lebih kuat, lebih matang, dan lebih bermanfaat bagi orang lain.",
  },
  {
    icon: CheckCircle2,
    title: "Membuktikan Diri",
    description: "Membuktikan diri kepada keluarga, teman, rival, dan juga kepada diri sendiri.",
  },
];

const lifeBalance = [
  { area: "Spiritual (Ibadah)", percentage: 25 },
  { area: "Keluarga", percentage: 25 },
  { area: "Pekerjaan/Bisnis", percentage: 25 },
  { area: "Pengembangan Diri", percentage: 25 },
];

export default function Vision() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dubaiImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="container-wide relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Life Vision
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-vision-page-title">
              Blueprint Menuju Masa Depan
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Peta perjalanan menuju kehidupan yang seimbang, bermakna, dan penuh pencapaian.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">5 Year Plan</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Target 5 Tahun Ke Depan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Langkah-langkah konkret menuju kehidupan yang diimpikan.
            </p>
          </motion.div>

          <div className="space-y-6">
            {fiveYearGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover-elevate" data-testid={`card-5year-${index}`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <goal.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{goal.title}</h3>
                          <Badge 
                            variant={goal.status === "in-progress" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {goal.status === "in-progress" ? (
                              <><Clock className="h-3 w-3 mr-1" /> In Progress</>
                            ) : (
                              <><Circle className="h-3 w-3 mr-1" /> Planned</>
                            )}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{goal.description}</p>
                      </div>
                    </div>
                    <div className="w-full md:w-48">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
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
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Long Term Vision</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tujuan Jangka Panjang</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Impian besar yang menjadi bintang penunjuk arah dalam setiap langkah.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {longTermGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full text-center hover-elevate" data-testid={`card-longterm-${index}`}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <goal.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{goal.title}</h3>
                  <p className="text-muted-foreground">{goal.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Life Balance</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Keseimbangan Hidup</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empat pilar kehidupan yang harus dijaga keseimbangannya.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {lifeBalance.map((item, index) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center" data-testid={`card-balance-${index}`}>
                  <div className="text-4xl font-bold text-primary mb-2">{item.percentage}%</div>
                  <p className="text-sm text-muted-foreground">{item.area}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Card className="p-8 bg-primary/5 border-primary/20">
              <p className="text-lg italic text-muted-foreground">
                "Hidup yang seimbang antara spiritual (ibadah), keluarga, pekerjaan, dan 
                pengembangan diri adalah kunci kebahagiaan sejati."
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
