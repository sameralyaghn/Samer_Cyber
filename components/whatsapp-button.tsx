"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/963981731200?text=مرحبا، بدي تفاصيل عن خارطة طريق الأمن السيبراني"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 p-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl transition-all hover:scale-110 animate-pulse hover:animate-none"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
