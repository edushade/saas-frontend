import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/blogs")({
	component: BlogsLayout,
});

function BlogsLayout() {
	return <Outlet />;
}
