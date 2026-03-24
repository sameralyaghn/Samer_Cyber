"use client"

import { Shield, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/963981731200?text=مرحبا، بدي تفاصيل عن خارطة طريق الأمن السيبراني"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="p-3 sm:p-4 rounded-2xl bg-primary/10 border border-primary/20">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight px-2">
          خارطة طريق الأمن السيبراني للمبتدئين
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-primary font-medium mb-3 sm:mb-4 px-2">
          ابدأ من الصفر، وتعلم الأساس الصحيح لدخول مجال السايبر
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
          خطة عملية خطوة بخطوة مبنية على تجربة حقيقية، بدون تضييع وقت بين مصادر عشوائية
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
