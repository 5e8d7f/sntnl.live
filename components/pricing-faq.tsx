import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HeaderSection } from "./shared/header-section";

const pricingFaqData = [
  {
    id: "item-1",
    question: "Does the free plan have any hidden costs?",
    answer:
      "No, there are no hidden costs associated with our free plan. It's free forever, and you can upgrade to a paid plan at any time.",
  },
  {
    id: "item-2",
    question: "Are my payment details secure with you?",
    answer:
      "Yes, we utilize Stripe to handle payments. Stripe is certified to PCI Service Provider Level 1, the most stringent level of certification. Your payment details are encrypted and securely stored."
  },
  {
    id: "item-3",
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. Your subscription will remain active until the end of the current billing cycle.",
  },
];

export function PricingFaq() {
  return (
    <section className="container max-w-4xl py-2">
      <HeaderSection
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Here are some common questions about our pricing plans. If you have any other questions, feel free to contact us."
      />

      <Accordion type="single" collapsible className="my-12 w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
