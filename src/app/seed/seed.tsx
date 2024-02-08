import { seedSanityData } from "../../../lib/seed";

interface Props {}

export default async function Seed() {
  await seedSanityData();

  return <div></div>;
}
