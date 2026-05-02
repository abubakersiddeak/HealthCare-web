import Card from "@/components/ui/Card";
import {
  MdAnalytics,
  MdEmergency,
  MdFavoriteBorder,
  MdHealthAndSafety,
  MdLocalHospital,
  MdPregnantWoman,
  MdSpa,
  MdTooth,
} from "react-icons/md";

const SERVICE_ICONS = {
  dental: MdTooth,
  emergency: MdEmergency,
  hospital: MdLocalHospital,
  lab: MdAnalytics,
  maternity: MdPregnantWoman,
  pediatrics: MdFavoriteBorder,
  surgery: MdHealthAndSafety,
  wellness: MdSpa,
};

export default function ServiceCard({ service }) {
  const Icon = SERVICE_ICONS[service.icon] || MdLocalHospital;

  return (
    <Card>
      <div className="text-center">
        <Icon className="text-5xl text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </Card>
  );
}
