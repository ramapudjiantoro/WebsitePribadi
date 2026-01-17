import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Swords, Cpu, TrendingUp, Target, Brain, 
  Flame, Shield, Zap, Award
} from "lucide-react";
import boxingImage from "@assets/generated_images/boxing_gym_training_image.png";
import techImage from "@assets/generated_images/tech_blockchain_ai_background.png";

const boxingLessons = [
  { 
    icon: Target, 
    title: "Fokus", 
    description: "Di ring, satu detik kehilangan fokus bisa berakibat fatal. Sama seperti dalam bisnis dan hidup." 
  },
  { 
    icon: Shield, 
    title: "Defense", 
    description: "Mengetahui kapan harus bertahan sama pentingnya dengan menyerang. Sabar adalah kekuatan." 
  },
  { 
    icon: Flame, 
    title: "Endurance", 
    description: "Stamina mental dan fisik dibangun melalui latihan yang konsisten setiap hari." 
  },
  { 
    icon: Zap, 
    title: "Explosiveness", 
    description: "Saat kesempatan datang, harus siap memberikan yang terbaik tanpa ragu." 
  },
];

const idols = [
  {
    name: "Dmitry Bivol",
    title: "WBA Light Heavyweight Champion",
    lesson: "Teknik yang sempurna, ketenangan di bawah tekanan, dan kerja keras yang tidak terlihat.",
  },
  {
    name: "Andrew Tate",
    title: "Kickboxing World Champion & Entrepreneur",
    lesson: "Mindset yang kuat, tidak takut kontroversial, dan membangun multiple streams of income.",
  },
];

const businessVentures = [
  {
    title: "AI Automation Services",
    description: "Mengembangkan dan mengintegrasikan solusi AI automation untuk berbagai bisnis. Fokus pada efisiensi operasional dan peningkatan produktivitas.",
    target: "Rp 1 Milyar",
    status: "Active",
    metrics: [
      { label: "Target Revenue", value: "Rp 1M" },
      { label: "Focus", value: "SME Market" },
      { label: "Tech Stack", value: "AI/ML" },
    ],
  },
  {
    title: "Crypto Portfolio",
    description: "Strategi DCA Bitcoin yang konsisten dengan Tangem Wallet. Membangun wealth jangka panjang melalui crypto assets.",
    target: "Long Term Hold",
    status: "Ongoing",
    metrics: [
      { label: "Strategy", value: "DCA" },
      { label: "Storage", value: "Tangem Wallet" },
      { label: "Duration", value: "6+ Months" },
    ],
  },
];

export default function BoxingBusiness() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Passion & Business
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-boxing-business-page-title">
              Boxing Membangun Karakter
            </h1>
            <p className="text-xl text-muted-foreground">
              Boxing bukan sekadar olahraga—ini adalah filosofi hidup yang mengajarkan 
              disiplin, fokus, dan ketahanan mental untuk menghadapi tantangan bisnis dan kehidupan.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={boxingImage}
                  alt="Boxing training"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-4">
                <Swords className="h-3 w-3 mr-1" />
                Boxing Philosophy
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pelajaran dari Ring</h2>
              <p className="text-muted-foreground mb-8">
                Setiap sesi latihan boxing mengajarkan nilai-nilai yang bisa diterapkan 
                di luar ring. Disiplin, fokus, dan kemampuan untuk bangkit setelah 
                jatuh adalah inti dari olahraga ini.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {boxingLessons.map((lesson, index) => (
                  <Card key={lesson.title} className="p-4 hover-elevate" data-testid={`card-lesson-${index}`}>
                    <lesson.icon className="h-5 w-5 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">{lesson.title}</h4>
                    <p className="text-xs text-muted-foreground">{lesson.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Idola & Inspirasi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dua sosok yang menginspirasi perjalanan boxing dan mindset bisnis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idols.map((idol, index) => (
              <motion.div
                key={idol.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-elevate" data-testid={`card-idol-${index}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{idol.name}</h3>
                      <p className="text-sm text-muted-foreground">{idol.title}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Pelajaran: </span>
                    {idol.lesson}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <Badge className="mb-4">
                <Cpu className="h-3 w-3 mr-1" />
                Business Ventures
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Dari Ring ke Bisnis</h2>
              <p className="text-muted-foreground mb-8">
                Mentalitas yang dibangun dari boxing diterapkan dalam membangun bisnis. 
                Fokus saat ini adalah AI Automation—mengintegrasikan kecerdasan buatan 
                ke berbagai bisnis untuk meningkatkan efisiensi.
              </p>

              <div className="space-y-4">
                {businessVentures.map((venture, index) => (
                  <Card key={venture.title} className="p-6 hover-elevate" data-testid={`card-venture-${index}`}>
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <h4 className="font-semibold text-lg">{venture.title}</h4>
                      <Badge variant={venture.status === "Active" ? "default" : "secondary"}>
                        {venture.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{venture.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {venture.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                          <p className="text-sm font-medium">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={techImage}
                  alt="Technology and AI"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
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
            <Card className="p-8 bg-primary/5 border-primary/20">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Target: Rp 1 Milyar</h3>
              <p className="text-muted-foreground">
                Target dari AI Automation dan digital assets. Dengan disiplin yang sama 
                seperti di ring, target ini akan dicapai step by step.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
