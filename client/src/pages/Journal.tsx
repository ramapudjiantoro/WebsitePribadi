import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

// todo: remove mock functionality - replace with real journal entries from backend
const journalEntries = [
  {
    id: 1,
    title: "Refleksi: Mengapa Konsistensi Lebih Penting dari Motivasi",
    excerpt: "Setelah 30 hari journaling tanpa jeda, saya menyadari bahwa konsistensi adalah fondasi dari semua pencapaian besar. Motivasi datang dan pergi, tapi kebiasaan yang terbangun akan bertahan selamanya. Ini adalah pelajaran yang mengubah cara saya memandang proses menuju tujuan.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "28 Nov 2024",
    readTime: "5 min",
    category: "Refleksi",
    featured: true,
  },
  {
    id: 2,
    title: "Pelajaran dari Ring: Boxing dan Mindset Entrepreneur",
    excerpt: "Di ring, tidak ada tempat untuk alasan. Sama seperti dalam bisnis, kamu harus siap menghadapi pukulan dan bangkit kembali. Dmitry Bivol mengajarkan bahwa kemenangan datang dari persiapan yang tidak terlihat.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "22 Nov 2024",
    readTime: "7 min",
    category: "Boxing",
    featured: false,
  },
  {
    id: 3,
    title: "Update Portofolio: DCA Bitcoin Bulan November",
    excerpt: "Bulan ini menandai 6 bulan konsisten DCA Bitcoin. Volatilitas tetap tinggi, tapi strategi jangka panjang tetap menjadi fokus. Berikut adalah pembelajaran dan insight dari perjalanan ini.",
    content: "Lorem ipsum dolor sit amet...",
    date: "15 Nov 2024",
    readTime: "4 min",
    category: "Crypto",
    featured: false,
  },
  {
    id: 4,
    title: "Bagaimana AI Automation Mengubah Cara Saya Bekerja",
    excerpt: "Dalam 3 bulan terakhir, saya bereksperimen dengan berbagai tools AI untuk meningkatkan produktivitas. Hasilnya? Beberapa workflow yang dulu memakan waktu berjam-jam sekarang bisa selesai dalam hitungan menit.",
    content: "Lorem ipsum dolor sit amet...",
    date: "10 Nov 2024",
    readTime: "6 min",
    category: "AI",
    featured: false,
  },
  {
    id: 5,
    title: "Journaling Pagi: Ritual yang Mengubah Hidup",
    excerpt: "Sudah 2 bulan menjalankan ritual journaling setiap pagi. Dampaknya terhadap clarity pikiran dan produktivitas sangat signifikan. Ini adalah breakdown dari sistem yang saya gunakan.",
    content: "Lorem ipsum dolor sit amet...",
    date: "5 Nov 2024",
    readTime: "5 min",
    category: "Pengembangan Diri",
    featured: false,
  },
  {
    id: 6,
    title: "Mengapa Saya Memilih Tangem Wallet untuk Bitcoin",
    excerpt: "Setelah riset panjang tentang berbagai cold wallet, pilihan jatuh pada Tangem. Ini adalah review lengkap dan alasan di balik keputusan tersebut.",
    content: "Lorem ipsum dolor sit amet...",
    date: "1 Nov 2024",
    readTime: "8 min",
    category: "Crypto",
    featured: false,
  },
];

const categories = ["Semua", "Refleksi", "Boxing", "Crypto", "AI", "Pengembangan Diri"];

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEntry, setSelectedEntry] = useState<typeof journalEntries[0] | null>(null);

  const filteredEntries = journalEntries.filter((entry) => {
    const matchesCategory = selectedCategory === "Semua" || entry.category === selectedCategory;
    const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEntry = journalEntries.find(e => e.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Journal & Reflections
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-journal-page-title">
              Catatan Perjalanan
            </h1>
            <p className="text-xl text-muted-foreground">
              Tempat berbagi insight, refleksi, dan dokumentasi perjalanan menuju 
              versi yang lebih baik.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-journal"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {featuredEntry && selectedCategory === "Semua" && !searchQuery && (
        <section className="pb-12">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card 
                className="p-8 bg-primary/5 border-primary/20 hover-elevate cursor-pointer"
                onClick={() => setSelectedEntry(featuredEntry)}
                data-testid="card-featured-journal"
              >
                <Badge className="mb-4">Featured</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{featuredEntry.title}</h2>
                <p className="text-muted-foreground text-lg mb-6">{featuredEntry.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredEntry.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredEntry.readTime}
                  </span>
                  <Badge variant="secondary">
                    <Tag className="h-3 w-3 mr-1" />
                    {featuredEntry.category}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      <section className="section-padding pt-0">
        <div className="container-wide">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada artikel yang ditemukan.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEntries
                .filter(e => !e.featured || selectedCategory !== "Semua" || searchQuery)
                .map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card 
                    className="p-6 h-full flex flex-col hover-elevate cursor-pointer"
                    onClick={() => setSelectedEntry(entry)}
                    data-testid={`card-journal-${entry.id}`}
                  >
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
          )}
        </div>
      </section>

      {selectedEntry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedEntry(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-card border rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">
                <Tag className="h-3 w-3 mr-1" />
                {selectedEntry.category}
              </Badge>
              <span className="text-sm text-muted-foreground">{selectedEntry.date}</span>
              <span className="text-sm text-muted-foreground">{selectedEntry.readTime} read</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{selectedEntry.title}</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">{selectedEntry.excerpt}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Artikel lengkap sedang dalam pengembangan. Stay tuned untuk konten lebih dalam 
                tentang topik ini.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t">
              <Button variant="outline" onClick={() => setSelectedEntry(null)}>
                Tutup
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
