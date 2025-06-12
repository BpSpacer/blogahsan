import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Hero } from "./components/frontend/Hero";
import { Logos } from "./components/frontend/Logos";
import { Features } from "./components/frontend/Features";
import { PricingTable } from "./components/shared/Pricing";
import { SideBar } from "./components/frontend/SideBar";
import Footer from "./components/frontend/Footer";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  if (session?.id) {
    return redirect("/dashboard");
  }

  return (
    <div className="min-h-screen">
      <SideBar />
      <div className="md:pl-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <form action="/verify" method="POST">
            <div className="g-recaptcha" data-sitekey="6LfBPF4rAAAAABXYHRE-rM8pz4Q1r2e9chEV333f"></div>
            <button type="submit">Submit</button>
          </form>
          <Hero />
          <Logos />
          <Features />
          <PricingTable />
          <div className="-mb-24">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}