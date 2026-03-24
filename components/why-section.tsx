import { Sparkles, FileText, Users } from "lucide-react"

const reasons = [
  {
    icon: Sparkles,
    title: "مبنية على تجربة حقيقية",
    description: "ليست مجرد نظريات، بل خطوات مجربة وناجحة"
  },
  {
    icon: FileText,
    title: "مختصرة بدون حشو",
    description: "معلومات مركزة توفر عليك الوقت والجهد"
  },
  {
    icon: Users,
    title: "مناسبة للمبتدئين 100%",
    description: "لا تحتاج أي خبرة سابقة للبدء"
  }
]

export function WhySection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            لماذا هذه الخارطة؟
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            ما يميز هذه الخارطة عن غيرها
          </p>
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-xl border border-primary/20 bg-primary/5 text-center"
            >
              <div className="p-3 sm:p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4 sm:mb-6">
                <reason.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
