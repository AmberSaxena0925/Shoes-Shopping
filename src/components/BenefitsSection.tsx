import { Truck, RotateCw, ShieldCheck, Zap } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On all orders over $100. Fast and reliable delivery.',
    },
    {
      icon: RotateCw,
      title: '30-Day Returns',
      description: 'Not satisfied? Easy returns within 30 days, no questions asked.',
    },
    {
      icon: ShieldCheck,
      title: 'Authentic Guarantee',
      description: '100% authentic shoes. All products are verified and original.',
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Expert support team ready to help anytime, any day.',
    },
  ];

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="p-4 bg-lime-400/10 border border-lime-400/30 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
