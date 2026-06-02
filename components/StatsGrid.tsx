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
  const gridClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 3
        ? "md:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`paper-stats-grid grid ${gridClass}`}>
      {stats.map((stat) => (
        <article key={stat.label} className="paper-stat">
          <div className="paper-stat__number">{stat.number}</div>
          <div className="paper-stat__label">{stat.label}</div>
          {stat.description && (
            <p className="paper-stat__description">{stat.description}</p>
          )}
        </article>
      ))}
    </div>
  );
}
