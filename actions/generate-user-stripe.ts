"use server";

import { auth } from "@/auth";
import { pricingData } from "@/config/subscriptions";
import { stripe } from "@/lib/stripe";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { absoluteUrl } from "@/lib/utils";
import { redirect } from "next/navigation";

export type responseAction = {
  status: "success" | "error";
  stripeUrl?: string;
}

// const billingUrl = absoluteUrl("/dashboard/billing")
const billingUrl = absoluteUrl("/pricing")

export async function generateUserStripe(priceId: string): Promise<responseAction> {
  let redirectUrl: string = "";

  try {
    const session = await auth()

    if (!session?.user || !session?.user.email) {
      throw new Error("Unauthorized");
    }

    const userSubscriptionPlan = await getUserSubscriptionPlan(session.user.id)
    const subscriptionPlan = pricingData.find((plan) => plan.stripeIds.monthly === priceId || plan.stripeIds.onetime === priceId) || pricingData[0]
    const interval = subscriptionPlan.stripeIds.monthly === priceId ? "subscription" : subscriptionPlan.stripeIds.onetime === priceId ? "payment" : null
    if (!subscriptionPlan || !interval) {
      throw new Error("Failed to find subscription plan")
    }

    if (userSubscriptionPlan.isPaid && userSubscriptionPlan.stripeCustomerId) {
      // User on Paid Plan - Create a portal session to manage subscription.
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscriptionPlan.stripeCustomerId,
        return_url: billingUrl,
      })

      redirectUrl = stripeSession.url as string
    } else {
      // User on Free Plan - Create a checkout session to upgrade.
      const stripeSession = await stripe.checkout.sessions.create({
        mode: interval,
        success_url: billingUrl,
        cancel_url: billingUrl,
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        customer_email: session.user.email,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        metadata: {
          userId: session.user.id,
        },
      })

      redirectUrl = stripeSession.url as string
    }
  } catch (error) {
    throw error
    throw new Error("Failed to generate user stripe session");
  }

  // no revalidatePath because redirect
  redirect(redirectUrl)
}