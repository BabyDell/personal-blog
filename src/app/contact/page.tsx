'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DynamicGridBackground2D } from "@/components/2dCellBackground"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <DynamicGridBackground2D />
      </div>
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 relative z-10">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="space-y-4 text-center mb-8">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl font-Playfair_Display animate-fade-in">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl font-serif animate-fade-in">
              Have a question or want to collaborate? Drop me a message!
            </p>
          </div>
          {isSubmitted ? (
            <div className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-6 text-center animate-fade-in">
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p>Your message has been sent successfully. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-white border-opacity-50 focus:border-opacity-100 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-white border-opacity-50 focus:border-opacity-100 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-transparent border-white border-opacity-50 focus:border-opacity-100 transition-all"
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-200 text-black hover:bg-opacity-90 transition-all hover:text-neutral-600 "
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </section>
      </main>
    </div>
  )
}

