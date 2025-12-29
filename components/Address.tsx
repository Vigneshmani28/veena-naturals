type AddressProps = {
  email: string;
  phone: string;
  address: {
    country: string;
    state: string;
    city: string;
    district: string;
    zipcode: string;
  };
  className?: string;
};

export default function Address({
  email,
  phone,
  address,
  className = "text-gray-700",
}: AddressProps) {
  return (
    <address
      className={`not-italic text-sm space-y-1 ${className}`}
    >
      <p className="font-semibold text-gray-900">Veena Naturals</p>

      <p>
        {address.city}, {address.district}
      </p>

      <p>
        {address.state} - {address.zipcode}
      </p>

      <p>{address.country}</p>

      <div className="pt-2 space-y-1">
        {/* Email */}
        <p className="flex items-center gap-1 whitespace-nowrap">
          <span className="font-medium">Email:</span>
          <a
            href={`mailto:${email}`}
            className="hover:underline break-all sm:break-normal"
          >
            {email}
          </a>
        </p>

        {/* Phone */}
        <p className="flex items-center gap-1 whitespace-nowrap">
          <span className="font-medium">Phone:</span>
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="hover:underline"
          >
            {phone}
          </a>
        </p>
      </div>
    </address>
  );
}
