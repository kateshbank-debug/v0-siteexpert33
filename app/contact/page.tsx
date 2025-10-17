"use client"

import type React from "react"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, MapPin } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "перезвоните мне",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `Новая заявка с сайта:
Имя: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Телефон: ${formData.phone}
Сообщение: ${formData.message}`

    const whatsappUrl = `https://wa.clck.bar/79146920123?text=${encodeURIComponent(message)}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "перезвоните мне",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground">Свяжитесь со мной для консультации</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollAnimation>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+79146920123" className="text-muted-foreground hover:text-primary">
                        +7 914-692-01-23
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:ishveykin@mail.ru" className="text-muted-foreground hover:text-primary">
                        ishveykin@mail.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Send className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Telegram</p>
                      <a
                        href="https://t.me/shivanu08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        @shivanu08
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Расположение</p>
                      <p className="text-muted-foreground">Владивосток, Приморский край, Российская Федерация</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* QR Code */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">QR код для быстрой связи</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="relative w-64 h-64">
                    <Image
                      src="https://cloud.mail.ru/public/vhtb/96eP6UYnp"
                      alt="QR код"
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Отправить сообщение</CardTitle>
                <CardDescription>Заполните форму, и я свяжусь с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Ваша фамилия"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ваше сообщение"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full transition-all" disabled={isSubmitted}>
                    {isSubmitted ? "Отправлено" : "Отправить"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        {/* Google Maps */}
        <ScrollAnimation>
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Расположение</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27701.893945329342!2d131.8970431004132!3d43.129666261995915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x186704d4dd967e35!2z0JLQu9Cw0LTQuNCy0L7RgdGC0L7Quiwg0J_RgNC40LzQvtGA0YHQutC40Lkg0LrRgNCw0LksINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2suk!4v1760429503944!5m2!1sru!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  )
}
