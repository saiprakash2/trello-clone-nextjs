import { OrgControl } from "./_components/org-control";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <OrgControl />
      {children}
    </div>
  );
};

export default OrganizationLayout;
