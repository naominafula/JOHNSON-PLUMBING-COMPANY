import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15550178"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_20px_35px_rgba(16,185,129,0.35)] transition hover:scale-105 hover:bg-emerald-600"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}

export default WhatsAppButton
