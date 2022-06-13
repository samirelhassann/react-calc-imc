export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourBMI?: number | null;
};

export const levels: Level[] = [
  { title: "Thinness", color: "#96A3AB", icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: "#0EAD69", icon: "up", imc: [18.6, 24.9] },
  { title: "Overweight", color: "#E2B039", icon: "down", imc: [25, 30] },
  { title: "Obesity", color: "#C3423F", icon: "down", imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  const level = levels.find((x) => imc >= x.imc[0] && imc <= x.imc[1]);
  let copyLevel: Level = { ...level! };

  copyLevel!.yourBMI = imc;

  return copyLevel;
};
