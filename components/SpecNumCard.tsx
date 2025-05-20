const SpecNumCard = ({
  label,
  value,
  units,
}: {
  label: string;
  value: string;
  units: string;
}) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <span className="font-light text-xs mb-8">{label}</span>
      <span className="text-5xl font-light">{value}</span>
      <span className="text-3xl font-extralight">{units}</span>
    </div>
  );
};

export default SpecNumCard;
