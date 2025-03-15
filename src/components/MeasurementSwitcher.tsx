interface MeasurementSwitcherProps {
  unit: 'metric' | 'imperial';
  selectedUnit: string;
  onChange: (unit: 'metric' | 'imperial') => void;
}

function MeasurementSwitcher({ unit, selectedUnit, onChange }: MeasurementSwitcherProps) {
  return (
    <label
      htmlFor={unit}
      className="text-gray-800 font-semibold cursor-pointer flex items-center justify-center gap-4"
    >
      <input
        type="radio"
        id={unit}
        name="unit"
        className="hidden peer"
        checked={selectedUnit === unit}
        onChange={() => onChange(unit)}
      />
      <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-8 peer-checked:border-blue-100 peer-checked:bg-blue-500"></div>
      {unit.charAt(0).toUpperCase() + unit.slice(1)}
    </label>
  );
}

export default MeasurementSwitcher;
