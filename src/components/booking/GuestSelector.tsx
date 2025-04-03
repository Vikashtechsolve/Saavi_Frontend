import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChild, faBaby } from "@fortawesome/free-solid-svg-icons";

interface GuestSelectorProps {
  adults: number;
  children: number;
  infants: number;
  setAdults: (value: number) => void;
  setChildren: (value: number) => void;
  setInfants: (value: number) => void;
}

interface GuestCounterProps {
  icon: any;
  label: string;
  subLabel?: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}

const GuestCounter: React.FC<GuestCounterProps> = ({
  icon,
  label,
  subLabel,
  value,
  onChange,
  min,
  max,
}) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center">
        <FontAwesomeIcon icon={icon} className="text-gray-500 mr-2" />
        <span>{label}</span>
        {subLabel && (
          <span className="ml-2 text-xs text-gray-500">{subLabel}</span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
        >
          -
        </button>
        <span className="w-6 text-center">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
};

const GuestSelector: React.FC<GuestSelectorProps> = ({
  adults,
  children,
  infants,
  setAdults,
  setChildren,
  setInfants,
}) => {
  return (
    <div className="guest-selection mb-6">
      <p className="text-sm mb-2">Room 1:</p>

      <GuestCounter
        icon={faUser}
        label="Adults"
        value={adults}
        onChange={setAdults}
        min={1}
        max={4}
      />

      <GuestCounter
        icon={faChild}
        label="Children"
        subLabel="(5-12yrs)"
        value={children}
        onChange={setChildren}
        min={0}
        max={3}
      />

      <GuestCounter
        icon={faBaby}
        label="Infants"
        subLabel="(< 5yrs)"
        value={infants}
        onChange={setInfants}
        min={0}
        max={2}
      />
    </div>
  );
};

export default GuestSelector;
