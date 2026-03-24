import { createFileRoute } from "@tanstack/react-router";
import { SaasPlansPage } from "@/components/dashboard/saas-plans-page";

export const Route = createFileRoute("/dashboard/plans")({
	component: SaasPlansPage,
});