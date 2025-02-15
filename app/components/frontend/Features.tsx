import { ChartNoAxesCombined, CircleDollarSign, Layers, UserPlus } from "lucide-react";

const features = [
  {
    name: "Sign up for free",
    description:
      "Get started on your blogging journey without any cost! Where you can create one site absolutely free and start sharing your Multiple ideas today.",
    icon: UserPlus,
  },
  {
    name: "Startup Plan",
    description:
      "Unlock monetization opportunities with the Startup plan. For just $5, you can sell your apps and courses effortlessly, turning your expertise into earnings.",
    icon: CircleDollarSign,
  },
  {
    name: "Earn More",
    description:
      "The more visitors you attract to your URL, the higher your income potential. Earn based on the traffic!",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Premium Plus, Multiply Earnings!",
    description:
      "Scale your success with the Premium Plus plan. Create multiple websites and maximize your revenue streams, all based on the performance",
    icon: Layers,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Blog Faster</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Get your blog up and running in minutes
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          Right here you can create a blog in minutes. We make it easy for you
          to create a blog in minutes. The blog is very fast and easy to create.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}