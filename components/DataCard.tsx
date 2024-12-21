const DataCard = ({
  value,
  description,
  unit,
}: {
  value: number | string;
  description: string;
  unit?: string;
}) => (
  <div className="h-full flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-xl p-4">
    <h2 className="text-white text-5xl">
      {value} {unit}
    </h2>
    <p className="text-slate-300">{description}</p>
  </div>
);

export default DataCard