import { useMediaQuery } from "@uidotdev/usehooks";

import { AppHeader, AppHeaderMobile } from "@/components/header/AppHeader";
import { Outlet, createRootRoute, useRouter } from "@tanstack/react-router";
import React, { Suspense, useEffect } from "react";

const TanStackRouterDevtools =
	process.env.NODE_ENV === "production"
		? () => null // Render nothing in production
		: React.lazy(() =>
				// Lazy load in development
				import("@tanstack/router-devtools").then((res) => ({
					default: res.TanStackRouterDevtools,
					// For Embedded Mode
					// default: res.TanStackRouterDevtoolsPanel
				})),
			);

const ScrollToTop = () => {
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = router.subscribe("onLoad", () => {
			window.scrollTo(0, 0);
		});

		return () => unsubscribe();
	}, [router]);

	return null;
};

export const Route = createRootRoute({
	component: () => {
		const isMobile = useMediaQuery("(max-width: 768px)");
		return (
			<div className="relative max-w-full bg-bg-floor-0">
				{isMobile ? <AppHeaderMobile /> : <AppHeader />}
				<hr />
				<Outlet />
				<Suspense>
					<TanStackRouterDevtools />
				</Suspense>
				<ScrollToTop />
			</div>
		);
	},
});
