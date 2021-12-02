const BrandLogo = ({ src, brandInitials }) => {
  return (
    <div>
      {src === undefined ? (
        <img
          className="flex items-center justify-center w-12 h-12 bg-gray-200 border rounded-full ring-1 ring-gray-200"
          src={src}
          alt="school logo"
        />
      ) : (
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 border rounded-full ring-1 ring-gray-200">
          <span className="text-lg font-medium">{brandInitials}</span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
