type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div
      className="p-5 rounded-xl bg-white/5 backdrop-blur-lg 
                    border border-white/10 
                    shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-2xl font-semibold mt-2 text-white">{value}</h2>
    </div>
  );
}
