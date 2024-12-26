import { OrganizationCard } from '@/components/organizations/OrganizationCard';
import { organizations } from '@/lib/data/organizations';

export function OrganizationGrid() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {organizations.map((org) => (
        <OrganizationCard key={org.name} {...org} />
      ))}
    </div>
  );
}