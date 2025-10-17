import { ScrollAnimation } from "@/components/scroll-animation"
import { CTAButton } from "@/components/cta-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Услуги - Иван Швейкин",
  description: "Комплексная трансформация компании. Наставничество и внедрение организационных изменений.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Комплексная трансформация компании</h1>
            <p className="text-xl text-muted-foreground">
              Охватывает все процессы, всех сотрудников, все правила и регламенты
            </p>
          </div>
        </ScrollAnimation>

        {/* Goals Section */}
        <ScrollAnimation>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-serif text-3xl">Цели трансформации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">Выведение компании на новый уровень эффективности</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  Достижение увеличения оборота компании +250% от существующих показателей за 3 ближайших года (1 год -
                  +30%, 2 год - +110%, 3 год +110%)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">Превращение компании в компанию-мечту для сотрудников</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">Достижение позиции регионального лидера в отрасли</p>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Diagnosis Section */}
        <ScrollAnimation>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-serif text-3xl">Диагностика</CardTitle>
              <CardDescription className="text-base">
                Любые формы сотрудничества предваряет процесс диагностики
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Диагностика – исследование текущего состояния организации, путем глубинных интервью сотрудников и
                руководства, исследование текущих финансовых и производственных показателей и отчетности, исследование
                комплекса внутренних регламентов и правил трудового распорядка.
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Результат диагностики:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Отчет о текущем состоянии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>План проекта трансформации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Перечень технологий для внедрения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Бюджет по внедрению</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Календарный план внедрения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Анализ ресурсов</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Methods Section */}
        <ScrollAnimation>
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Способы внедрения</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollAnimation>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">1. Наставничество</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Стороны (Эксперт и руководство компании) утверждают план проекта трансформации.</p>
                <p>
                  <strong>Роль эксперта:</strong> Курирует исполнение плана проекта, оказывает всю необходимую
                  методологическую, консультативную и техническую поддержку плану проекта.
                </p>
                <p>
                  <strong>Роль руководства:</strong> Занимается реализацией проекта.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    Подходит, когда руководство желает лично провести все изменения, понять и осознать все детали
                    процесса и имеет для этого все ресурсы – включая главный – свое рабочее время.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">2. Внедрение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Стороны (Эксперт и руководство компании) утверждают план проекта трансформации.</p>
                <p>
                  <strong>Роль руководства:</strong> Курирует исполнение плана проекта.
                </p>
                <p>
                  <strong>Роль эксперта:</strong> Занимается реализацией проекта, реализует все действия, связанные с
                  внедрением новых правил, принципов работы, внедрение и адаптации программного обеспечения.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    Удобна, когда руководство не имеет возможности тратить свое рабочее время на проект внедрения и
                    желает сэкономить на услугах эксперта.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <CTAButton />
      </div>
    </div>
  )
}
