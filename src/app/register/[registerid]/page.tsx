"use client"
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Register from "@/components/register/Register";
import html2canvas from "html2canvas";
import Loader from "@/components/Loader/Loader";

interface RegisterPageProps {
  params: {
    registerid: string;  // Type for the registerid from the URL
  };
}

export default function RegisterPage({ params }: RegisterPageProps) {
  const { registerid } = params;
  
  const [registration, setRegistration] = useState<any>(null); // Store registration data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    // Fetch registration data
    const fetchRegistrationData = async () => {
      try {
        const response = await fetch(`/api/register?registerid=${registerid}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch registration data");
        }

        const data = await response.json();
        setRegistration(data); // Set registration data to state
      } catch (error) {
        setError("Error fetching registration data: " + (error as Error).message);
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchRegistrationData();
  }, [registerid]);

  if (loading) {
    return (
      <div className="flex text-xl justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>; // Error handling
  }

  if (!registration || registration.length < 1) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="max-w-lg w-full bg-gray-700 text-white p-8 rounded-lg shadow-xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Oops! No Registration Found</h2>
          <p className="text-lg mb-4">
            We couldn't find a registration matching the provided ID. Please verify your link is correct and try again.
          </p>
        </div>
      </div>
    );
  }

  const eventInfoData = {
    mesa: {
      name: "Mesa",
      date: "3/28/2025",
      time: "8pm-10pm",
      gateOpen: "7pm",
      location: "Mesa Amphitheater, 263 N Center St, Mesa, AZ 85201",
    },
    tucson: {
      name: "Tucson",
      date: "3/29/2025",
      time: "6pm-8pm",
      gateOpen: null,
      location: "10800 E Valencia Rd, Tucson, AZ 85747",
    },
  };

  const getEventInfo = (event: string) => (eventInfoData as any)[event] || { name: "Event Not Found" };

  const handleDownloadPass = async () => {
    const element = document.getElementById("registration-pass");
    if (element) {
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
      });
      const imageUrl = canvas.toDataURL();

      // Create a temporary link to trigger the download
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "registration-pass.png";
      link.click();
    }
  };

  const RegistrationPass = () => {
    const eventInfo = getEventInfo(registration.event);
    return (
      <div id="registration-pass" 
        style={{
          width: "360px",
          height: "600px",
          background: "linear-gradient(to bottom, white 70%, hsl(39, 100.00%, 67.80%) 100%)", 
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Top Black Section */}
        <div style={{ width: "100%", backgroundColor: "#222222", color: "#fff", paddingLeft: 30, paddingRight: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px" }}>
            <img
              src="/strivetobeaz_logo_2x.png"
              className="h-24"
              alt="Strive to Be AZ"
            />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="text-4xl tracking-widest text-center">
                {eventInfo.name.toUpperCase()}
              </div>
              <div className="text-lg tracking-widest">{eventInfo.date}</div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div style={{
          flexGrow: 1,
          paddingBottom: "20px",
        }} className="text-gray-900 px-10 mt-5">
          <div className="text-gray-700 font-bold text-sm">
            You must have this pass to gain entry into the event
          </div>
          <div className="text-orange-600 font-bold text-xl text-left mt-7">
            {registration.first_name} {registration.last_name}
          </div>
          {registration.child_name &&
            <div className="text-gray-800 font-bold text-xs text-left mt-1">
              accompanying: {registration.child_name}
            </div>
          }
          {registration.stake &&
            <div className="text-gray-800 italic font-bold text-sm text-left mt-1">
              {registration.stake}
            </div>
          }
          <div className="text-gray-800 font-bold text-sm text-left mt-1">
            {registration.email}
          </div>
          <div className="text-gray-900 font-bold text-sm text-left mt-5">
            <strong>Location:</strong> {eventInfo.location}
          </div>
          <div className="text-gray-900 font-bold text-sm text-left mt-5">
            <strong>Starts:</strong> {eventInfo.time}
            {registration.event === "mesa" && <span>, gate open: {eventInfo.gateOpen}</span>}
          </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingBottom: "20px",
          width: "80%",
          color: 'black'
        }}>
          <div><strong>Age:</strong> {registration.age}</div>
          <div className="italic">{registration.uniqueid}</div>
        </div>
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <div>
        <div className="mt-12">
          <div className="text-white text-center text-4xl font-semibold">
            <div className="mb-10 text-6xl font-semibold">Strive To Be</div>
            {!registration.terms_date ? <div>Finalize your registration</div> : <div>My Pass</div>}
            {registration.terms_date &&
              <div className="text-center px-10">
                <div className="text-lg mt-5">This is your pass to gain entry into the event.</div>
                <div className="text-lg text-orange-500">You must have a photo of this pass with you to enter the event.</div>
              </div>
            }
          </div>
        </div>
        {!registration.terms_date ?
          <div>
            <div className="my-12">
              <div className="text-white text-center text-3xl font-semibold">
                You're almost there!
              </div>
            </div>
            <div className="mb-10 flex justify-center">
              <Register event={registration.event} isConfirm registration={registration} />
            </div>
          </div>
          :
          <div style={{ display: "grid", placeItems: "center", marginTop: 50, marginBottom: 30 }}>
            <RegistrationPass />
            <button className="font-bold rounded-lg text-lg w-72 h-12 mt-5 bg-[#ea9920] text-[#ffffff] justify-center" onClick={handleDownloadPass}>Download Pass</button>
          </div>
        }
      </div>
    </main>
  );
}
