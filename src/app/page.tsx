import { SiteProvider } from "@/components/site-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageRouter } from "@/components/page-router";
import { MobileTabBar } from "@/components/mobile-tabbar";

export default function Home() {
  return (
    <SiteProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <PageRouter />
        <Footer />
        <MobileTabBar />
        {/* Spacer so content isn't hidden behind mobile bottom nav */}
        <div className="h-16 lg:hidden" aria-hidden />
      </div>
    </SiteProvider>
  );
}
