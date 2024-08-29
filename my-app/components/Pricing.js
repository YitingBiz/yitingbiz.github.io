const plans = [
    {
      name: "Free Trial",
      price: "Free",
      features: ["Access to core features", "Customizable visuals", "Basic support"]
    },
    {
      name: "Pro Plan",
      price: "$20/month",
      features: ["Advanced features", "Premium support", "Exclusive content"]
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      features: ["Tailored solutions", "Dedicated account manager", "Priority support"]
    }
  ];
  
  export default function Pricing() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  {plan.name === "Enterprise Plan" ? "Contact Us" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }