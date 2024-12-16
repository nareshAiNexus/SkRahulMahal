import React, { useState, useEffect } from "react";
import { ref, set, get, onValue } from "firebase/database";
import { db } from "../firebase"; // Import your Firebase configuration
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", eventType: "", address: "" }); // Removed email
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState<string>("");
  const [bookings, setBookings] = useState<Record<string, any>>({});

  useEffect(() => {
    const bookingRef = ref(db, "bookings");
    const unsubscribe = onValue(bookingRef, (snapshot) => {
      if (snapshot.exists()) {
        setBookings(snapshot.val());
      } else {
        setBookings({});
      }
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSlot(e.target.value);
  };

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const formatDateToIST = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleDateString("en-GB", options).split("/").reverse().join("-");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !selectedDate ||
      !selectedSlot ||
      !formData.name ||
      !formData.phone ||
      !formData.eventType ||  // Added validation for eventType
      !formData.address ||    // Added validation for address
      selectedServices.length === 0 // Added validation for checkboxes
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const formattedDate = formatDateToIST(selectedDate);
    const bookingRef = ref(db, `bookings/${formattedDate}`);

    setLoading(true);

    try {
      const snapshot = await get(bookingRef);
      const existingBookings = snapshot.val();

      if (existingBookings) {
        if (existingBookings["fullDay"]) {
          alert("The full day is already booked.");
          return;
        }
        if (existingBookings[selectedSlot]) {
          alert(`The ${selectedSlot} slot on ${formattedDate} is already booked.`);
          return;
        }
      }

      const bookingData = {
        date: formattedDate,
        slot: selectedSlot,
        name: formData.name,
        phone: formData.phone,
        eventType: formData.eventType, // Include eventType
        address: formData.address,       // Include address
        services: selectedServices,
      };

      await set(ref(db, `bookings/${formattedDate}/${selectedSlot}`), bookingData);

      if (selectedSlot === "fullDay") {
        await set(ref(db, `bookings/${formattedDate}/fullDay`), bookingData);
      }

      setBookings((prevBookings) => ({
        ...prevBookings,
        [formattedDate]: {
          ...prevBookings[formattedDate],
          [selectedSlot]: bookingData,
        },
      }));

      alert("Booking successfully saved!");
      setConfirmationMessage(
        `Your booking for ${formattedDate} (${selectedSlot}) has been successfully saved.`
      );

      const message = `Name: ${encodeURIComponent(
        formData.name
      )
        }%0ADate: ${encodeURIComponent(
          formattedDate
        )
        }%0ASlot: ${encodeURIComponent(
          selectedSlot
        )
        }%0AServices: ${encodeURIComponent(
          selectedServices.join(", ")
        )
        }%0APhone: ${encodeURIComponent(formData.phone)}%0AEvent Type: ${encodeURIComponent(formData.eventType)}%0AAddress: ${encodeURIComponent(formData.address)} `;
      const number = ENTER-YOURWHATSAPP-NUMBER";
      const url = `https://wa.me/${number}?text=${message}`;

      window.open(url, "_blank").focus();
    } catch (error) {
      console.error("Error saving booking: ", error);
      alert("An error occurred while saving the booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getTileClassName = ({ date }: { date: Date }) => {
    const dateString = formatDateToIST(date);
    const booking = bookings[dateString];

    if (booking) {
      const allSlots = Object.keys(booking);
      if (allSlots.includes("fullDay")) {
        return "bg-red-500";
      } else if (allSlots.includes("morning") && allSlots.includes("evening")) {
        return "bg-red-500";
      } else if (allSlots.includes("morning")) {
        return "bg-yellow-500";
      } else if (allSlots.includes("evening")) {
        return "bg-gray-800";
      }
    }
    return "";
  };

  return (
    <div className="bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Booking Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            />
          </label>
        </div>
        <div>
          <label>
            Event Type:
            <select
              name="eventType"
              value={formData.eventType || ""}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="" disabled>
                Select an event type
              </option>
              <option value="Marriage">Marriage</option>
              <option value="Engagement">Engagement</option>
              <option value="Reception">Reception</option>
              <option value="Birthday">Birthday</option>
              <option value="Ear-Piercing">Ear Piercing</option>
              <option value="Meetings">Meetings</option>
              <option value="PubertyCeremony">Puberty Ceremony</option>
              <option value="Others">Others</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address || ""}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              rows="3"
              placeholder="Enter your address"
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            />
          </label>
        </div>

        <div>
          <label>
            Date:
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileClassName={getTileClassName}
            />
          </label>
        </div>

        {/* Legend for color codes */}
        <div className="mt-4">
          <p className="text-red-500">🔴 Full day booked ⚫ Evening 🟡 Morning</p>
        </div>

        <div>
          <label>
            Slot:
            <select value={selectedSlot} onChange={handleSlotChange} required className="border border-gray-300 rounded p-2 w-full">
              <option value="" disabled>
                Select a slot
              </option>
              <option value="morning">Morning 11pm - 11am</option>
              <option value="evening">Evening 11am - 11pm</option>
              <option value="fullDay">Full Day 11pm - 11pm</option>
            </select>
          </label>
          <div className="bg-yellow-100 p-2 mt-4 w-3-2 mx-auto">
        <p className="text-red-600">For any other time slots please contact us <br />Owner: +91 9688399398
        <br />Manager: +91 9244413422</p>
      </div>
        </div>
        <div>
          < label>
            Services:
            <div>
              <label>
                <input
                  type="checkbox"
                  value="FullPackage"
                  onChange={() => handleServiceChange("FullPackage")}
                />
                Full Package
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Decoration"
                  onChange={() => handleServiceChange("Decoration")}
                />
                Decoration
              </label>
              <label>
                <input
                  type="checkbox"
                  value="DJ"
                  onChange={() => handleServiceChange("DJ")}
                />
                DJ
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Catering"
                  onChange={() => handleServiceChange("Catering")}
                />
                Catering
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Photography"
                  onChange={() => handleServiceChange("Photography")}
                />
                Photography
              </label>
              <label>
                <input
                  type="checkbox"
                  value="no-services"
                  onChange={() => handleServiceChange("no-services")}
                />
                No additional Services
              </label>
            </div>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {loading ? "Saving..." : "Book Now"}
        </button>
      </form>
      <div className="bg-yellow-100 p-2 mt-4 w-1/2 mx-auto">
        <p className="text-red-600">No refund is provided, but bookings may be rescheduled.</p>
      </div>

      {confirmationMessage && (
        <div className="text-green-600 mt-4">{confirmationMessage}</div>
      )}
    </div>
  );
};

export default BookingForm;
