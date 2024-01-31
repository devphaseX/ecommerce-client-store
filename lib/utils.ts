import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface MatchRoute {
  currentRoute: string;
  activeRoute?: string;
  partialMatch?: boolean;
  pathnameMatch?: boolean;
}

export function matchRoute(option: MatchRoute) {
  if (
    (typeof window === 'undefined' || typeof window.location === 'undefined') &&
    !option.pathnameMatch
  ) {
    throw new Error('route matching only supported in the window context');
  }

  const {
    activeRoute = window.location.href,
    currentRoute,
    partialMatch = true,
    pathnameMatch = false,
  } = option;

  const activeRouteUrl = new URL(
    !pathnameMatch
      ? `${window.location.origin}/${activeRoute}`
      : `http://www.localhost.com/${activeRoute}`
  );
  const currentRouteUrl = new URL(
    !pathnameMatch
      ? `${window.location.origin}/${currentRoute}`
      : `http://www.localhost.com/${currentRoute}`
  );

  let sameOrigin = activeRouteUrl.origin === currentRouteUrl.origin;

  if (partialMatch) {
    return (
      sameOrigin &&
      activeRouteUrl.pathname
        .toLowerCase()
        .startsWith(currentRouteUrl.pathname.toLowerCase())
    );
  }

  return sameOrigin && activeRouteUrl.pathname === currentRouteUrl.pathname;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function typeJSONResponse<Data>(
  response: Response,
  throwErrorOnFail = true
) {
  console.log({ status: response.status });
  if (!response.ok && throwErrorOnFail) {
    throw new Error(`Response failed with error code: {${response.status}}`);
  }

  return <Promise<Data>>response.json();
}
