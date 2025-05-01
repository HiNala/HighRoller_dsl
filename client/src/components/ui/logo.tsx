import { Building2 } from 'lucide-react';

export default function Logo() {
  return (
    <div className="h-10 w-10 rounded-md bg-accent flex items-center justify-center shadow-sm transition-transform hover:scale-105">
      <Building2 className="h-6 w-6 text-white" />
    </div>
  );
}
