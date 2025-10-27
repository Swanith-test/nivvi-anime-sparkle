import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const SakuraPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 30; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 12 + Math.random() * 8,
          size: 15 + Math.random() * 20,
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-sakura-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 50 50"
            className="opacity-70"
          >
            <path
              d="M25 15 C20 15, 15 20, 15 25 C15 30, 20 35, 25 35 C30 35, 35 30, 35 25 C35 20, 30 15, 25 15 M25 10 C22 10, 20 15, 20 20 C20 15, 18 10, 15 10 C18 10, 20 8, 20 5 C20 8, 22 10, 25 10 M25 40 C22 40, 20 35, 20 30 C20 35, 18 40, 15 40 C18 40, 20 42, 20 45 C20 42, 22 40, 25 40 M35 25 C35 22, 30 20, 25 20 C30 20, 35 18, 35 15 C35 18, 37 20, 40 20 C37 20, 35 22, 35 25 M15 25 C15 22, 20 20, 25 20 C20 20, 15 18, 15 15 C15 18, 13 20, 10 20 C13 20, 15 22, 15 25"
              fill="hsl(330, 80%, 70%)"
              opacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SakuraPetals;
