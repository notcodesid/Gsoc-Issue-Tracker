import { OrganizationCard } from '@/components/organizations/OrganizationCard';
import { Organization } from '@/types';

interface OrganizationGridProps {
  organizations: Organization[];
}

export function OrganizationGrid({ organizations }: OrganizationGridProps) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {organizations.map((org) => (
        <OrganizationCard key={org.name} {...org} />
      ))}
    </div>
  );
}