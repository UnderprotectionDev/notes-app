"use client";
import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div>
      <Button onClick={handleLogout} variant="outline">
        Logout
      </Button>
    </div>
  );
}

export default function Dashboard() {
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Dashboard</h1>
      <LogoutButton />
    </PageWrapper>
  );
}
