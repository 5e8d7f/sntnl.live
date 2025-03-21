import { SubscriptionPlan } from "types"
import { env } from "@/env.mjs"

export const pricingData: SubscriptionPlan[] = [
  {
    title: 'Individual',
    description: 'Access to the basic features of the bot.',
    benefits: [
      'Community Humanization',
      'Security Notifications',
      'Proxy & VPN Detection',
    ],
    limitations: [
      'Customizable Captcha',
      'Firewall Protection',
      'Limited Support'
    ],
    prices: {
      monthly: 0,
      onetime: 0,
    },
    stripeIds: {
      monthly: null,
      onetime: null,
    },
  },
  {
    title: 'Enthusiast',
    description: 'Access to everything the bot has to offer.',
    benefits: [
      'Community Humanization',
      'Security Notifications',
      'Proxy & VPN Detection',
      'Customizable Captcha',
      'Firewall Protection',
      'Priority Support',
    ],
    limitations: [
      'Private API Access',
    ],
    prices: {
      monthly: 5,
      onetime: 10,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_ENTHUSIAST_MONTHLY_PLAN_ID,
      onetime: env.NEXT_PUBLIC_STRIPE_ENTHUSIAST_ONETIME_PLAN_ID,
    },
  },
  {
    title: 'Business',
    description: 'Access the full potential of the bot and private access to the API.',
    benefits: [
      'Community Humanization',
      'Security Notifications',
      'Proxy & VPN Detection',
      'Customizable Captcha',
      'Firewall Protection',
      'Priority Support',
      'Private API Access',
    ],
    limitations: [],
    prices: {
      monthly: 15,
      onetime: 30,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
      onetime: env.NEXT_PUBLIC_STRIPE_BUSINESS_ONETIME_PLAN_ID,
    },
  },
];
