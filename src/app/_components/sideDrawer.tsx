"use client";
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineLinkedin } from 'react-icons/ai'; // Import icons
import { FaPaperPlane } from 'react-icons/fa';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { Label } from '~/components/ui/label';

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 rounded-lg shadow-lg">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Send a Message</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            &#10005;
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const SideDrawer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const resumeUrl = "/ma-lyn-gamboa-resume-2024.pdf"; // Update with the actual path to the resume

  return (
    <>
      <aside className="w-64 bg-gray-100 h-full px-4 py-6 border-r border-gray-200 shadow-md">
      <div className="flex justify-center items-center">
  <Image
    src="/images/profilePic.jpg"
    alt="Profile Picture"
    width={150}
    height={150}
    className="object-cover rounded-full"
  />
</div>
        <h2 className="text-xl font-semibold">Ma. Lyn Gamboa</h2>

        
        <h3 className="mt-6 text-lg font-semibold">Connect With Me</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <span className="font-medium">Email:</span> carizon.mars@gmail.com
          </li>
          <li>
            <span className="font-medium">Phone:</span> +63 946 339 3239
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ma-lyn-gamboa-5b2649293/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <AiOutlineLinkedin className="text-2xl mr-2" />
            LinkedIn
          </a>

         <Button className="w-full flex justify-center items-center py-2 px-4 bg-blue-600 text-white rounded-lg">
  <a
    href={resumeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm font-medium"
  >
    View My Resume
  </a>
</Button>

          <Button onClick={handleModalOpen}>
            <FaPaperPlane className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </aside>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <form>
          <div className="mb-4">
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </Label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </Label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your message"
            />
          </div>
          <div className="flex justify-end">
            <Button type="button" className="mr-2" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button type="submit">Send</Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SideDrawer;
