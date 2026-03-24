import { Route, ListOrdered, BookOpen, Footprints } from "lucide-react"

const solutions = [
  {
    icon: Route,
    title: "مسار واضح",
    description: "خارطة طريق مرتبة توضح لك كل خطوة من البداية للنهاية"
  },
  {
    icon: ListOrdered,
    title: "ترتيب منطقي للتعلم",
    description: "تتعلم الأساسيات أولاً ثم تنتقل للمواضيع المتقدمة بالتدريج"
  },
  {
    icon: BookOpen,
    title: "مصادر مختارة",
    description: "أفضل المصادر المجانية والمدفوعة مرتبة ومصنفة لك"
  },
  {
    icon: Footprints,
    title: "خطوات عملية",
    description: "تطبيقات ومشاريع عملية تبنيها أثناء التعلم"
  }
]

export function SolutionSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            الحل في خارطة الطريق
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            كل شي تحتاجه عشان تبدأ صح
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-xl border border-border bg-card flex gap-3 sm:gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 h-fit shrink-0">
                <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
