"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/963981731200?text=مرحبا، بدي تفاصيل عن خارطة طريق الأمن السيبراني"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          جاهز تبدأ صح؟
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto px-2">
          راسلني الآن على واتساب واحصل على خارطة الطريق وابدأ رحلتك في الأمن السيبراني
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3 px-4">
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              تواصل عبر واتساب الآن
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">رد خلال 24 ساعة</p>
        </div>
      </div>
    </section>
  )
}
