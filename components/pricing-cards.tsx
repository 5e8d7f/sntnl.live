"use client";

import { useState } from "react";
import Link from "next/link";
import { UserSubscriptionPlan } from "@/types";

import { siteConfig } from "@/config/site";
import { pricingData } from "@/config/subscriptions";
import { cn } from "@/lib/utils";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { Button, buttonVariants } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BillingFormButton } from "@/components/forms/billing-form-button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";

import { SubscriptionPlan } from "../types/index";
import { BorderBeam } from "./magicui/border-beam";

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export function PricingCards({ userId, subscriptionPlan }: PricingCardsProps) {
  // const isYearlyDefault =
  //   !subscriptionPlan?.stripeCustomerId || subscriptionPlan.interval === "year"
  //     ? true
  //     : false;
  const isOnetimeDefault =
    !subscriptionPlan?.stripeCustomerId ||
    subscriptionPlan.interval === "onetime"
      ? true
      : false;

  const [isOnetime, setIsOnetime] = useState<boolean>(isOnetimeDefault);
  const signInModal = useSigninModal();

  const PricingCard = ({ offer }: { offer: SubscriptionPlan }) => {
    return (
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-3xl border shadow-sm",
          offer.title.toLocaleLowerCase() === "enthusiast"
            ? "-m-0.5"
            : offer.title.toLocaleLowerCase() === "business"
              ? "animate-background-shine bg-white bg-[length:200%_100%] transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]"
              : "",
        )}
        key={offer.title}
      >
        {offer.title.toLocaleLowerCase() === "enthusiast" && (
          <BorderBeam size={300} duration={5} delay={0.5} />
        )}
        <div className="min-h-[50px] items-start space-y-4 p-5">
          <p className="flex font-urban text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {offer.title}
            {offer.title.toLocaleLowerCase() === "enthusiast" && (
              <span className="ml-2 text-xs font-semibold text-primary">
                Most Popular
              </span>
            )}
          </p>

          <div className="flex flex-row">
            <div className="flex items-end">
              <div className="flex text-left text-3xl font-semibold leading-6">
                {isOnetime ? (
                  <>
                    <span>${offer.prices.onetime}</span>
                  </>
                ) : (
                  <>
                    <span>${offer.prices.monthly}</span>
                    <div className="-mb-1 ml-2 text-left text-sm font-medium text-muted-foreground">
                      <div>/month</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between gap-16 p-6">
          <ul className="space-y-2 text-left text-sm font-medium leading-normal">
            {offer.benefits.map((feature) => (
              <li className="flex items-start gap-x-3" key={feature}>
                <Icons.check className="size-5 shrink-0 text-purple-500" />
                <p>{feature}</p>
              </li>
            ))}

            {offer.limitations.length > 0 &&
              offer.limitations.map((feature) => (
                <li
                  className="flex items-start text-muted-foreground"
                  key={feature}
                >
                  <Icons.close className="mr-3 size-5 shrink-0" />
                  <p>{feature}</p>
                </li>
              ))}
          </ul>

          {userId && subscriptionPlan ? (
            offer.title.toUpperCase() === "INDIVIDUAL" ? (
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    rounded: "full",
                  }),
                  "w-full",
                )}
              >
                Go to dashboard
              </Link>
            ) : (
              <BillingFormButton
                onetime={isOnetime}
                offer={offer}
                subscriptionPlan={subscriptionPlan}
              />
            )
          ) : (
            <Button
              variant={
                offer.title.toUpperCase() === "ENTHUSIAST"
                  ? "default"
                  : "outline"
              }
              rounded="full"
              onClick={signInModal.onOpen}
            >
              Sign in
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="container flex flex-col items-center text-center">
      <HeaderSection
        label="Pricing"
        title="Choose the plan that fits your needs"
      />

      <div className="mb-4 mt-10 flex items-center gap-5">
        <ToggleGroup
          type="single"
          size="sm"
          defaultValue={isOnetime ? "onetime" : "monthly"}
          aria-label="toggle-billing"
          className="h-9 overflow-hidden rounded-full border bg-background p-1 *:h-7 *:text-muted-foreground"
        >
          <ToggleGroupItem
            value="monthly"
            className={cn(
              "rounded-full px-5",
              isOnetime ? "" : "!bg-primary !text-primary-foreground",
            )}
            aria-label="Toggle monthly billing"
            onClick={() => setIsOnetime(false)}
          >
            Monthly
          </ToggleGroupItem>
          <ToggleGroupItem
            value="onetime"
            className={cn(
              "rounded-full px-5",
              isOnetime ? "!bg-primary !text-primary-foreground" : "",
            )}
            aria-label="Toggle onetime billing"
            onClick={() => setIsOnetime(true)}
          >
            One-time
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
        {pricingData.map((offer) => (
          <PricingCard offer={offer} key={offer.title} />
        ))}
      </div>

      <p className="mt-3 text-balance text-center text-base text-muted-foreground">
        Contact{" "}
        <a
          className="font-medium text-primary hover:underline"
          href={siteConfig.links.discord}
        >
          ethan
        </a>{" "}
        for any questions
        <br />
        <strong>We do not offer refunds. All sales are final.</strong>
      </p>
    </section>
  );
}
