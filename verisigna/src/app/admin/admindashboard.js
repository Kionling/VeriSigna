'use client';
import { signOut } from "next-auth/react";
export default function AdminDashboard({ user }) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Welcome Admin: {user.email}</h1>
      <button onClick={() => signOut({user})}>Sign Out</button>

    </div>
  );
}
