import React from 'react';
import { MdSearch, MdNotifications } from 'react-icons/md';
import { CircleUserRound, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 flex items-center">
      <div className="flex items-center flex-1 gap-3">
        <div className="relative max-w-xl w-full">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <MdSearch className="text-xl" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600/20"
          />
        </div>
        
        <button className="relative p-2.5 rounded-2xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors shrink-0">
          <MdNotifications className="text-xl" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-violet-600 rounded-full"></span>
        </button>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-cyan-600">
          <CircleUserRound size={32} />
        </div>
        <button className="w-12 h-12 bg-violet-600 text-white rounded-[1.2rem] flex items-center justify-center hover:bg-violet-700 transition-colors">
        <Plus size={24} strokeWidth={3} className="scale-150" />
        </button>
      </div>
    </header>
  );
};

export default Header;
