import React from 'react'

export default function NavBar() {
  return (
    <div>
    <div className="flex justify-between p-2.5">
      <nav className="bg-[#fcd34d] text-white font-bold py-2 px-4 rounded-md opacity-95 shadow-lg select-none">Company</nav>
      <div className="flex space-x-4">
        <button className="bg-[#fcd34d] hover:bg-[#d1d5db] text-white font-bold py-2 px-4 rounded-md opacity-95 shadow-lg">Contact Us</button>
        <button className="bg-[#fcd34d] hover:bg-[#d1d5db] text-white font-bold py-2 px-4 rounded-md opacity-95 shadow-lg">People</button>
        <button className="bg-[#fcd34d] hover:bg-[#d1d5db] text-white font-bold py-2 px-4 rounded-md opacity-95 shadow-lg">About</button>
      </div>
    </div>
    
  </div>
  );
}
