import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type BookingStatus = {
  [key: string]: {
    morning: boolean;
    evening: boolean;
    fullDay: boolean;
    twoDays: boolean;
  };
};

const BookingStatus = () => {
  const [bookings, setBookings] = useState<BookingStatus>({});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwvYKqHfTwuIyuM5vXWa-yf67dM_T4aE4ibAEYrah05yAiRlKkDdDf0Ux49zzHEIRax/exec';

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(scriptURL);
        const data = await response.json();

        const bookingsData: BookingStatus = {};
        data.forEach((entry: { Date: string; Slot: string }) => {
          const date = entry.Date;
          const slot = entry.Slot;

          if (!bookingsData[date]) {
            bookingsData[date] = {
              morning: false,
              evening: false,
              fullDay: false,
              twoDays: false,
            };
          }

          switch (slot) {
            case 'morning':
              bookingsData[date].morning = true;
              break;
            case 'evening':
              bookingsData[date].evening
              = true;
              break;
            case 'full':
              bookingsData[date].fullDay = true;
              bookingsData[date].morning = true;
              bookingsData[date].evening = true;
              break;
            case 'twodays':
              bookingsData[date].twoDays = true;
              const nextDate = new Date(date);
              nextDate.setDate(nextDate.getDate() + 1);
              const nextDateString = nextDate.toISOString().split('T')[0];
              bookingsData[nextDateString] = {
                morning: true,
                evening: true,
                fullDay: true,
                twoDays: true,
              };
              break;
            default:
              console.error(`Unknown slot: ${slot}`);
          }
        });

        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchBookings();
  }, []);

  const getTileClassName = ({ date }: { date: Date }) => {
    const dateStr = date.toISOString().split('T')[0];
    const booking = bookings[dateStr];

    if (booking) {
      if (booking.fullDay) return 'bg-red-500 text-white'; // Full day booked
      if (booking.twoDays) return 'bg-blue-500 text-white'; // Two-day slot booked
      if (booking.morning && booking.evening) return 'bg-yellow-500 text-white'; // Both morning and evening slots booked
      if (booking.morning) return 'bg-orange-500 text-white'; // Morning slot booked
      if (booking.evening) return 'bg-black text-white'; // Evening slot booked
    }

    return 'bg-white-250 text-black'; // Available date
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">Booking Status</h2>
      <Calendar
        tileClassName={getTileClassName}
        className="w-full rounded-lg shadow-md"
      />
    </div>
  );
};

export default BookingStatus;