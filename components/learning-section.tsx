import { Monitor, Network, Terminal, Code, ShieldCheck } from "lucide-react"

const topics = [
  {
    icon: Monitor,
    title: "أساسيات IT",
    description: "فهم أساسيات تقنية المعلومات والحاسب"
  },
  {
    icon: Network,
    title: "الشبكات",
    description: "تعلم كيف تعمل الشبكات وبروتوكولاتها"
  },
  {
    icon: Terminal,
    title: "لينكس",
    description: "إتقان سطر الأوامر ونظام لينكس"
  },
  {
    icon: Code,
    title: "بايثون",
    description: "البرمجة بلغة بايثون للأمن السيبراني"
  },
  {
    icon: ShieldCheck,
    title: "مدخل إلى الأمن السيبراني",
    description: "أساسيات ومفاهيم الأمن السيبراني"
  }
]

export function LearningSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            ماذا ستتعلم؟
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            المواضيع الأساسية التي تحتاجها للانطلاق في مجال السايبر
          </p>
        </div>

        {/* Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-xl border border-border bg-secondary/30 text-center"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-3 sm:mb-4">
                <topic.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-base sm:text-lg">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
