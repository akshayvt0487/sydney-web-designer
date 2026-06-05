"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import PopupForm from "./PopupForm";
import type { FormType } from "@/lib/forms";
import {
  getServiceGroupFromSlug,
  getServiceName,
  type PopupLaunchContext,
} from "@/lib/forms/service-popup-config";

interface PopupFormContextType {
  openForm: (
    type: FormType,
    details?: Omit<PopupLaunchContext, "formType">
  ) => void;
  closeForm: () => void;
}

const PopupFormContext = createContext<PopupFormContextType | undefined>(
  undefined
);

const VALID_FORM_TYPES: FormType[] = [
  "contact",
  "seoAudit",
  "adsAudit",
  "consultation",
];

function normalisePopupType(value: string | undefined): FormType | null {
  if (!value) return null;

  if (VALID_FORM_TYPES.includes(value as FormType)) {
    return value as FormType;
  }

  /*
    Backward compatibility:
    Old buttons used data-popup="service".
    The API only accepts contact / seoAudit / adsAudit / consultation,
    so treat "service" as the normal contact lead form.
  */
  if (value === "service") {
    return "contact";
  }

  return null;
}

function normaliseServiceGroup(value?: string): string | undefined {
  const group = String(value || "").trim().toLowerCase();

  if (!group) return undefined;

  if (
    group === "web-design" ||
    group === "website-design" ||
    group === "web"
  ) {
    return "web-design";
  }

  if (
    group === "growth-marketing" ||
    group === "digital-marketing" ||
    group === "marketing" ||
    group === "seo" ||
    group === "google-ads"
  ) {
    return "growth-marketing";
  }

  if (
    group === "branding" ||
    group === "branding-design" ||
    group === "brand" ||
    group === "logo-branding" ||
    group === "logo-and-branding"
  ) {
    return "branding";
  }

  return group;
}

function parseFeatures(value?: string): string[] | undefined {
  if (!value) return undefined;

  try {
    const parsed = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === "string");
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function slugFromPathname(pathname: string): string | undefined {
  if (pathname === "/web-design") return "web-design";
  if (pathname === "/web-design-plans") return "web-design-plans";
  if (pathname === "/growth-marketing") return "digital-marketing";

  const serviceMatch = pathname.match(/^\/services\/([^/?#]+)/);

  if (serviceMatch?.[1]) {
    return serviceMatch[1];
  }

  return undefined;
}

function getGroupFromPathname(pathname: string): string | undefined {
  if (pathname === "/web-design" || pathname === "/web-design-plans") {
    return "web-design";
  }

  if (pathname === "/growth-marketing") {
    return "growth-marketing";
  }

  const slug = slugFromPathname(pathname);

  if (!slug) return undefined;

  return getServiceGroupFromSlug(slug) || undefined;
}

function readDataset(
  trigger: HTMLElement,
  pathname: string
): Omit<PopupLaunchContext, "formType"> {
  /*
    Support BOTH systems:
    New:
      data-service-slug
      data-service-name
      data-service-group
      data-plan-name

    Old:
      data-popup-service
      data-popup-group
      data-popup-plan
  */

  const pathnameSlug = slugFromPathname(pathname);

  const serviceSlug =
    trigger.dataset.serviceSlug ||
    trigger.dataset.popupService ||
    pathnameSlug ||
    undefined;

  const serviceGroup =
    normaliseServiceGroup(
      trigger.dataset.serviceGroup || trigger.dataset.popupGroup
    ) ||
    getGroupFromPathname(pathname) ||
    (serviceSlug ? getServiceGroupFromSlug(serviceSlug) : undefined) ||
    undefined;

  const serviceName =
    trigger.dataset.serviceName ||
    (serviceSlug ? getServiceName(serviceSlug) : undefined);

  return {
    serviceSlug,
    serviceName,
    serviceGroup,
    planName:
      trigger.dataset.planName || trigger.dataset.popupPlan || undefined,
    planDescription:
      trigger.dataset.planDescription ||
      trigger.dataset.popupPlanDescription ||
      undefined,
    planFeatures: parseFeatures(
      trigger.dataset.planFeatures || trigger.dataset.popupPlanFeatures
    ),
    sourceLabel:
      trigger.dataset.sourceLabel || trigger.dataset.popupSource || undefined,
  };
}

export function usePopupForm() {
  const context = useContext(PopupFormContext);

  if (!context) {
    throw new Error("usePopupForm must be used within PopupFormProvider");
  }

  return context;
}

export default function PopupFormProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const [activePopup, setActivePopup] =
    useState<PopupLaunchContext | null>(null);

  useEffect(() => {
    setActivePopup(null);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-popup]");

      if (!trigger) return;

      const formType = normalisePopupType(trigger.dataset.popup);

      if (!formType) return;

      event.preventDefault();

      setActivePopup({
        formType,
        ...readDataset(trigger, window.location.pathname),
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const openForm = (
    type: FormType,
    details?: Omit<PopupLaunchContext, "formType">
  ) => {
    setActivePopup({
      formType: type,
      ...details,
      serviceGroup: normaliseServiceGroup(details?.serviceGroup),
    });
  };

  const closeForm = () => {
    setActivePopup(null);
  };

  return (
    <PopupFormContext.Provider value={{ openForm, closeForm }}>
      {children}

      {activePopup && (
        <PopupForm
          isOpen={true}
          onClose={closeForm}
          launchContext={activePopup}
        />
      )}
    </PopupFormContext.Provider>
  );
}