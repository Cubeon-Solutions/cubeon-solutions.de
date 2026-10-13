import ServicePage from "@/components/pages/ServicePage";
import { services } from "@/lib/data/services";
import { pageMetadata } from "@/lib/seo";

const service = services.find((item) => item.id === "apps")!;
export const metadata = pageMetadata(service.metaTitle, service.description, service.href);

export default function AppDevelopmentPage() {
  return <ServicePage service={service} />;
}
