interface Stat {
  number: string;
  label: string;
  description?: string;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
}

export default function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const gridClass = columns === 2 ? "grid-2" : columns === 3 ? "grid-3" : "grid-4";

  return (
    <div className={`${gridClass} mb-12`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="card text-center hover:shadow-card-hover transition-all duration-300"
        >
          <div className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">
            {stat.number}
          </div>
          <div className="text-lg font-semibold text-primary-navy mb-1">
            {stat.label}
          </div>
          {stat.description && (
            <p className="text-sm text-text-light">{stat.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
