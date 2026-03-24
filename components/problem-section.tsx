import { AlertCircle, Compass, HelpCircle } from "lucide-react"

const problems = [
  {
    icon: AlertCircle,
    title: "التشتت بين الكورسات",
    description: "كورسات كثيرة ومصادر متضاربة تخليك ما تعرف من وين تبدأ"
  },
  {
    icon: Compass,
    title: "عدم وجود خطة واضحة",
    description: "تتنقل بين المواضيع بدون ترتيب منطقي وبدون هدف واضح"
  },
  {
    icon: HelpCircle,
    title: "الضياع في البداية",
    description: "تحس إنك تدور في حلقة مفرغة ومحد يوجهك صح"
  }
]

export function ProblemSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            هل تعاني من هذه المشاكل؟
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            أغلب المبتدئين يمرون بنفس التحديات
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <div className="p-3 rounded-lg bg-destructive/10 w-fit mb-3 sm:mb-4">
                <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-destructive-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
