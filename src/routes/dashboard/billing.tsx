import { createFileRoute } from "@tanstack/react-router";
import { SaasBillingPage } from "@/components/dashboard/saas-billing-page";

export const Route = createFileRoute("/dashboard/billing")({
	component: SaasBillingPage,
});