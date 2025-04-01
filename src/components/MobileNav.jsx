import { FiMenu } from 'react-icons/fi';

function MobileNav({ isOpen, setIsOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiMenu className="h-6 w-6 text-gray-600"/>
          </button>
          <img src="/vite.svg" alt="Logo" className="h-8 ml-3" />
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;