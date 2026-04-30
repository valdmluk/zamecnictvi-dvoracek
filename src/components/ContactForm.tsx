import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Zadejte jméno").max(80),
  phone: z.string().trim().min(6, "Zadejte telefon").max(30),
  email: z.string().trim().email("Neplatný e-mail").max(120).or(z.literal("")),
  message: z.string().trim().min(5, "Popište prosím poptávku").max(1000),
});

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email") ?? "",
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Zkontrolujte údaje");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Děkujeme! Ozveme se obvykle do 24 hodin.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  const field =
    "w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-wider mb-2 text-muted-foreground">
            Jméno *
          </label>
          <input name="name" required maxLength={80} className={field} placeholder="Jan Novák" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider mb-2 text-muted-foreground">
            Telefon *
          </label>
          <input name="phone" required maxLength={30} className={field} placeholder="+420 777 123 456" />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider mb-2 text-muted-foreground">
          E-mail
        </label>
        <input name="email" type="email" maxLength={120} className={field} placeholder="vas@email.cz" />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider mb-2 text-muted-foreground">
          Popis poptávky *
        </label>
        <textarea
          name="message"
          required
          maxLength={1000}
          rows={5}
          className={field}
          placeholder="Co potřebujete vyrobit? Rozměry, místo realizace, termín…"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {submitting ? "Odesílám…" : "Odeslat poptávku"}
      </button>
      <p className="text-xs text-muted-foreground">
        Odesláním souhlasíte se zpracováním údajů pro vyřízení poptávky.
      </p>
    </form>
  );
}
