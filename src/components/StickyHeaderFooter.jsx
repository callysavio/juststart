// Sticky Header Component
const StickyHeader = () => {
  return (
    <div className="fixed top-0 w-full bg-blue-700 text-white font-montserrat font-semibold text-xl p-4 shadow-md z-50">
      Spark
    </div>
  );
};

// Bottom Navigation Bar Component
const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white flex justify-around items-center py-3 border-t border-gray-200 shadow-sm z-50">
      {['Home', 'Skills', 'Options', 'Explore', 'Spark'].map((label, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-5 h-5 bg-gray-400 rounded-full mb-1" />
          <span className="text-sm font-semibold text-gray-600 font-montserrat">{label}</span>
        </div>
      ))}
    </div>
  );
};

export { StickyHeader, BottomNavBar };
