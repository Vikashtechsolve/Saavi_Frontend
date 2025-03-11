import React from "react";
import DatePicker from "react-multi-date-picker";
import dayjs from "dayjs";
import { DateRange } from "../../types/booking";
import "react-multi-date-picker/styles/colors/red.css";

interface DateSelectorProps {
  dateRange: DateRange;
  onDateChange: (value: any) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  dateRange,
  onDateChange,
}) => {
  const [checkInDate, checkOutDate] = dateRange;

  return (
    <>
      <div className="calendar-section mb-6">
        <h3 className="text-lg font-medium mb-2">Select Dates</h3>
        <DatePicker
          value={dateRange}
          onChange={onDateChange}
          range
          rangeHover
          className="red"
          numberOfMonths={1}
          minDate={new Date()}
          containerStyle={{ width: "100%" }}
          style={{
            backgroundColor: "white",
            height: "50px",
            borderRadius: "8px",
            fontSize: "14px",
            width: "100%",
            padding: "3px 10px",
            border: "1px solid #E0E0E0",
          }}
          containerClassName="w-full"
        />
      </div>

      <div className="checkin-checkout-info border-t border-b border-gray-200 py-4 mb-4">
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-gray-500">CHECK-IN</p>
            <p className="font-medium">
              {checkInDate
                ? dayjs(checkInDate).format("ddd DD MMM YYYY")
                : "Select date"}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">CHECK-OUT</p>
            <p className="font-medium">
              {checkOutDate
                ? dayjs(checkOutDate).format("ddd DD MMM YYYY")
                : "Select date"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateSelector;
