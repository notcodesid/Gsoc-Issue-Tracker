// import { SearchBar } from '@/components/organizations/search-bar';
import { Sidebar } from '@/components/organizations/sidebar';
// import { OrganizationGrid } from '@/components/organizations/organization-grid';

export default function OrganizationsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {/* <SearchBar /> */}
          {/* <OrganizationGrid /> */}
        </div>
      </main>
    </div>
  );
}