// src/app/register/[registerid]/page.tsx
import Navbar from "@/components/navbar/Navbar";
import Register from "@/components/register/Register";
import { getRegistrationByUniqueId} from "@/app/services/RegisterService";

interface RegisterPageProps {
  params: {
    registerid: string;  // Type for the registerid from the URL
  };
}

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { registerid } = params;

  let registration = null;

  try {
    registration = await getRegistrationByUniqueId(registerid);
  } catch (error) {
    console.error("Error fetching registration:", error);
  }

  if (!registration || registration.length < 1) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="max-w-lg w-full bg-gray-700 text-white p-8 rounded-lg shadow-xl text-center">
      <h2 className="text-3xl font-semibold mb-4">Oops! No Registration Found</h2>
      <p className="text-lg mb-4">
        We couldn't find a registration matching the provided ID. Please verify your links is correct and try again.
      </p>
    </div>
  </div>
  ;
  }

  if (registration.terms_date || registration.completed_pass_date) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="max-w-lg w-full bg-gray-700 text-white p-8 rounded-lg shadow-xl text-center">
      <h2 className="text-3xl font-semibold mb-4">You have already completed registration for this event</h2>
      <p className="text-lg mb-4">
        Stay tuned for more updates as we get closer to the event!
      </p>
    </div>
  </div>
  ;
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <div>
        <div className="mt-12">
          <div className="text-white text-center text-4xl font-semibold">
            <em className="mb-3 text-6xl font-semibold">Strive To Be</em>
            <br />
            is coming to MESA ARIZONA on March 28, 2025
          </div>
        </div>
        <div className="my-12">
          <div className="text-white text-center text-3xl font-semibold">
            You're almost there!
          </div>
        </div>
        <div className="mb-10 flex justify-center">
          <Register event={registration.event} isConfirm registration={registration} />
        </div>
      </div>
    </main>
  );
}
