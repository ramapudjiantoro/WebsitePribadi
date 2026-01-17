import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sun, BookOpen, Dumbbell, Brain, Bitcoin, Coffee, 
  Moon, Utensils, Code, Users, Heart
} from "lucide-react";
import journalImage from "@assets/generated_images/journal_workspace_lifestyle_image.png";

const dailyRoutine = [
  { 
    time: "04:00", 
    icon: Sun, 
    activity: "Sholat Subuh & Refleksi", 
    description: "Memulai hari dengan ibadah dan ketenangan. Waktu untuk introspeksi dan bersyukur.",
    category: "Spiritual"
  },
  { 
    time: "05:00", 
    icon: BookOpen, 
    activity: "Journaling", 
    description: "Menulis pikiran, menyusun prioritas hari, dan merefleksikan kemarin.",
    category: "Pengembangan Diri"
  },
  { 
    time: "06:00", 
    icon: Dumbbell, 
    activity: "Gym & Boxing", 
    description: "Latihan fisik untuk membangun kekuatan dan disiplin mental. 7 hari seminggu.",
    category: "Kesehatan"
  },
  { 
    time: "08:00", 
    icon: Utensils, 
    activity: "Sarapan", 
    description: "Mengisi energi dengan nutrisi yang tepat untuk aktivitas seharian.",
    category: "Kesehatan"
  },
  { 
    time: "09:00", 
    icon: Brain, 
    activity: "Belajar AI & Blockchain", 
    description: "Deep work mempelajari teknologi dari dasar hingga aplikasi nyata.",
    category: "Skill Building"
  },
  { 
    time: "12:00", 
    icon: Heart, 
    activity: "Sholat Dzuhur", 
    description: "Istirahat sejenak dari aktivitas untuk beribadah.",
    category: "Spiritual"
  },
  { 
    time: "13:00", 
    icon: Code, 
    activity: "Project Work", 
    description: "Mengerjakan proyek AI Automation dan inisiatif bisnis lainnya.",
    category: "Pekerjaan"
  },
  { 
    time: "15:00", 
    icon: Heart, 
    activity: "Sholat Ashar", 
    description: "Menunaikan kewajiban ibadah di sore hari sebelum melanjutkan aktivitas.",
    category: "Spiritual"
  },
  { 
    time: "15:30", 
    icon: Bitcoin, 
    activity: "Manage Portfolio", 
    description: "Review crypto portfolio, DCA Bitcoin, dan strategi investasi.",
    category: "Finansial"
  },
  { 
    time: "16:30", 
    icon: Coffee, 
    activity: "Networking & Kopi", 
    description: "Nongkrong dengan teman, percakapan mendalam tentang hidup dan bisnis.",
    category: "Sosial"
  },
  { 
    time: "18:00", 
    icon: Heart, 
    activity: "Sholat Maghrib", 
    description: "Ibadah saat matahari terbenam, waktu tenang di penghujung hari.",
    category: "Spiritual"
  },
  { 
    time: "19:00", 
    icon: Heart, 
    activity: "Sholat Isya", 
    description: "Ibadah penutup hari sebelum melanjutkan ke waktu berkualitas.",
    category: "Spiritual"
  },
  { 
    time: "19:30", 
    icon: Users, 
    activity: "Quality Time", 
    description: "Waktu untuk keluarga dan orang-orang terdekat.",
    category: "Keluarga"
  },
  { 
    time: "21:00", 
    icon: BookOpen, 
    activity: "Membaca & Belajar", 
    description: "Membaca buku psikologi, self-development, atau dokumentasi teknis.",
    category: "Pengembangan Diri"
  },
  { 
    time: "22:00", 
    icon: Moon, 
    activity: "Refleksi Malam & Tidur", 
    description: "Review hari ini, gratitude, dan persiapan untuk hari esok.",
    category: "Spiritual"
  },
];

const habits = [
  { habit: "Gym", frequency: "7x/minggu", streak: "Konsisten" },
  { habit: "Journaling", frequency: "Setiap pagi", streak: "30+ hari" },
  { habit: "DCA Bitcoin", frequency: "Mingguan", streak: "6+ bulan" },
  { habit: "Membaca", frequency: "Harian", streak: "Ongoing" },
  { habit: "Sholat 5 Waktu", frequency: "Harian", streak: "Terus dijaga" },
];

const categoryColors: Record<string, string> = {
  "Spiritual": "bg-purple-500/10 text-purple-500",
  "Pengembangan Diri": "bg-blue-500/10 text-blue-500",
  "Kesehatan": "bg-green-500/10 text-green-500",
  "Skill Building": "bg-orange-500/10 text-orange-500",
  "Pekerjaan": "bg-primary/10 text-primary",
  "Finansial": "bg-yellow-500/10 text-yellow-500",
  "Sosial": "bg-pink-500/10 text-pink-500",
  "Keluarga": "bg-red-500/10 text-red-500",
};

export default function Journey() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10"
          style={{ backgroundImage: `url(${journalImage})` }}
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
              Daily Journey
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-journey-page-title">
              Konsistensi adalah Kunci
            </h1>
            <p className="text-xl text-muted-foreground">
              Setiap hari adalah kesempatan untuk menjadi lebih baik. Rutinitas yang terstruktur 
              membangun fondasi untuk mencapai tujuan besar.
            </p>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Rutinitas Harian</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jadwal yang terstruktur untuk memaksimalkan produktivitas dan keseimbangan hidup.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:hidden" />
            
            {dailyRoutine.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`routine-${index}`}
              >
                {/* Time Indicator */}
                <div className="flex md:contents">
                  <div className={`hidden md:flex flex-1 justify-end px-8 ${index % 2 === 0 ? "" : "order-last justify-start"}`}>
                    <div className="bg-primary/10 text-primary font-mono font-bold px-3 py-1 rounded-full text-sm">
                      {item.time}
                    </div>
                  </div>
                  
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  
                  <div className="flex-1 md:px-8 w-full pl-16 md:pl-0">
                    <Card className="p-5 hover-elevate w-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <h3 className="font-bold text-lg">{item.activity}</h3>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${categoryColors[item.category] || ""}`}
                            >
                              {item.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          <div className="md:hidden mt-2 inline-block bg-primary/10 text-primary font-mono font-bold px-2 py-0.5 rounded text-xs">
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Habit Tracker</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kebiasaan-kebiasaan yang sedang dibangun dan dijaga konsistensinya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {habits.map((item, index) => (
              <motion.div
                key={item.habit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover-elevate" data-testid={`habit-${index}`}>
                  <h3 className="font-semibold text-lg mb-2">{item.habit}</h3>
                  <p className="text-primary font-medium mb-1">{item.frequency}</p>
                  <Badge variant="secondary" className="text-xs">{item.streak}</Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 text-center">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Catatan Jujur</h3>
              <p className="text-muted-foreground mb-4">
                Bangun pukul 4 pagi untuk sholat masih kadang bolong—tapi terus berusaha memperbaiki. 
                Proses tidak selalu mulus, tapi yang penting adalah konsistensi untuk terus mencoba 
                menjadi lebih baik setiap hari.
              </p>
              <Badge variant="outline">Work in Progress</Badge>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
