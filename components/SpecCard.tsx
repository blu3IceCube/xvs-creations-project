const SpecCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-light">{label}</span>
      <span className="spec-value">{value}</span>
    </div>
  );
};

export default SpecCard;
