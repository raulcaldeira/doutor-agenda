import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{session?.user?.name}</h1>
    </div>
  );
};

export default DashboardPage;
