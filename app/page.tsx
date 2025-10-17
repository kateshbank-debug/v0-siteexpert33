import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { CTAButton } from "@/components/cta-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Главная - Иван Швейкин",
  description: "Инвестируйте в рост – удвойте прибыль. +250% оборота за 3 года это реальный прорыв!",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-6">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                  Инвестируйте в рост – удвойте прибыль
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground text-pretty">
                  +250% оборота за 3 года это реальный прорыв!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button asChild size="lg">
                    <Link href="/contact">Заказать консультацию</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">Узнать больше</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="zoom-in" className="relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src="https://cloud.mail.ru/public/nU3f/NJQ132BEY"
                  alt="Иван Швейкин"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Комплексная трансформация компании</h2>
              <p className="text-xl text-muted-foreground">
                Охватывает все процессы, всех сотрудников, все правила и регламенты
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation className="text-center p-6">
              <div className="text-5xl font-serif font-bold text-primary mb-4">+30%</div>
              <h3 className="text-xl font-semibold mb-2">Первый год</h3>
              <p className="text-muted-foreground">Рост оборота компании</p>
            </ScrollAnimation>

            <ScrollAnimation className="text-center p-6">
              <div className="text-5xl font-serif font-bold text-primary mb-4">+110%</div>
              <h3 className="text-xl font-semibold mb-2">Второй год</h3>
              <p className="text-muted-foreground">Удвоение показателей</p>
            </ScrollAnimation>

            <ScrollAnimation className="text-center p-6">
              <div className="text-5xl font-serif font-bold text-primary mb-4">+110%</div>
              <h3 className="text-xl font-semibold mb-2">Третий год</h3>
              <p className="text-muted-foreground">Закрепление результата</p>
            </ScrollAnimation>
          </div>

          <CTAButton />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">
              Чего вы можете ожидать от работы
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Лавинообразных изменений в ежедневных процессах",
              "Повышение отдачи от ежедневных усилий команды сотрудников",
              "Позитивные изменения во внутренних коммуникациях",
              "Ясности в сфере тактических и стратегических целях руководства",
              "Освобождение лидеров компании от рутины и возвращения к своей истинной роли",
            ].map((benefit, index) => (
              <ScrollAnimation key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-lg">{benefit}</p>
              </ScrollAnimation>
            ))}
          </div>

          <CTAButton />
        </div>
      </section>
    </div>
  )
}
