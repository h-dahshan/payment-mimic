import { useTest } from "@/lib/hooks/useTest/useTest";

type SomeProps = {
  name: "Dahshan";
};

export const TestComponent = ({ name }: SomeProps) => {
  const { testState } = useTest({ name });

  return <h1>{`Hello ${testState.name}`}</h1>;
};
