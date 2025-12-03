import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// todo: remove mock functionality - replace with real journal entries from backend
const journalEntries = [
  {
    id: 1,
    title: "Refleksi: Mengapa Konsistensi Lebih Penting dari Motivasi",
    excerpt: "Setelah 30 hari journaling tanpa jeda, saya menyadari bahwa konsistensi adalah fondasi dari semua pencapaian besar. Motivasi datang dan pergi, tapi kebiasaan yang terbangun akan bertahan...",
    date: "28 Nov 2024",
    readTime: "5 min",
    category: "Refleksi",
  },
  {
    id: 2,
    title: "Pelajaran dari Ring: Boxing dan Mindset Entrepreneur",
    excerpt: "Di ring, tidak ada tempat untuk alasan. Sama seperti dalam bisnis, kamu harus siap menghadapi pukulan dan bangkit kembali. Dmitry Bivol mengajarkan bahwa kemenangan datang dari persiapan...",
    date: "22 Nov 2024",
    readTime: "7 min",
    category: "Boxing",
  },
  {
    id: 3,
    title: "Update Portofolio: DCA Bitcoin Bulan November",
    excerpt: "Bulan ini menandai 6 bulan konsisten DCA Bitcoin. Volatilitas tetap tinggi, tapi strategi jangka panjang tetap menjadi fokus. Berikut adalah pembelajaran dan insight dari perjalanan ini...",
    date: "15 Nov 2024",
    readTime: "4 min",
    category: "Crypto",
  },
];

export function JournalPreview() {
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
            Journal & Reflections
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-journal-title">
            Catatan Perjalanan
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Tempat berbagi insight, refleksi, dan perkembangan diri. Setiap tulisan adalah 
            dokumentasi perjalanan menuju versi yang lebih baik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {journalEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover-elevate cursor-pointer" data-testid={`card-journal-${entry.id}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {entry.category}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-3 line-clamp-2">{entry.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                  {entry.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {entry.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {entry.readTime}
                  </span>
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
          <Link href="/journal">
            <Button variant="outline" className="gap-2" data-testid="button-all-journal">
              Baca Semua Journal <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
