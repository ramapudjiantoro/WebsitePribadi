import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-cta-title">
            Mari Terhubung
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Tertarik untuk berdiskusi tentang AI, blockchain, boxing, atau sekadar ngobrol 
            tentang pengembangan diri? Saya selalu terbuka untuk percakapan yang bermakna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2" data-testid="button-contact-cta">
                <Mail className="h-5 w-5" />
                Hubungi Saya
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2" data-testid="button-collaborate">
              Kolaborasi <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
