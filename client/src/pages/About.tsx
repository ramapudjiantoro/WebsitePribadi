import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, Target, Users, Dumbbell, Heart, Brain, 
  GraduationCap, MapPin, Calendar, Lightbulb
} from "lucide-react";
import heroImage from "@assets/generated_images/boxing_silhouette_hero_image.png";

const values = [
  { icon: BookOpen, title: "Kejujuran", description: "Memegang teguh nilai kejujuran dalam setiap aspek kehidupan. Jujur kepada diri sendiri dan orang lain." },
  { icon: Users, title: "Loyal Brotherhood", description: "Persahabatan yang tulus dengan nilai-nilai yang selaras. Meski tidak sering bertemu, ikatan tetap kuat." },
  { icon: Target, title: "Kontinuitas", description: "Konsisten dalam setiap langkah menuju tujuan. Tidak ada jalan pintas untuk sukses sejati." },
  { icon: Dumbbell, title: "Pertumbuhan", description: "Selalu berusaha menjadi versi yang lebih baik setiap harinya melalui refleksi dan aksi." },
  { icon: Heart, title: "Tanggung Jawab", description: "Bertanggung jawab atas setiap keputusan dan dampaknya terhadap diri sendiri dan orang lain." },
  { icon: Brain, title: "Refleksi", description: "Meluangkan waktu untuk introspeksi dan evaluasi diri secara rutin." },
];

const interests = [
  "Pengembangan Diri",
  "Konsistensi",
  "Journaling",
  "Psikologi",
  "Self-Development",
  "Bitcoin",
  "Blockchain",
  "AI",
  "Boxing",
];

const timeline = [
  { year: "2003", event: "Lahir di Indonesia" },
  { year: "2021", event: "Memulai perjalanan di Telkom University" },
  { year: "2022", event: "Mulai tertarik dengan Bitcoin dan Blockchain" },
  { year: "2023", event: "Memulai journaling harian dan gym rutin" },
  { year: "2024", event: "Fokus pada AI Automation dan membangun bisnis" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5"
          style={{ backgroundImage: `url(${heroImage})` }}
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
              About Me
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2" data-testid="text-about-page-title">
              Rama Pudjiantoro
            </h1>
            <p className="text-sm font-light text-muted-foreground/50 mb-6 tracking-widest uppercase">
              Anugrah Putra Pertama Pudjiantoro
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              21 tahun, mahasiswa, dan seorang yang terus berjuang menjadi versi terbaik dari dirinya sendiri.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="gap-1">
                <GraduationCap className="h-3 w-3" />
                Telkom University
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <MapPin className="h-3 w-3" />
                Bandung, Indonesia
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Calendar className="h-3 w-3" />
                21 Tahun
              </Badge>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Cerita Saya</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nama saya Rama Pudjiantoro, seorang mahasiswa berusia 21 tahun yang sedang menempuh 
                pendidikan S1 di Telkom University, Bandung. Saya adalah seseorang yang sangat 
                passionate dengan pengembangan diri, konsistensi, dan membangun masa depan yang 
                lebih baik melalui teknologi dan disiplin.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Setiap pagi, saya bangun pukul 4 untuk sholat Subuh dan refleksi—meski kadang masih 
                bolong dan terus berusaha memperbaikinya. Journaling menjadi ritual wajib untuk 
                merapikan pikiran, dilanjutkan dengan fitness di gym setiap hari. Boxing bukan 
                hanya olahraga bagi saya, tapi juga filosofi hidup yang mengajarkan disiplin dan 
                ketahanan mental.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Saya tertarik dengan dunia blockchain dan AI dari level dasar hingga aplikasi nyata. 
                Konsisten menyimpan Bitcoin di Tangem Wallet sambil membangun sistem manajemen aset 
                pribadi. Saat ini, saya sedang menjalankan strategi AI Automation dengan target 
                menghasilkan 100 juta rupiah dari integrasi AI ke berbagai bisnis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Saya percaya bahwa kopi, nongkrong dengan teman, dan percakapan mendalam adalah 
                bahan bakar untuk jiwa. Meski lingkar pertemanan tidak luas, saya menjaga hubungan 
                dengan orang-orang yang memiliki nilai selaras—karena kualitas lebih penting dari 
                kuantitas.
              </p>
            </div>
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
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai yang Dipegang</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fondasi dari setiap keputusan dan tindakan dalam hidup saya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
            <h2 className="text-3xl font-bold mb-4">Minat & Passion</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hal-hal yang membuat saya bersemangat dan terus belajar setiap hari.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {interests.map((interest, index) => (
              <Badge
                key={interest}
                variant="outline"
                className="text-base px-4 py-2"
                data-testid={`badge-interest-${index}`}
              >
                {interest}
              </Badge>
            ))}
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Perjalanan Hidup</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestone-milestone penting dalam perjalanan menjadi siapa saya hari ini.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 w-3 h-3 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-sm font-mono text-primary">{item.year}</span>
                  <p className="text-foreground">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-medium italic mb-4">
              "Ingin menjadi versi dirinya yang lebih kuat, lebih matang, dan lebih bermanfaat."
            </blockquote>
            <p className="text-muted-foreground">
              — Misi hidup Rama Pudjiantoro
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
