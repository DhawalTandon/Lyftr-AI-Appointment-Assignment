import { CalendarDays, Clock3, Globe, Palmtree } from "lucide-react";

import CardHeader from "../common/CardHeader";
import BusinessInfoItem from "./BusinessInfoItem";
import GlassButton from "../common/GlassButton";

interface BusinessOverviewProps {
  onConfigure: () => void;
}

export default function BusinessOverview({
  onConfigure,
}: BusinessOverviewProps) {
  return (
    <>
      <CardHeader
  title="Business Overview"
  description="Working hours, holidays and business settings."
  action={
    <GlassButton onClick={onConfigure}>
    Configure
</GlassButton>
  }
/>

      <BusinessInfoItem
        icon={<Globe size={18} />}
        label="Timezone"
        value="Asia/Kolkata (UTC+05:30)"
      />

      <BusinessInfoItem
        icon={<Clock3 size={18} />}
        label="Working Hours"
        value="09:00 AM – 06:00 PM"
      />

      <BusinessInfoItem
        icon={<CalendarDays size={18} />}
        label="Working Days"
        value="Monday – Friday"
      />

      <BusinessInfoItem
        icon={<Palmtree size={18} />}
        label="Holidays"
        value="2 Configured"
      />
    </>
  );
}